Page({
  data:{
    authCode:"",
  },
  
  onLoad(){
    dd.getAuthCode({
        success:(res)=>{
            /*{
                authCode: 'hYLK98jkf0m' //string authCode
            }*/
            this.setData({
              authCode:res.authCode
            })
            console.log(res);
        },
        fail:function(err){
        }
    });
  }
})