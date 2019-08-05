<template>
				<!-- 四个图 -->
					<!-- 1 -->
					<div class="new_div_body new_margin">
						<div class="new_div_body_img">
							<router-link :to="{path:'/details',query:{fid:myhref}}">
								<img :src="pic" alt="">
								<span></span>
							</router-link>
							
						</div>
						<router-link :to="{path:'/details',query:{fid:myhref}}">
							<p class="font_style" >{{title}}</p>
						</router-link>
						<div class="tag_list">
							<a href="#">新品</a>
							<a href="#">人气</a>
							<a href="#">情侣</a>
							<a href="#">聚会</a>
						</div>
						<img class="img_width" src="img/product-spot.jpg" alt="">
						<div class="cart_info">
							<span class="spec">¥{{price}}</span>
							<a href="" class="add_cart">加入购物车</a>
						</div>
						<div class="spec_detail"></div>
					</div>
					
</template>
<script>
export default {
   data(){
       return{
             
       }
   },
    props:{
        myhref:{default:""},
        pic:{default:""},
        price:{default:""},
        title:{default:""},
      },
}
</script>
<style scoped>


.new_div_body{
 	float:left; 
	width:25%;
	position:relative;
	padding:8px;
	box-sizing: border-box;
}
.new_div_body_img{
	width:100%;
	overflow:hidden;
	position:relative;
}

.new_div_body a{
	color:#684029;
	cursor:pointer
}

.new_div_body a img{
	width: 100%;
	background: #fafafa;
    display: block;
    margin:0 auto;
    border-radius: 8px;
	transition:0.5s;
}
/*******图片遮罩层******/
.new_div_body_img span{
	width:100%;
    height:100%;
	display:block;
	position:absolute;
	top:0;
	left:0;
	background: rgba(0,0,0,0.2);
	opacity:0;
	box-sizing:border-box;
	transition:0.5s;
}
div.new_div_body_img:hover span{
	opacity:1;
}
div.new_div_body_img:hover img{
	transform:scale(1.1) rotate(18deg);
}
.font_style{
	overflow:hidden;
	text-overflow: ellipsis;
    white-space: nowrap;
}
.new_div_body a p{
	font-size: 14px;
    color: #616161;
    line-height: 24px;
	margin-top:10px;
}
.tag_list{
	width: 100%;
	height: 30px;
	overflow:hidden;
	line-height:33px;
	display:flex;
	justify-content: space-around;
	/* flex-wrap: wrap; */
	margin:10px 0;	
}
.new_div_body .tag_list a{
	font-size:12px;
	color:#D5BFA7;
	border:1px solid #D5BFA7;;
	border-radius:120px;
	display:inline;
	width:30%;
	text-align: center;
}
.img_width{
	width: 100%;
}
.cart_info{
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	height:30px;
	color:#b0986f;
	margin-top:5px;
}
.spec{
	display:inline-block;
	font-size:16px;
	color:#BB9772;
	line-height:30px;
}
 .cart_info .add_cart{
	display: inline-block;
    line-height: 30px;
    font-size: 12px;
	background: #684029;
    color:#fff;
	width:50%;
	text-align:center;
    
}
</style>


