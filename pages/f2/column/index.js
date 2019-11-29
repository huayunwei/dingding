Page({
  data: {
    cn: 'column',
    categories: ["1951 年", "1952 年", "1956 年", "1957 年", "1958 年", "1959 年", "1960 年", "1962 年"],
    series: [
      {
        data: [38, 52, 61, 145, 48, 38, 38, 38],
      }
    ],
    xAxis: {
      tickCount: 3,
    },
    yAxis: {
      tickCount: 3,
    },
    // legend: {
    //   position: 'top',
    //   offsetY: 5
    // },
    tooltip: {
      showTitle: false, 
    },
    coord: {
      transposed: false,
    },
  },
  transposed(){
    const flag = this.data.coord.transposed;
    this.setData({
      coord:{
        transposed:!flag
      }
    })
  },
  onReady() {
    setTimeout(() => {
      this.setData({
        categories: ["1950 年", "1952 年", "1956 年", "1957 年", "1958 年", "1959 年", "1960 年", "1962 年"],
      });
    }, 2000);
  },
});
