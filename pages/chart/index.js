Page({
  data:{
    listData:[
      {
        title:"折线图",
        arrow:true,
        // page:"/pages/f2/line/index"
      },
      {
        title:"区域图",
        arrow:true,
        // page:"/pages/f2/area/index"
      },
      {
        title:"柱状图",
        arrow:true,
        // page:"/pages/f2/column/index"
      },
      {
        title:"条形图",
        arrow:true,
        // page:"/pages/f2/bar/index"
      },
      {
        title:"环状图",
        arrow:true,
        // page:"/pages/f2/ring/index"
      },
      {
        title:"玫瑰图",
        arrow:true,
        // page:"/pages/f2/rose/index"
      },
      {
        title:"雷达图",
        arrow:true,
        // page:"/pages/f2/radar/index"
      },
      {
        title:"仪表图",
        arrow:true,
        // page:"/pages/f2/gauge/index"
      }
    ]
  },
  onClick(ev){
    const index = ev.index;
    dd.navigateTo({
      url:this.data.listData[index].page
    })
  }
})