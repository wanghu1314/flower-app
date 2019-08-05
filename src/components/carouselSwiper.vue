<template>
  <div>
    
    <div class="swiper-banner">
      <!-- swiper -->
      <swiper :options="swiperOption" class="banner" v-if="list.length">
       <swiper-slide id="list" v-for="(elem,i) of list" :key="i">
          <router-link :to="{path:'/details',query:{fid:elem.href}}" class="color666">
            <img :src="elem.pic" alt="">
            <div class="center">
              <p v-text="elem.title">
              </p>
            </div>
          </router-link>
        </swiper-slide>
        <div class="swiper-button-prev btn-banner" slot="button-prev"></div>
        <div class="swiper-button-next  btn-banner" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
data() {
  return {
    list:[],
    swiperOption: {
    //  width:1200,
      slidesPerView:5,
      spaceBetween:0,
      slidesPerGroup:1,
      loop: true,   
      autoplay: {
      delay:2000,
      disableOnInteraction: false,
      },
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }
  }
},
  created(){
this.axios.get(
    "index/index"
  ).then(result=>{
    
    this.list=result.data.slice(14,22);
    //  console.log(this.list)

    
  })
}
}
</script>
<style scoped>

.banner{
  width: 100%;
  margin: 0 auto;
}
.color666{
  width: 200px;
  height: 290px;
  margin: 5px 0px 0 20px;
  text-align: center;
  float: left;
}
/* 图片 大小 内边距 */
.color666 img{
  width:200px;
  height:200px;
}
.color666 p{
  width:200px;
  height:30px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow:hidden;
  padding-top:15px;
  font-size:12px;
  text-align: center;
}
.swiper-button-prev,.swiper-button-next{
  width:27px;
  height:66px;
  /* background:url("../../public/img/index/pic_066.png") no-repeat; */
  position:absolute;
  top:90px;
  opacity:0;
  cursor: pointer;
  z-index:9999;
  }
.swiper-button-prev{
  left:20px;
  background-position:0 -201px;
}
.swiper-button-next{
  right:20px;
  background-position:0 -134px;
}
/* 鼠标移入显示箭头 */
.banner:hover .btn-banner{
  opacity:1;
}
</style>




