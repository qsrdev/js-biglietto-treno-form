const priceKm = 0.21;
const discount20 = 20;
const discount40 = 40;

//Prelevo gli input del form
const username = document.getElementById("username");
const inputKm = document.getElementById("kmtodo");
console.log(inputKm);
const inputAge = document.getElementById("age");
console.log(inputAge.value);

const buttonElem = document.querySelector("button");

//Prelevo gli elementi di input
const passengerName = username.value;
const ticketType = 0;
const trainCarousel = 0;
const ticketCode = 0;

//prelevo i valori degli input

buttonElem.addEventListener("click", function () {
  // Prelevo il valore dell'input solo dentro eventListener
  const distanceTotal = parseInt(inputKm.value);

  if (inputAge.value === "1") {
    totalPrice = distanceTotal * priceKm * 0.8; // 20% di sconto
  } else if (inputAge.value === "2") {
    totalPrice = distanceTotal * priceKm; // prezzo pieno
  } else if (inputAge.value === "3") {
    totalPrice = distanceTotal * priceKm * 0.6; // 40% di sconto
  }

  console.log(totalPrice);

  return totalPrice;
});

// const totalPrice = distanceTotal * priceKm;
// console.log("Il prezzo totale del viaggio è di" + " " + totalPrice);

// //Blocco logico
// console.log("====Calcolo degli sconti====");
// const u18discount = (totalPrice * discount20) / 100;
// console.log("Lo sconto se hai meno di 18 anni è di" + " " + u18discount);

// const o65discount = (totalPrice * discount40) / 100;
// console.log("Lo sconto se sei over 65 è di" + " " + o65discount);

// console.log("====Calcolo prezzo scontato====");
// const u18discountPrice = totalPrice - u18discount;
// console.log("Prezzo del viaggio se hai meno di 18 anni è di" + " " + u18discountPrice);

// const o65discountPrice = totalPrice - o65discount;
// console.log("Prezzo del viaggio se hai più di 65 anni è di" + " " + o65discountPrice);

// if (userAge < 18) {
//   alert(`Ha diritto allo sconto under 18 - totale costo del biglietto ${u18discountPrice.toFixed(2)} €`);
// } else if (userAge >= 65) {
//   alert(`Ha diritto allo sconto over 65 - totale costo del biglietto ${o65discountPrice.toFixed(2)} €`);
// } else {
//   alert(`Non ha diritto allo sconto - il prezzo è di ${totalPrice.toFixed(2)} €`);
// }
