const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"

async function visualizarInformacoesGlobais() {
  const res = await fetch(url)
  const dados = await res.json()
  const pessosasConectdas = (dados.total_pessoas_conectadas /le9)
  const pessoasNoMundo = (dados.total_pessoas_mundo /le9)
  const horas = parseInt(dados.tempo_medio)
  const minutos = Math.round((dados.tempo_medio - horas
  console.log(dados);
}

visualizarInformacoesGlobais()
