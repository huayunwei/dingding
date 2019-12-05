Page({
  data:{
    activeIndex:1,// 默认第一个为1，不是0注意一下
    failIndex:3,//只有vertical纵向有效
    direction:"horizontal", //默认：horizontal，横向,vertical纵向
    size:30,// 统一的icon值默认为0，单位px，//只有vertical纵向有效
    items:[ //步骤详情
      {
        title:"步骤1",
        description:"这是步骤1",
        icon:'success'//只有vertical纵向有效
      },
      {
        title:"步骤2",
        description:"这是步骤2",
        activeIcon:"info",//只有vertical纵向有效
        size:10//只有vertical纵向有效
      },
      {
        title:"步骤3",
        description:"这步骤错了",
        icon:'cancel'//只有vertical纵向有效
      }
    ]
  },
  changeDir(){
    if(this.data.direction === "horizontal"){
        this.setData({
          direction:"vertical"
        })
    }else{
      this.setData({
          direction:"horizontal"
        })
    }
  },
  next(){
    if(this.data.activeIndex >= this.data.items.length){
      dd.alert({
        content:"流程结束"
        })
    }else{
      this.setData({
        activeIndex:this.data.activeIndex+1
      })
    }
  },
  prev(){
    if(this.data.activeIndex <= 1){
      dd.alert({
        content:"之前没有了"
        })
    }else{
      this.setData({
        activeIndex:this.data.activeIndex-1
      })
    }
  }
})