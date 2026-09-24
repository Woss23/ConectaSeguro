const botao1 = document.getElementById("header-cenario-1");
const botao2 = document.getElementById("header-cenario-2");
const botao3 = document.getElementById("header-cenario-3");
const botao4 = document.getElementById("header-cenario-4");



const cenario1 = document.getElementById("cenario-1");
const cenario2 = document.getElementById("cenario-2");
const cenario3 = document.getElementById("cenario-3");
const cenario4 = document.getElementById("cenario-4");



cenario1.querySelector("ol").style.display = "none";
cenario2.querySelector("ol").style.display = "none";
cenario3.querySelector("ol").style.display = "none";
cenario4.querySelector("ol").style.display = "none";



botao1.addEventListener("click", function() {

    const passos = cenario1.querySelector("ol");

    if (passos.style.display == "none") {
        passos.style.display = "block";
    } else {
        passos.style.display = "none";
    }

});



botao2.addEventListener("click", function() {

    const passos = cenario2.querySelector("ol");

    if (passos.style.display == "none") {
        passos.style.display = "block";
    } else {
        passos.style.display = "none";
    }

});



botao3.addEventListener("click", function() {

    const passos = cenario3.querySelector("ol");

    if (passos.style.display == "none") {
        passos.style.display = "block";
    } else {
        passos.style.display = "none";
    }

});



botao4.addEventListener("click", function() {

    const passos = cenario4.querySelector("ol");

    if (passos.style.display == "none") {
        passos.style.display = "block";
    } else {
        passos.style.display = "none";
    }

});


const botaoGolpes = document.getElementById("botao-link");

botaoGolpes.addEventListener("click", function() {
    window.location.href = "pagina1.html";
});
