<template> <!--保存当前组件的HTML片段-->
   <header class="header">
    <div class="header_nav" >
		<a class="logo" href="#">
			<img src="../../public/img/header-logo.jpg" alt="logo">
		</a>
		<ul class="list_nav">
			<li><router-link :to="{path:'/'}">首页</router-link></li>
			<li><router-link :to="{path:'/productlist',query:{cid:1}}">蛋糕</router-link></li>
			<li><router-link :to="{path:'/productlist',query:{cid:2}}">面包</router-link></li>
			<li><router-link :to="{path:'/productlist',query:{cid:3}}">冰淇淋</router-link></li>
			<li><router-link :to="{path:'/productlist',query:{cid:4}}">咖啡</router-link></li>
			<li><router-link :to="{path:'/'}">干点、礼盒</router-link></li>
		</ul>
		<div class="float-right">
			<div class="current-city">
				<p>北京</p>
				<div class="city_list">
					<ul>
						<li>上海</li>
						<li>天津</li>
						<li>杭州</li>
						<li>苏州</li>
						<li>广州</li>
						<li>深圳</li>
					</ul>
				</div>
			</div>
			<span>
				<router-link :to="{path:'/login'}">登录</router-link>
				<router-link :to="{path:'/login'}">注册</router-link>
			</span>
			<a href="" class="shopp">
			 <img src="../../public/img/shopp.png" alt="shopping">
				</a>
		</div>
	</div>
    </header>
</template>
<script>
  //组件本质就是一个对象，对象需要抛出到外部被别人使用
  import '../assets/css/base.css';
  export default {
    //没有template和el了
    data(){
      return {
         isLogin:false,
         uname:"",//保存用户名
        search:''//输入框关键字

      }
    },
    methods:{
       getSearch(){//当单击按钮时执行查询
        if(!this.search){return alert("请输入要查询的内容") }
            this.$router.push({path:'/find',query:{search:this.search}})
            // window.open('/#/find?search=${this.search}',Date.now())
       

        },
      goOut(){
          sessionStorage.removeItem("uname")
          sessionStorage.clear()
          this.$router.push('/login')
        //   this.isLogin=false
         if(uname==null){
           this.isLogin=false
       }else{
          this.isLogin=true
          this.uname=uname;
       }
      }
    },
    created(){
        
       var uname=sessionStorage.getItem("uname")
        // console.log(uname==null)
        // console.log(uname)
       if(uname==null){
           this.isLogin=false
       }else{
          this.isLogin=true
          this.uname=uname;
       } 
    },
    computed:{

    },
    watch:{
      '$route' (to, from) {this.$router.go(0);
      }
    }
  }
</script>
<style scoped>
 /********导航********/
 
.header{
	min-width:1200px; 
	width:100%;
	height:88px;
	background-color:#fff;
	z-index:10;
	box-shadow: 0 2px 2px 0 rgba(195,195,195,0.50);
	margin-bottom:10px; 
}
.header_nav{
	width:70%;
	height:88px;
	margin:0 auto;
	display:flex;
	/* flex-warp:warp; */
}
.logo{
	display:block;
	margin-right:40px;
	width:20%;
	margin-top:6px;

}

.logo img{
	width: 100%;
}
.list_nav{
	display:flex;
	font-size:0.8rem;
	width:50%;
	
}
.list_nav li{
	width:15%;
	height:88px;
	line-height:88px;
	text-align:center;
	}
.list_nav li a{
	width:100%;
	display:block;
	color: #684029;
}
.list_nav li a:hover{
	color: #BB9772; 
}
.float-right{
	width:20%;
	height:88px;
	/* float:right; */
	position:relative;
	margin-left:40px;
	display:flex;
}
.current-city{
	height:88px;
    /* float: left; */
    width: 40%;
    text-align: center;
    cursor: pointer;
	font-size: 0.8rem;
	position:relative;
}
.current-city p{
	margin-top:35px;
	width:100%;
}
.city_list{
	background: #fafafa;
	width:100%;
	height:160px;
	display:none;
	margin-top:8px;
}
div.current-city:hover div{
	display:block;	
}
.city_list ul li{
	line-height: 25px;
	font-size: 0.8rem;
}
.city_list ul li:hover{
	color: #BB9772; 
}
.float-right span{
	display:block; 
	line-height:88px;
	float: left;
    font-size: 0.8rem;
    width: 40%;
	text-align: center;
	color: #684029;
}
.float-right span a{
	width: 50%;
}
 .float-right span a:last-child{
	margin-left:10px;  
} 
.float-right span a:hover{
	color:#BB9772;
}
.float-right .shopp{
	width:20%;
    display: block;
	line-height:92px;  
}
.float-right .shopp img{
	width:50%;
}
</style>
