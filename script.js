const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a principal fonte de poluição atmosférica nas grandes cidades?",
        alternativas: [
            {
                texto: "Veículos Automotores.",
                afirmacao: "Os veículos automotores emitem grandes quantidades de gases poluentes, como dióxido de nitrogênio e monóxido de carbono, contribuindo significativamente para a poluição atmosférica nas grandes cidades"
            },
            {
                texto: " Indústrias.",
                afirmacao: "As indústrias também são grandes fontes de poluição atmosférica, pois liberam poluentes como óxidos de enxofre e partículas finas no ar, impactando a qualidade do ar em áreas urbanas."
            }
           
        ]
    },
    {
        enunciado: "Qual é a principal maneira de reduzir a pegada de carbono individual?",
        alternativas: [
            {
                texto: "Uso de Transporte Público",
                afirmacao: "Optar pelo transporte público reduz a necessidade de veículos individuais, diminuindo a emissão de gases de efeito estufa e contribuindo para a redução da pegada de carbono pessoal."
            },
            {
                texto: "Uso de Energia Renovável",
                afirmacao: "Utilizar fontes de energia renovável, como solar ou eólica, reduz a dependência de combustíveis fósseis e diminui a emissão de gases poluentes, ajudando a reduzir a pegada de carbono."
            }
           
        ]
    },
    {
        enunciado: "Qual é um dos principais benefícios da reciclagem?",
        alternativas: [
            {
                texto: " Redução da Poluição",

                afirmacao:"A reciclagem ajuda a reduzir a poluição ao diminuir a quantidade de resíduos enviados para aterros sanitários e reduzir a necessidade de novos materiais, que frequentemente são poluentes."
            },
            {
                texto: "Conservação de Recursos Naturais",
                afirmacao:"Reciclar conserva recursos naturais ao reaproveitar materiais existentes, o que reduz a necessidade de extração e processamento de novas matérias-primas, preservando o meio ambiente."
            }
        ]
    }
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", ()=>
        respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}
function respostaSelecionada (opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Resumindo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
    mostraPergunta();