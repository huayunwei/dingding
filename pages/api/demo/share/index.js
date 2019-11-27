Page({
  data:{
    title:"",
    desc:""
  },
  onSubmit(ev){
    const value = ev.detail.value;
    console.log(value);
    this.setData({
      title:value.title,
      desc:value.desc
    })
    dd.alert({
      content:"设置成功"
    })
  },
  onShareAppMessage(){
    const title = this.data.title;//暂时这个title没有用
    const desc = this.data.desc;
    if(title === ""){
      dd.alert({
        content:"标题不能为空"
      })
    }else{
      return {
        title:title,
        desc:desc,
        // 目前只支持网络图片链接
        imageUrl:"https://img.52z.com/upload/news/image/20180621/20180621055734_59936.jpg",
        path:"/pages/index/index" //链接地址
      }
    }

  }
})