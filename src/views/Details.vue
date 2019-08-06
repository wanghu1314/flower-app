 <template>
   <div class="flex">
     <div class="headFix">
          <div class="headLeft" @click="go">
          </div>
          <div class="headCenter">
            <div class="cartTitle">
              <img width="141px" src="../../public/img/appimg/ia_100000002.png" alt="">
            </div>
          </div>
          <div class="headRight">
          </div>
        </div>
        <div style="height:50px">
        </div>

      <div class="lg flex">
          <div class="swiper">
            <swiper :options="swiperOption">
              <swiper-slide  v-for="(elem,index) of pics" :key="index">
                <img :src="elem.img" alt="">
              </swiper-slide>
              <!-- <swiper-slide><img src="../../public/img/index/pic_042.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="../../public/img/index/pic_043.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="../../public/img/index/pic_044.jpg" alt=""></swiper-slide> -->
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
        <!-- <my-carouselSwiper></my-carouselSwiper> -->
      </div>
      <div>
        <div class="goods-logo"><img src="../../public/img/appimg/ia_100000002.png" alt=""></div>
        <h3 class="title" v-text="product.title">爱的勇气-19朵红玫瑰</h3>
        <p class="price">￥<span v-text="product.price"></span></p>
        <p class="app-price">app9折优惠价:￥{{product.price-100}}</p>
        <p class="go-app"><a href="#">立即前往领取优惠卷>></a></p>
        <p class="remark">本产品可免费享受指定日期送达服务，请在订单中备注。</p>
        <p class="spec-red">{{product.details}}</p>
      </div>
      <div class="goods-desc">
          <div class="content-item">
            <ul>
              <li>
                <div>货号</div>
                <div  v-text="product.numeration"></div>
              </li>
              <li>
                <div>材料</div>
                <div v-text="product.material"></div>
              </li>
              <li>
                <div>包装</div>
                <div v-text="product.pack"></div>
              </li>
              <li>
                <div>花语</div>
                <div v-text="product.flower_language"></div>
              </li>
              <li>
                <div>附赠</div>
                <div>免费附送精美贺卡，代写您的祝福。(您下单时可填写留言栏)</div>
              </li>
              <li>
                <div>配送</div>
                <div>全国 （可配送至全国1000多个城市，市区免配送费）</div>
              </li>
              <li>
                <div>说明</div>
                <div> {{product.details}}</div>
              </li>
            </ul>
          </div>
      </div>
      <div class="goods-box">
        <div>
          <img src="../../public/img/details/1537327934_84913.jpg">
          <img src="../../public/img/details/1537327934_69002.jpg">
          <img src="../../public/img/details/1537327934_81524.jpg">
          <img src="../../public/img/details/1537327935_49017.jpg">
          <img src="../../public/img/details/1537327935_23533.jpg">
          <img src="../../public/img/details/1537327935_10292.jpg">
        </div>
      </div>
      <div class="goods-box">
          <div class="reasons">
              <p>推荐理由</p>
              <p>Style notes</p>
              <p>你不能拒绝红玫瑰，就像你无法拒绝爱情，红玫瑰与爱相伴相生，19朵红玫寓意长久浪漫的爱。</p>
          </div>
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="运输说明" name="1">
              <div class="depict">鲜花商品均由同城门店专人专车配送，保证花材新鲜，免去您舟车劳顿的
              辛苦，享受花赞鲜花的尊贵VIP送花服务。
              </div>
            </el-collapse-item>
            <el-collapse-item title="保养说明" name="2">
                <ul>
                  <li>请打开包装，将鲜花取出。</li>
                  <li>根据花瓶的高度，以45度角修剪鲜花根部，插入花器。</li>
                  <li>放在花瓶中的鲜花，请每天剪根换水。</li>
                  <li>花赞鲜花保证花材新鲜。因运输原因您拿到的花束若憔悴，请不要担心。</li>
                  <li>将鲜花插入花瓶，第二天就会精神。</li>
                  <li>温馨提示：切勿将鲜花放在过热或强光环境下。</li>
                </ul>           
            </el-collapse-item>
            <el-collapse-item title="特别说明" name="3">
              <div class="depict">鲜花是季节性商品，某些花材可能由于天气、运输等突发情况而出现缺货。此时，花艺师将在不影响花艺整体效果的情况下，用等值或高于
              原花材价格的新花材进行创作。</div>
            </el-collapse-item>
            <el-collapse-item title="退换货说明" name="4">
              <div class="depict"> 鲜花不接受7天无理由退换货，如果有质量问题，请在签收后24小时内联系客服。</div>
            </el-collapse-item>
            <el-collapse-item title="关于售后" name="5">
              <div class="depict">亲爱的贵宾，更改或取消订单，请于希望送达日期前2日与我们联系，否则无法退款和修改。</div>
            </el-collapse-item>
          </el-collapse>
      </div>
      <div class="goods-box">
          <div class="goods-like">
            <div class="like"></div>
            热卖产品
          </div>
          <div class="swiper1">
            <my-carouselSwiper1></my-carouselSwiper1>
          </div>
      </div>
      
      <div style="height:30px">
      </div>
      <div class="pay">
        <div class="payLeft">
            <ul>
              <li>
                  <a href="#"  class="phone">
                      <img src="../../public/img/phone.png" width="20px">
                      <span style="color:#000;">电话</span>
                  </a>
              </li>
              <li>
                  <a href="javascript:;"  class="preson">
                      <img src="../../public/img/person.png" width="20px">
                      <span style="color:#000;">客服</span>
                  </a>
              </li>
              <li class="cart">
                  <a href="#">
                      <img src="../../public/img/cart1.png" width="20px">
                      <span style="color:#000;">购物车</span>
                  </a>
              </li>
           </ul>
        </div>
        <div class="payRight">
            <a href="javascript:;" @click="addCart">加入购物车</a>
        </div>
        <div class="payRight payRight1">
            <a href="javascript:;">立即购买</a>
        </div>
     </div>
    </div>
 </template>
 <script>
 import { MessageBox } from 'mint-ui';
  export default {
    data() {
      return {
        fid:0,
        activeName: '1',
        product:[{price:0}],
        pics:[{img:'img/wenhou/wenhou_002lg.jpg'}],
        swiperOption: {
          slidesPerView:1,
          centeredSlides: true,
          slidesPerGroup:1,
          // loop: true,
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
          },
      }}
    },
    methods: {
      go(){
      this.$router.go(-1);
    },
      addCart(){
            this.axios.get("cart/adds", {params:{
              fid:this.fid,
              title:this.product.title,
              price:this.product.price,
              img_url:this.pics[0].img
              }}
            ).then(result=>{
                if(result.data.code>=1){
                   this.$toast({
                      message: '添加购物车成功。',
                      position: 'bottom',
                      duration: 1000
                });
                   setTimeout(
                   ()=>{
                     this.$router.replace('/cart'); 
                   },2000
                   );
                  
    
                }
            })  
      }
    },
    created(){
      var fid=this.$route.query.fid;
      this.fid=fid;
      this.axios.get("product/details", {params:{fid:fid}}
      ).then(result=>{
        this.product=result.data.product[0];
        this.pics=result.data.pics;
      })
     },
   watch: {'$route' (to, from) {this.$router.go(0);}},
  }
