// const priceKm = 0.21;

// const formElem = document.getElementById("train-form");
// console.log(formElem);

// //Prelevo gli input del form
// const inputUsername = document.getElementById("name");
// const inputKm = document.getElementById("km");
// const inputAge = document.getElementById("age");

// //Prelevo gli elementi di input
// const passengerNameElement = document.getElementById("nomefinale");
// const finalpriceElement = document.getElementById("prezzofinale");
// const ticketType = 0;
// const trainCarousel = 0;
// const ticketCode = 0;

// // inputAge.addEventListener("change", function () {
// //   const finalPrice = calcDiscount(inputAge.value, parseInt(inputKm.value), priceKm);
// //   finalpriceElement.innerHTML = `<strong>Costo biglietto</strong><br />--- ${finalPrice.toFixed(2)}`;
// // });

// formElem.addEventListener("click", function (event) {
//   event.preventDefault();
//   const finalPrice = calcDiscount(inputAge.value, parseInt(inputKm.value), priceKm);
//   finalpriceElement.innerHTML = `<strong>Costo biglietto</strong><br /> ${finalPrice.toFixed(2)}`;
//   passengerName.innerHTML = `<strong>NOME PASSEGGERO</strong><br /> ${usernameElement}`;
// });

// function calcDiscount(ageID, distance, price) {
//   let totalPrice;
//   // Prelevo il valore dell'input solo dentro eventListener
//   if (ageID === "1") {
//     totalPrice = distance * price * 0.8; // 20% di sconto
//   } else if (ageID === "2") {
//     totalPrice = distance * price; // prezzo pieno
//   } else if (ageID === "3") {
//     totalPrice = distance * price * 0.6; // 40% di sconto
//   }
//   return totalPrice;
// }

// =====================================================================================

const priceKm = 0.21;
const formElem = document.getElementById("train-form");
console.log(formElem);

//Prelevo gli input del form
const usernameInput = document.getElementById("name");
const kmInput = document.getElementById("km");
const ageInput = document.getElementById("age");

//Prelevo gli elementi della card da compilare
const usernameElem = document.querySelector("#ticket-final h6");
const priceElem = document.querySelector("#ticket-final p");

// const passengerNameElement = document.getElementById("nomefinale");
// const finalpriceElement = document.getElementById("prezzofinale");

// inputAge.addEventListener("change", function () {
//   const finalPrice = calcDiscount(inputAge.value, parseInt(inputKm.value), priceKm);
//   finalpriceElement.innerHTML = `<strong>Costo biglietto</strong><br />--- ${finalPrice.toFixed(2)}`;
// });

formElem.addEventListener("click", function (event) {
  event.preventDefault();

  const finalPrice = calcDiscount(ageInput.value, parseInt(kmInput.value), priceKm);
  const name = usernameInput.value;

  priceElem.innerHTML = finalPrice.toFixed(2);
  usernameElem.innerHTML = name;
});

function calcDiscount(ageID, distance, price) {
  let totalPrice;
  // Prelevo il valore dell'input solo dentro eventListener
  if (ageID === "1") {
    totalPrice = distance * price * 0.8; // 20% di sconto
  } else if (ageID === "2") {
    totalPrice = distance * price; // prezzo pieno
  } else if (ageID === "3") {
    totalPrice = distance * price * 0.6; // 40% di sconto
  }
  return totalPrice;
}
