// const a = 2312,
//   b = 2;
// console.log(a + b);

function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

console.log(addSquares(2, 4));
// let theProm = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("success");
//   }, 10000);
// });

// theProm.then(successMessage => console.log("uu " + successMessage));

// promise.then(resp => console.log(resp));

// let myFirstPromise3 = new Promise((resolve, reject) => {
//   setTimeout(function() {
//     resolve("Success!"); // Yay! Everything went well!
//   }, 10000);
// });

// myFirstPromise3.then(successMessage => {
//   console.log("Yay! " + successMessage);
// });

// const newPromise2 = Promise.reject("failed").catch(console.log("terr"));

// newPromise.then(res => console.log("res if success")).catch(console.log);

// const urls = [
//   "https://swapi.co/ap/people/1",
//   "https://swapi.co/api/people/2",
//   "https://swapi.co/api/people/3",
//   "https://swapi.co/api/people/4"
// ];

// const promise11 = new Promise((resolve, reject) => {});

// const promise2 = new Promise((resolve, reject) => {
//   fetch("https://swapi.co/api/people/2").then(resp => console.log(resp));
// });
// const promise3 = new Promise((resolve, reject) => {
//   fetch("https://swapi.co/api/people/3").then(resp => console.log(resp));
// });

// Promise.all(urls.map(eachUrl => fetch(eachUrl).then(people => people.json())))
//   .then("in then")
//   .catch("in catch");

// fetch("https://swapi.co/api/people/184242343873472364237462372")
//   .then(res => {
//     if (res.ok) {
//       person => console.log(person.json());
//       return res;
//     } else {
//       throw Error("request rejected");
//     }
//   })
//   .catch(console.log);
