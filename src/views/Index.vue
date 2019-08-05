<template>
 <div class="container">
    <div class="content">
         <!-- 轮播 -->
         <my-carousel></my-carousel>
      
    <div class="body">
			<!--中间导航  -->
			<div class="home">
				<List 
				></List>
			</div>
			<!-- 	新品/专区			 -->
			
			<div class="new" >
			   <div class="new_1">
					<h4>{{name[0]}}
						<span>/</span>
						<span>专区</span>
					</h4>
				</div>
				<div class="new_img">
					<a href="#"><img :src="img[0]" alt="新品"></a>
				</div>
				<div class="new_div clearfix">
					<jc
					v-for="(elem,i) in p1" :key="i"
					:myhref="elem.href"
					:pic="elem.pic"
					:title="elem.title"
					:price="elem.price.toFixed(2)"
					></jc>
				</div>					

			</div>
			<!----- 生日------ -->
			<div class="new" id="2">
				<div class="new_1">
					<h4>{{name[1]}}
						<span>/</span>
						<span>专区</span>
					</h4>
				</div>
				<div class="new_img">
					<a href="#"><img :src="img[1]" alt="生日"></a>
				</div>
				<!-- 四个图 -->
				<div class="new_div clearfix">
					<jc
					v-for="(elem,i) in p2" :key="i"
					:myhref="elem.href"
					:pic="elem.pic"
					:title="elem.title"
					:price="elem.price.toFixed(2)"
					></jc>
				</div>
			</div>

			<!------儿童 ---------- -->
			<div class="new" id="3">
				<div class="new_1">
					<h4>{{name[2]}}
						<span>/</span>
						<span>专区</span>
					</h4>
				</div>
				<div class="new_img">
					<a href="#"><img :src="img[2]" alt="儿童"></a>
				</div>
				<!-- 四个图 -->
				<div class="new_div clearfix">
					<jc
					v-for="(elem,i) in p3" :key="i"
					:myhref="elem.href"
					:pic="elem.pic"
					:title="elem.title"
					:price="elem.price.toFixed(2)"
					></jc>
				</div>
			</div>

			<!-----聚会 --------------->
			<div class="new" id="4">
				<div class="new_1">
					<h4>{{name[3]}}
						<span>/</span>
						<span>专区</span>
					</h4>
				</div>
				<div class="new_img">
					<a href="#"><img :src="img[3]" alt="聚会"></a>
				</div>
				<div class="new_div clearfix">
					<jc
					v-for="(elem,i) in p4" :key="i"
					:myhref="elem.href"
					:pic="elem.pic"
					:title="elem.title"
					:price="elem.price.toFixed(2)"
					></jc>
				</div>
			</div>
			<!-------------经典产品           新品推荐  -->
			
			<div class="product" id="5">
				<div class="product_content">
					<div class="product_title">经典产品</div>

					 <my-carouselSwiper></my-carouselSwiper>	
		
				</div>
			</div>
			<!-- ----------JOY甜点------------->
			<div class="more_box">
				<div class="more_box_div  clearfix">
					<div class="more_box_title">
						<h3 class="title_h3">JOY甜点</h3>
					</div>
					<!------------ 冰淇淋 ------------->
					<div class="cake_box">

					
							<div class=" ice_cream ">
								<blist
								v-for="(elem,i) in p5" :key="i"
								:myhref="elem.href"
								:pic="elem.pic"
								:title="elem.title"
								>
								</blist>
							</div>			
							<!--------------------- 面包 ----------------->
							<div class=" ice_cream ">
								<blist
								v-for="(elem,i) in p6" :key="i"
								:myhref="elem.href"
								:pic="elem.pic"
								:title="elem.title"
								>
								</blist>
							</div>
                	</div>
					
					
				</div>
			</div>
			<!-- ---------咖啡------------ -->
			<div class="coffee clearfix">
				<div class="coffee_title">
					<h3 class="title_h3">coffee</h3>
				</div>
				<div class="coffee_1">
					<img src="img/a.jpg" alt="">
					<img src="img/b.jpg" alt="">
				</div>
				<div class="coffee_list">
				<div class="cake_box">
					<div class=" ice_cream ">
								<blist
								v-for="(elem,i) in p7" :key="i"
								:myhref="elem.href"
								:pic="elem.pic"
								:title="elem.title"
								>
								</blist>
							</div>
							<div class=" ice_cream ">
								<blist
								v-for="(elem,i) in p7" :key="i"
								:myhref="elem.href"
								:pic="elem.pic"
								:title="elem.title"
								>
								</blist>
							</div>
				</div>

			</div>

		</div>

		</div>
         
          <!-- <newlist></newlist> -->
        </div>   
    </div>
	
</template>
<script>
import '../assets/css/base.css';

