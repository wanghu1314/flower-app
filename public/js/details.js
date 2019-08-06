var $zoom=$("#zoom");
var $imgMax=$("#super-zoom");
var $maxNone=$("#max-none");
var zw=194;
var zh=230;
var maxW=400;
var maxH=400;
$imgMax.hover(
  function(){
    $zoom.toggleClass("d-none");
    $maxNone.toggleClass("d-none");
  }
)
//让遮罩层跟随鼠标移动
.mousemove(function(e){
  var top=e.offsetY-zh/2;
  var left=e.offsetX-zw/2;
  //如果top<0,就拉回0, 如果top>SMSIZE-MSIZE，就拉回SMSIZE-MSIZE
  if(top<0){
    top=0;
  }else if(top>maxH-zh){
    top=maxH-zh;
  }
  //如果left<0,就拉回0, 如果left>SMSIZE-MSIZE，就拉回SMSIZE-MSIZE
  if(left<0){
    left=0;
  }else if(left>maxW-zw){
    left=maxW-zw;
  }
  $zoom.css({
    top:top+"px",
    left:left+"px"
  })
  $maxNone.css(
    "background-position",
    `${-left*16/8}px ${-top*16/8}px`
  )
})
