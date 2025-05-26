const apiKey = "tu_key"; 

const form = document.getElementById("movie-form");
const input = document.getElementById("movie-input");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const movieName = input.value.trim();
  if (!movieName) {
    result.innerHTML = `<h3 class="msg">Por favor, introduce el nombre de una película.</h3>`;
    return;
  }
  fetchMovie(movieName);
});

function fetchMovie(title) {
  result.innerHTML = `<h3 class="msg">Buscando...</h3>`;
  fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}&plot=short`)
    .then(resp => resp.json())
    .then(data => {
      if (data.Response === "True") {
        result.innerHTML = `
          <div class="movie-card">
            <img src="${data.Poster !== "N/A" ? data.Poster : "https://via.placeholder.com/120x180?text=No+Image"}" alt="Poster de ${data.Title}">
            <div class="movie-details">
              <h2>${data.Title} (${data.Year})</h2>
              <p><strong>Género:</strong> ${data.Genre}</p>
              <p><strong>Director:</strong> ${data.Director}</p>
              <p><strong>Actores:</strong> ${data.Actors}</p>
              <p><strong>IMDb:</strong> ⭐ ${data.imdbRating}</p>
              <p><strong>Sinopsis:</strong> ${data.Plot}</p>
            </div>
          </div>
        `;
      } else {
        result.innerHTML = `<h3 class="msg">${data.Error}</h3>`;
      }
    })
    .catch(() => {
      result.innerHTML = `<h3 class="msg">Ha ocurrido un error al buscar la película.</h3>`;
    });
}
