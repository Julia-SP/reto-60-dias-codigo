// Selecciona el elemento con la clase "pantalla" (donde se mostrarán los números y resultados)
const pantalla = document.querySelector(".pantalla");

// Selecciona todos los elementos con la clase "btn" (todos los botones de la calculadora)
const botones = document.querySelectorAll(".btn");

// Recorre cada botón para añadirle un evento de clic
botones.forEach(boton => {
    // Añade un evento de clic a cada botón
    boton.addEventListener("click", () => {
        // Guarda el texto del botón pulsado (número u operador)
        const botonApretado = boton.textContent;
    
        // BOTÓN C (CLEAR): Resetea la calculadora
        if (boton.id === "C") {
            // Si se pulsa el botón C, limpia la pantalla y muestra "0"
            pantalla.textContent = "0";
            return; // Sale de la función para no ejecutar el resto del código
        }
        
        // BOTÓN BORRAR: Elimina el último carácter
        if (boton.id === "borrar") {
            // Si solo queda un dígito o hay un error en pantalla
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error") {
                // Resetea a "0"
                pantalla.textContent = "0";
            } else {
                // Elimina el último carácter usando slice
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            } 
            return; // Sale de la función
        }

        // BOTÓN IGUAL: Calcula el resultado
        if (boton.id === "igual") {
            try {
                // Usa la función eval de JavaScript para calcular la expresión matemática
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                // Si hay un error en la expresión (ej: división por cero, sintaxis incorrecta)
                pantalla.textContent = "Error!";
            }
            return; // Sale de la función
        }

        // COMPORTAMIENTO PARA NÚMEROS Y OPERADORES
        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            // Si la pantalla muestra "0" o "Error!", reemplaza con el nuevo valor
            pantalla.textContent = botonApretado;
        } else {
            // En caso contrario, añade el nuevo valor a lo que ya hay en pantalla
            pantalla.textContent += botonApretado;
        }
    });
});