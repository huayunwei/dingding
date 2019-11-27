Page({
  data:{
    imgurl:"",
    source:["camera","album"],
    count:1
  },
  selectImage(){
    dd.chooseImage({
      count:this.data.count,//最大可选照片数，默认为1
      sourceType:this.data.source, // 照片来源，默认为照相机和album
      success:(res)=>{
        console.log(res.filePaths[0])
        // 成功的回调
        dd.alert({
          content:"选取成功，文件地址"+JSON.stringify(res.filePaths)
        })
        // 注意这个位置
        this.setData({
          imgurl:res.filePaths[0]
        })
      },
      fail:(res)=>{
        dd.alert({
          // error：失败的数字，
          // errorMessagee:失败的信息
          content:"选取失败,失败编码："+JSON.stringify(res.error) + "失败信息："+JSON.stringify(res.errorMessage)
        })
      },
      complete(res){
        dd.alert({
          content:"不管失败和成功都会执行的"
        })
      }
    })
  },
  previewImage(){
    dd.previewImage({
      urls:[this.data.imgurl]
    })
  },
  sourceChange(ev){
    console.log(JSON.stringify(ev));
    const source = ev.detail.value;
    let sourceType = []
    if(source === 'all'){
      sourceType = ["camera","album"]
    }else{
      sourceType = [source];
    }
    console.log(sourceType);
    this.setData({
      source:sourceType
    })
  },
  countChange(ev){
    console.log(ev);
    const count = ev.detail.value;
    this.setData({
      count
    })
  }
})