const elementoResposta = document.querySelector("#resposta");
const inputPergunta = document.querySelector("#inputPergunta");

const respostas = [
    "Certeza!",
    "Não tenho tanta certeza",
    "Não conte com isso",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde",
    "Sim, definitivamente",
    "Minha resposta é não",
    "Você pode contar com isso",
    "Melhor não te dizer agora",
    "A meu ver, sim",
    "Minhas fontes dizem que não",
    "Provavelmente",
    "Não é possível prever agora",
    "As perspectivas não são tão boas",
    "Sim",
    "Sinais apontam que sim",
]

function fazerPergunta() {
    if (inputPergunta.value == "") {
        alert("Digite uma pergunta")
        return
    }

    const pergunta = `<div> ${inputPergunta.value} </div>`

    const totalRespostas = respostas.length;
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

    elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio];
    inputPergunta.value = '';


    setTimeout(function(){
        elementoResposta.style.opacity = 0;
    }, 3000)



}