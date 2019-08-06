<template>
    <div class="container">
      <!-- 主面板容器1 -->
        <!-- 首页1 -->
        <div style="position:fixed;top:0;width:100%;">
                <home-header></home-header>
        </div>
            <div class="content">
                <!-- 引入头部 -->
                <div style="position:fixed;top:0;width:100%; z-index:9999;">
                <home-header></home-header>
                </div>
                <div style="height:45px;background-color:#fff;width:100%;"></div>
                <!-- 轮播 -->
                <carousel></carousel>
                <!-- 导航栏 -->
                <home-snav></home-snav>
                <!-- 超小深色背景条 -->
                <home-sbg></home-sbg>
                <!-- 小标题1 -->
                <home-stitle></home-stitle>
                <!-- 小标题2 -->
              <!-- 特别推荐模块 -->
              <!-- 两张图片不带价格模块1 -->
                    <home-img v-for="(elem,a) in special2" :key="'a'+a"
                        :myhref="elem.fid"
                        :imgurl="elem.pic"
                        :title="elem.fname"
                        :price="elem.price.toFixed(2)">
                    </home-img>
              <!-- 3张图片带价格模块1 -->
                <home-list v-for="(elem,b) in special3" :key="b+'b'"
                        :myhref="elem.fid"
                        :imgurl="elem.pic"
                        :title="elem.fname"
                        :price="elem.price.toFixed(2)">
                    </home-list>
              <!-- 超小深色背景条 -->
              <home-sbg></home-sbg>
            <!-- 四个推荐模块1 -->
              <div v-for="(elem,i) in special4" :key="i">
                  <!-- 小标题1 -->
                  <home-stitle
                  :msg1=msg14[i]
                  :msg2=msg24[i]
                  ></home-stitle>
                  <!-- 大图 -->
                  <home-limg 
                          :myhref="elem.fid"
                          :imgurl=img4[i]
                          :title="elem.fname"
                          :price="elem.price.toFixed(2)">
                  </home-limg>
                  </div>
            <!-- 四个推荐模块2 -->
            <!-- 四种大块带图片推荐1 -->
            <div v-for="(elem,i) in msg14" :key="i+'i'">
                  <!-- 小标题1 -->
                  <home-stitle
                  :msg1=msg14[i]
                  :msg2=msg24[i]
                  ></home-stitle>
              <home-twoimg  v-for="(elem,b) in special10[i]" :key="b+'b'"
                        :myhref="elem.fid"
                        :imgurl="elem.pic"
                        :title="elem.fname"
                        :price="elem.price.toFixed(2)">
                    </home-twoimg>
            </div>
            <!-- 四种大块带图片推荐2 -->
            </div>
        <!-- 首页2 -->
      <!-- 主面板容器2 -->
    </div>
</template>
<script>
import '../assets/css/base.css';
// import '../assets/js/index.js';
// import List from '../components/List'
import homeHeader from './child/Home-header'
import homeSnav from './child/Home-snav'
import homeStitle from './child/Home-stitle'
import homeSbg from './child/Home-sbg'
import carousel from './../components/carousel'
import homeList from './child/Home-list'
import homeImg from './child/Home-img'
import homeLimg from './child/Home-limg'
import homeTwoimg from './child/Home-twoimg'
  export default{
    data(){
      return {
         selected:"index",
       special2:[],
       special3:[],
       special4:[],
       special5:[],
       special6:[],
       special7:[],
       special8:[],
       special9:[],
       special10:[],
       img4:[
         "img/appimg/ia_100000024.jpg",
         "img/appimg/ia_100000025.jpg",
         "img/appimg/ia_100000026.jpg",
         "img/appimg/ia_100000027.jpg",
       ],
       msg14:["新品推荐","设计师款","限量发售","精品推荐"],
       msg24:["New Product ","Designer Duds","Limited Release"," Recommended"]

      }
    },
    methods:{
       myserve(){console.log("客服")},
        mysearch(){console.log("搜索")},
        mycart(){console.log("购物车")},
      add(fid){
       
        var fid=this.fid;
        // console.log(fid)
        this.axios.get("cart/add",{params:{fid:this.fid}}).then(result=>{
          // console.log(result)
        })
      }
    },
    created(){
      this.axios.get(
        "index/appindex"
      ).then(result=>{
       
        
        this.special2=result.data.slice(0,2);
        this.special3=result.data.slice(2,5);
        this.special4=result.data.slice(5,9);
        this.special5=result.data.slice(49,59);
        this.special6=result.data.slice(19,29);
        this.special7=result.data.slice(29,39);
        this.special8=result.data.slice(39,49);
        this.special9=result.data.slice(9,19);
         this.special10=[this.special5,this.special6,this.special7,this.special8,this.special9]
        //  console.log(this.special10)
       
      })
    },
    components:{
      // "List":List,
      "home-header":homeHeader,
      "home-snav":homeSnav,
      "home-stitle":homeStitle,
      "home-sbg":homeSbg,
      "home-list":homeList,
      "home-img":homeImg,
      "home-limg":homeLimg,
      "home-twoimg":homeTwoimg,
      "carousel":carousel
    }
  }
</script>
<style scoped>
.container{
padding-bottom: 4rem;
}

</style>