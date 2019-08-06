<template>

    <div class="classify">
        <div class="viewport">
            <img class="leftImg" src="../../public/img/appimg/ia_100000064.jpg" alt="" @click="upPage"> 
            <p>分类</p>
            <img class="rightImg" src="../../public/img/appimg/home.png" alt="" @click="goTo"> 
        </div>
        <div class="title">
            <ul>
                <li :class="[isShow ? 'active' :'']" @click="isShow=true">用途</li>
                <li  :class="[!isShow ? 'active' :'']" @click="isShow=false">花材</li>
            </ul>
        </div>
        <div class="classify-list" v-if="isShow">
            <ul>
                <li v-for="(elem,i) of list" :key="i">
                    <router-link :to="{path:'/product',query:{sid:i+1,name:titleList1[i]}}"><img :src="elem" alt=""></router-link>
                </li>
            </ul>
        </div>
        <div class="classify-list" v-if="!isShow">
            <ul>
                <li v-for="(elem,i) of list1" :key="i">
                    <router-link :to="{path:'/product',query:{sid:i+2,name:titleList1[i]}}"><img :src="elem" alt=""></router-link>
                </li>
                
            </ul>
        </div>

        
      
    </div>

</template>
<script>
export default {
    data(){
        return{
            isShow:true,
         list:[
                require('../../public/img/appimg/classify_nav_yt1.jpg'),
                require('../../public/img/appimg/classify_nav_yt2.jpg'),
                require('../../public/img/appimg/classify_nav_yt3.jpg'),
                require('../../public/img/appimg/classify_nav_yt4.jpg'),
                require('../../public/img/appimg/classify_nav_yt5.jpg'),
                require('../../public/img/appimg/classify_nav_yt6.jpg'),
                require('../../public/img/appimg/classify_nav_yt7.jpg'),
                require('../../public/img/appimg/classify_nav_yt8.jpg'),
                require('../../public/img/appimg/classify_nav_yt9.jpg'),
                ],
                 list1:[
                require('../../public/img/appimg/classify_nav_hc1.jpg'),
                require('../../public/img/appimg/classify_nav_hc2.jpg'),
                require('../../public/img/appimg/classify_nav_hc3.jpg'),
                require('../../public/img/appimg/classify_nav_hc4.jpg'),
                require('../../public/img/appimg/classify_nav_hc5.jpg'),
                require('../../public/img/appimg/classify_nav_hc6.jpg'),
                require('../../public/img/appimg/classify_nav_hc7.jpg'),
                ],
                titleList:['爱情鲜花','生日鲜花','问候长辈','祝福庆贺','探病慰问','道歉鲜花','巧克力','永生花','开业花篮'] ,
                titleList1:['玫瑰','康乃馨','百合','向日葵','满天星','绣球','更多鲜花'] ,
        }
    },
    methods: {
     // 跳转页面方法
       upPage() {
       this.$router.go(-1);
    },
     goTo() {
       this.$router.push({path:'/'});
    },
   
   
    }
}
</script>
<style scoped> 
.classify{
    width: 100%;
    background: #fff;
    margin-bottom:4rem;
    
}
.viewport{
    width: 100%;
    height:3rem;
    display: flex;
    justify-content:space-around;
    border-bottom:0.01rem solid #d8d8d8;
    position: fixed;
    z-index: 999;
    background: #fff;
}
.viewport .leftImg{
    width:40px;
    height:40px;
    margin-top:0.3rem;
}
.viewport .rightImg{
    width:24px;
    height:24px;
    margin-top:0.6rem;
}
.viewport p{
    width:60%;
    text-align: center;
    height:3rem;
    line-height:3rem;
    font-size: 1.4rem;
}
.title{
width:100%;
padding-top:3rem;
}
.title ul{
    width:90%;
    margin: 0.5rem auto;
    border: 1px solid #000;
    border-radius: 5px;
    height: 2.5rem;
    
}
.title ul li{
    width:50%;
    height:2.5rem;
    line-height: 2.5rem;
    font-size: 0.7rem;
    text-align: center;
    float:left;
}
.active{
    background-color: #000;
    color: #e5c793;
}
.classify-list ul li{
    width:100%;
    margin-bottom:0.2rem;
}
.classify-list ul li a{
    color:#555;
}
.classify-list ul li a img{
  vertical-align: middle;
  width:100%;
  height:150px; 
}
</style>




