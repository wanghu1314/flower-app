<template>
    <div class="container">
      <div>
            <div class="header-title">
                <ul>
                  <li class="header-item w-25">
                    <a href="javascript:;">
                      <img style="padding:0 0.3rem" src="../../public/img/appimg/ia_100000001.png" class="simg">
                    </a>
                     <a href="javascript:;" @click="go()">
                      <img src="../../public/img/appimg/left.png" class="simg" style="padding:0 0.3rem;width:12px;">
                    </a>
                  </li>
                  <li class="header-item w-50 " style="text-align:center">
                    <a href="javascript:;" v-text="name">
                        爱情鲜花
                    </a>
                  </li>
                  <li class="header-item w-25 fl">
                    <router-link to="/find">
                      <img src="../../public/img/appimg/ia_100000003.png" class="simg" style="padding:0 0.3rem">
                    </router-link>
                    <a href="javascript:;">
                      <img src="../../public/img/appimg/ia_100000004.png"  class="simg" style="padding:0 0.3rem">
                    </a>
                  </li>
                </ul>
                <div class="clearfix"></div>
            </div>
            <div class="list">
             <home-twoimg  v-for="(elem,b) in p" :key="b+'b'"
                        :myhref="elem.fid"
                        :imgurl="elem.pic"
                        :title="elem.fname"
                        :price="elem.price.toFixed(2)">
              </home-twoimg>
            </div>
       </div>
      
   
    </div>
</template>
<script>
import '../assets/css/base.css';
import homeHeader from './child/Home-header'
import homeTwoimg from './child/Home-twoimg'

  export default{
    data(){
      return {
       p:[],
       pics:[],
       pno:1,//页码
       ps:8, //页大小
       name:""//类别
      }
    },
    methods:{
      go(){
         this.$router.push({path:'/'})
      },
      add(fid){
       
        var fid=this.fid;
        // console.log(fid)
        this.axios.get("cart/add",{params:{fid:this.fid}}).then(result=>{
          // console.log(result)
        })
      }
    },
    created(){
      var url ="product/flist";
      var  sid = this.$route.query.sid;
      // var search=this.$route.query.name;
      // console.log(sid)

       this.name = this.$route.query.name;
      var obj = {pno:this.pno,pageSize:this.ps,sid:sid}; 
      this.axios.get(
       url,{params:obj}
      ).then(result=>{
         this.p=result.data.data;
          // console.log(result)
           this.pages=result.data.pages;
           this.pc=result.data.pc;
          // 数据覆盖
           this.list = result.data.data;
            // console.log(this.list)
      })

      
    },
    components:{
      "home-twoimg":homeTwoimg,
    }
  }
</script>
<style scoped>
/* 头部导航栏样式2 */
 .header-title {
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 45px;
    line-height: 45px;
    background-color: #fff;
    margin-bottom:0.5rem;
    border-bottom:0.1rem solid #e8e8e8;
  }
  ul{
    list-style:none;
  }
   .header-title ul li{
     float: left;
   }
.fl{
  text-align: right;
}
   .w-25{
     width:25%!important;
   }
   .w-50{
     width:50%!important;
   }
  .header-title ul .header-item a{
    /* display:inline-block; */
    text-align: center;
    line-height: 45px;
  }
  .header-title ul .header-item img{
    max-width: 50%;
    max-height: 45px;
    vertical-align: middle;
    display:inline-block;
  }
 .header-title ul .header-item .mlogo{
    max-width: 100%;
 }
 @media screen and (max-width: 500px) {
   .simg{
     width: 30%;
    max-height: 45px;
 }
}

/* 首页内容 */
.container>.content{
  width:100%;
  /* height:9000px; */
  margin:0 auto;
  box-sizing: border-box;
  
}
.list{
   padding-top:4rem;
}
</style>