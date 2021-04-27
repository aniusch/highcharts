function obterDados(caminho) {
  let aux = null;

  $.ajax({
    url: caminho,
    async: false,

    success: function (csvd) {
      dados = $.csv.toArrays(csvd);
      labelsX = dados[0];
      labelsX.shift();
      labelsY = dados.map((x) => x[0]);
      labelsY.shift();
    },

    complete: function () {
      (graficoPlot = []),
        labelsX.forEach((i, el) => {
          labelsY.forEach((iy, ely) => {
            aux = parseFloat(dados[el + 1][ely + 1]);
            if (aux) {
              graficoPlot.push([ely, el, aux]);
            }
          });
        });

      //return graficoPlot;
    },
  });
}
