let dados = null;
let labelsX = [];
let labelsY = [];
obterDados("../comum/dados.csv");

/* Configurações deste gráfico */
let GRAFICO = {
  titulo: "Título",
  largura: 800,
  altura: 400,
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

/* Código Highcharts */
$(function () {
  Highcharts.chart("container", {
    chart: {
      type: "heatmap",
      plotBorderWidth: 0,
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

    credits: {
      enabled: false,
    },

    exporting: {
      sourceWidth: GRAFICO.largura,
      sourceHeight: GRAFICO.altura,
    },

    xAxis: {
      categories: labelsX,
      title: {
        text: GRAFICO.eixoX.titulo,
      },
      reversed: GRAFICO.eixoX.invertido,

      labels: {
        style: {
          fontSize: DEFINICOES.rotulos.tamanho,
          fontFamily: DEFINICOES.fonte,
          color: DEFINICOES.rotulos.cor,
        },
      },
    },

    yAxis: {
      title: {
        text: GRAFICO.eixoY.titulo,
      },
      categories: labelsY,
      reversed: GRAFICO.eixoY.invertido,

      labels: {
        style: {
          fontSize: DEFINICOES.rotulos.tamanho,
          fontFamily: DEFINICOES.fonte,
          color: DEFINICOES.rotulos.cor,
        },
      },
    },

    colorAxis: [
      {
        //min: 0,
        //max: 1,
        minColor: "#FFFFFF",
        maxColor: GRAFICO.corPrincipal,
      },
    ],

    legend: {
      align: "right",
      layout: "vertical",
      //marginTop: 10,
      verticalAlign: "top",
      y: 52,
      symbolHeight: 280,
    },

    series: [
      {
        borderWidth: 0,
        data: [...graficoPlot],
        colorAxis: 0,
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
