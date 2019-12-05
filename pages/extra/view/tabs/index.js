Page({
  data:{
    // 整体样式的修改
    tabBarBackgroundColor:"pink",// 背景
    tabBarInactiveTextColor:"yellow",//非激活时字体颜色
    tabBarActiveTextColor:"#fff",//激活时字体颜色
    tabBarUnderlineColor:"#000",//下划线颜色
    activeTab:0,
    tabs:[
      {
        title: '选项0',
        badgeType: 'text',
        badgeText: '6',
        anchor:'a'
      },
      {
        title: '选项1',
        badgeType: 'dot',
        anchor:'b'
      }
    ],
  },
  handleTabClick(ev){
    // ev:{index:num},点击切换tab时触发
    console.log(`tabClick${ev}`);
    this.setData({
      activeTab:ev.index
    })
  },
  handleTabChange(ev){
    // 滑动的时候触发
    this.setData({
      activeTab:ev.index
    })

    console.log(`handleTabChange${JSON.stringify(ev)}`)
  },
  handleVTabClick(ev){
    console.log(`vtabClick${ev}`);
    this.setData({
      activeTab:ev
    })
  }
})