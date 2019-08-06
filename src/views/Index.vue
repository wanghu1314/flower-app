<template>
    <div class="container">
      <!-- 主面板容器1 -->
      <mt-tab-container v-model="selected">
        <!-- 首页1 -->
        <mt-tab-container-item id="indexx" >
            <router-view name="indexx" />
              <!-- <router-view /> -->
        </mt-tab-container-item>
        <!-- 首页2 -->
         <!-- 分类1 -->
        <mt-tab-container-item id="group" >
             <router-view name="group" />
        </mt-tab-container-item>
        <!-- 分类2 --> 
        <!-- 首页1 -->
        <mt-tab-container-item id="special" >
            
        </mt-tab-container-item>

        <mt-tab-container-item id="cart" >
            <!-- <router-view name="cart" /> -->
        </mt-tab-container-item>

          <mt-tab-container-item id="mine" >
            <router-view name="mine" />
        </mt-tab-container-item>
        <!-- 首页2 -->
      </mt-tab-container>
      <!-- 主面板容器2 -->
<!--底部导航栏-->
  <mt-tabbar class="tabbar" v-model="selected" fixed>
    <mt-tab-item id="indexx">
      <img slot="icon" src="img/appimg/ia_100000009.png" />
      首页 
    </mt-tab-item>
    <mt-tab-item id="group">
      <img slot="icon" 
      src="img/appimg/ia_100000009.png" />
      分类
    </mt-tab-item>  
    <mt-tab-item id="special">
      <img slot="icon" src="img/appimg/ia_100000009.png" />
      订制专线 
    </mt-tab-item>
    <mt-tab-item id="cart">
      <img slot="icon" 
      src="img/appimg/ia_100000009.png" />
      购物车
    </mt-tab-item>  
    <mt-tab-item id="mine">
      <img slot="icon" 
      src="img/appimg/ia_100000009.png" />
      我的
    </mt-tab-item>  
  </mt-tabbar>
    </div>
</template>
<script>
import '../assets/css/base.css';
  export default{
    data(){
      return {
         selected:"indexx",
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
    watch:{
     selected(val, oldVal){
      // console.log(val)
      if(val == 'cart'){
      //路由跳转 到首页
      this.$router.replace('/cart') 
      }
      // else if(val=="mine"){
      // this.$router.replace('/login') 
      // }
      }
    },
    methods:{
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
    }
  }
</script>
<style scoped>
/* 底部导航栏样式1 */
.tabbar{
    background: #000!important;
    color: #ddd;
}
</style>