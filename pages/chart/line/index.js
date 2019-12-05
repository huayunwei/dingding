Page({
  onLoad(e){
    this.webViewContext = dd.createWebViewContext('web-view-1');
  },
  // onReady() {
    // 页面加载完成
    // dd.getAuthCode({
      // success(res){
        // const code = res.authCode
        // dd.alert(
        //   {content:code}
        //   );
        // dd.httpRequest({
        //   url:"http://192.169.35.33:8080/users/user/id",
        //   method:"POST",
        //   data:{"code":code},
        //   success(res){
        //     console.log(1,res)
        //   },
        //   fail(err){
        //     console.log(2,err)
        //   }
        // })
    //   },
    //   fail(res){
    //     console.log(1)
    //   }
    // })

  // },
  test(e){
    console.log(e);
    this.webViewContext.postMessage({
      'sendTo':'我是从小程序发送出去的内容'
    })
  }
})