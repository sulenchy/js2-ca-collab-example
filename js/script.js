import { BASE_API_URL, getAllCats } from "./constants.js";

// export const BASE_API_URL = 'https://api.noroff.dev/api/v1';


const gotoDetailPage = (id) => {
    window.location.href = `/quote.html?id=${id}`;
}

const renderToDOM = async() => {
    const jokes = await getAllCats()
    const wrapper = document.getElementById('quote-list');
    wrapper.innerHTML = ''
    jokes.forEach(element => {
        const div = document.createElement('div');
        div.textContent = `${JSON.stringify(element)}`;
        div.classList.add('card');
        div.onclick = () => gotoDetailPage(element.id);
        wrapper.appendChild(div);
        // wrapper.innerHTML += `<div class="card">${JSON.stringify(element)}</div>`
    })
}


await renderToDOM();