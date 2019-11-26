Page({
  data: {
    background: ['blue', 'red', 'yellow'],
    indicatorDots: true,
    autoplay: false,
    vertical: false,
    interval: 1000,
    circular: false,
    color:"rgba(0,0,0,.3)",
    colorChange:false,
    activeColor:"#000",
    activeChange:false
  },
  onLoad() {
  },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots,
    });
  },
  changeVertical() {
    this.setData({
      vertical: !this.data.vertical,
    });
  },
  changeCircular(e) {
    this.setData({
      circular: !this.data.circular,
    });
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay,
    });
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value,
    });
  },
  changeDotColor(){
    if(this.data.colorChange){
      this.setData({
        color:"rgba(0,0,0,.3)",
        colorChange:false
      })
    }else{
      this.setData({
        color:"red",
        colorChange:true
      })
    }
    
  },
  changeActiveDotColor(){
    if(this.data.activeChange){
      this.setData({
        activeColor:"#000",
        activeChange:false
      })
    }else{
      
      this.setData({
        activeColor:"blue",
        activeChange:true
      })
    }
  }
});
