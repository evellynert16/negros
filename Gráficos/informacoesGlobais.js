const url = 'informacoes.json'

async function visualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas)
    const pessoasMundo = (dados.total_pessoas_mundo)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) *100)
    const porcentagemConectada = ((pessoasConectadas/pessoasMundo)*100).toFixed(2)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `No primeiro gráfico podemos analisar os intrumentos musicais mais usados e utilizados no continente Áfricano. Já no segundo gráfico observamos o indice de racismo nos Estados do Brasil sendo casos a cada 100 mil habitantes.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}
visualizarInformacoesGlobais()