// Función para generar un color aleatorio en formato HEX
function getNewColor() {
    let symbols = '0123456789ABCDEF'; // Caracteres HEX
    let color = '#';

    // Generamos un color HEX de 6 caracteres
    for (let i = 0; i < 6; i++) {
        color += symbols[Math.floor(Math.random() * 16)];
    }

    // Muestra el código de color en el span
    document.getElementById("color-code").textContent = color;

    // Cambia el color del cuadro de vista previa
    document.getElementById("color-box").style.background = color;


    // Guarda los valores en diferentes formatos para copiar después
    document.getElementById("color-code").dataset.hex = color;
    document.getElementById("color-code").dataset.rgb = hexToRgb(color);
    document.getElementById("color-code").dataset.hsl = hexToHsl(color);
}

// Función para convertir HEX a RGB
function hexToRgb(hex) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
}

// Función para convertir HEX a HSL
function hexToHsl(hex) {
    let r = parseInt(hex.slice(1, 3), 16) / 255;
    let g = parseInt(hex.slice(3, 5), 16) / 255;
    let b = parseInt(hex.slice(5, 7), 16) / 255;

    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h = Math.round(h * 60);
        s = Math.round(s * 100);
        l = Math.round(l * 100);
    }

    return `hsl(${h}, ${s}%, ${l}%)`;
}

// Función para copiar el código de color API
/*La API navigator.clipboard es una API web moderna que permite copiar texto al portapapeles del sistema. 
En este caso, se usa el método writeText() para copiar el código de color en el formato seleccionado (HEX, RGB o HSL).
Las características principales de esta implementación son:

Usa navigator.clipboard.writeText() para copiar texto
Es asíncrono (usa una promesa con .then())
Muestra una alerta después de copiar el texto
Obtiene el texto a copiar desde los atributos de datos (dataset) del elemento

La API Clipboard proporciona una forma sencilla de interactuar con el portapapeles del sistema de manera segura y controlada.*/ 
function copyToClipboard(format) {
    let colorCode = document.getElementById("color-code").dataset[format];
    navigator.clipboard.writeText(colorCode).then(() => {
        alert(`Copiado: ${colorCode}`);
    });
}

