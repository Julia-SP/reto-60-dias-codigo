# ☁️ Día 13 - Clima App

## 📋 Descripción
Este proyecto forma parte del 🚀 **Reto 60 Días de Código**, en el cual desarrollo un nuevo proyecto durante 60 días seguidos para afianzar mis conocimientos.  
En el día 13, creé una aplicación del clima que permite al usuario buscar cualquier ciudad del mundo y consultar en tiempo real los datos meteorológicos utilizando la API de OpenWeatherMap.

## 🌤️ Funcionalidades

- Búsqueda por nombre de ciudad
- Visualización del clima actual:
  - Temperatura (°C)
  - Descripción del clima
  - Humedad relativa
  - Velocidad del viento
  - Sensación térmica
  - Icono representativo del clima
- Integración con la API de OpenWeatherMap
- Manejo de errores si la ciudad no se encuentra
- Input accesible mediante botón o tecla "Enter"
- Diseño responsive y limpio

## 🛠️ Tecnologías Usadas

- **HTML5** – Estructura de la página
- **CSS3** – Estilos personalizados y diseño responsivo
- **JavaScript** – Lógica de la aplicación e interacción con la API
- **OpenWeatherMap API** – Fuente de datos climáticos

## 📁 Estructura del Proyecto

Dia-13-ClimaApp/
├── index.html # HTML principal
├── styles.css # Estilos visuales
├── script.js # Lógica y conexión con la API
├── README.md # Documentación del reto


## 🚀 Cómo usar

1. Clona este repositorio:
    ```
    git clone https://github.com/Julia-SP/reto-60-dias-codigo.git
    ```
2. Dirígete al proyecto del día 13:
    ```
    cd reto-60-dias-codigo/Dia-13-ClimaApp
    ```
3. Abre el archivo `index.html` en tu navegador o usa un servidor local.

---

### 🔑 API Key

Este proyecto utiliza la API de OpenWeatherMap.  
Ya viene con una clave incluida para pruebas, pero puedes reemplazarla por la tuya en `script.js` si deseas usar la tuya personal:

Puedes registrarte gratuitamente en [https://openweathermap.org/api](https://openweathermap.org/api)

const API_KEY = 'TU_API_KEY_AQUI';

## 💡 Aprendizajes

- Cómo consumir APIs REST con `fetch()`
- Manejo de errores y validación de inputs
- Conversión de unidades (viento en km/h)
- Manipulación del DOM para mostrar información dinámica
- Uso de eventos como `click` y `keypress`

## ✅ Ideas para mejoras futuras

- Mostrar pronóstico por horas o días
- Geolocalización automática del usuario
- Cambiar el fondo según el clima
- Guardar ciudades favoritas en Local Storage



📅 Este proyecto corresponde a la **Fase 1 (Días 1–15): Proyectos básicos con HTML, CSS y JavaScript**  
👩‍💻 Reto desarrollado por Julia Subiza – 2025


