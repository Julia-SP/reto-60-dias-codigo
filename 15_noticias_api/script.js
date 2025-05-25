const apiKey = "4a20ae07808943f096f3eb51624f55c0"; 

const newsList = document.getElementById('news-list');
const form = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

// Cargar titulares principales al iniciar
window.addEventListener('DOMContentLoaded', () => {
  fetchNews();
});

// Buscar por palabra clave
form.addEventListener('submit', e => {
  e.preventDefault();
  const query = searchInput.value.trim();
  if (query) {
    fetchNews(query);
  } else {
    fetchNews();
  }
});

function fetchNews(query = "") {
  newsList.innerHTML = "<p>Cargando noticias...</p>";

  let url = "";
  if (query) {
    url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=es&sortBy=publishedAt&pageSize=10&apiKey=${apiKey}`;
  } else {
    url = `https://newsapi.org/v2/top-headlines?country=es&pageSize=10&apiKey=${apiKey}`;
  }

  fetch(url)
    .then(resp => resp.json())
    .then(data => {
      if (data.status === "ok" && data.articles.length > 0) {
        renderNews(data.articles);
      } else {
        newsList.innerHTML = "<p>No se encontraron noticias, sorry</p>";
      }
    })
    .catch(() => {
      newsList.innerHTML = "<p>Error al cargar las noticias.</p>";
    });
}

function renderNews(articles) {
  newsList.innerHTML = "";
  articles.forEach(article => {
    const card = document.createElement('div');
    card.className = "news-card";

    const img = document.createElement('img');
    img.src = article.urlToImage || "https://via.placeholder.com/120x80?text=Sin+Imagen";
    img.alt = "Imagen noticia";

    const content = document.createElement('div');
    content.className = "news-content";

    const title = document.createElement('h2');
    title.textContent = article.title;
    title.onclick = () => window.open(article.url, "_blank");
    title.style.cursor = "pointer";

    const desc = document.createElement('p');
    desc.textContent = article.description || "";

    const info = document.createElement('span');
    const date = new Date(article.publishedAt).toLocaleString("es-ES");
    info.textContent = `${article.source.name} · ${date}`;

    content.appendChild(title);
    content.appendChild(desc);
    content.appendChild(info);

    card.appendChild(img);
    card.appendChild(content);

    newsList.appendChild(card);
  });
}
