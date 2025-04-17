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