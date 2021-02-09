
var dados = null;
var labelsX = [];
var labelsY = [];

var titulo = 'Titulo do gráfico';
var legendaEixoX = 'Legenda do eixo X';
var legendaEixoY = 'Legenda do eixo Y';

$.ajax({
    url: 'dados.csv',
    async: false,
    success: function(csvd) {
        data = $.csv.toArrays(csvd);
        dados = data;
        labelsX = dados[0];        
        labelsX.shift();    
        labelsY = data.map(x => x[0]);        
        labelsY.shift();        
    },
    dataType: "text",
    complete: function() {
        console.log('Colunas X -> ' + labelsX + ' | Tamanho -> ' + labelsX.length);
        console.log('Colunas Y -> ' + labelsY + ' | Tamanho -> ' + labelsY.length);
        graficoPlot = [],        
        labelsX.forEach((i, el) =>{
            labelsY.forEach((iy, ely) =>{
                graficoPlot.push({x: el, y: ely, z: parseInt(dados[el+1][ely+1])})
                console.log(el + ',' + ely + ',' + dados[el+1][ely+1]);
            });            
        });
    }
});

$(function () {
    Highcharts.chart('container', {
        chart: {
            type: 'bubble',
            plotBorderWidth: 1,
            zoomType: 'xy'
        },
        
        exporting: {
                sourceWidth: 1150, // tamanho de exportação da imagem (largura)
                sourceHeight: 800 // tamanho de exportação da imagem (altura)
        },

        credits:{
            enabled: false,
        },

        legend: {
            enabled: false
        },

        title: {
            text: titulo
        },

        xAxis: {
            gridLineWidth: 1,
            tickInterval: 1,
            title: {
                text: legendaEixoX
            },
            labels: {
                formatter: function() {
                var value = labelsX[this.value];
                return value !== 'undefined' ? value : this.value;
            }
            }
        },

        yAxis: {
            startOnTick: false,
            endOnTick: false,
            tickInterval:1,
            title: {
                text: legendaEixoY
            },
            labels: {
              formatter: function() {
                var value = labelsY[this.value];
                return value !== 'undefined' ? value : this.value;
            }
            },      
            minPadding:00,
        },

        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true, // exibe a informação do eixo Z na bolha
                    format: '{point.z}'
                }
            },
                bubble: {
                    minSize:20, // tamanho mínimo da bolha
                    maxSize:80 // tamanho máximo da bolha
             },
        },

        series: [{
            data: graficoPlot               
        }]

    });

});