import { getMovieData, searchMovieData } from "/java24-js-slutprojekt-kevin-lu/js/module/API.js";
import { createTh, createList, showError, renderNavbar, renderSearchbarError } from "/java24-js-slutprojekt-kevin-lu/js/module/render.js";
import { sortTitle, sortPopularity } from "/java24-js-slutprojekt-kevin-lu/js/module/sorter.js";

renderNavbar();
export let movieData;
const form = document.querySelector('form');
if(form != null){

    form.addEventListener('submit', event => {
        event.preventDefault();
        const div = document.querySelector('#searchError')
        div.innerText = '';
        const select = form.querySelector('select').value;
        const input = form.querySelector('input').value;
        
    if(select == 'person'){
        searchMovieData(select, input)
        .then(data => {
            movieData = data;
            const trHeader = document.querySelector('#searchTableHeader');
            trHeader.innerHTML = '';
            const trBody = document.querySelector('#searchTableBody');
            trBody.innerHTML = '';

            if(input.trim() === ''){
                renderSearchbarError('Searchbar is empty', div)
                return
            } else if (!data || !data.results || data.results.length === 0) {
                renderSearchbarError('Your search gave 0 results', div);
                return;
            }
                createTh('Image' , trHeader);
                createTh('Name' , trHeader);
                createTh('Popularity' , trHeader);
                createTh('Known For' , trHeader);
                createTh('Movies' , trHeader);
                data.results.forEach(element =>{
                    renderPersonRow(element);
                    
                })
                attachSortListeners()
                
            })
        .catch(
            error =>{
                console.log(error)
                showError(div, error)
            }
        )
            
        }else if(select == 'movie'){
            searchMovieData(select, input)
            .then(data => {
                movieData = data;
                const trHeader = document.querySelector('#searchTableHeader');
                trHeader.innerHTML = '';
                const trBody = document.querySelector('#searchTableBody');
                trBody.innerHTML = '';
                if(input.trim() === ''){
                    renderSearchbarError('Searchbar is empty', div)
                    return
                }else if (!data || !data.results || data.results.length === 0) {
                    renderSearchbarError('Your search gave 0 results', div);
                    return;
                }
                createTh('Image' , trHeader);
                createTh('Title' , trHeader);
                createTh('Popularity' , trHeader);
                createTh('Release Date' , trHeader);
                createTh('Description' , trHeader);
                data.results.forEach(element =>{
                    renderMovieRow(element)
                    
                })
                attachSortListeners()
                
            })
            .catch(
                error =>{
                    console.log(error)
                    showError(div, error)
                }
            )
        }
    })
}
function attachSortListeners() {
    const header = document.querySelectorAll('#searchTableHeader th');
    // 
    header[1]?.addEventListener('click', sortTitle);
    header[2]?.addEventListener('click', sortPopularity);
}

function renderMovieRow(element) {
    const tBody = document.querySelector('#search tbody');
    const tr = document.createElement('tr');
    const img = document.createElement('img');
    img.src = `https://image.tmdb.org/t/p/w200${element.poster_path}`;
    tr.append(img);

    createTh(element.title, tr);
    createTh(element.popularity, tr);
    createTh(element.release_date, tr);
    createTh(element.overview, tr);

    tBody.appendChild(tr);
}

function renderPersonRow(element) {
    const tBody = document.querySelector('#search tbody');
    const tr = document.createElement('tr');
    const img = document.createElement('img');
    img.src = `https://image.tmdb.org/t/p/w200${element.profile_path}`;
    tr.append(img);

    createTh(element.name, tr);
    createTh(element.popularity, tr);
    createTh(element.known_for_department, tr);
    createList(element.known_for, tr);

    tBody.appendChild(tr);
}