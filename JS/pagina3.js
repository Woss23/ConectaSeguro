// Pega todas as perguntas
const perguntas = document.querySelectorAll(".caixa-quiz");

// Pega todos os números das perguntas
const numeros = document.querySelectorAll(".pergunta-numero");

// Pega todas as barras
const barras = document.querySelectorAll(".barra");

// Respostas corretas
const respostas = ["D", "B", "B", "C"];

// Pergunta que está sendo mostrada
let perguntaAtual = 0;

// Pontuação
let pontos = 0;


// Esconde todas as perguntas
for (let i = 0; i < perguntas.length; i++) {
    perguntas[i].style.display = "none";
    numeros[i].style.display = "none";
    barras[i].style.display = "none";
}


// Mostra a primeira pergunta
perguntas[0].style.display = "block";
numeros[0].style.display = "block";
barras[0].style.display = "block";


// Pega todos os botões
const botoes = document.querySelectorAll(".botao");


// Quando clicar no botão
for (let i = 0; i < botoes.length; i++) {

    botoes[i].addEventListener("click", function() {

        // Procura a resposta selecionada
        const selecionada = perguntas[perguntaAtual].querySelector(
            'input[type="radio"]:checked'
        );


        // Verifica se o usuário escolheu alguma resposta
        if (selecionada == null) {

            alert("Escolha uma alternativa!");

        } else {

            // Verifica se a resposta está correta
            if (selecionada.value == respostas[perguntaAtual]) {

                alert("Resposta correta!");
                pontos++;

            } else {

                alert(
                    "Resposta incorreta! A resposta correta é " +
                    respostas[perguntaAtual]
                );
            }


            // Desabilita as alternativas
            const alternativas = perguntas[perguntaAtual].querySelectorAll(
                'input[type="radio"]'
            );

            for (let j = 0; j < alternativas.length; j++) {
                alternativas[j].disabled = true;
            }


            // Muda para a próxima pergunta
            perguntaAtual++;


            if (perguntaAtual < perguntas.length) {

                // Esconde a pergunta anterior
                perguntas[perguntaAtual - 1].style.display = "none";
                numeros[perguntaAtual - 1].style.display = "none";
                barras[perguntaAtual - 1].style.display = "none";


                // Mostra a próxima pergunta
                perguntas[perguntaAtual].style.display = "block";
                numeros[perguntaAtual].style.display = "block";
                barras[perguntaAtual].style.display = "block";

            } else {

                // Mostra o resultado final
                alert(
                    "Quiz finalizado! Você acertou " +
                    pontos +
                    " de " +
                    perguntas.length +
                    " perguntas."
                );
            }
        }
    });
}
