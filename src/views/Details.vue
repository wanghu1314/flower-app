<template>
    <div>
        <div class="details_banner clearfix">
            <div class="left_box">
                <img :src="pics[i].lg" alt="">
            </div>
            <div class="right_box">
                <!-- <a href="#" class="top_banner"></a> -->
                <ul style="padding-top:300px">
                    <li class="list_banner" v-for="(p,index) of pics" :key="index"><img :src="p.sm" alt=""  @mousemove="changei(index)" ></li>
                </ul>
            </div>
        </div>
        <div class="content-box">
            <div class="pro-details-cont">
                <div class="pro-details-left">
                    <h1 class="pro-title">{{product.title}}</h1>
                    <div class="pro-details-label">
                        <a href="#">情侣</a>
                        <a href="#">人气</a>
                        <a href="#">力荐单品</a>
                    </div>
                    <div class="pro-details-explain">
                        <p>{{product.details}}</p>
                        
                    </div>
                    <ul class="details-distribution">
                        <li>
                            <i class="iconfont icon-xuehua-copy"> </i>
                            <span>保鲜条件：</span>
                            0-4℃保藏12小时，5℃食用为佳
                        </li>
                        <li >
                            <div class="icon1 fl"></div>
                            <span class="fl">参考甜度：</span>
                            <ul class="fl">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <div class="clearfix"></div>
                
                            </ul>
                            <div class="clearfix"></div>
                        </li>
                    </ul>
                </div>
                <div class="pro-details-right">
                    <div class="outer-box">
                        <img :src="product.pic" alt="">
                        <h2>¥{{product.price}}
                        </h2>
                        <ul class="details-options ">
                            <li><i class="iconfont icon-_chicun"></i>{{product.size}}</li>
                            <li><i class="iconfont icon-duorenyonghu"></i>{{product.unmber}}</li>
                            <li><i class="iconfont icon-fork"></i>{{product.laid}}</li>
                            <li><i class="iconfont icon-shijian"></i>最早明天 10:00配送</li>
                        </ul>
                        <div class="details-Specifications-size">
                            <div>规格:</div>
                            <ul class="clearfix">
                                <li v-for="(elem,i) of productlist" :key='i'>{{elem.spec}}</li>
                              
                                <div class="clearfix"></div>
                            </ul>
                            <div class="clearfix"></div>
                            <div class="details-button">
                                <button class="details-but-buy">立即购买</button ><button class="details-but-cart">加入购物车</button>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            
                
            </div>	
            <div class="details-introduction">
                    <p>{{product.details}}</p>
                    <p>/樱桃酒味从巧克力卷的缝隙飘出/ </p>
                    <p>/向往极北的黑森林，纷飞的雪花里有精灵的歌咏/</p>
                    
            </div>
            <div>
                <img src="../../public/img/details_cake.jpg" alt="">
                <img src="../../public/img/details_cake2.jpg" alt="">
                <img src="../../public/img/details_cake3.jpg" alt="">
            </div>
            <div class="details_text">
                <h3>退改说明:</h3>
                <p>1. 北京、上海、杭州、广州地区距配送时间5小时及以上的订单可修改、取消、退订；距配送时间不足5小时，订单不再支持修改、取消、退订。（22点之后不接受次日14点之前配送订单修改、退订）</p>
                <p>2. 苏州、无锡、深圳、天津距配送时间不足8小时，订单不再支持修改、取消、退订。（22点之后不接受次日16点之前配送订单修改、退订）            
                </p>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            i:0,
            productlist:[],
            product:{},
            pics:[{sm:'img/dangao/dangao1.jpg'}]
        }
    },
    
     created(){
     
       var fid=this.$route.query.fid;
    
        this.axios.get(
          "product/details",
          {
            params:{
            fid:fid
            }
          }
        ).then(result=>{
        //  
          this.productlist=result.data.product
           console.log(this.productlist);
          this.product=result.data.product[0];
          this.pics=result.data.pics;
        //   console.log(this.pics)
        //   console.log(this.pics[0].sm)
         
        })
    },
   methods:{
        changei(index){
        this.i=index;
      
    },
   },
    watch: {    
    '$route' (to, from) {   
         this.$router.go(0);   
 }},
}
</script>
<style>
/* **************** */
.details_banner{
    width:1050px;
    height:520px;
    margin:0 auto;
    padding-top:100px;
}
.left_box{
    width:924px;
    height:520px;
    float:left;
}
.left_box img{
    width:924px;
    height:520px;
    background: #eee;
}
.right_box{
    width:90px;
    height:100%;
    float:right;
    position:relative;
}
.top_banner{
    width:90px;
    height:310px;
    overflow:hidden;
    display:block;
    outline: none;
}
.active{
    border:1px solid #C69C6D;
    height: 48px;
    width: 88px;

}
.list_banner{
    width: 100px;
    margin-right:5px;
}
.list_banner {
    width: 100px;
    height:50px;
    margin-top:20px;
}
.list_banner img{
    width:90px;
    height:50px;
    background: #eee;
}
.content-box {
	width:1050px;
	margin:0 auto;
	/* background:#ccc; */
}
.pro-details-cont{
	width:100%;
	position: relative;
    overflow: hidden;
    padding-bottom: 10px;
    border-bottom: #D8D8D8 solid 1px;
}
.pro-details-cont:after{
	content:'';
	display:block;
	clear:both;
}
.pro-details-left{
	width:484px;
	float:left;
	padding-top:48px;
}
.pro-title{
	font-size:20px;
	line-height: 28px;
	padding-top:20px;
}

