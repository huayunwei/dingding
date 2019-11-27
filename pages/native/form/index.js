
Page({
  data: {
    inputData:"",
    pickerIndex:0,
    range:['春', '夏', '秋', '冬']
  },
  onSubmit(e) {
    dd.alert({
      content: `数据：${JSON.stringify(e.detail.value)}`,
    });
  },
  onReset() {
    
  },
  onFocus(){
    dd.alert({
      title:"获取到焦点"
    })
  },
  onBlur(){
    dd.alert({
      title:"失去焦点"
    })
  },
  onConfirm(){
    dd.alert({
      title:"点击了完成按钮"
    })
  },
  onInput(event){
    console.log("输入内容",event.detail.value)
    this.setData({
      inputData:event.detail.value
    })
  },
  onChange(e){
    console.log(e.detail.value)
  },
  picker(e){
    console.log(e.detail.value);
    this.setData({
      pickerIndex:e.detail.value
    })
  }
});
