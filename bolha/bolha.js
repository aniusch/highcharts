var dados = null;
var labelsX = [];
var labelsY = [];
obterDados("../comum/finalidade-vs-recursos.csv");

/* Configurações deste gráfico */
let GRAFICO = {
  titulo: "",
  largura: 900,
  altura: 450,
  corPrincipal: "#f53b57",

  eixoX: {
    titulo: "",
    invertido: false,
  },
  eixoY: {
    titulo: "",
    invertido: false,
  },
};

$(function () {
  Highcharts.chart("container", {
    chart: {
      type: "bubble",
      plotBorderWidth: 1,
      zoomType: "xy",
      marginLeft: 180,
      marginRight: 60,
    },

    exporting: {
      sourceWidth: GRAFICO.largura, // tamanho de exportação da imagem (largura)
      sourceHeight: GRAFICO.altura, // tamanho de exportação da imagem (altura)
    },

    credits: {
      enabled: false,
    },

    legend: {
      enabled: false,
    },

    title: {
      text: GRAFICO.titulo,
      style: {
        fontSize: DEFINICOES.titulo.tamanho,
        fontFamily: DEFINICOES.fonte,
        color: DEFINICOES.cor,
        fontWeight: 600,
      },
    },

    xAxis: {
      gridLineWidth: 1,
      tickInterval: 1,
      title: {
        text: GRAFICO.eixoX.titulo,
      },
      labels: {
        style: {
          fontSize: DEFINICOES.rotulos.tamanho,
          fontFamily: DEFINICOES.fonte,
          color: DEFINICOES.rotulos.cor,
        },
        formatter: function () {
          var value = labelsX[this.value];
          return value !== "undefined" ? value : this.value;
        },
      },
    },

    yAxis: {
      startOnTick: false,
      endOnTick: false,
      tickInterval: 1,
      title: {
        text: GRAFICO.eixoY.titulo,
      },
      labels: {
        style: {
          fontSize: DEFINICOES.rotulos.tamanho,
          fontFamily: DEFINICOES.fonte,
          color: DEFINICOES.rotulos.cor,
        },

        formatter: function () {
          var value = labelsY[this.value];
          return value !== "undefined" ? value : this.value;
        },
      },
      minPadding: 00,
    },

    plotOptions: {
      series: {
        dataLabels: {
          enabled: true, // exibe a informação do eixo Z na bolha
          format: "{point.z}",
        },
      },
      bubble: {
        minSize: 20, // tamanho mínimo da bolha
        maxSize: 80, // tamanho máximo da bolha
      },
    },

    series: [
      {
        data: graficoPlot,
        color: GRAFICO.corPrincipal,
        dataLabels: {
          enabled: true,
          //color: "#000000",
          style: {
            fontSize: DEFINICOES.series.tamanho,
            fontFamily: DEFINICOES.fonte,
            textOutline: false,
            shadow: false,
          },
        },
      },
    ],
  });
});
