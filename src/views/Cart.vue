
<template>
    <div class="all">
        <div class="headFix">
          <div class="headLeft" @click="go">
          </div>
          <div class="headCenter">
            <div class="cartTitle">
              购物车
            </div>
          </div>
          <div class="headRight">

          </div>
        </div>
        <div style="height:50px">

        </div>
   
        <div class="center">
            <div>
              <table>
                <tbody class="cart">
                  <tr v-for="(elem,i) of data" :key="i">
                    <td class="td2">
                      <router-link :to="{path:'/Details',query:{fid:elem.fid}}"><img :src="elem.img_url" alt=""></router-link>
                    </td>
                    <td class="td3">
                        <div class="goods_name">
                          <a href="javascriot:;" v-text="elem.title"></a>
                        </div>
                        <div class="price">
                            <span class="price_1">¥{{elem.price}}</span>
                        </div>
                        <div>
                          <a href="javascript:;" class="cli" @click="jian(i)" :class="data[i].count<=1?'disable':''">-</a>
                          <input type="text" class="inputCount" readonly="readonly" v-model="elem.count">
                          <a href="javascript:;" class="cli"  @click="add(i)" >+</a>
                          <a href="javascript:;" class="del" :data-cid="elem.cid" @click="del"></a>
                        </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="pay">
                  <div class="payLeft">
                        <!-- <span>合计:<span>¥{{sum.toFixed(2)}}</span></span><br> -->
                        <span>合计:<span>¥{{sum}}</span></span><br>
                        <span>不含运费</span>
                  </div>
                  <div class="payRight">
                      <a href="javascript:;" @click="addSql">去结算</a>
                  </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
        data:[],
        sum:0
    }
  }
  ,methods:{
    adds(){
      this.axios.get("cart/adds").then(result=>{

          })
    },
    del(e){
      //删除/delItem
      var cid=e.target.dataset.cid;
      if(confirm("你确认删除这件商品吗?")){
        this.axios.get("cart/delItem",{params:{cid}}).then(result=>{
            if(result.data.code>=1){
              this.data=result.data.data;
              this. lists();
             
            }
          })
        }
    },
    addSql(){
      var data=this.data;
      for(var i=0;i<data.length;i++){
        var fid=data[i].fid;
        var count=data[i].count;
             this.axios.get("cart/upda",{params:{
               fid,
               count
               }}).then(result=>{     
             })
      }
   
    },
    sumPrice(){
      this.sum=0;
      for(var i=0;i<this.data.length;i++){
        this.sum+=this.data[i].count*this.data[i].price;
      }
    },
    add(i){
      //商品数量增加
      this.data[i].count++;
      this.sumPrice();
    },
    jian(i){
      //商品数量增加    
      if(this.data[i].count>1){
        this.data[i].count--;
      }
     this.sumPrice();
    },
    go(){
      this.$router.go(-1);
    },
    lists(){
        this.axios.get("cart/cart",{params:{uid:1}}).then(result=>{
          if(result.data.code>=1){
            this.data=result.data.data;
            this.sumPrice();
          }
        })
    }
  },
  created(){
      this.lists();
  }
}
</script>

<style scoped>
.all{
    font: 14px 微软雅黑,Helvetica,sans-serif;
    line-height: 1.5;
    background-color: #fff;
    color: #666;
}
.center a{
  color: #666;
  text-decoration: none;
}
  .headFix{
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 44px;
    border-width: 0 0 1px 0;
    border-bottom: solid 1px #d8d8d8;
    background: #fff;
  }
  .headLeft{
    width: 25px;
    height: 33px;
    top: 0;
    left: 0;
    padding: 12px 0 0 15px;
    position: absolute;
  }
  .headLeft::after{
    content: '';
    display: inline-block;
    width: 10.5px;
    height: 19.5px;
    background: url("../../public/img/appimg/left.png") left top no-repeat;
    background-size: 10.5px 19.5px;
  }
  .headCenter{
    height: 30px;
    margin: 0 80px 0 41px;
    padding-top: 7px;
  }
  .cartTitle{
    font-weight: normal;
    font-size: 0.75rem;
    line-height: 28px;
    height: 30px;
    text-align: center;
    font-size: 17px;
    color: #333;
    overflow: hidden;
  }
  .headRight{
    width: 23px;
    height: 32px;
    top: 0;
    right: 0;
    padding: 12px 13px 0 0;
    position: absolute;
  }
  .headRight::after{
    content: '';
    display: inline-block;
    width: 23px;
    height: 23px;
    background: url("../../public/img/appimg/layout-nav.png") center center no-repeat;
    background-size: contain;
  }
  .center{
    padding-left: 10px;
    border-top: 1px solid #d8d8d8 !important;
    border-bottom: 1px solid #d8d8d8 !important;
    background: #fff;
    padding-bottom: 10px;
    margin-bottom: 50px;
  }
  .table{
    width: 100%;
    cursor: pointer;
    border-collapse: collapse;
    border-spacing: 0;
}
  .cart td{
    padding-top: 10px;
    border-top: 1px dashed #d7d6da;
    padding-bottom: 10px;
    vertical-align: top;
    word-wrap: break-word;
    overflow: hidden;
  }
  .cart td.td2{
     position: relative;
     width: 130px;
  }
  .cart td.td3{
    width: 235px;
  }
  .cart tr:first-child .td2,.cart tr:first-child .td3{
        border-top: none !important;
  }
  .td2 img{
    width: 76px;
    height: 76px;
  }
  .goods_name{
    line-height: 15px;
    height: 30px;
    overflow: hidden;
    word-break: break-all;
    word-wrap: break-word;
    margin-right: 10px;
    font-size: 12px;
  }
  .price{
    line-height: 20px;
  }
  .price .price_1 {
    color: #9b7338;
    font-size: 13px;
    font-weight: bold;
}
a.cli{
  display: inline-block;
    width: 30px;
    text-align: center;
    line-height: 14px;
    padding: 5px 0;
    vertical-align: top;
    border: 1px solid #d8d8d8;
    font-size: 16px;
    font-weight: bold;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
}
a.cli.disable{
  color: #d8d8d8;
}
.inputCount{
    display: inline-block;
    width: 30px;
    text-align: center;
    line-height: 14px;
    vertical-align: top;
    border: 1px solid #d8d8d8;
    font-size: 14px;
    padding: 4px 0;
    border-left: none;
    border-right: none;
    height: 16px;
    overflow: hidden;
}
.del{
    display: inline-block;
    width: 25px;
    height: 25px;
    background: url("../../public/img/appimg/del.gif") 0 0 no-repeat;
    background-size: 100% 100%;
    float: right;
    margin-right: 10px;
}
.pay{
  position: fixed;
  width: 100%;
  height: 50px;
  background: #fff;
  bottom: 0;
  display:flex;
  justify-content: space-between;
}
.payLeft{
    text-align: left;
    padding: 10px;
    border-top: 1px solid #d8d8d8;
    line-height: 15px;
    width: 70%;
    padding-left: 0px;
}
.payLeft span{
  font-size: 12px;
}
.payLeft span:first-child{
  color: #9b7338;
   font-size: 14px;
}
.payLeft span span{
  font-weight: bold;
  font-size: 14px;
  transform: scale(.88);
}
.payRight{
  width: 30%;
}
.payRight a{
    display: block;
    width: 100%;
    color: #fff;
    font-size: 18px;
    text-align: center;
    background: #9b7338;
    border-top: 1px solid #9b7338;
    height: 100%;
    line-height: 50px;
}


</style>