</script>
 <style scoped>
 .flex{
   width: 100%;
   overflow: hidden;
   box-sizing: border-box;
   display: inline-block;
 }
 .swiper {
    width: 100%;
  }

.swiper  img{
  display:block;
  width:100%;
  /* display:flex; */
}
/* 头部 */
.headFix{
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 44px;
    border-width: 0 0 1px 0;
    border-bottom: solid 1px #d8d8d8;
    background: #fff;
  }
  .headLeft{
    width: 25px;
    height: 33px;
    top: 0;
    left: 0;
    padding: 12px 0 0 15px;
    position: absolute;
  }
  .headLeft::after{
    content: '';
    display: inline-block;
    width: 10.5px;
    height: 19.5px;
    background: url("../../public/img/appimg/left.png") left top no-repeat;
    background-size: 10.5px 19.5px;
  }
  .headCenter{
    height: 30px;
    margin: 0 80px 0 41px;
    padding-top: 7px;
  }
  .cartTitle{
    font-weight: normal;
    font-size: 0.75rem;
    line-height: 28px;
    height: 30px;
    text-align: center;
    font-size: 17px;
    color: #333;
    overflow: hidden;
  }
  .headRight{
    width: 23px;
    height: 32px;
    top: 0;
    right: 0;
    padding: 12px 13px 0 0;
    position: absolute;
  }
  .headRight::after{
    content: '';
    display: inline-block;
    width: 23px;
    height: 23px;
    background: url("../../public/img/appimg/layout-nav.png") center center no-repeat;
    background-size: contain;
  }
 *{margin:0;padding:0;}
 .lg{
   min-width:100%;;
   display:inline-block;
 }
 .lg>img{
   width:100%;
   }
   .goods-logo{
     text-align: center;
     padding: 10px 0px;
     overflow: hidden;
   }
   .goods-logo>img{
     width: 45%;
     margin: 0 auto;
   }
   p{
    color: #010101;
    text-align: center;
    }
   .title{
    color: #010101;
    font-size: 15px;
    text-align: center;
   }
   .price{
    color: #9b7338;
    padding: 6px 0px;
    font-size: 15px;
   }
   .app-price{
    color: #9b7338;
    font-size: 0.45rem;
   }
   .go-app{
   padding: 6px 0px;
   }
   .go-app>a{
    color: #e12413;
    font-size: 15px;
    /* display:inline-block; */
   }
   .remark{
    font-size: 0.5rem;
    padding: 0.3rem 0.5rem 0rem;
   }
   .spec-red{
    color: red;
    font-size: 12px;
    padding: 0.45rem 0.5rem 0rem;
   }

