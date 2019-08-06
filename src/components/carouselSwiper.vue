<template>
  <div>
     <div class="swiper">
          <!-- <my-carouselSwiper></my-carouselSwiper> -->
          <swiper :options="swiperOption">
            <swiper-slide><img src="../../public/img/index/pic_041.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../../public/img/index/pic_042.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../../public/img/index/pic_043.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../../public/img/index/pic_044.jpg" alt=""></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          slidesPerView:1,
          centeredSlides: true,
          slidesPerGroup:1,
          // loop: true,
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
          },
        //   virtual: {
        //   slides:(function(){
        //     var slides=[];
        //     for (var i=0; i<4; i+=1){
        //       slides.push('Slide'+(i+1));
        //     }
        //     return slides;
        //   }()),
        // },
        }
      }
    },
    //  created(){
    // this.axios.get(
    //     "index/cindex"
    //   ).then(result=>{
       
    //    this.list=result.data.slice(8,18)
    //      console.log(this.list)
    //   })
    // }
  }
</script>
<style scoped>
*{margin:0;padding:0;}
.swiper {
    width: 100%;
  }

.swiper  img{
  display:block;
  width:100%;
  /* display:flex; */
}
</style>




