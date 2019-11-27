Page({
  data:{
    toastType:["success","fail","exception","none"],
    toast:0
  },
  alertT(){
      dd.alert({
        title:"我是alert的头部",
        content:"我是alert的内容",
        buttonText:"我是alert的按钮文字"
      })
  },
  confirmT(){
    dd.confirm({
      title:"我是confirm的标题",
      content:"我是confirm的内容",
      confirmButtonText:"确认按钮的内容",
      cancelButtonText:"取消按钮的内容"
    })
  },
  toastT(){
    const toastType = this.data.toastType;
    const curIndex = this.data.toast;

    this.setData({
      toast:(curIndex+1)%toastType.length
    })

    dd.showToast({
      type:toastType[curIndex],
      content:"toast的内容，我2s就会消失",
      duration:2000 //ms为单位
    })
  },
  loadingT(){
    dd.showLoading({
      content:"loading,3s后我自动隐藏",
      delay:1 //单位ms，默认为0
    })
    setTimeout(()=>{
      dd.hideLoading();
    },3000)
  },
  sheetT(){
    dd.showActionSheet({
      title:"自定义菜单的标题",
      items:["餐单1","菜单2","菜单3"],
      cancelButtonText:"点我关闭这个菜单"
    })
  },
})