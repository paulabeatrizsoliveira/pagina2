
var horas = Array.from({ length: 24 }, (_, i) => i); // Horas de 0 a 23
var vendasEfetivadas = Array.from({ length: 24 }, () =>
   getRandomValue(0, 2300)
); // Vendas efetivadas aleatórias
var vendasCanceladas = Array.from({ length: 24 }, () =>
   getRandomValue(0, 1000)
); // Vendas canceladas aleatórias

// Dados para o gráfico de barras
var meses = ["Junho/23", "Julho/23", "Agosto/23", "Setembro/23"];
var vendasNFCe = [
   getRandomValue(0, 324400),
   getRandomValue(0, 324400),
   getRandomValue(0, 324400),
   getRandomValue(0, 324400),
]; // Vendas NFC-e aleatórias
var vendasNFe = [
   getRandomValue(0, 0),
   getRandomValue(0, 0),
   getRandomValue(0, 0),
   getRandomValue(0, 0),
]; // Vendas NF-e aleatórias

// Função para gerar valores aleatórios dentro de um intervalo
function getRandomValue(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}

// Gráfico de Linhas
var linhaChart = new Chart(
   document.getElementById("linhaChart").getContext("2d"),
   {
      type: "line",
      data: {
         labels: horas,
         datasets: [
            {
               label: "Vendas Efetivadas",
               data: vendasEfetivadas,
               borderColor: "blue",
               borderWidth: 2,
               fill: false,
            },
            {
               label: "Vendas Canceladas",
               data: vendasCanceladas,
               borderColor: "red",
               borderWidth: 2,
               fill: false,
            },
         ],
      },
      options: {
         scales: {
            y: {
               beginAtZero: true,
               max: 2300,
            },
         },
         plugins: {
            title: {
               display: true,
               text: "Vendas por Horas",
            },
         },
      },
   }
);

// Gráfico de Barras
var barraChart = new Chart(
   document.getElementById("barraChart").getContext("2d"),
   {
      type: "bar",
      data: {
         labels: meses,
         datasets: [
            {
               label: "NFC-e",
               data: vendasNFCe,
               backgroundColor: "blue",
               borderWidth: 1,
            },
            {
               label: "NF-e",
               data: vendasNFe,
               backgroundColor: "red",
               borderWidth: 1,
            },
         ],
      },
      options: {
         scales: {
            y: {
               beginAtZero: true,
               max: 324400,
            },
         },
         plugins: {
            title: {
               display: true,
               text: "Vendas Mensais",
            },
         },
      },
   }
);
