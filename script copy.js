// Kode Bar chart 
var barChartCTX = document.getElementById('barChart-canvas').getContext('2d');

function makeBarchcart(data) {
  var barChart = new Chart(barChartCTX, {
    type: 'bar',
    data: {
      labels: data.city,
      datasets: [{
        label: 'Penjualan',
        data: data.penjualan,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }, {
        label: 'Pembelian',
        data: data.pembelian,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }, {
        label: 'Keuntungan',
        data: data.keuntunganCity,
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          ticks: {
            beginAtZero: true,
            callback: function (value, index, ticks) {
              return 'Rp' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            }
          }
        }
      },
      plugins: {
        title: {
          display: true,
          text: "Data Penjualan, Pembelian, dan Keuntungan Berdasarkan Kota",
          font: {
            size: 20,
            weight: 'bold',
            family: 'sans-serif',
            lineHeight: 1.2,
          },
          color: 'black',
        }
      },
    }
  })
}

// Kode Pie chart
var pieChartCTX = document.getElementById('pieChart-canvas').getContext('2d');

function makePiechart(data) {
  var pieChart = new Chart(pieChartCTX, {
    type: 'pie',
    data: {
      labels: data.region,
      datasets: [{
        label: 'Keuntungan',
        data: data.keuntunganRegion,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1
      }]
    },
    plugins: [ChartDataLabels],
    options: {
      plugins: {
        title: {
          display: true,
          text: "Data Keuntungan Berdasarkan Region",
          font: {
            size: 20,
            weight: 'bold',
            family: 'sans-serif',
            lineHeight: 1.2,
          },
          color: 'black',
        },
        datalabels: {
          formatter: (value, ctx) => {
            const datapoints = ctx.chart.data.datasets[0].data
            const total = datapoints.reduce((total, datapoint) => total + datapoint, 0)
            const percentage = value / total * 100
            return percentage.toFixed(2) + "%";
          },
          color: 'gray'
        }
      },
    },
  })
}


// Kode line chart
var lineChartCTX = document.getElementById('lineChart-canvas').getContext('2d');

function makeLinechart(data) {
  var lineChart = new Chart(lineChartCTX, {
    type: 'line',
    data: {
      labels: data.tanggal,
      datasets: [{
        label: 'Keuntungan',
        data: data.keuntunganTanggal,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          ticks: {
            beginAtZero: true,
            callback: function (value, index, ticks) {
              return 'Rp' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            }
          }
        }
      },
      plugins: {
        title: {
          display: true,
          text: "Data Keuntungan Berdasarkan Bulan",
          font: {
            size: 20,
            weight: 'bold',
            family: 'sans-serif',
            lineHeight: 1.2,
          },
          color: 'black',
        }
      },
    }
  })
}

// Kode boxplot

// import { BoxPlotChart } from './node_modules/@sgratzl/chartjs-chart-boxplot';
var boxplotChartCTX = document.getElementById('boxplot-canvas').getContext('2d');

function makeBoxplot(data) {
  // using d3 js
  var boxplotChart = new Chart(boxplotChartCTX, {
    type: 'boxplot',
    data: {
      labels: data.kategori,
      datasets: [{
        label: 'Kuantitas',
        data: data.quantity,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Kuantitas Barang (Jan 2020 - Apr 2021) Berdasarkan Kategori Barang",
          font: {
            size: 20,
            weight: 'bold',
            family: 'sans-serif',
            lineHeight: 1.2,
          },
          color: 'black',
        },
        datalabels: {
          formatter: (value, ctx) => {
            const datapoints = ctx.chart.data.datasets[0].data
            const total = datapoints.reduce((total, datapoint) => total + datapoint, 0)
            const percentage = value / total * 100
            return percentage.toFixed(2) + "%";
          },
          color: 'gray'
        }
      },
    },
  })
}


// Kode donut chart
var donutChartCTX = document.getElementById('donutChart-canvas').getContext('2d');

function makeDonutChart(data) {
  var donutChart = new Chart(donutChartCTX, {
    type: 'doughnut',
    data: {
      labels: ["Klaster 1", "Klaster 2", "Klaster 3"],
      datasets: [{
        label: 'Klaster',
        data: data.cluster.reduce((acc, item) => {
          acc[item] = (acc[item] || 0) + 1;
          return acc;
        }, []),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1
      }]
    },
    plugins: [ChartDataLabels],
    options: {
      plugins: {
        title: {
          display: true,
          text: "Data Keanggotaan Klaster Berdasarkan City",
          font: {
            size: 20,
            weight: 'bold',
            family: 'sans-serif',
            lineHeight: 1.2,
          },
          color: 'black',
        },
        datalabels: {
          formatter: (value, ctx) => {
            const datapoints = ctx.chart.data.datasets[0].data
            const total = datapoints.reduce((total, datapoint) => total + datapoint, 0)
            const percentage = value / total * 100
            return percentage.toFixed(2) + "%";
          },
          color: 'gray',
        }
      },
    },
  })
}


