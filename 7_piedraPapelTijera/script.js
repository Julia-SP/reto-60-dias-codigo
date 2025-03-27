// Variables para almacenar los puntos de cada jugador
let puntosUsuario = 0;
let puntosMaquina = 0;

// Selección de elementos del DOM
let instrucciones = document.querySelector("#instrucciones"); // Contenedor de instrucciones del juego
let contenedorPuntosUsuario = document.querySelector("#puntos-usuario"); // Muestra los puntos del usuario
let contenedorPuntosMaquina = document.querySelector("#puntos-maquina"); // Muestra los puntos de la máquina
let mensaje = document.querySelector("#mensaje"); // Contenedor donde se muestra el resultado de cada ronda
let contenedorGanaPunto = document.querySelector("#gana-punto"); // Muestra quién ganó la ronda
let elegiTuArma = document.querySelector("#elegir-arma"); // Contenedor de las opciones de armas
let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario"); // Muestra la elección del usuario
let contenedorEleccionMaquina = document.querySelector("#eleccion-maquina"); // Muestra la elección de la máquina
let reiniciar = document.querySelector("#reiniciar"); // Botón para reiniciar el juego

// Seleccionamos todos los botones de armas y les añadimos un evento de clic
let botonesArmas = document.querySelectorAll(".arma");
botonesArmas.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
});

// Función que inicia un turno cuando el usuario hace clic en un arma
function iniciarTurno(e) {
    // Capturamos la elección del usuario según el botón que hizo clic
    let eleccionUsuario = e.currentTarget.id;

    // Generamos una elección aleatoria para la máquina
    let eleccionMaquina = Math.floor(Math.random() * 3); // Números entre 0 y 2

    // Array con las opciones de juego, incluyendo el emoji para mostrar en pantalla
    let opciones = ["piedra✊", "papel📄", "tijera✂️"];
    eleccionMaquina = opciones[eleccionMaquina]; // Asignamos la opción correspondiente al número generado

    // Lógica para determinar el ganador
    if (
        (eleccionUsuario === "piedra" && eleccionMaquina === "tijera✂️") ||
        (eleccionUsuario === "tijera" && eleccionMaquina === "papel📄") ||
        (eleccionUsuario === "papel" && eleccionMaquina === "piedra✊")
    ) {
        ganaUsuario(); // Llamamos a la función que suma puntos al usuario
    } else if (
        (eleccionMaquina === "piedra✊" && eleccionUsuario === "tijera") ||
        (eleccionMaquina === "tijera✂️" && eleccionUsuario === "papel") ||
        (eleccionMaquina === "papel📄" && eleccionUsuario === "piedra")
    ) {
        ganaPC(); // Llamamos a la función que suma puntos a la máquina
    } else {
        empate(); // Si no gana nadie, hay empate
    }

    // Mostramos el mensaje con el resultado de la ronda
    mensaje.classList.remove("disabled");
    contenedorEleccionUsuario.innerText = e.currentTarget.innerText; // Mostramos la elección del usuario
    contenedorEleccionMaquina.innerText = eleccionMaquina; // Mostramos la elección de la máquina

    // Si alguno de los dos jugadores llega a 5 puntos, termina el juego
    if (puntosUsuario === 5 || puntosMaquina === 5) {
        // Mostramos un mensaje de victoria o derrota según quién llegó a 5 puntos
        instrucciones.innerText = puntosUsuario === 5 ? "🔥 ¡Ganaste el juego! 🔥" : "😭 ¡La máquina ha ganado! 😭";
        
        // Ocultamos las opciones de juego y mostramos el botón de reinicio
        elegiTuArma.classList.add("disabled");
        reiniciar.classList.remove("disabled");

        // Agregamos el evento al botón de reinicio para volver a empezar
        reiniciar.addEventListener("click", reiniciarJuego);
    }
}

// Función que actualiza los puntos del usuario y muestra el mensaje de victoria en la ronda
function ganaUsuario() {
    puntosUsuario++; // Suma 1 punto al usuario
    contenedorPuntosUsuario.innerText = puntosUsuario; // Actualiza la interfaz con los puntos
    contenedorGanaPunto.innerText = "¡Ganaste un punto! 🔥"; // Mensaje de victoria
}

// Función que actualiza los puntos de la máquina y muestra el mensaje de victoria en la ronda
function ganaPC() {
    puntosMaquina++; // Suma 1 punto a la máquina
    contenedorPuntosMaquina.innerText = puntosMaquina; // Actualiza la interfaz con los puntos
    contenedorGanaPunto.innerText = "¡La máquina ganó un punto! 😭"; // Mensaje de derrota
}

// Función que muestra un mensaje de empate
function empate() {
    contenedorGanaPunto.innerText = "¡Empate! 😱"; // Mensaje de empate
}

// Función que reinicia el juego cuando el usuario hace clic en "Volver a jugar"
function reiniciarJuego() {
    reiniciar.classList.add("disabled"); // Oculta el botón de reinicio
    elegiTuArma.classList.remove("disabled"); // Muestra las opciones de armas nuevamente
    mensaje.classList.add("disabled"); // Oculta el mensaje de resultado
    puntosUsuario = 0; // Reinicia los puntos del usuario
    puntosMaquina = 0; // Reinicia los puntos de la máquina
    contenedorPuntosUsuario.innerText = puntosUsuario; // Resetea la visualización de los puntos
    contenedorPuntosMaquina.innerText = puntosMaquina; // Resetea la visualización de los puntos
    instrucciones.innerText = "La primera en llegar a 5 puntos gana."; // Mensaje de inicio
}
