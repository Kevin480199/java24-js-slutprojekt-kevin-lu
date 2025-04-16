async function getMovieData(choice){
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
getMovieData('top_rated')
    .then(data => {
        data.results.forEach(element => {
            const img = document.createElement('img');
            img.src = `https://image.tmdb.org/t/p/w200${element.poster_path}`;
            const tBody = document.querySelector('#topRated tbody');
            const tr = document.createElement('tr');
            const th1 = document.createElement('th');
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
        })
    })
getMovieData('popular')
    .then(data => {
        data.results.forEach(element => {
            const img = document.createElement('img');
            img.src = `https://image.tmdb.org/t/p/w200${element.poster_path}`;
            const tBody = document.querySelector('#popular tbody');
            const tr = document.createElement('tr');
            const th1 = document.createElement('th');
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
        })
    })

async function searchMovieData(choice, searchTerm){
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
const form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault();
    const select = form.querySelector('select').value;
    const input = form.querySelector('input').value;
    const topRated = document.querySelector('#topRated')
    topRated.classList.add('hidden');
    if(select == 'person'){
        searchMovieData(select, input)
            .then(data => {
                data.results.forEach(element =>{
                    const img = document.createElement('img');
                    img.src = `https://image.tmdb.org/t/p/w200${element.poster_path}`;
                    const tBody = document.querySelector('#popular tbody');
                    const tr = document.createElement('tr');
                    const th1 = document.createElement('th');
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
                })

            })

    }
})