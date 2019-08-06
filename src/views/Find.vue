<template>
<div class="content">
    <div class="search_row">
        <div><img src="../../public/img/appimg/ia_100000064.jpg" alt="" @click="go()"></div>
        <div class="s_input">
            <img class="s_img" src="../../public/img/appimg/ia_100000003.png" alt="">
            <input type="text" placeholder="搜索商品" autofocus="autofocus" v-model="name"   @keyup.13="getSearch">
            <img class="s_img1" src="../../public/img/appimg/corr.png" alt="" @click="clearText">
        </div>
        <div class="s_span" @click="getSearch">
            <span>搜索</span>
        </div>
    </div>
    <div class="js_hot">
        <h3>正在热搜中</h3>
        <ul>
            <li><router-link :to="{path:'/search',query:{name:'玫瑰'}}">玫瑰</router-link></li>
            <li><router-link :to="{path:'/search',query:{name:'百合'}}">百合</router-link></li>
            <li><router-link :to="{path:'/search',query:{name:'康乃馨'}}">康乃馨</router-link></li>
            <li><router-link :to="{path:'/search',query:{name:'向日葵'}}">向日葵</router-link></li>
        </ul>
    </div>
</div>
    
</template>
<script>
export default {
    data(){
        return{
            name:''//输入框关键字
        }
    },
    methods:{
        go(){
         this.$router.push({path:'/'})
      },
       clearText(){
           this.name=''
       },
       getSearch(){//当单击按钮时执行查询
        if(!this.name){return alert("请输入要查询的内容") }
            this.$router.push({path:'/search',query:{name:this.name}})
        },
}
}
</script>
<style>
.content{
    width:100%;
}
.search_row{
    border-top: 1px solid #b2b2b2;
    border-bottom: 1px solid #d8d8d8;
    background-color: #fff;
    padding:0.5rem;
    display: flex;
    height:2.5rem;
}
.s_input{
    width:70%;
    padding-left:0.2rem;
    position: relative;
}
.s_input .s_img{
    width:1.2rem;
    position: absolute;
    top:0.6rem;
    left:0.4rem;
}
.s_input .s_img1{
    width:1.2rem;
    position: absolute;
    top:0.7rem;
    right:1rem;
}
.s_input input{
    border: solid 1px #bbb;
    padding-left: 1.8rem; 
    font-size:0.9rem;
    color: #bbb;
    width: 90%;
    height:1.8rem;
    margin-top:0.3rem;
    border-radius: 0.2rem;
}
.s_span{
    text-align: center;
    height:2.5rem;
    line-height:2.5rem;
     font-size: 1rem;
     color:#6c6c6c;
     width:20%;
}
.js_hot{
    background-color: #f4f4f4;
    width: 100%;
    height:2rem;
}
.js_hot h3{
    width:100%;
    height:100%;
    font-weight: normal;
    color: #999;
    background-color: #ebebeb;
    padding: 0.5rem 0 0rem 1.3rem;
    font-size: 1rem;
}
.js_hot ul{
    width:100%;
    display: flex;
    justify-content: space-around;
    margin-top:1rem;
}
.js_hot ul li{
    width:15%;
    /* padding:0.3rem; */
    text-align: center;
    font-size:0.4rem;
    line-height:1.5rem;
    border: 1px solid #cccccc;
    border-radius: 0.5rem;
}
</style>


