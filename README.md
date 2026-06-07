# Movie Night Planner

## Overview

Movie Night Planner is a web application that helps users discover movies and organize their movie nights. Users can search for movies using The Movie Database (TMDb) API, view movie details, save movies to a personal watchlist, and randomly select a movie for their next movie night.

The goal of this project was to learn and apply web application development concepts using HTML, CSS, and JavaScript while working with an external API and browser storage.

---

## Features

* Search for movies by title
* View movie details in a popup modal
* Add movies to a personal watchlist
* Remove movies from the watchlist
* Store watchlist data using Local Storage
* Randomly select a movie from the watchlist
* Responsive and modern user interface
* Loading spinner during API requests
* Toast notifications for user feedback

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* TMDb API
* Browser Local Storage

---

## Project Structure

```text
movie-night-planner/
│
├── index.html
├── watchlist.html
│
├── css/
│   └── styles.css
│
├── js/
│   ├── api.js
│   ├── app.js
│   └── watchlist.js
│
└── README.md
```

---

## How to Run the Application

### Prerequisites

* A modern web browser (Google Chrome, Microsoft Edge, Firefox, or Safari)
* A TMDb API key

### Setup

1. Download or clone the repository.

2. Obtain a free API key from The Movie Database (TMDb).

3. Open the file:

```text
js/api.js
```

4. Replace:

```javascript
const API_KEY = "YOUR_API_KEY";
```

with your TMDb API key.

Example:

```javascript
const API_KEY = "123456789abcdef";
```

### Running the Application

#### Using Visual Studio Code (Recommended)

1. Open the project folder in Visual Studio Code.
2. Install the Live Server extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

The application will open automatically in your browser.

#### Alternative Method

Open `index.html` directly in a web browser.

---

## How to Use

1. Enter a movie title in the search box.
2. Click **Search** or press Enter.
3. Browse the movie results.
4. Click **Add to Watchlist** to save a movie.
5. Open the Watchlist page.
6. Remove movies as needed.
7. Click **Pick Tonight's Movie** to randomly choose a movie from your watchlist.

---

## What I Learned

Through this project, I learned how to:

* Build a complete web application using HTML, CSS, and JavaScript
* Consume data from a third-party API
* Work with asynchronous JavaScript using Fetch and Async/Await
* Manipulate the DOM dynamically
* Store and retrieve data using Local Storage
* Create responsive user interfaces
* Improve user experience with modals, loaders, and notifications

---

## Future Improvements

Possible future enhancements include:

* Movie genre filtering
* Favorite movies feature
* Movie trailer integration
* User accounts and cloud storage
* Dark/light theme toggle
* Advanced movie recommendations

---

## Video Demonstration

Video Link:

(Add your video link here)

---


