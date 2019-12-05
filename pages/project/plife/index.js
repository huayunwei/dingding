
Page({
  data: {
    proId: ''
  },
  onExtraTap() {
    dd.scan({
      success(res){
        dd.navigateTo({
          url:"/pages/project/plife/result/index?type=scan&proId="+res.code
        })
      },
      fail(err){
        console.log(err)
      }
    })
  },
  onItemInput(e) {
    this.setData({
      [e.target.dataset.field]: e.detail.value,
    });
  },
  onClear(e) {
    this.setData({
      [e.target.dataset.field]: '',
    });
  },
  onSubmit(e){
    if(this.data.proId){
      dd.navigateTo({
        url:"/pages/project/plife/result/index?type=input&proId="+this.data.proId
      })
    }
  },
  
});
