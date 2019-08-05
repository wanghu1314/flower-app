<template> <!--保存当前组件的HTML片段-->
   
 <footer >
			
	<div class="footer">
		<div class="footer_img"><img src="img/footer-logo.jpg" alt=""></div>
		<div class="footer_nav">
			<a href="#">联系我们</a><span>|</span>
			<a href="#">订购帮助</a><span>|</span>
			<a href="#">企业合作</a> <span>|</span>
			<a href="#">生产经营资质</a><span>|</span>
			<a href="#">公告专区</a>
		</div>
		<div class="footer_text">
			<span>订购专线：000 000 2121（服务时间 08:00–22:00）</span>
			<span>客服电话：021-6688888（全国） | kefu@21cake.com（邮箱）</span>
			<span>当日蛋糕配送截止下单时间：北京：16:50；上海：16:30；杭州/广州：13:50；天津：10:30；苏州/无锡/深圳：11:00</span>
			<span>网站注册公司名称: 北京甜美时光食品有限公司 地址: 北京市北京经济技术开发区兴海二街5号院3号楼 </span>
		</div>
		<div class="footer_copy">
			<span>Copyright© 甜美时光Cake蛋糕官网商城 2007-2018, 版权所有 <a href="#">京ICP备00006254号-1</a></span>
		</div>
	</div>
	</footer>

</template>
<script>
  //组件本质就是一个对象，对象需要抛出到外部被别人使用
  import '../assets/css/base.css';
  export default {
    //没有template和el了
    data(){
      return {

      }
    },
    created(){

    },
    methods:{

    },
    computed:{

    },
    watch:{
      
    }
  }
</script>
<style scoped>
 
/*************底部**************/
/****************新品推荐****************/


.footer{
	/* margin-top:60px; */
	background: #333;
	width:100%;
/*	height:400px;*/
}
.footer .footer_img{
	width: 240px;
	height: 88px;
	margin:0 auto;
	padding-top:40px;
}
.footer .footer_img img{
	width: 240px;
	height: 88px;
}
.footer_nav{
	color:#fff;
	text-align:center;
	margin-top:25px;
	

}
.footer_nav a{
	color:#fff;
	display:inline-block;
	font-size:14px;
	margin:0 40px;
}
.footer_text{
	color:#9a9a9a;
	text-align:center;
	line-height:20px;
	font-size:12px;
	margin-top:18px;
}
.footer_text span{
	display:block;
}
.footer_text span:first-child{
	font-weight:bold;
}
.footer_copy{
	color:#9a9a9a;
	text-align:center;
	margin:15px 0 30px 0;
	padding:10px 0;
	font-size:12px;
	border-top:1px solid #616161;
}
.footer_copy span{
	color:#616161;
	line-height:24px;
}
.footer_copy span a{
	color:#616161;
}




</style>
