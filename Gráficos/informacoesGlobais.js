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
    paragrafo.innerHTML = `A região Nordeste é a que concentra o maior número de localidades quilombolas no Brasil, com <span> ${pessoasMundo} Quilombos </span> a região Sudeste vem em seguida, com <span> ${pessoasConectadas} quilombos. </span> Em relação à população quilombola, os estados da Bahia e Maranhão concentram metade da população quilombola do Brasil isso significa que são <span>${porcentagemConectada} % </span> de Quilombos. `
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}
visualizarInformacoesGlobais()