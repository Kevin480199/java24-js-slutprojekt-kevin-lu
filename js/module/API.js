export async function getMovieData(choice){
    const API_KEY = "58d75cc74370bc45ffc43a27277b1743";
    const url = `https://api.themoviedb.org/3/movie/${choice}?api_key=${API_KEY}&language=en-US&page=1`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error("Error fetching top movies:", error);
    }
    
}

export async function searchMovieData(choice, searchTerm){
    const API_KEY = "58d75cc74370bc45ffc43a27277b1743";
    const url = `https://api.themoviedb.org/3/search/${choice}?api_key=${API_KEY}&language=en-US&page=1&query=${encodeURIComponent(searchTerm)}`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error("Error fetching search:", error);
    }
    
}

export async function getRandomMovie() {
    const API_KEY = "58d75cc74370bc45ffc43a27277b1743";

    const maxPages = 500; // TMDB only lets you access up to 500 pages
    const randomPage = Math.floor(Math.random() * maxPages) + 1;

    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${randomPage}`);
    const data = await response.json();

    const movies = data.results;
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];

    return randomMovie;
}