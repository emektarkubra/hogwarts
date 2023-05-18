// let box = document.querySelector(".box");

// box.setAttribute("characterId", "9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8")


// box.addEventListener("click", myFunction);

// function myFunction() {
//     let characterId = box.getAttribute("characterId");
//     getData(`https://hp-api.onrender.com/api/character/${characterId}`)
//         .then((data) => {
//             console.log(data);
//             box.innerHTML = data[0].id;
//         })
//         .catch((err) => {
//             console.log(err);
//         })    
// }



// function getData(url) {

//     let promise = new Promise((resolve, reject) => {
//         fetch(url)
//             .then((response) => {
//                 return response.json();
//             })
//             .then((data) => {
//                 resolve(data);
//             })
//             .catch((err) => {
//                 reject(err);
//             })
//     })
//     return promise;
// }