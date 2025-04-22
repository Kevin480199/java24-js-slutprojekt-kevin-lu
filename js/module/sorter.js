import { createTh, createList } from "/java24-js-slutprojekt-kevin-lu/js/module/render.js";
import { getMovieData, searchMovieData } from "/java24-js-slutprojekt-kevin-lu/js/module/API.js";
let sortAsc = 1;
export function sortTitle(event){
    event.preventDefault();
    const table = document.querySelector('table');
    const choice = document.querySelector('select').value;
    const searchTerm = document.querySelector('input').value;
    searchMovieData(choice, searchTerm)
        .then(data =>{
            let sortedByTitle;
            // Check if there is a column namned 'title'
            if (data.results.length > 0 && 'title' in data.results[0]) {
                console.log("The 'title' column exists!");
                if(sortAsc === 1){
                    sortedByTitle = sortByColumn(data.results, 'title')
                    sortAsc = 0;
                }else{
                    sortedByTitle = sortByColumn(data.results, 'title', false)
                    sortAsc = 1;
                }
                const trBody = document.querySelector('#searchTableBody');
                trBody.innerHTML = '';
                sortedByTitle.forEach(element =>{
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
            // Check if there is a column named 'name'
            } else if(data.results.length > 0 && 'name' in data.results[0]){
                console.log("The 'name' column found.");
                if(sortAsc === 1){
                    sortedByTitle = sortByColumn(data.results, 'name')
                    sortAsc = 0;
                }else{
                    sortedByTitle = sortByColumn(data.results, 'name', false)
                    sortAsc = 1;
                }
                console.log(sortedByTitle)
                const trBody = document.querySelector('#searchTableBody');
                trBody.innerHTML = '';
                sortedByTitle.forEach(element =>{
                const img = document.createElement('img');
                img.src = `https://image.tmdb.org/t/p/w200${element.profile_path}`;
                const tBody = document.querySelector('#search tbody');
                const tr = document.createElement('tr');
                tBody.append(tr);
                tr.append(img)
                createTh(element.name, tr);
                createTh(element.popularity, tr)
                createTh(element.known_for_department, tr);
                createList(element.known_for, tr);
                
            })
            }
            
        })

}
// TODO Implement this function
export function sortPopularity(event){
    event.preventDefault();
    const choice = document.querySelector('select').value;
    const searchTerm = document.querySelector('input').value;
    searchMovieData(choice, searchTerm)
        .then(data => {
            let sortedByTitle;
            if(sortAsc === 1){
                sortedByTitle = sortByColumn(data.results, 'popularity')
                sortAsc = 0;
            }else{
                sortedByTitle = sortByColumn(data.results, 'popularity', false)
                sortAsc = 1;
            }
            if(choice === 'person'){
                console.log('person')
                const trBody = document.querySelector('#searchTableBody');
                trBody.innerHTML = '';
                sortedByTitle.forEach(element =>{
                const img = document.createElement('img');
                img.src = `https://image.tmdb.org/t/p/w200${element.profile_path}`;
                const tBody = document.querySelector('#search tbody');
                const tr = document.createElement('tr');
                tBody.append(tr);
                tr.append(img)
                createTh(element.name, tr);
                createTh(element.popularity, tr)
                createTh(element.known_for_department, tr);
                createList(element.known_for, tr);
                
            })
            }else if(choice === 'movie'){
                const trBody = document.querySelector('#searchTableBody');
                trBody.innerHTML = '';
                sortedByTitle.forEach(element =>{
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
            }
        })
}
// ChatGPT har hjälpt mig med detta


  function sortByColumn(arr, column, ascending = true) {
    return arr.sort((a, b) => {
      let valA = a[column];
      let valB = b[column];
  
      // Handle strings (case-insensitive)
      if (typeof valA === 'string') valA = valA.toLowerCase();
      if (typeof valB === 'string') valB = valB.toLowerCase();
  
      // Sorting logic
      if (valA < valB) return ascending ? -1 : 1;
      if (valA > valB) return ascending ? 1 : -1;
      return 0;
    });
  }