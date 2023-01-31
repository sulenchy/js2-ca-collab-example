import db, { testData } from './db.js';

console.log({db})

const mainContent = document.getElementsByClassName('car-list-body');
debugger;
const carData = db.cars;

for(let count = 0; count < carData.length; count++) {
    console.log(carData[count]);
}

carData.forEach(car => {
    const card = document.createElement('div');
    const makeElement = document.createElement('h2');
    const modelElement = document.createElement('p');
    const yearElement = document.createElement('p');
    const priceElement = document.createElement('p');
    card.appendChild(makeElement);
    card.appendChild(modelElement);
    card.appendChild(yearElement);
    card.appendChild(priceElement);
    mainContent[0].appendChild(card);
    makeElement.textContent = car.make;
    modelElement.textContent = car.model;
    yearElement.textContent = car.year;
    priceElement.textContent = car.price;
})



// [1,2,3,4,5]


const animalData = db.animals;