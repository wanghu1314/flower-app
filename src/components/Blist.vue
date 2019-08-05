<template>
    <div class="ice_cream_1">
		<router-link :to="{path:'/details',query:{fid:myhref}}">
            <img :src="pic" alt="">
        </router-link>
		<p>{{title}}</p>
		<div class="div_hidden">
			<a href="#">购买</a>
		</div>

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
        title:{default:""},
    }
}
</script>
<style scoped>
.ice_cream_1{
		width:50%;
		float:left;
		position:relative;
        padding:10px;
        box-sizing:border-box;
		
	}
	.ice_cream_1 img:before{
		content: '';
		position: absolute;
		width: 100%;
		height:100%;
		z-index:5;

	}
	.ice_cream_1:hover img{
		opacity: 0.5;
	}
	.ice_cream_1 img{
		width:100%;

	}
	.ice_cream_1 a{
        display:block;
	}
	.ice_cream_1 p{
		width: 100%;
		height:14px;
		text-align: center;
		font-size: 12px;
		text-overflow: ellipsis;
		overflow: hidden;
		margin:10px 0;
		
	}
	.ice_cream_1 .div_hidden{
		position: absolute; 
		width:92%;
		height:0px;
		line-height:40px;
		font-size: 14px;
		background: #684029;
		transition:all .5s linear;
        z-index:10;
	}
	.ice_cream_1 .div_hidden a{
		display: block;
		margin:0 auto;
		/* width:25%; */
		outline: 0;
		text-align: center;
		color:#fff;
		transition: all .5s linear;
		height:0px;
        border-radius:3px;
         box-sizing:border-box;
        
	}
	.ice_cream_1:hover div{
		border-radius:3px;
		transform:translateY(-35px);
        height:40px;
        /* width:50%; */
	}
</style>


