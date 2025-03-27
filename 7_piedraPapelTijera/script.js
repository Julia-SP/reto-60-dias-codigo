let puntosUsuario = 0;
let puntosMaquina = 0;

let instrucciones = document.querySelector("#instrucciones");
let contenedorPuntosUsuario = document.querySelector("#puntos-usuario");
let contenedorPuntosMaquina = document.querySelector("#puntos-maquina");
let mensaje = document.querySelector("#mensaje");
let contenedorGanaPunto = document.querySelector("#gana-punto");
let elegiTuArma = document.querySelector("#elegir-arma");
let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionMaquina = document.querySelector("#eleccion-maquina");
let reiniciar = document.querySelector("#reiniciar");

let botonesArmas = document.querySelectorAll(".arma");
botonesArmas.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
});

function iniciarTurno(e) {
    let eleccionUsuario = e.currentTarget.id;
    let eleccionMaquina = Math.floor(Math.random() * 3);

    let opciones = ["piedra✊", "papel📄", "tijera✂️"];
    eleccionMaquina = opciones[eleccionMaquina];

    if (
        (eleccionUsuario === "piedra" && eleccionMaquina === "tijera✂️") ||
        (eleccionUsuario === "tijera" && eleccionMaquina === "papel📄") ||
        (eleccionUsuario === "papel" && eleccionMaquina === "piedra✊")
    ) {
        ganaUsuario();
    } else if (
        (eleccionMaquina === "piedra✊" && eleccionUsuario === "tijera") ||
        (eleccionMaquina === "tijera✂️" && eleccionUsuario === "papel") ||
        (eleccionMaquina === "papel📄" && eleccionUsuario === "piedra")
    ) {
        ganaPC();
    } else {
        empate();
    }

    mensaje.classList.remove("disabled");
    contenedorEleccionUsuario.innerText = e.currentTarget.innerText;
    contenedorEleccionMaquina.innerText = eleccionMaquina;

    if (puntosUsuario === 5 || puntosMaquina === 5) {
        instrucciones.innerText = puntosUsuario === 5 ? "🔥 ¡Ganaste el juego! 🔥" : "😭 ¡La máquina ha ganado! 😭";
        elegiTuArma.classList.add("disabled");
        reiniciar.classList.remove("disabled");
        reiniciar.addEventListener("click", reiniciarJuego);
    }
}

function ganaUsuario() {
    puntosUsuario++;
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorGanaPunto.innerText = "¡Ganaste un punto! 🔥";
}

function ganaPC() {
    puntosMaquina++;
    contenedorPuntosMaquina.innerText = puntosMaquina;
    contenedorGanaPunto.innerText = "¡La computadora ganó un punto! 😭";
}

function empate() {
    contenedorGanaPunto.innerText = "¡Empate! 😱";
}

function reiniciarJuego() {
    reiniciar.classList.add("disabled");
    elegiTuArma.classList.remove("disabled");
    mensaje.classList.add("disabled");
    puntosUsuario = 0;
    puntosMaquina = 0;
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorPuntosMaquina.innerText = puntosMaquina;
    instrucciones.innerText = "El primero en llegar a 5 puntos gana.";
}
