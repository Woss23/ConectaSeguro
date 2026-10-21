
const perguntas = document.querySelectorAll(".caixa-quiz");


const numeros = document.querySelectorAll(".pergunta-numero");


const barras = document.querySelectorAll(".barra");


const respostas = ["D", "B", "B", "C"];


let perguntaAtual = 0;


let pontos = 0;



for (let i = 0; i < perguntas.length; i++) {
    perguntas[i].style.display = "none";
    numeros[i].style.display = "none";
    barras[i].style.display = "none";
}



perguntas[0].style.display = "block";
numeros[0].style.display = "block";
barras[0].style.display = "block";



const botoes = document.querySelectorAll(".botao");



for (let i = 0; i < botoes.length; i++) {

    botoes[i].addEventListener("click", function() {

       
        const selecionada = perguntas[perguntaAtual].querySelector(
            'input[type="radio"]:checked'
        );


        
        if (selecionada == null) {

            alert("Escolha uma alternativa!");

        } else {

            
            if (selecionada.value == respostas[perguntaAtual]) {

                alert("Resposta correta!");
                pontos++;

            } else {

                alert(
                    "Resposta incorreta! A resposta correta é " +
                    respostas[perguntaAtual]
                );
            }


            
            const alternativas = perguntas[perguntaAtual].querySelectorAll(
                'input[type="radio"]'
            );

            for (let j = 0; j < alternativas.length; j++) {
                alternativas[j].disabled = true;
            }


            
            perguntaAtual++;


            if (perguntaAtual < perguntas.length) {

                
                perguntas[perguntaAtual - 1].style.display = "none";
                numeros[perguntaAtual - 1].style.display = "none";
                barras[perguntaAtual - 1].style.display = "none";


                
                perguntas[perguntaAtual].style.display = "block";
                numeros[perguntaAtual].style.display = "block";
                barras[perguntaAtual].style.display = "block";

            } else {

                
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
