<template>
  <div>
     <swiper :options="swiperOption" class="swiper">
            <swiper-slide><img src="../../public/img/index/pic_041.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../../public/img/index/pic_042.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../../public/img/index/pic_043.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../../public/img/index/pic_044.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../../public/img/index/pic_045.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../../public/img/index/pic_046.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../../public/img/index/pic_047.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../../public/img/index/pic_048.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../../public/img/index/pic_049.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../../public/img/index/pic_040.jpg" alt=""></swiper-slide>
            <!-- <div class="swiper-pagination" slot="pagination"></div> -->
          </swiper>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      //  list:[],
         swiperOption: {
          slidesPerView:4,
          // spaceBetween:60,
          slidesPerGroup:1,
          loop: true,
          // pagination: {
          //   el: '.swiper-pagination',
          //   clickable: true
          // }
        }
      }
    },
  }
</script>
<style scoped>
*{margin:0;padding:0;}

.swiper{
  width:100%;
  overflow: hidden;
   display:inline-block;
}

.swiper img{
  width:85px;
  height: 85px;
  display:inline-block;
}
</style>




