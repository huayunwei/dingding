Page({
  data:{
    precent:0
  },
  onReady(){
    console.log("ready")
    const timeD = setInterval(()=>{
      const precent = this.data.precent;
      if(precent < 95){
        this.setData({
          precent:this.data.precent+5
        })
      }else{
        console.log("end",precent);
        clearInterval(timeD);
      }
    },1000)
  }
})