.pro-details-label{
	margin: 20px 0 14px;
}
.pro-details-label>a{
	display:inline-block;
	line-height: 18px;
    color: #D5BFA7;
    padding: 0 10px;
    border: 1px solid #D5BFA7;
    border-radius: 100px;
    margin-right: 6px;
    font-size: 12px;
}
.details-constituent{
	overflow: hidden;
	margin-bottom:14px;
}
.details-constituent:after{
	content:"";
	display:block;
	clear:both;
}
.details-constituent li{
	float: left;
    height: 50px;
    line-height: 50px;
	color: #684029;
}

.details-constituent li img{
	display:inline-block;
	width:50px;
	height:50px;
	vertical-align: middle;
}
.details-constituent li span{
	display:inline-block;
	height:20px;
	line-height:20px;
	vertical-align: middle;
}
.pro-details-explain{
	width:484px;
	font-size:14px;
	/* line-height:2em; */
}
.pro-details-explain p{
	line-height:25px;
	padding:5px 0;
	

}

.details-distribution{
	padding:12px 0;
}
.details-distribution li{
	height:34px;
	line-height:34px;
}
.details-distribution li span{
	margin-right:5px;
}
.details-distribution li .icon1{
	width: 26px;
	height: 26px;
	background: url('../../public/img/icon1.jpg') no-repeat center center;
	
}
.details-distribution li ul li{
	float: left;
	width: 25px;
	height: 25px;
	background: url('../../public/img/icon2.jpg') no-repeat center center;
	margin-right: 10px;
	cursor: pointer;
}
.details-distribution li ul li:nth-child(4),.details-distribution li ul li:nth-child(5){
	background: url('../../public/img/icon3.jpg') no-repeat center center
}

.details-distribution li span .icon-tangguo3{
	font-size: 21px;
}
.details-distribution li span i:hover{
	color: red;

}
.pro-details-right{
	width:500px;
	/* margin-left:65px; */
	overflow:auto;
	position: relative;
	float:right;
}
.outer-box{
	width: 100%;
	padding-top:48px;

}
.outer-box img{
	width:300px;
	height:170px;
}
.outer-box h2{
	position: absolute;
    height: 25px;
    line-height: 25px;
    font-size: 20px;
    z-index: 10;
    top: 165px;
    left: 335px;
    color: #C69C6D;
}
.outer-box .details-options {
	margin-top:8px;
}
.outer-box .details-options i{
	margin-right:8px;
}
.outer-box .details-options li{
	height:25psx;
	line-height:25px;
	margin:8px 0;
	text-indent:30px;
}
.details-Specifications-size>div,.details-Specifications-size ul li{
	/* float:left; */
	margin-left:5px;
}
.details-Specifications-size>div{
	padding:5px;
}
.details-Specifications-size ul{
    display: flex;
    flex-direction: row;
}
.details-Specifications-size ul li{
	width:60px;
	height: 28px;
    margin-left: 15px;
    text-align: center;
    color: #7A5844;
    margin-bottom: 14px;
    cursor: pointer;
	line-height:30px;
	text-align: center;
	border: 1px solid #e7e0dd;
}
.details-Specifications-size ul li.active{
	border: 1px solid #684029;
}
.details-Specifications-size ul li:hover{
	color:#e7e0dd;
}
.details-Specifications-size div.details-button{
	width: 360px;
    height: 40px;
	font-size: 13px;
	margin-top:5px;
}
.details-Specifications-size div.details-button button{
	width: 167px;
    height: 30px;
	line-height: 30px;
	text-align: center;
    font-size: 13px;
}
.details-button  .details-but-buy{
    float: left;
    background: #F4F4F4;
    color: #7A5844;
}
.details-button  .details-but-cart{
    float: right;
    background: #684029;
    color: #fff;
}
.details-introduction{
	margin-top:20px;
}
.details-introduction p{
	line-height: 20px;
	padding:5px 0;
}
.details_text{
	margin:20px 0;
}
.details_text p{
	line-height:25px;
	font-size:14px;
	margin-left:10px;
}

</style>

