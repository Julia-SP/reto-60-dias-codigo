# 💱 Conversor de Divisas | Reto 4/60

![Badge HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Badge CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Badge JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📋 Descripción del Proyecto

Este es el cuarto proyecto del **Reto de 60 Días de Código**. Consiste en un conversor de divisas que permite convertir valores entre diferentes monedas internacionales utilizando tasas de cambio en tiempo real mediante una API externa.

## 🛠️ Funcionalidades

- **Conversión en tiempo real**: Obtiene tasas de cambio actualizadas desde una API externa
- **Soporte para múltiples monedas**: Incluye más de 150 divisas internacionales
- **Banderas interactivas**: Muestra la bandera correspondiente a cada moneda seleccionada
- **Intercambio rápido**: Botón para invertir las monedas de origen y destino
- **Entrada flexible**: Permite ingresar cualquier cantidad para convertir
- **Validación de entrada**: Establece valores predeterminados para evitar errores

## 💻 Tecnologías Utilizadas

- **HTML5**: Estructura semántica para el conversor
- **CSS3**: Estilos modernos con gradientes y efectos visuales
- **JavaScript**: Lógica de conversión y gestión de la API
- **API Externa**: Utilización de la API de Exchange Rate (open.er-api.com)
- **Font Awesome**: Iconos para mejorar la interfaz
- **Google Fonts**: Tipografía Poppins para una estética moderna

## 🎨 Características de Diseño

- Interfaz limpia y moderna con esquema de colores degradado
- Componentes interactivos con efectos hover
- Visualización dinámica de banderas nacionales según la moneda seleccionada
- Iconos intuitivos para facilitar la navegación
- Diseño responsivo para diferentes dispositivos
- Feedback visual durante el proceso de conversión

## 📚 Aprendizajes

Durante el desarrollo de este proyecto, pude aplicar y reforzar los siguientes conceptos:

- Consumo de APIs externas mediante fetch
- Manejo de promesas y respuestas asíncronas
- Manipulación dinámica del DOM basada en selecciones del usuario
- Implementación de selectores personalizados con imágenes
- Gestión de eventos para actualizar la interfaz en tiempo real
- Organización de un objeto de datos complejo (códigos de países y monedas)

## 📝 Desafíos y Soluciones

- **Desafío**: Mapeo correcto entre códigos de moneda y códigos de país para las banderas
  **Solución**: Creación de un objeto completo que relaciona cada moneda con su país correspondiente

- **Desafío**: Actualización en tiempo real de las banderas al cambiar la selección
  **Solución**: Implementación de event listeners para detectar cambios y actualizar las imágenes

- **Desafío**: Manejo de errores durante la comunicación con la API
  **Solución**: Estructura try-catch y mensajes informativos para el usuario

## 🔍 Cómo Utilizar

1. Ingresa la cantidad que deseas convertir en el campo "Introduce una cifra"
2. Selecciona la moneda de origen en el desplegable "De"
3. Selecciona la moneda de destino en el desplegable "Convertir a"
4. Haz clic en "Ver conversión" para obtener el resultado
5. Utiliza el icono de intercambio para invertir rápidamente las monedas seleccionadas

## 📈 Posibles Mejoras Futuras

- Añadir conversión múltiple para ver equivalencias en varias monedas simultáneamente
- Implementar un selector de favoritos para acceso rápido a monedas frecuentes
- Añadir opciones para compartir resultados

## 🔗 Enlaces Relacionados

- [Reto 60 Días de Código](https://github.com/Julia-SP/reto-60-dias-codigo)
- [LinkedIn](https://www.linkedin.com/in/juliasubiza/)
- [GitHub](https://github.com/Julia-SP)
- [Exchange Rate API](https://open.er-api.com)

---

_Proyecto creado como parte del Reto 60 Días de Código por [Julia Subiza](https://github.com/Julia-SP) - 2025_