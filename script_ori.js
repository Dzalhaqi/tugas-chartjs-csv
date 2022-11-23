var margin = { top: 20, right: 20, bottom: 30, left: 40 },
  widthBar = 960 - margin.left - margin.right,
  heightBar = 500 - margin.top - margin.bottom;

var x0 = d3.scaleBand()
  .rangeRound([0, widthBar])
  .padding(0.1);

var x1 = d3.scaleBand();

var y = d3.scaleLinear()
  .range([heightBar, 0]);

var xAxis = d3.axisBottom()
  .scale(x0)
  .tickSize(0)

var yAxis = d3.axisLeft()
  .scale(y)

var color = d3.scaleOrdinal()
  .range(['#ffd384', '#94ebcd', '#fbaccc', '#d3e0ea', '#fa7f72'])

var svgBar = d3.select('#barchart-chart-container').append('svg')
  .attr('width', widthBar + margin.left + margin.right)
  .attr('height', heightBar + margin.top + margin.bottom)
  .append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

d3.csv('../Tokokita_clean.csv', function (error, data) {
  if (error) throw error;

  // make grouped barchart that contains penjualan, pembelian, and keuntungan based on citiesName 
  var citiesName = data.map(function (d) { return d.City; });
  var penjualan = data.map(function (d) { return parseFloat(d.Penjualan.replace(/,/g, '')) });
  var pembelian = data.map(function (d) { return parseFloat(d.Pembelian.replace(/,/g, '')) });
  var keuntungan = [];
  for (var i = 0; i < penjualan.length; i++) {
    keuntungan.push(penjualan[i] - pembelian[i]);
  }

  var dic = {
    'city': [],
    'penjualan': [],
    'pembelian': [],
    'keuntungan': []
  };

  for (var i = 0; i < citiesName.length; i++) {
    if (dic['city'].indexOf(citiesName[i]) === -1 && citiesName[i] !== '' && citiesName[i] !== 'City') {
      dic['city'].push(citiesName[i]);
      dic['penjualan'].push(penjualan[i]);
      dic['pembelian'].push(pembelian[i]);
      dic['keuntungan'].push(keuntungan[i]);
    } else if (citiesName[i] !== '' && citiesName[i] !== 'City') {
      var index = dic['city'].indexOf(citiesName[i]);
      dic['penjualan'][index] += penjualan[i];
      dic['pembelian'][index] += pembelian[i];
      dic['keuntungan'][index] += keuntungan[i];
    }
  }

  // var keys = ['penjualan', 'pembelian', 'keuntungan'];

  // x0.domain(data.map(function (d) { return d.City; }));
  // x1.domain(keys).rangeRound([0, x0.bandwidth()]);
  // y.domain([0, d3.max(data, function (d) { return d3.max(keys, function (key) { return d[key]; }); })]).nice();

  // svgBar.append('g')
  //   .attr('class', 'x axis')
  //   .attr('transform', 'translate(0,' + heightBar + ')')
  //   .call(xAxis);

  // svgBar.append('g')
  //   .attr('class', 'y axis')
  //   .call(yAxis)
  //   .append('text')
  //   .attr('transform', 'rotate(-90)')
  //   .attr('y', 6)
  //   .attr('dy', '.71em')
  //   .style('text-anchor', 'end')
  //   .text('Value');

  // var city = svgBar.selectAll('.city')
  //   .data(data)
  //   .enter().append('g')
  //   .attr('class', 'city')
  //   .attr('transform', function (d) { return 'translate(' + x0(d.City) + ',0)'; });

  // city.selectAll('rect')
  //   .data(function (d) { return keys.map(function (key) { return { key: key, value: d[key] }; }); })
  //   .enter().append('rect')
  //   .attr('width', x1.bandwidth())
  //   .attr('x', function (d) { return x1(d.key); })
  //   .attr('y', function (d) { return y(d.value); })
  //   .attr('height', function (d) { return heightBar - y(d.value); })

  // var legend = svgBar.selectAll('.legend')
  //   .data(keys.slice().reverse())
  //   .enter().append('g')
  //   .attr('class', 'legend')
  //   .attr('transform', function (d, i) { return 'translate(0,' + i * 20 + ')'; });

  // legend.append('rect')
  //   .attr('x', widthBar - 18)
  //   .attr('width', 18)
  //   .attr('height', 18)
  //   .style('fill', color);

  // legend.append('text')
  //   .attr('x', widthBar - 24)
  //   .attr('y', 9)
  //   .attr('dy', '.35em')
  //   .style('text-anchor', 'end')
  //   .text(function (d) { return d; });
});
