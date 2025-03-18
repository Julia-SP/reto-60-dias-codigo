// Selección de elementos del DOM
const desplegable = document.querySelectorAll(".desplegable select"); // Selecciona ambos selectores de moneda
const fromCurrency = document.querySelector(".from select");          // Selector de moneda origen
const toCurrency = document.querySelector(".to select");              // Selector de moneda destino
const getButton = document.querySelector("form button");              // Botón para ejecutar la conversión
const exchangerateTxt = document.querySelector(".exchange-rate");     // Elemento donde se mostrará el resultado

// Objeto que contiene códigos de moneda y sus correspondientes códigos de país para las banderas
let codigoPais = {
    "AED": "AE",
    "AFN": "AF",
    "XCD": "AG",
    "ALL": "AL",
    "AMD": "AM",
    "ANG": "AN",
    "AOA": "AO",
    "AQD": "AQ",
    "ARS": "AR",
    "AUD": "AU",
    "AZN": "AZ",
    "BAM": "BA",
    "BBD": "BB",
    "BDT": "BD",
    "XOF": "BE",
    "BGN": "BG",
    "BHD": "BH",
    "BIF": "BI",
    "BMD": "BM",
    "BND": "BN",
    "BOB": "BO",
    "BRL": "BR",
    "BSD": "BS",
    "BTN": "BT",
    "BWP": "BW",
    "BYN": "BY",
    "BZD": "BZ",
    "CAD": "CA",
    "CDF": "CD",
    "XAF": "CF",
    "CHF": "CH",
    "CLP": "CL",
    "CNY": "CN",
    "COP": "CO",
    "CRC": "CR",
    "CUP": "CU",
    "CVE": "CV",
    "CZK": "CZ",
    "DJF": "DJ",
    "DKK": "DK",
    "DOP": "DO",
    "DZD": "DZ",
    "EGP": "EG",
    "ERN": "ER",
    "ETB": "ET",
    "EUR": "EU",
    "FJD": "FJ",
    "FKP": "FK",
    "GBP": "GB",
    "GEL": "GE",
    "GHS": "GH",
    "GIP": "GI",
    "GMD": "GM",
    "GNF": "GN",
    "GTQ": "GT",
    "GYD": "GY",
    "HKD": "HK",
    "HNL": "HN",
    "HRK": "HR",
    "HTG": "HT",
    "HUF": "HU",
    "IDR": "ID",
    "ILS": "IL",
    "INR": "IN",
    "IQD": "IQ",
    "IRR": "IR",
    "ISK": "IS",
    "JMD": "JM",
    "JOD": "JO",
    "JPY": "JP",
    "KES": "KE",
    "KGS": "KG",
    "KHR": "KH",
    "KMF": "KM",
    "KPW": "KP",
    "KRW": "KR",
    "KWD": "KW",
    "KYD": "KY",
    "KZT": "KZ",
    "LAK": "LA",
    "LBP": "LB",
    "LKR": "LK",
    "LRD": "LR",
    "LSL": "LS",
    "LYD": "LY",
    "MAD": "MA",
    "MDL": "MD",
    "MGA": "MG",
    "MKD": "MK",
    "MMK": "MM",
    "MNT": "MN",
    "MOP": "MO",
    "MRO": "MR",
    "MUR": "MU",
    "MVR": "MV",
    "MWK": "MW",
    "MXN": "MX",
    "MYR": "MY",
    "MZN": "MZ",
    "NAD": "NA",
    "NGN": "NG",
    "NIO": "NI",
    "NOK": "NO",
    "NPR": "NP",
    "NZD": "NZ",
    "OMR": "OM",
    "PAB": "PA",
    "PEN": "PE",
    "PGK": "PG",
    "PHP": "PH",
    "PKR": "PK",
    "PLN": "PL",
    "PYG": "PY",
    "QAR": "QA",
    "RON": "RO",
    "RSD": "RS",
    "RUB": "RU",
    "RWF": "RW",
    "SAR": "SA",
    "SBD": "SB",
    "SCR": "SC",
    "SDG": "SD",
    "SEK": "SE",
    "SGD": "SG",
    "SHP": "SH",
    "SLL": "SL",
    "SOS": "SO",
    "SRD": "SR",
    "SSP": "SS",
    "STD": "ST",
    "SYP": "SY",
    "SZL": "SZ",
    "THB": "TH",
    "TJS": "TJ",
    "TMT": "TM",
    "TND": "TN",
    "TOP": "TO",
    "TRY": "TR",
    "TTD": "TT",
    "TWD": "TW",
    "TZS": "TZ",
    "UAH": "UA",
    "UGX": "UG",
    "USD": "US",
    "UYU": "UY",
    "UZS": "UZ",
    "VEF": "VE",
    "VND": "VN",
    "VUV": "VU",
    "WST": "WS",
    "XCD": "XC",
    "XOF": "XO",
    "XPF": "XP",
    "YER": "YE",
    "ZAR": "ZA",
    "ZMW": "ZM",
    "ZWL": "ZW"
};

