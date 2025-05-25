# 🗞️ Día 15 - App de Noticias con API

## 📋 Descripción

Este proyecto forma parte del 🚀 **Reto 60 Días de Código**, en el que desarrollo un proyecto diario durante 60 días.  
En el día 15, creé una aplicación que permite al usuario consultar noticias en tiempo real usando la API de NewsAPI.org.

La app ofrece titulares principales de España por defecto y también permite hacer búsquedas personalizadas por tema o palabra clave.

## 📰 Funcionalidades

- 🔍 Buscar noticias por palabra clave
- 🧠 Obtener titulares principales de España automáticamente
- 🕒 Ordenar resultados por fecha de publicación
- 🧾 Ver título, descripción, fuente y fecha
- 🌐 Abrir la noticia completa en una nueva pestaña
- 📷 Mostrar imagen destacada (o imagen por defecto si no hay)

## 🛠️ Tecnologías Usadas

- **HTML5** – Estructura del sitio
- **CSS3** – Diseño y estilos visuales
- **JavaScript (ES6)** – Lógica de búsqueda y renderizado dinámico
- **NewsAPI** – Fuente de datos en tiempo real

## 📁 Estructura del Proyecto

Dia-15-NewsApp/
├── index.html # Estructura del sitio
├── styles.css # Estilos personalizados
├── script.js # Lógica y llamadas a la API
├── README.md # Este documento


## 📸 Captura de Pantalla

*(Opcional: puedes agregar una imagen de la app funcionando o un GIF aquí)*

## 🚀 Cómo usar

- Clona este repositorio:
git clone https://github.com/Julia-SP/reto-60-dias-codigo.git


- Accede a la carpeta del día 15:


Abre el archivo `index.html` en tu navegador o usa un servidor local.

---

### 🔑 API Key

Este proyecto utiliza la API de NewsAPI.  
Ya incluye una clave para pruebas, pero puedes reemplazarla por la tuya en `script.js` si deseas evitar límites o usar tu propia cuenta:

const apiKey = "TU_API_KEY";


Crea una cuenta gratuita en [https://newsapi.org/](https://newsapi.org/) para obtener tu clave personal.

---

## 💡 Aprendizajes

- Cómo consumir datos de una API REST con `fetch`
- Validación de formularios y eventos como `submit`
- Manipulación del DOM para crear contenido dinámico
- Buenas prácticas al renderizar elementos condicionalmente
- Uso de *placeholders* cuando faltan datos

## ✅ Ideas para mejoras futuras

- Filtros por categoría o idioma
- Selección de país desde un dropdown
- Dark mode 🌙
- Guardar búsquedas recientes

---

📅 Este proyecto marca el cierre de la **Fase 1 (Días 1–15): Proyectos básicos con HTML, CSS y JavaScript**  
👩‍💻 Reto desarrollado por Julia Subiza – 2025

