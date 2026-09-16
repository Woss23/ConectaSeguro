let senha = document.getElementById("senha");
let resultado = document.getElementById("resultado");

senha.addEventListener("input", function() {

    let texto = senha.value;

    let temMaiuscula = /[A-Z]/.test(texto);
    let temMinuscula = /[a-z]/.test(texto);
    let temNumero = /[0-9]/.test(texto);
    let temSimbolo = /[^A-Za-z0-9]/.test(texto);

    let temNome = texto.toLowerCase().includes("maria");
    let temAno = texto.includes("2024") || texto.includes("2025") || texto.includes("2026");

    let numeroSequencial = texto.includes("123") || texto.includes("1234");

    if (texto.length < 8 || (temNome && numeroSequencial)) {

        resultado.innerHTML = "Muito fraca";
        resultado.style.color = "red";
    } else if (temNome || temAno) {

        resultado.innerHTML = "Média";
        resultado.style.color =  "yellow"
    } else if (
        texto.length >= 12 &&
        temMaiuscula &&
        temMinuscula &&
        temNumero &&
        temSimbolo
    ) {

        resultado.innerHTML = "Muito forte";
        resultado.style.color = "green";
    } else {

        resultado.innerHTML = "Média";
    }

});