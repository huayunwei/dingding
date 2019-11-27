let recorderManager = null;
Page({
  startRecord(){
    console.log("开始录音")
    if (dd.canIUse('getRecorderManager')) {     // 端上支持
        recorderManager = dd.getRecorderManager()    
    } else {     // 端上不支持
        dd.alert({ content: '请升级钉钉版本至4.5.18以支持录音功能' })    
    }
    recorderManager.onstart=()=>{
      dd.alert({
        content:"开始录音"
      })
    }
    recorderManager.onstop=(res)=>{
      dd.alert({
        content:"录音结束，tempFilePath:"+res.tempFilePath
      })
    }
    recorderManager.onerror=(res)=>{
      dd.alert({
        content:"error："+JSON.stringify(res)
      })
    }
    recorderManager.start({duration:10})
  },
  endRecord(){
    console.log("停止录音");
    if (dd.canIUse('getRecorderManager')) {     // 端上支持
        recorderManager = dd.getRecorderManager()    
    } else {     // 端上不支持
        dd.alert({ content: '请升级钉钉版本至4.5.18以支持录音功能' })    
    }
    recorderManager.stop();
  }
})