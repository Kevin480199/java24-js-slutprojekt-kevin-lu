// includes all the function required to run the game that is included in the homepage.
import { getRandomMovie } from "/java24-js-slutprojekt-kevin-lu/js/module/API.js";
import { addButtonAndPicture, showError } from "/java24-js-slutprojekt-kevin-lu/js/module/render.js";


export function playGame(event){
    event.preventDefault();
    const div = document.querySelector('#searchError')
    div.innerHTML = '';
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
        .catch(
            error =>{
                console.log(error)
                gameDiv.innerHTML = '';
                showError(div, error)
            }
        )
        
    
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
        throw new Error("Failed to fetch data: " + error.message);
        return [];
    }
}