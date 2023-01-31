import { getCat } from "./constants.js";

const quote = await getCat(1);
console.log({quote})

const nameElement = document.getElementById('quote-name');
const bodyElement = document.getElementById('quote-info')
nameElement.innerText = quote.punchline;
bodyElement.innerHTML =`<pre>${JSON.stringify(quote)}</pre>`