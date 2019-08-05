<template>
    <div class="content_box">
		<div class="img_box">
			<img :src="pic.pic" alt="">
		</div>
		<div class="bread_box">
			<div class="bread_mian">
				<ul class="bread_list">
					<li class="bread_li" v-for="(p,i) of productlist" :key="i">
							<div class="bread_hover">
								<router-link :to="{path:'/details',query:{fid:p.fid}}">
								<img class="bread_img" :src="p.pic" alt="">
								</router-link>
							</div>
							<h3 class="pro_list" v-text="p.title"></h3>
							<p class="pro_p">¥{{p.price}}/一份</p>
						
						<div class="pro_a" >
							<router-link :to="{path:'/details',query:{fid:p.fid}}" v-for="(item,index) of subtitle" :key="index">{{item}}</router-link>
						</div>
						<a href="#" class="pro_shopp">
							<span></span>
							加入购物车
						</a>
					</li>
				</ul>
			</div>
		</div>
		<!-- *********************************** -->
		
	</div>
	
</template>
<script>
export default {
    data(){
        return{
			productlist:[{price:0}],
			subtitle:['聚会','人气','新品'],
			pic:{img:'../../public/img/details/dangao1.jpg'}
        }
    },
    created(){
		var  cid=this.$route.query.cid;
		// console.log(cid)
    this.axios.get(
		"product/list",
		{
            params:{
            cid:cid
            }
          }
      ).then(result=>{
		  if(result.data.code>0){
			  this.productlist=result.data.data
			  this.pic=result.data.pic[0]
        //  console.log(this.pic)
		  }
      })
    },
}
</script>
<style scoped>
.content_box{
    width:70%;
	/* padding:88px 0; */
	margin:0 auto;
}
.img_box{
	width:100%;
	height:467px;
	/* margin:0 auto; */
}
.img_box img{
    width:100%;
	height:100%;
}
.bread_box{
	width:100%;
	margin:0 auto;
	margin-top:20px;
	background:#fff ;
	
}
.bread_box:after{
	content: "";
	display:block;
	clear:both;
}
.bread_list{
	width:100%;
	height:100%;
    display:flex;
    flex-wrap: wrap;
}
.bread_li{
	width:20.2%; 
	overflow:hidden;
	padding:18px;
	margin:3px 4px 20px 4px;
	background:#f9f9f9;
	transition: all 1s ease;
	position: relative;
}
.bread_hover{
	overflow: hidden;
}
.bread_img{
	width:100%;
	height:100%;
	transition: all 1s ease;
}
.bread_li:hover{
	background: #fcedef;
}
.bread_li:hover img.bread_img{
	transform: scale(1.1)
}
.pro_list{
	font-size: 13px;
	line-height: 20px;
	color: #684029;
	text-align: center;
	margin:10px 0px;
}
.pro_list:hover{
	color: #BB9772;
}
.pro_p{
	text-align:center;
	line-height: 20px;
	
    color: #BB9772;
    
    margin-top: 5px;
    font-size: 13px;
}
.pro_a{
	text-align: center;
}
.pro_a a{
	display: inline-block;
    border: 1px solid #D5BFA7;
    border-radius: 100px;
    padding: 0 6px 0 8px;
    color: #D5BFA7;
    margin: 8px 3px;
}
.pro_shopp{
	width:200px;
	margin:0 auto;
	display:block;
	line-height: 28px;
	color: #684029;
	text-align: center;
	font-size: 13px;
}
.pro_shopp span{
	position: absolute;
	display: inline-block;
    vertical-align: middle;
    background: url('../../public/img/icon.png') no-repeat;
    background-position: -216px -40px;
    background-size: 310px 120px;
    height: 28px;
    width: 28px;
    margin-left:-30px;
}
.pro_shopp:hover{
	color: #BB9772;
}
.pro_shopp span:hover{
	background-position: -250px -72px;
}
</style>


