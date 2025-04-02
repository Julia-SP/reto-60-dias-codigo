// Seleccionamos botones y tarjetas y los guardamos en variables
const filterButtons = document.querySelectorAll(".filtros button");
const filterableCards = document.querySelectorAll(".filterable-card .card");

// Función para filtrar las tarjetas
const filterCards = e => {
    // Quitamos la clase 'active' del botón que estaba activo anteriormente
    document.querySelector(".active").classList.remove("active");
    
    // Añadimos la clase 'active' al botón que se ha clickado
    e.target.classList.add("active");

    // Recorremos todas las tarjetas
    filterableCards.forEach(card => {
        // Primero ocultamos todas las tarjetas
        card.classList.add("hide");

        // Mostramos solo las tarjetas que coinciden con el filtro seleccionado
        // O mostramos todas si se selecciona "Ver todo"
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "todo") {
            card.classList.remove("hide");  
        }
    });
};

// Añadimos el evento 'click' a cada botón
filterButtons.forEach(button => button.addEventListener("click", filterCards));