.goods-desc{
  padding: 0px 0.5rem;
}
 .content-item{
   border-top:1px solid #d8d8d8;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
 }
.content-item ul{
    padding-left: 0px;
    border-bottom: solid 1px #d8d8d8;
    padding-left: 15px;
    background: #fff;
    margin-top: 10px;
    font-weight: normal;
    padding-bottom: 10px;
 } 
 .content-item li{
   list-style: outside none none;
    /* display: -webkit-box; */
    border-top: solid 1px #eceaea;
    padding: 4px 0;
    font-size: 12px;
    line-height: 18px;
    font-size: 12px;
 } 
 ul li:first-child {
    border-top: 0;
}
ul li div:first-child{
    width: 15%;
    color: #333;
    font-size: 0.5rem;
}
ul li div:last-child{
    width: 85%;
    color: #333;
    font-size: 0.47rem;
}
.goods-box{
    min-width: 100%;
    padding: 10px 10px 20px 10px;
    background: #fff;
    display: inline-block;
    box-sizing: border-box;
}

.goods-box>div>img{
    max-width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    vertical-align: middle;
}

.goods-box>.reasons{
    border-top: 1px solid #010101;
    margin-bottom: 1.5rem;
}
.goods-box .reasons p:nth-child(1){
    color: #010101;
    font-size:14px;
    font-family: 微软雅黑;
    text-align: center;
    padding-top: 20px;
    font-weight: bold;
}
.goods-box .reasons p:nth-child(2){
   font-size:12px;
    color: #f0b654;
    text-align: center;
    font-family: Arial;
    font-weight: bold;
    padding-top: 5px;
}
.goods-box .reasons p:nth-child(3){
  color: #292929;
    font-size: 0.55rem;
    line-height: 18px;
    padding-top: 15px;
    font-weight: bold;
}
/* 手风琴 */
.el-collapse-item__content{
  font-size: 12px !important;
}
.depict{
  font-size:12px;
}
/* 轮播 */
.goods-like{
    font-size: 0.8rem;
    height: 1.2rem;
    line-height: 1.2rem;
    padding: 0.5rem 0px;
    background: #fff;
}
.like{
    width:5px;
    height: 1.2rem;
    background: #9b7338;
    float: left;
    margin-right: 5px;
}
.swiper1{
  width:360px;
  overflow: hidden;
}

/* 尾部 */
.pay{
  position: fixed;
  width: 100%;
  height: 50px;
  background: #fff;
  bottom: 0;
  display:flex;
  justify-content: space-between;
  z-index:999;  
}
.payLeft{
    text-align: left;
    /* padding: 10px; */
    border-top: 1px solid #d8d8d8;
    line-height: 15px;
    width: 60%;
    padding:5px;    
}
/* .payLeft ul{
  display: flex;
} */
.payLeft li{
  float:left;
  /* padding-top:5px; */
  width:33%;
  border-right:1px solid rgb(151, 150, 150);
   text-align: center;
   box-sizing: border-box;
  }
  .payLeft li a{
    text-align: center;
    display:inline-block;
    vertical-align: middle;
  }
  .payLeft li a{
    display: block;
  }
.payLeft .cart{border-right:none;}
.payLeft span{
   width:100%;
  display:inline-block;
  text-align: center;
  font-size: 12px;
  }
.payRight{
  width:40%;
  margin-left:3px;
}
.payRight1 a{
  background: #d48c13 !important;
  border-top: 1px solid #d48c13 !important;
}
.payRight a{
    display: block;
    width: 100%;
    color: #fff;
    font-size: 14px;
    text-align: center;
    background: #eeae40;
    border-top: 1px solid #eeae40;
    height: 100%;
    line-height: 50px;
}
 
 </style>
 
 