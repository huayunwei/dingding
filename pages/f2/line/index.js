Page({
  data: {
    // cn: 'line',
    // x坐标列表，等同全部数据的宽度 
    categories: ['2017-06-05', '2017-06-06', '2017-06-07', '2017-06-08', '2017-06-09'],
    // 线的数据，可以为多条
    series: [
      {
        type: 'a', //线的标识名称
        style: 'dash', // 线的种类，可以取值dash虚线和smooth曲线
        point: { // 是否绘制圆点
          size: 3,  // 控制点半径
          stroke: '#F00', // 点颜色
          lineWidth: 1, // 点边线宽
        },
        color:"red",// 线的颜色
        data: [116, 129, 135, 86, 73], // 线的数据，等同categories的长度，空缺则线段不连续不绘
      },
      {
        type: 'b',
        color: '#93F',
        style: 'smooth',
        data: [60, 55, 57, 111, 83],
      },
    ],
    // x坐标轴的配置
    xAxis: {
      tickCount: 3, //显示的坐标个数
      htAlign:false, // 是否首尾缩进对齐，没看出来作用
    },
    // y坐标轴的配置
    yAxis: {
      tickCount: 3,
    },
    // 整体图例设置，既series中type的位置
    legend: {
      position: 'top', // 显示的位置，top，bottom，left，right
      offsetY: 5, //垂直偏移
      offsetX: 105 // 水平偏移
      // 其他配置网页：https://f2.antv.vision/zh/docs/api/chart/legend
    },
    // 触摸提示设置，默认为空
    tooltip: {
      showTitle: false, // 是否展示标题：x轴的数据
      showCrosshairs: true, // 是否展示辅助线
      offsetX:1, // x轴的偏移
      offsetY:1 // y轴的偏移
      // 其他配置：https://f2.antv.vision/zh/docs/api/chart/tooltip
    },
    padding:[500,500,500,500],// 图形内边距，无效
    appendPadding:200 // 无效，图标画布区域四边预留边距，在padding基础上，四周再加appendPadding的值，默认15
  },
  onReady() {
    setTimeout(() => {
      this.setData({
        cn: 'line size',
        categories: ['2017-06-04', '2017-06-06', '2017-06-07', '2017-06-08', '2017-06-09'],
      });
    }, 2000);
  },
});
