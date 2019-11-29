Page({
  data: {
    series: [
      {
        type: '股票类',//饼的标识名称
        data: 83.59,// int饼的数据量
        color: 'red',//饼的颜色
      },
      {
        type: '债券类',
        data: 2.17,
      },
      {
        type: '现金类',
        data: 14.24,
      },
    ],
    radius: 0.85,// 饼的缩放大小
    innerRadius: 0.7,// 饼的内环缩放大小，默认0，大于0是饼图呈现环装
    tooltip:true, //无效
    // 图例
    legend: {
      position: 'right',
    },
    style:{
      lineWidth:10,//线宽
      stroke:"#fff"//线色
    },
    guide: {
      text: { // 辅助文字配置 
        position: ['50%', '50%'],
        content: 'guide1',
        style: {
          fontSize: 40,
          fill: '#1890FF',
        },
      },
    },
    //actvieShape:true,//无效
  },
});
