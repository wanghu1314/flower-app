<template>
    <ul class="home-list clearfix">
					<li v-for="(elem,i) of list" :key="i">
						<router-link :to="{path:'/details',query:{fid:myhref}}">
							<img :src="elem.img" alt="elem.title">
						</router-link>
					</li>
		</ul>
</template>
<script>
    import '../assets/css/base.css';
  export default{
    data(){
      return {
        list:[
          {title:"新品",img:'img/new1.jpg'},
          {title:"生日",img:'img/brithday.png'},
          {title:"儿童",img:'img/baby.png'},
          {title:"聚会",img:'img/party.png'},
          {title:"活动",img:'img/play.png'}
        ]
       
      }
      
    },
    props:{
        myhref:{default:""},
        imgurl:{default:""},
        price:{default:""},
        title:{default:""},
      },
    created(){
      
    }
  }

</script>
<style scoped>

/*鼠标悬浮图片移动效果*/
.home-list{
	width:70%;
  display:flex;
  justify-content: space-around;
  flex-direction: row;
	margin:50px auto 0px;
}
.home-list li{
  width:100%;
  padding:10px;
	}
.home-list li a{
	display: block;
	border-radius:8px;
	box-shadow:0 2px 6px 0 rgba(0,0,0,0.6);
	overflow:hidden;
}
.home-list li a img{
	display: block;
  opacity: 0.9;
}
.home-list li a img:hover{
	transform:scale(1.1);
	transition-duration:1s;
}
</style>


