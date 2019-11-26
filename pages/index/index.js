Page({
  data:{
    
    nativeLoadMore:"over",
    nativeLoadContent:[
      "正在加载中", // 跟顺序有关系，下面的为loadMore为over时的显示
      "已经到底了，加载不了了",// 为loadMore为load时的显示
    ],
    nativeComponents:[
      {
        title:"view",
        arrow:true,
        extra:"视图容器",
        page:'/pages/native/view/index'
      },
      {
        title:"swiper",
        arrow:true,
        extra:"视图容器",
        page:"/pages/native/swiper/index"
      },
      {
        title:"scroll",
        arrow:true,
        extra:"视图容器",
        page:"/pages/native/scroll/index"
      },
      {
        title:"text",
        arrow:true,
        extra:"基础内容",
        page:"/pages/native/text/index"
      },
      {
        title:"icon",
        arrow:true,
        extra:"基础内容",
        page:"/pages/native/icon/index"
      },
      {
        title:"progress",
        arrow:true,
        extra:"基础内容",
        page:"/pages/native/progress/index"
      },
      {
        title:"表单",
        arrow:true,
        page:"/pages/native/form/index"
      },
      {
        title:"导航",
        arrow:true,
        page:"/pages/native/navigator/index"
      },
      {
        title:"图片",
        arrow:true,
        page:"/pages/native/image/index"
      },
      {
        title:"内嵌h5页面",
        arrow:true,
        page:"/pages/native/h5/index"
      }
    ],
    extraComponents:[
      {
        title:"布局导航",
        arrow:true
      },
      {
        title:"操作浮层",
        arrow:true
      },
      {
        title:"结果类",
        arrow:true
      },
      {
        title:"提示引导",
        arrow:true
      },
      {
        title:"表单类",
        arrow:true
      },
      {
        title:"手势类",
        arrow:true
      },
      {
        title:"其他",
        arrow:true
      }
    ],
  },
  onExtraClick(event){
    const index = event.index;
    const url = this.data.extraComponents[index].page;
    console.log(url);
    if(url){
      dd.navigateTo({
        url
      });
    }
  },
  onNativeClick(event){
    const index = event.index;
    const url = this.data.nativeComponents[index].page;
    console.log(url);
    if(url){
      dd.navigateTo({
        url
      });
    }
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
