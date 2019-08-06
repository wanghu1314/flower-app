<template>
  <div>
         <!-- 首页头部1 -->
        <div class="header-title">
                <ul>
                  <li class="header-item w-25">
                    <a href="javascript:;">
                      <img src="../../public/img/appimg/ia_100000001.png" class="simg" style="padding:0 0.3rem">
                    </a>
                     <a href="javascript:;" @click="go()">
                      <img src="../../public/img/appimg/ia_100000064.jpg" class="simg" style="padding:0 0.3rem">
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
        <div class="product" v-if='!isSearch'>
        <home-twoimg  v-for="(elem,b) in p" :key="b+'b'"
                        :myhref="elem.fid"
                        :imgurl="elem.pic"
                        :title="elem.fname"
                        :price="elem.price">
        </home-twoimg>
         <div @click="loadMore" v-if="pno<pc" class="loadmore">加载更多</div>
         <div v-else disabled class="loadmore">没有更多</div>
        </div>
        
        <div v-if='isSearch' class="search" >
    
          <p>未找到相关内容</p>
        </div> 
  </div>
</template>
<script>
import homeTwoimg from './child/Home-twoimg'
export default {
    data(){
        return{
             p:[],
             name:"",
             pc:"",//页总数
             pno:1,//页码
             ps:8 , //页大小
             isSearch:false,
        }
    },
    methods:{
        go(){
         this.$router.push({path:'/'})
      },
    loadMore(){
        this.pno++;
          //创建参数对象
       this.name=this.$route.query.name
        if(!this.name) return;
        // console.log(this.name)
        var obj = {pno:this.pno,pageSize:this.ps,name:this.name};
       var url='find'
        this.axios.get(url,{params:obj}).then(result=>{
            // console.log(result)
          if(result.data.code>0){
           this.pages=result.data.pages;
           this.pc=result.data.pc;
          // 数据覆盖
          this.p=this.p.concat(result.data.data)
        //   console.log(this.p)
            }else{
              this.isSearch=true

            }
        })
    }
    },
    created(){
  
    this.loadMore(); 
    },
    watch: {'$route'(to, from){this.$router.go(0);}},
     components:{
      
      "home-twoimg":homeTwoimg,
      
    }

}
</script>
<style scoped>
.loadmore{
    width:40%;
    margin:0 auto;
    padding:0.5rem;
    background: #1c63fcde;
    text-align:center;
    border-radius: 0.5rem;
    color:#fff;
}
.search p{
    text-align: center;
    font-size: 1.2rem;
    padding:2rem;
    color:#ccc;
}
 /* 头部导航栏样式2 */
 .header-title {
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 45px;
    line-height: 45px;
    background-color: #fff;
    border-bottom:0.1rem solid #e8e8e8;
    /* margin-bottom:45px; */
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
.product{
    padding-top:5rem;
}
</style>


