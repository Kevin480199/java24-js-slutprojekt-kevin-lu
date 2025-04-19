import { createTh, createList } from "/java24-js-slutprojekt-kevin-lu/js/module/render.js";
import { getMovieData, searchMovieData } from "/java24-js-slutprojekt-kevin-lu/js/module/API.js";
export function sortTitle(event){
    event.preventDefault();
    const table = document.querySelector('table');
    const choice = document.querySelector('select').value;
    const searchTerm = document.querySelector('input').value;
    searchMovieData(choice, searchTerm)
        .then(data =>{
            const sortedByTitle = sortByColumn(data.results, 'title')
            console.log(sortedByTitle)
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