Page({
  onReady(){
    // dd.complexChoose({
    //   title:"测试标题",
    //   multiple:true,
    //   success:function(res){
    //     console.log(res);
    //   }
    // })
    dd.choosePhonebook({
      success:function(res){
        console.log(res)
      }
    })
  }
})