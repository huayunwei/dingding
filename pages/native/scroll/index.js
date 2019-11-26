
Page({
  data: {
    toView: 'blue',
    scrollTop: 0,
    order:['blue', 'red', 'green', 'yellow']
  },
  upper(e) {
    console.log("up",e);
    dd.alert({
      "title":"到达顶部，触发onScrollToUpper函数"
    })
  },
  lower(e) {
    console.log("lower",e);
    dd.alert({
      "title":"到达底部，触发onScrollToLower函数"
    })
  },
  scroll(e) {
    console.log("scroll",e.detail.scrollTop);
    this.setData({
      scrollTop:e.detail.scrollTop
    })
  },
  scrollToTop(e) {
    console.log(e);
    this.setData({
      scrollTop: 0,
    });
  },
  tap(e) {
    // 在改变的时候会出发scroll的
    const order = this.data.order;
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        const next = (i + 1) % order.length;
        this.setData({
          toView: order[next],
        });
        break;
      }
    }
  },
  tapMove() {
    this.setData({
      scrollTop: this.data.scrollTop + 10,
    });
  },
});
