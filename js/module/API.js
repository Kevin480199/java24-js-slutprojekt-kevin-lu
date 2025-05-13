// includes all calls to the The Movie DataBase API.
// API used from: https://www.themoviedb.org/
import { Movie } from "../class/movie.js";


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
        throw new Error("Failed to fetch data: " + error.message);
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
        throw new Error("Failed to fetch data: " + error.message);
    }
    
}

export async function getRandomMovie() {
    const API_KEY = "58d75cc74370bc45ffc43a27277b1743";
    try {
        const maxPages = 500; // TMDB only lets you access up to 500 pages
        const randomPage = Math.floor(Math.random() * maxPages) + 1;

        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${randomPage}`);
        const data = await response.json();

        const movies = data.results;
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        const movie = new Movie(randomMovie)
        return movie;
    } catch (error) {
        throw new Error("Failed to fetch data: " + error.message);
    }
    
}