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
    paragrafo.innerHTML = `A região Nordeste é a que concentra o maior número de localidade quilombolas no Brasil, com <span> ${pessoasConectadas} Quilombos  </span> a região Sudeste vem em seguida,com <span> ${pessoasconectadas} quilombo. </span> Em relação á população quilombola, os estados da Bahia e Maranhão concentram metade da população quilombola do Brail isso siginifica que são <span>${porcentagemConectadas} % </span> de Quilobos.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}
visualizarInformacoesGlobais()


