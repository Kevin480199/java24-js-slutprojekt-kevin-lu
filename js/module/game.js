import { getRandomMovie } from "/java24-js-slutprojekt-kevin-lu/js/module/API.js";
import { addButtonAndPicture } from "/java24-js-slutprojekt-kevin-lu/js/module/render.js";
export function playGame(event){
    event.preventDefault();
    retrieveMoviesArray()
        .then(movies => {
            console.log(movies)
            const correctMovie = movies[Math.floor(Math.random()*movies.length)]
            console.log(correctMovie)
            let gameDiv = document.querySelector('#gameDiv')
            gameDiv.innerHTML = '';
            let resultDiv = document.querySelector('#result');
            resultDiv.innerHTML = '';
            const p = document.createElement('p');
            p.innerText = correctMovie.overview;
            gameDiv.append(p)
            movies.forEach(element => {
                addButtonAndPicture(element, gameDiv, correctMovie);
            })
        })
        
    
}
async function retrieveMoviesArray(){
    const moviePromises = [];

    for (let i = 0; i < 4; i++) {
        moviePromises.push(getRandomMovie());
    }
    
    try {
        const movieArray = await Promise.all(moviePromises);
        return movieArray;
    } catch (error) {
        console.error("Error retrieving movies:", error);
        return [];
    }
}