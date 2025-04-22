export function createTh(text, tr){
    const th = document.createElement('th');
    th.innerText = text;
    tr.append(th);
}

export function createList(array, tr){
    const ul = document.createElement('ul');
    array.forEach(element => {
        const li = document.createElement('li');
        let emoji = '❓';
        if (element.media_type === 'movie') emoji = '📽️';
        else if (element.media_type === 'tv') emoji = '📺';

        li.innerText =`${emoji}${element.media_type.toUpperCase()}: ${element.title || element.name}`
        ul.append(li)
    })
    tr.append(ul)
}

export function addButtonAndPicture(element, div, correctAnswer){
    console.log(element)
    const img = document.createElement('img');
    img.src = `https://image.tmdb.org/t/p/w200${element.poster_path}`;
    div.append(img);
    img.addEventListener('click', () => {
        if(correctAnswer.title == element.title){
            let resultDiv = document.querySelector('#result')
            resultDiv.innerHTML = '';
            const p = document.createElement('p')
            p.innerText = `${element.title} is correct`
            resultDiv.append(p)
            console.log('guessed correct')
        }else{
            let resultDiv = document.querySelector('#result')
            resultDiv.innerText = '';
            const p = document.createElement('p')
            p.innerText = `${element.title} is wrong`
            resultDiv.append(p);
            console.log('wrong answer')
        }
    });
}