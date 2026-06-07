// watchlist.js

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const container =
    document.getElementById("watchlistContainer");

const pickedMovie =
    document.getElementById("pickedMovie");

const pickMovieBtn =
    document.getElementById("pickMovieBtn");

// ======================
// Load Watchlist
// ======================

loadWatchlist();

function loadWatchlist() {

    const watchlist =
        JSON.parse(
            localStorage.getItem("watchlist")
        ) || [];

    container.innerHTML = "";

    if (watchlist.length === 0) {

        container.innerHTML = `
            <div class="empty-state">
                <h2>🍿 Your watchlist is empty</h2>
                <p>
                    Search for movies and add them
                    to your watchlist.
                </p>
            </div>
        `;

        return;
    }

    watchlist.forEach(movie => {

        const poster = movie.poster
            ? `${IMAGE_URL}${movie.poster}`
         : "https://via.placeholder.com/500x750?text=No+Image";

        const card = document.createElement("div");
        card.classList.add("movie-card");

        card.innerHTML = `
         <img
             src="${poster}"
             alt="${movie.title}"
            >

            <div class="movie-info">

             <h3>${movie.title}</h3>

             <button class="remove-btn">
                  Remove
             </button>

            </div>
        `;

        const removeBtn =
            card.querySelector(".remove-btn");

        removeBtn.addEventListener("click", () => {

            removeMovie(movie.id);

        });

        container.appendChild(card);
    });
}

// ======================
// Remove Movie
// ======================

function removeMovie(id) {

    let watchlist =
        JSON.parse(
            localStorage.getItem("watchlist")
        ) || [];

    const movie =
        watchlist.find(m => m.id === id);

    watchlist =
        watchlist.filter(
            movie => movie.id !== id
        );

    localStorage.setItem(
        "watchlist",
        JSON.stringify(watchlist)
    );

    if (movie) {
        showToast(
            `${movie.title} removed`
        );
    }

    loadWatchlist();
}

// ======================
// Pick Random Movie
// ======================

pickMovieBtn.addEventListener("click", () => {

    const watchlist =
        JSON.parse(
            localStorage.getItem("watchlist")
        ) || [];

    if (watchlist.length === 0) {

        pickedMovie.innerHTML = `
            <span>
                No movies available.
            </span>
        `;

        return;
    }

    const randomMovie =
        watchlist[
            Math.floor(
                Math.random() *
                watchlist.length
            )
        ];

    pickedMovie.innerHTML = `
        🎬 Tonight's Movie:
        <strong>${randomMovie.title}</strong>
    `;
});

// ======================
// Toast Notification
// ======================

function showToast(message) {

    let toast =
        document.getElementById("toast");

    if (!toast) {

        toast =
            document.createElement("div");

        toast.id = "toast";

        document.body.appendChild(toast);
    }

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);
}