// app.js

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const movieResults = document.getElementById("movieResults");

const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

const loader = document.getElementById("loader");

// ======================
// Search Movies
// ======================

searchBtn.addEventListener("click", async () => {

    const query = searchInput.value.trim();

    if (!query) {
        showToast("Please enter a movie name");
        return;
    }

    try {

        showLoader();

        const movies = await searchMovies(query);

        displayMovies(movies);

    } catch (error) {

        console.error("Movie search error:", error);

        movieResults.innerHTML = `
            <p class="empty-state">
                Unable to load movies. Please try again.
            </p>
        `;

    } finally {

        hideLoader();

    }
});

// Search on Enter key

searchInput.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {
        searchBtn.click();
    }

});

// ======================
// Modal Controls
// ======================

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});

// Close when clicking outside modal

modal.addEventListener("click", (e) => {

    if (e.target === modal) {
        modal.classList.add("hidden");
    }

});

// ======================
// Display Movies
// ======================

function displayMovies(movies) {

    movieResults.innerHTML = "";

    if (!movies || movies.length === 0) {

        movieResults.innerHTML = `
            <p class="empty-state">
                No movies found 😢
            </p>
        `;

        return;
    }

    movies.forEach(movie => {

        const card = document.createElement("div");

        card.classList.add("movie-card");

        const poster = movie.poster_path
            ? `${IMAGE_URL}${movie.poster_path}`
            : "https://via.placeholder.com/500x750?text=No+Image";

        card.innerHTML = `
            <img
                src="${poster}"
                alt="${movie.title}"
            >

            <div class="movie-info">

                <h3>${movie.title}</h3>

                <p>
                    ${
                        movie.release_date
                        ? movie.release_date.substring(0, 4)
                        : "N/A"
                    }
                </p>

                <button class="watchlist-btn">
                    Add to Watchlist
                </button>

            </div>
        `;

        // Open movie details

        card.addEventListener("click", () => {
            openModal(movie);
        });

        // Watchlist button

        const button =
            card.querySelector(".watchlist-btn");

        button.addEventListener("click", (e) => {

            e.stopPropagation();

            addToWatchlist(
                movie);

        });

        movieResults.appendChild(card);

    });

}

// ======================
// Movie Details Modal
// ======================

function openModal(movie) {

    const poster = movie.poster_path
        ? `${IMAGE_URL}${movie.poster_path}`
        : "https://via.placeholder.com/500x750?text=No+Image";

    modalBody.innerHTML = `
        <img
            src="${poster}"
            alt="${movie.title}"
            style="
                width:100%;
                border-radius:10px;
                margin-bottom:1rem;
            "
        >

        <h2>${movie.title}</h2>

        <p>
            <strong>Release Date:</strong>
            ${movie.release_date || "N/A"}
        </p>

        <p>
            <strong>Rating:</strong>
            ${movie.vote_average || "N/A"}
        </p>

        <p style="margin-top:1rem;">
            ${movie.overview || "No description available."}
        </p>
    `;

    modal.classList.remove("hidden");

}
// ======================
// Watchlist
// ======================

function addToWatchlist(movie) {

    let watchlist =
        JSON.parse(
            localStorage.getItem("watchlist")
        ) || [];

    const exists =
        watchlist.some(
            item => item.id === movie.id
        );

    if (exists) {

        showToast(
            "Movie already in watchlist"
        );

        return;
    }

    watchlist.push({
        id: movie.id,
        title: movie.title,
        poster: movie.poster_path
    });

    localStorage.setItem(
        "watchlist",
        JSON.stringify(watchlist)
    );

    showToast(
        `${movie.title} added to watchlist`
    );
}

// ======================
// Loader
// ======================

function showLoader() {

    loader.classList.remove("hidden");

}

function hideLoader() {

    loader.classList.add("hidden");

}

// ======================
// Toast Notification
// ======================

function showToast(message) {

    const toast =
        document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}