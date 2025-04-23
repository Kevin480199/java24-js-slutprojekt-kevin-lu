import { getMovieData } from "/java24-js-slutprojekt-kevin-lu/js/module/API.js";
import { renderNavbar, renderTable } from "/java24-js-slutprojekt-kevin-lu/js/module/render.js";

renderNavbar()
let div = document.querySelector('#searchError');
getMovieData('popular')
    .then(data => {
        data.results.splice(-10);
        data.results.forEach(element => {
            const img = document.createElement('img');
            img.src = `https://image.tmdb.org/t/p/w200${element.poster_path}`;
            const tBody = document.querySelector('#popular tbody');
            const tr = document.createElement('tr');
            if(tBody != null){
                renderTable(tBody, tr, img, element)
                
            }
            
        })
    })
    .catch(
        error =>{
            console.log(error)
            showError(div, error)
        }
    )