// Recorre cada selector de moneda para poblar las opciones
for(let i = 0; i < desplegable.length; i++) {
    // Para cada código de moneda en nuestro objeto, crea una opción en el selector
    for(let codigoConversion in codigoPais) {
        let selected;
        // Establece EUR como predeterminado para el selector de origen (índice 0)
        if(i == 0){
            selected = codigoConversion == "EUR" ? "selected" : "";
        } 
        // Establece USD como predeterminado para el selector de destino (índice 1)
        else if (i == 1){
            selected = codigoConversion == "USD" ? "selected" : "";
        }

        // Crea la etiqueta de la opción con el valor de la moneda
        let optionTag = `<option value="${codigoConversion}" ${selected}>${codigoConversion}</option>`;
        // Añade la opción al selector correspondiente
        desplegable[i].insertAdjacentHTML("beforeend", optionTag);
    }
    
    // Añade un evento para cambiar la bandera cuando se selecciona una moneda diferente
    desplegable[i].addEventListener("change", e => {
        loadFlag(e.target);
    });
}

// Función para cargar la bandera correspondiente a la moneda seleccionada
function loadFlag(element){
    for(let code in codigoPais){
        if (code == element.value){
            // Encuentra la imagen dentro del contenedor del selector y actualiza su src
            let imgTag = element.parentElement.querySelector("img");
            imgTag.src = `https://flagsapi.com/${codigoPais[code]}/flat/64.png`;
        }
    }
}

// Ejecuta la conversión al cargar la página
window.addEventListener("load", () => {
    getExchangeRate();
});

// Ejecuta la conversión cuando se hace clic en el botón
getButton.addEventListener("click", e => {
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario
    getExchangeRate();
});

// Añade funcionalidad para intercambiar las monedas al hacer clic en el icono
const exchangeIcon = document.querySelector(".desplegable .icon");
exchangeIcon.addEventListener("click", () => {
    // Intercambia los valores de los selectores
    let tempCode = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = tempCode;
    // Actualiza las banderas
    loadFlag(fromCurrency);
    loadFlag(toCurrency);
    // Ejecuta la conversión con los nuevos valores
    getExchangeRate();
});

// Función principal para obtener y mostrar la tasa de cambio
function getExchangeRate(){
    // Obtiene el valor de la cantidad a convertir
    const cantidad = document.querySelector(".cantidad input");
    let cantidadVal = cantidad.value;
    
    // Si no hay valor o es cero, establece el valor por defecto a 1
    if(cantidadVal == "" || cantidadVal == "0"){
        cantidad.value = "1";
        cantidadVal = 1;
    }
    
    // Muestra un mensaje mientras se obtiene la tasa de cambio
    exchangerateTxt.innerText = "Obteniendo tasa de conversión...";
    
    // Construye la URL para la API con la moneda de origen
    let url = `https://open.er-api.com/v6/latest/${fromCurrency.value}`;
    
    // Realiza la petición a la API
    fetch(url)
        .then(response => response.json()) // Convierte la respuesta a JSON
        .then(result => {
            // Obtiene la tasa de cambio para la moneda de destino
            let exchangeRate = result.rates[toCurrency.value];
            // Calcula el valor convertido y lo redondea a 2 decimales
            let totalExchangeRate = (cantidadVal * exchangeRate).toFixed(2);
            // Muestra el resultado de la conversión
            exchangerateTxt.innerText = `${cantidadVal} ${fromCurrency.value} = ${totalExchangeRate} ${toCurrency.value}`;
        })
        .catch(error => {
            // Maneja cualquier error durante la obtención de tasas
            exchangerateTxt.innerText = "Error al obtener las tasas de cambio";
            console.error("Error:", error);
        });
}