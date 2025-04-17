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