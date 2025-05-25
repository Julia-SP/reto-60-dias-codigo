
# 🎬 Día 14 - El Videoclub de Paco 🎞️


## 📋 Descripción
El Videoclub de Paco es una aplicación web que permite buscar información de películas utilizando la OMDb API. Este proyecto fue desarrollado como parte del 🚀 Reto 60 Días de Código con el objetivo de practicar el consumo de APIs y la manipulación dinámica del DOM en JavaScript.

Puedes buscar cualquier película por nombre y recibir información como el póster, sinopsis, género, director, reparto y calificación en IMDb.

## 🎥 Funcionalidades
🔍 Búsqueda por nombre de película

🧾 Resultados detallados: título, año, género, director, actores, sinopsis y rating

🖼️ Póster dinámico con imagen por defecto si no está disponible

💬 Mensajes de error personalizados si no se encuentra la película

## 🛠️ Tecnologías Usadas
HTML5 – Estructura de la app

CSS3 – Estilos visuales

JavaScript (ES6) – Lógica y renderizado dinámico

OMDb API – Fuente de datos de películas

## 📁 Estructura del Proyecto

Dia-14-Videoclub/
├── index.html         # Estructura principal
├── styles.css         # Estilos personalizados
├── script.js         # Lógica JS y consumo de API
├── README.md          # Este archivo

## 🚀 Cómo usar
- Clona este repositorio:
git clone https://github.com/Julia-SP/reto-60-dias-codigo.gitNavega a la carpeta del reto 14:

- cd reto-60-dias-codigo/Dia-14-Videoclub
Abre el archivo index.html en tu navegador o usa un servidor local.

## 🔑 API Key
Este proyecto utiliza la API pública de OMDb. Incluye una clave de ejemplo (a05b484c), pero puedes registrarte gratuitamente en omdbapi.com y sustituirla en script.js:

const apiKey = "TU_API_KEY";

## 💡 Aprendizajes

- Consumo de API externa con fetch()
- Validación de formularios HTML y JS
- Estructuración de tarjetas de contenido con HTML dinámico
- Manejo de errores y UX básico

## 🌟 Ideas de mejora

- Búsqueda por título parcial o lista de resultados

- Favoritos almacenados en Local Storage

- Mostrar trailers desde YouTube

- Mejora de diseño con framework como Bootstrap o Tailwind

📆 Proyecto del día 14 de 60
👩‍💻 Desarrollado por Julia Subiza
