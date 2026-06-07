//import { API_KEY } from "./config.js";

const API_KEY = "you key here";

const BASE_URL =
    "https://api.themoviedb.org/3/search/movie";

const IMAGE_URL =
    "https://image.tmdb.org/t/p/w500";

async function searchMovies(query) {

    const response = await fetch(
        `${BASE_URL}?api_key=${API_KEY}&query=${query}`
    );

    const data = await response.json();

    return data.results;


    searchBtn.addEventListener("click", async () => {

    const query = searchInput.value.trim();
    if (!query) return;

    showLoader();

    const movies = await searchMovies(query);

    hideLoader();

    displayMovies(movies);
});
}