import List from '../components/List'
import Jc from '../components/Jc'
import Blist from '../components/Blist'
import Newlist from '../components/Newlist'
  export default{
    data(){
      return {
        img:["img/new.jpg","img/brithday.jpg","img/baby.jpg","img/party.jpg"],
        name:["新品","生日","儿童","聚会"],
        p1:[],
        p2:[],
        p3:[],
        p4:[],
        p5:[],
        p6:[],
        p7:[],  
      }
    },
methods:{
},
created(){
      this.axios.get(
        "index/index"
      ).then(result=>{
		//   console.log(result)
		//   console.log(this.p1)
        this.p1=result.data.slice(0,4);
        this.p2=result.data.slice(4,8);
        this.p3=result.data.slice(8,12);
        this.p4=result.data.slice(12,16);
        this.p5=result.data.slice(16,20);
        this.p6=result.data.slice(20,24);
        this.p7=result.data.slice(24,28);    
      })
    },
  components:{
    "List":List,
	"jc":Jc,
	"blist":Blist,
	"newlist":Newlist
  }
  }
</script>
<style scoped>
 .color666{
  color:#666;
}
/* 首页内容 */

/* hz_banner */
/*floor_1*/
.body{
	width:100%;
	background-size:contain;
	margin:60px 0;
}
/* *****导航图片***** */
.home{
	width:70%;
	margin:50px auto 0;
}

/*********新品  生日   聚会**********/
.new{
	width:70%;
	margin:0 auto;
	padding-top:30px;
}
.new_img img{
  width:100%;
}
.new_1{
	height:60px;
	margin-bottom:20px;
}
.new_1 h4{
	font-size:26px;
	color: #724228;
	font-weight:normal;
	display:block;
	line-height:60px;
	
}
.new_1 h4 span{
	font-size:16px;
}
.new_div{
	width: 100%;
	/* display:fixed;  */
	/* height:365px;*/
	margin-top:20px;
}


/* **************** */
 .font_style{
	overflow:hidden;
	text-overflow: ellipsis;
    white-space: nowrap;
}
.new_div_body a h4{
	font-size:16px;
	color:#000;
	line-height:22px;
	margin-top:10px;
	
}
.new_div_body a p{
	font-size: 14px;
    color: #616161;
    line-height: 24px;
}
.tag_list{
	width: 260px;
	height: 33px;
	overflow:hidden;
	line-height:35px;
}
.new_div_body .tag_list a{
	font-size:12px;
	color:#D5BFA7;
	border:1px solid #D5BFA7;;
	border-radius:120px;
	margin:8px 3px;
	padding:0 6px 0 8px;
	display:inline;
}
.img_width{
	width: 260px;
}
.cart_info{
	height:30px;
	color:#b0986f;
	
}
.spec{
	display:inline-block;
	font-size:16px;
	color:#BB9772;
	line-height:30px;
	margin-left:10px;

}
 .cart_info .add_cart{
	display: inline-block;
    line-height: 20px;
    font-size: 12px;
	background: #684029;
    color:#fff;
	margin-left:95px;
	width:80px;
	text-align:center;
    
}
/************经典产品************/

.product{
	background:url("../../public/img/product-back.jpg") ; 
	width:100%;
	margin:30px 0 20px 0;
	padding: 20px 0;
}
.product_content{
	width:70%;
	height:340px;
	margin:0 auto;
	text-align:center;
	font-size:25px;
}
.product_title{
	position: relative;
	padding-bottom: 30px;
}
.product_title:after{
	content:'';
	display:block;
	width:48px;
	height:3px;
	background-color: #000;
	position: absolute;
	top:50px;
	left:48%;
}
	/* ************************************* */
	.more_box{
		width: 100%;
	}
	.more_box_div{
		width:70%;
		margin:0 auto 30px;
		
	}
	.more_box_title{
		width:100%;
	}
	.title_h3{
		position:relative;
		width:160px;
		height:80px;
		margin:0 auto;
		font-size: 24px;
		line-height: 80px;
		font-family: 'fzzzh', sans-serif;
		text-align:center;
	}
	 .title_h3:after{
		position: absolute;
		top:39px;
		left:-39px;
		content: "";
		width:50px;
		height:3px;
		background: #000;
		display:block;
		
	}
	.title_h3:before{
		position:absolute;
		top:39px;
		right:-39px;
		content: "";
		width:50px;
		height:3px;
		background: #000;
		display:block;
	}
	.ice_cream{
		width:50%;
		background: rgb(248, 246, 246);
		float:left;
	}

/* **********面包    冰淇淋********* */
	
	/* ***************咖啡****************** */
.coffee{
	width:70%;
	margin:0 auto;
	/* height:400px; */
	
}
.coffee_title{
	width:100%;
}
.coffee_1{
	width:100%;
	background: rgb(248, 246, 246);
	display: flex;
}
.coffee_1 img{
	width:47.5%;
	height:20%;
	padding:13px;
	border:0;	
	}
.coffee_1 img:hover{
		opacity:0.6;
	}
.coffee_list{
	width: 100%;
	background: rgb(248, 246, 246)
}
.coffee_2 img{
	width:100%;
	margin:10px 0;
	box-sizing: border-box;
}


</style>