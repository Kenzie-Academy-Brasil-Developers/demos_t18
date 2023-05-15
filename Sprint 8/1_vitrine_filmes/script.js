function createCardMovie(movie) {
  const liMovie = document.createElement("li");
  const imgMovie = document.createElement("img");
  const titleMovie = document.createElement("h2");
  const figureMovie = document.createElement("figure");

  imgMovie.src = movie.img;
  titleMovie.innerText = movie.titulo;
  figureMovie.classList.add("movie-image-container");

  liMovie.addEventListener("click", function () {
    detailUpdate(movie);
  });

  figureMovie.appendChild(imgMovie);
  liMovie.append(figureMovie, titleMovie);

  return liMovie;
}

function renderCards(moviesList) {
  const ulMovies = document.querySelector(".movies-list");

  for (let i = 0; i < moviesList.length; i++) {
    const movieCard = createCardMovie(moviesList[i]);
    ulMovies.append(movieCard);
  }
}
renderCards(filmes);

function detailUpdate(movie) {
  const asideMovie = document.querySelector(".movies-details");
  asideMovie.innerHTML = "";

  const imgDetail = document.createElement("img");
  const titleDetail = document.createElement("h2");
  const figureDetail = document.createElement("figure");
  const subTitleDetail = document.createElement("h3");
  const sinopseDetail = document.createElement("p");

  imgDetail.src = movie.img;
  titleDetail.innerText = movie.titulo;
  subTitleDetail.innerText = "Sinopse:";
  sinopseDetail.innerText = movie.sinopse;

  if (!movie.sinopse) {
    sinopseDetail.innerText = "Ops, sinopse não encontrada...";
  }
  // movie.sinopse
  //   ? (sinopseDetail.innerText = movie.sinopse)
  //   : (sinopseDetail.innerText = "Ops, sinopse não encontrada...");

  figureDetail.appendChild(imgDetail);
  asideMovie.append(titleDetail, figureDetail, subTitleDetail, sinopseDetail);
}
