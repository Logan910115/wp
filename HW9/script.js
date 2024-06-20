// 使用 Plotly 繪製簡單圖表
var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    type: 'scatter'
  };
  
  var data = [trace1];
  
  Plotly.newPlot('plotly-chart', data);
  