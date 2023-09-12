/**
 * Array and object - data structure
 * 
 */


const studentNames = [
  {id: 1, name: "abi"},
  {id: 1, name: "Rune"},
  {id: 1, name: "Ola"},
  {id: 1, name: "Anine"},
  {id: 1, name: "Pablo"},
  {id: 1, name: "John"},
  {id: 100, name: 'Ola'}
];

// console.log(studentNames[0]);
// console.log(studentNames[1]);
// console.log(studentNames[2]);



const mapArray = studentNames.map((element, index, arr) => {
  // console.log(element, index, arr)
  return [element, index];
})


const Ola_find = studentNames.find((element, index) => {
  console.log(index)
  return element.name === 'Ola';
})
const Ola_some = studentNames.some((element, index) => {
  console.log(index)
  return element.name === 'Ola';
})
const Ola_every = studentNames.every((element, index) => {
  console.log(index)
  return element.name === 'Ola';
})



console.log(Ola_find)
console.log(Ola_some)
console.log(Ola_every)


// const reduceArray = studentNames.reduce((accumulator, value) => {
//   const newArray = [];
//   console.log(accumulator)
//   newArray.push(accumulator)
//   return newArray;
// })


// console.log(reduceArray)

// const values = [100, 200, 300, 400, 500];

// const endResult = values.reduce(
//   (previousValue, currentElement, index, array) => {
//     return previousValue;
//   },
// );

// console.log({endResult})


// studentNames.findIndex((element, index) => {
//   console.log({index: index})
//   if(element.name === 'Rune') {
//     // console.log(element)
//     return element;
//   }
//   console.log(element)
// })


