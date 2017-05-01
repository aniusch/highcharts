    $(function () {

    var eixoX = { // coloque aqui o texto correspondente a cada ponto do eixo X
        10: 'Técnica X-1',
        20: 'Técnica X-2',
        30: 'Técnica X-3',
        40: 'Técnica X-4',
        50: 'Técnica X-5',
        60: 'Técnica X-6',
        70: 'Técnica X-7',
        80: 'Técnica X-8',
        90: 'Técnica X-9',
        100: 'Técnica X-10',
    };

    var eixoY = { // coloque aqui o texto correspondente a cada ponto do eixo Y
        10: 'Método Y-1',
        20: 'Método Y-2',
        30: 'Método Y-3',
        40: 'Método Y-4',
        50: 'Método Y-5',
        60: 'Método Y-6',
        70: 'Método Y-7',
        80: 'Método Y-8',
        90: 'Método Y-9',
        100: 'Método Y-10',
    };

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

        legend: {
            enabled: false
        },

        title: {
            text: 'Comparação entre técnicas e métodos' // título do gráfico
        },

        xAxis: {
            gridLineWidth: 1,
            tickInterval: 10,
            title: {
                text: ''
            },
            labels: {
                formatter: function() {
                var value = eixoX[this.value];
                return value !== 'undefined' ? value : this.value;
            }
            }
        },
        
        yAxis: {
            startOnTick: false,
            endOnTick: false,
            tickInterval:10,
            title: {
                text: ''
            },
            labels: {
              formatter: function() {
                var value = eixoY[this.value];
                return value !== 'undefined' ? value : this.value;
            }
            },      
            minPadding:00,
            max:110, // ponto máximo do eixo Y
            min:0 // ponto mínimo do eixo Y
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
            data: [
                { x: 10, y: 30, z: 12}, // cada linha é uma bolha, sendo Z o tamanho da bolha (e o número que será exibido)
                { x: 10, y: 10, z: 1},
                { x: 10, y: 60, z: 4},
                
                { x: 20, y: 30, z: 2},
                { x: 20, y: 50, z: 3},
                { x: 20, y: 100, z: 1},
                
                { x: 30, y: 10, z: 12},
                { x: 30, y: 20, z: 2},
                { x: 30, y: 40, z: 1},
                { x: 30, y: 50, z: 2},
                { x: 30, y: 60, z: 4},
                { x: 30, y: 100, z: 1},
                
                { x: 40, y: 10, z: 1},
                { x: 40, y: 30, z: 1},
                { x: 40, y: 90, z: 1},
                
                { x: 50, y: 20, z: 3},
                { x: 50, y: 30, z: 2},
                { x: 50, y: 60, z: 1},
                { x: 50, y: 80, z: 1},
                { x: 50, y: 100, z: 1},
                
                { x: 60, y: 10, z: 4},
                { x: 60, y: 30, z: 4},
                { x: 60, y: 50, z: 1},
                { x: 60, y: 80, z: 1},
                
                { x: 70, y: 90, z: 1},
                
                { x: 80, y: 50, z: 1},
                { x: 80, y: 60, z: 1},
                
                { x: 90, y: 40, z: 1},
                { x: 90, y: 70, z: 1},
                
                { x: 100, y: 20, z: 1},
                { x: 100, y: 30, z: 1},
                { x: 100, y: 50, z: 1},
            ]
        }]

    });

});