import { getCSS, tickConfig } from "./common.js "

async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = ['Djembe','Mbira','Kora','Ngoni','Instrumentos de sopro']
    const quantidadeUsuarios = ['10000','2000','100000','500000','30000']
    const data = [
        {
            x: nomeDasRedes,
            y: quantidadeUsuarios,
            type: 'bar',
            marker: {
                color: getCSS('--cor-barra')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--cor-de-fundo'),
        paper_bgcolor: getCSS('--cor-de-fundo'),
        title: {
            text: 'Os instrumentos de música mais usados na África.',
            font: {
                color: getCSS('--cor-principal'),
                family: getCSS('--fonte'),
                size: 30
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Instrumentos',
                font: {
                    color: getCSS('--cor-secundaria')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'casos a cada 100 mil habitantes',
                font: {
                    color: getCSS('--cor-secundaria')
                }
            }

        }

    }
    const grafico = document.createElement('div')
    grafico.className - 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)

}

quantidadeUsuarios()