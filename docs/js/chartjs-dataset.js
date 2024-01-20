function datasets4Scatter(series) {
  var datasets = [];
  var N = series.length;
  for(let i = 0; i < N; i++) {
    var ds = {
      data: B_SERIES[i],
      label: B_SLABEL[i],
      backgroundColor: B_PCOLOR[i],
      showLine: B_LVISIB[i],
      borderColor: B_LCOLOR[i],
      pointRadius: B_PRADII[i]
    };
    datasets.push(ds);
  }
  return datasets;
}