d3.csv('../Tokokita_clean.csv', function (error, data) {
  if (error) throw error;

  // Data preprocessing untuk barchart
  var citiesName = data.map(function (d) { return d.City; });
  var penjualan = data.map(function (d) { return parseFloat(d.Penjualan.replace(/,/g, '')) });
  var pembelian = data.map(function (d) { return parseFloat(d.Pembelian.replace(/,/g, '')) });
  var keuntunganCity = [];
  for (var i = 0; i < penjualan.length; i++) {
    keuntunganCity.push(penjualan[i] - pembelian[i]);
  }

  var dic = {
    'city': [],
    'penjualan': [],
    'pembelian': [],
    'keuntunganCity': []
  };

  for (var i = 0; i < citiesName.length; i++) {
    if (dic['city'].indexOf(citiesName[i]) === -1 && citiesName[i] !== '' && citiesName[i] !== 'City') {
      dic['city'].push(citiesName[i]);
      dic['penjualan'].push(penjualan[i]);
      dic['pembelian'].push(pembelian[i]);
      dic['keuntunganCity'].push(keuntunganCity[i]);
    } else if (citiesName[i] !== '' && citiesName[i] !== 'City') {
      var index = dic['city'].indexOf(citiesName[i]);
      dic['penjualan'][index] += penjualan[i];
      dic['pembelian'][index] += pembelian[i];
      dic['keuntunganCity'][index] += keuntunganCity[i];
    }
  }

  // memanggil fungsi untuk membuat barchart
  makeBarchcart(dic);


  // Data preprocessing untuk piechart
  var region = data.map(function (d) { return d.Region; });
  var keuntunganRegion = [];
  for (var i = 0; i < penjualan.length; i++) {
    keuntunganRegion.push(penjualan[i] - pembelian[i]);
  }

  var dictRegion = {
    'region': [],
    'keuntunganRegion': []
  }

  for (var i = 0; i < region.length; i++) {
    if (dictRegion['region'].indexOf(region[i]) === -1 && region[i] !== '' && region[i] !== 'Region') {
      dictRegion['region'].push(region[i]);
      dictRegion['keuntunganRegion'].push(keuntunganRegion[i]);
    } else if (region[i] !== '' && region[i] !== 'Region') {
      var index = dictRegion['region'].indexOf(region[i]);
      dictRegion['keuntunganRegion'][index] += keuntunganRegion[i];
    }
  };

  // memanggil fungsi untuk membuat piechart
  makePiechart(dictRegion);

  var tanggal = data.map(function (d) {
    var date = d.Tanggal.split('-');
    var month = date[1];
    var year = date[2];
    return month + '-' + year;
  });
  var keuntunganTanggal = [];
  for (var i = 0; i < penjualan.length; i++) {
    keuntunganTanggal.push(penjualan[i] - pembelian[i]);
  }

  var dictTanggal = {
    'tanggal': [],
    'keuntunganTanggal': []
  }

  for (var i = 0; i < tanggal.length; i++) {
    if (dictTanggal['tanggal'].indexOf(tanggal[i]) === -1 && tanggal[i] !== '' && tanggal[i] !== 'Tanggal') {
      dictTanggal['tanggal'].push(tanggal[i]);
      dictTanggal['keuntunganTanggal'].push(keuntunganTanggal[i]);
    } else if (tanggal[i] !== '' && tanggal[i] !== 'Tanggal') {
      var index = dictTanggal['tanggal'].indexOf(tanggal[i]);
      dictTanggal['keuntunganTanggal'][index] += keuntunganTanggal[i];
    }
  }

  // memanggil fungsi untuk membuat line chart
  makeLinechart(dictTanggal);


  // preprocessing data untuk boxplot
  var kategoriBarang = data.map(function (d) { return d.Kategori; });
  var quantityBarang = data.map(function (d) { return parseFloat(d.Qty.replace(/,/g, '')) });

  var dictKategori = {
    'kategori': [],
    'quantity': []
  }

  for (var i = 0; i < kategoriBarang.length; i++) {
    if (dictKategori['kategori'].indexOf(kategoriBarang[i]) === -1 && kategoriBarang[i] !== '' && kategoriBarang[i] !== 'Kategori') {
      dictKategori['kategori'].push(kategoriBarang[i]);
      dictKategori['quantity'].push([quantityBarang[i]]);
    } else if (kategoriBarang[i] !== '' && kategoriBarang[i] !== 'Kategori') {
      var index = dictKategori['kategori'].indexOf(kategoriBarang[i]);
      dictKategori['quantity'][index].push(quantityBarang[i]);
    }
  }

  // memanggil fungsi untuk membuat boxplot
  makeBoxplot(dictKategori);
});


d3.csv('../Tokokita_cluster.csv', function (error, data) {
  if (error) throw error;

  // preprocessing data untuk donut chart
  var city = data.map(function (d) { return d.City; });
  var cluster = data.map(function (d) { return d.Cluster; });
  var longitude = data.map(function (d) { return parseFloat(d.Long); });
  var latitude = data.map(function (d) { return parseFloat(d.Lat); });

  var dictCluster = {
    'city': [],
    'cluster': [],
    'longitude': [],
    'latitude': []
  }

  for (var i = 0; i < city.length; i++) {
    if (dictCluster['city'].indexOf(city[i]) === -1 && city[i] !== '' && city[i] !== 'City') {
      dictCluster['city'].push(city[i]);
      dictCluster['cluster'].push(cluster[i]);
      dictCluster['longitude'].push(longitude[i]);
      dictCluster['latitude'].push(latitude[i]);
    } else if (city[i] !== '' && city[i] !== 'City') {
      var index = dictCluster['city'].indexOf(city[i]);
      dictCluster['cluster'][index] = cluster[i];
      dictCluster['longitude'][index] = longitude[i];
      dictCluster['latitude'][index] = latitude[i];
    }
  }

  // memanggil fungsi untuk membuat donut chart
  makeDonutChart(dictCluster);
  console.log(dictCluster);
});
