import { getMovieData, searchMovieData } from "/java24-js-slutprojekt-kevin-lu/js/module/API.js";
import { createTh, createList } from "/java24-js-slutprojekt-kevin-lu/js/module/render.js";
import { sortTitle, sortPopularity } from "/java24-js-slutprojekt-kevin-lu/js/module/sorter.js";
import { playGame } from "/java24-js-slutprojekt-kevin-lu/js/module/game.js";
fetch('/java24-js-slutprojekt-kevin-lu/view/fragments/navbar.html')
  .then(res => res.text())
  .then(html => {
    const container = document.querySelector('#navbar');
    container.innerHTML = html;
  });

getMovieData('top_rated')
    .then(data => {
        // Removes last 10 elements from array
        data.results.splice(-10);
        data.results.forEach(element => {
            const img = document.createElement('img');
            img.src = `https://image.tmdb.org/t/p/w200${element.poster_path}`;
            const tBody = document.querySelector('#topRated tbody');
            const tr = document.createElement('tr');
            const th1 = document.createElement('th');
            if(tBody != null){
                tBody.append(tr);
                tr.append(th1);
                th1.append(img)
                const th2 = document.createElement('th');
                th2.innerText = element.title;
                tr.append(th2)
                const th3 = document.createElement('th');
                th3.innerText = element.release_date;
                tr.append(th3);
                const th4 = document.createElement('th');
                th4.innerText = element.vote_average;
                tr.append(th4)
            }
            
        })
    })
getMovieData('popular')
    .then(data => {
        data.results.splice(-10);
        data.results.forEach(element => {
            const img = document.createElement('img');
            img.src = `https://image.tmdb.org/t/p/w200${element.poster_path}`;
            const tBody = document.querySelector('#popular tbody');
            const tr = document.createElement('tr');
            const th1 = document.createElement('th');
            if(tBody != null){
                tBody.append(tr);
                tr.append(th1);
                th1.append(img)
                const th2 = document.createElement('th');
                th2.innerText = element.title;
                tr.append(th2)
                const th3 = document.createElement('th');
                th3.innerText = element.release_date;
                tr.append(th3);
                const th4 = document.createElement('th');
                th4.innerText = element.vote_average;
                tr.append(th4)
            }
            
        })
    })


const form = document.querySelector('form');
if(form != null){

    form.addEventListener('submit', event => {
        event.preventDefault();
        const div = document.querySelector('#searchError')
        div.innerText = '';
        const select = form.querySelector('select').value;
        const input = form.querySelector('input').value;
    // Do something if searchbar is empty
    if(input.trim() === ''){
        console.log('searchbar is empty')
        const p = document.createElement('p');
        p.innerText = 'Searchbar is empty'
        div.append(p)
    }
    if(select == 'person'){
        searchMovieData(select, input)
        .then(data => {
                const trHeader = document.querySelector('#searchTableHeader');
                trHeader.innerHTML = '';
                const trBody = document.querySelector('#searchTableBody');
                trBody.innerHTML = '';
                createTh('Image' , trHeader);
                createTh('Name' , trHeader);
                createTh('Popularity' , trHeader);
                createTh('Known For' , trHeader);
                createTh('Movies' , trHeader);
                data.results.forEach(element =>{
                    const img = document.createElement('img');
                    img.src = `https://image.tmdb.org/t/p/w200${element.profile_path}`;
                    const tBody = document.querySelector('#search tbody');
                    const tr = document.createElement('tr');
                    tBody.append(tr);
                    const th = document.createElement('th');
                    tr.append(th);
                    th.append(img);

                    createTh(element.name, tr);
                    createTh(element.popularity, tr);
                    createTh(element.known_for_department, tr);
                    createList(element.known_for, tr)
                    
                })
                attachSortListeners()
                
            })
            
        }else if(select == 'movie'){
            searchMovieData(select, input)
            .then(data => {
                const trHeader = document.querySelector('#searchTableHeader');
                trHeader.innerHTML = '';
                const trBody = document.querySelector('#searchTableBody');
                trBody.innerHTML = '';
                createTh('Image' , trHeader);
                createTh('Title' , trHeader);
                createTh('Popularity' , trHeader);
                createTh('Release Date' , trHeader);
                createTh('Description' , trHeader);
                data.results.forEach(element =>{
                    const img = document.createElement('img');
                    img.src = `https://image.tmdb.org/t/p/w200${element.poster_path}`;
                    const tBody = document.querySelector('#search tbody');
                    const tr = document.createElement('tr');
                    tBody.append(tr);
                    tr.append(img)
                    createTh(element.title, tr);
                    createTh(element.popularity, tr)
                    createTh(element.release_date, tr);
                    createTh(element.overview, tr);
                    
                })
                attachSortListeners()
                
            })
        }
    })
}
function attachSortListeners() {
    const header = document.querySelectorAll('#searchTableHeader th');
    // 
    header[1]?.addEventListener('click', sortTitle);
    header[2]?.addEventListener('click', sortPopularity);
}

const reset = document.querySelector('#reset');
if(reset != null){
    reset.addEventListener('click', playGame)
}
