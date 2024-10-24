import { getCSS } from "./common.js";

async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/razoes-globais.json'
    const res = await fetch(url)
    const dados = await res.json()
    const objetivosUsuarios = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)
  
    const data = [
        {
          x: 'nomeDasRedes',
          y: quantidadeDeUsuarios,
          type: 'bar',
          marker: {
            color: getCSS('--primary-color')
          }
        }
      ]

      const layout ={}
       plot
  
  const grafico = document.createElement('div')
  grafico.className = 'grafico'
  document.getElementById('graficos-container').appendChild(grafico)
  Plotly.newPlot(grafico, data, layout)
  
  }
  
  objetivosUsuarios()