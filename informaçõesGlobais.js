const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasconectadas = (dados.total-pessoas-conectadas / 1e9)
    const pessoasNoMundo= (dados.total-pessoas-mundo / 1e9)
    const horas =parseInt (ados.tempo_medio) 
    const minutos = Math.roud (dados.tempo_medio-horas) +100


    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem ${dados.total_pessoas_mundo} <\span>
    de pessoas e que aproximadamente <span>${pessoasconectadas} bilhões>\span> estão conectadas em 
    alguma rede social e passam em média  <span>${horas} horas</span> e <span>${minutos} minutos</ 
    span> conectadas.<br>Isso significa que aproximadamente ${porcentagemConectada} % de pessoas 
    estão conectadas em alguma rede social.
    const container = document.getElementById(graficos-container)
    container.appendChild(paragrafo)
  }
  vizualizarInformacoesGlobais()