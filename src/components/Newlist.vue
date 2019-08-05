<template>
    <div class="xin">
					<div class="new">
						<div class="new_title">
							<h3>新品推荐</h3>
						</div>
						<div class="new_product">
							<div class="new_list">	
								<ul>
									<li  v-for="(elem,i) of list" :key="i">
										<router-link :to="{path:'/details',query:{fid:elem.href}}">
											<img :src="elem.pic" alt="">
										</router-link>
										<p v-text="elem.title"></p>
									</li>
								</ul>
			
							</div>
						</div>
					</div>
				</div>
</template>
<script>
export default {
    data(){
        return{
            list:[]
        }
    },
    created(){
      this.axios.get(
        "index/index"
      ).then(result=>{
		//   console.log(result)
		//   console.log(this.p1)
        this.list=result.data.slice(0,6);
        this.p2=result.data.slice(4,8);
        this.p3=result.data.slice(8,12);
        this.p4=result.data.slice(12,16);
        this.p5=result.data.slice(16,20);
        this.p6=result.data.slice(20,24);
        this.p7=result.data.slice(16,21);    
      })
    },
}
</script>
<style scoped>
.xin{
	width:70%;
	margin: 0 auto;
}
.new{
	width:100%;
	margin:20px 0;
}
.new_title{
	position:relative;
	width:160px;
	height:80px;
	margin:0 auto;
	font-size: 24px;
	line-height: 80px;
	font-family: 'fzzzh', sans-serif;
	text-align:center;	
}
.new_title:before{
	position: absolute;
	top:39px;
	left:-39px;
	content: "";
	width:50px;
	height:3px;
	background: #000;
	display:block;
}
.new_title:after{
	position: absolute;
	top:39px;
	right:-39px;
	content: "";
	width:50px;
	height:3px;
	background: #000;
	display:block;
}
.new_product{
	width:100%;
	margin:30px 0;
	
	
}
.new_list{
	width:100%;
	height:100%;
	background: #ddd;
	margin:0 auto;
	overflow:hidden;
	
	/* padding:0 20px; */
}
.new_list ul{
	width:1800px;
	
}
.new_list ul li{
	width:277px;
	float:left;
	padding:10px;
	box-sizing: border-box;
}
.new_list ul li a{
	display:block;
	/* width:260px; */
	margin: 20px auto;
		width:100%;
}
.new_list ul li p{
	color:#684029;
	line-height:20px;
	font-size: 13px;
	text-align: center;
	margin:20px 0;
}
.new_list ul li img{
	width:100%;
	
}
</style>
