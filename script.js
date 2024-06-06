const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPeerguntas = document.querySelector(".caixa-pergunta");
const caixaAlternativa = document.querySelector(".caixa-Alternativa");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    { //primeiro objeto da lista de perguntas
        enunciado: "pergunta1",
        alternativas: ["alternativa1", "alternativa2"]
    },
    { //segundo objeto da lista de perguntas
        enunciado: "pergunta2",
        alternativa: ["alternativa1", "alternativa2"]

    }
]