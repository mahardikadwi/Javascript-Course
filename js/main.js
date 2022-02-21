// document.getElementById("counter").innerText = 5

// contoh variable
// let antrianPertama = 10;
// let antrianKedua = 5;

// let counter = antrianPertama + antrianKedua;

// counter starts at 0
// Create a function that increment a number everytime the user click the "increment" button
// changes made will then be displayed in the "counter" id in html

/* this is the function */
let counterUI = document.getElementById("counter");
let saveData = document.getElementById("entry-data");
let count = 0;

function increment() {
  count += 1;
  counterUI.textContent = count;
}

// create a save() function which tracks how many times the user clicks the increment button
function save() {
  let countStr = count + " - ";
  saveData.textContent += countStr;
  counterUI.textContent = 0;
  count = 0;
  console.log(count);
}

// create a simple introduction
let welcome = document.getElementById("welcome-msg");
let myName = "Dwi Panca Mahardhika!";
let myGreetings = "Welcome Back, ";

// show output
welcome.innerText = myGreetings + myName;
welcome.innerText += "🍕";

// muscle memory buildup (Create a variable)
let firstName = "Dwi Panca";
let lastName = "Mahardhika";

let fullName = firstName + " " + lastName;
console.log(fullName);

// muscle memory buildup (Create a Function that concatenate a string)
let herName = "Linda";
let greeting = "Hi there";

function greetLinda() {
  console.log(greeting + "," + " " + herName + "!");
}

greetLinda(); /* syntax untuk memanggil fungsi diatas */

// muscle memory buildup (Increment and decrement numbers)
let myPoints = 3;

function addPoints() {
  myPoints += 3;
}

function removePoints() {
  myPoints -= 1;
}

addPoints();
addPoints();
addPoints();
removePoints();
removePoints();

// muscle memory buildup (strings and numbers data types)
console.log("2" + 2); // the output would be 22 due to one of the operand are string data type
console.log(11 + 7); // the output would be 18 due to addition operator and both of the operand are number data type
console.log(6 + "5"); // the output would be 65 due to one of the operand are string data type
console.log("My points: " + 5 + 9); // the output would be My points: 59 due to concatenation method takes place
console.log(2 + 2); // the output would be 4 due to addition operator
console.log("11" + "14"); // the output would be 1114 due to concatenation and both of the operand are string data type

// error button
let errorParagraph = document.getElementById("error");

function dontClick() {
  errorParagraph.textContent =
    "I told you not to click this button, press other button instead";
}

// simple calculator
let num1 = 18;
let num2 = 10;
document.getElementById("digit1").textContent = num1;
document.getElementById("digit2").textContent = num2;
let hasil = document.getElementById("hasil");

function add() {
  let result = num1 + num2;
  hasil.textContent = "Total: " + result;
}

function subtract() {
  let result = num1 - num2;
  hasil.textContent = "Total: " + result;
}

function divide() {
  let result = num1 / num2;
  hasil.textContent = "Total: " + result;
}

function multiply() {
  let result = num1 * num2;
  hasil.textContent = "Total: " + result;
}

// blackjack card game
let cards = []; // default state
let total = 0;  // default state
let hasBlackJack = false;
let isAlive = false;
let message = " ";
let msgConfirm = document.getElementById("msg-confirm");
let totalSum = document.getElementById("sum-total");
let cardList = document.getElementById("card-list");

function getRandomCard() {
  let RandomCard = Math.floor(Math.random() * 13) + 1;
  if (RandomCard > 10) {
    return 10;
  } else if (RandomCard === 1) {
    return 11;
  } else {
    return RandomCard;
  }
}

// if else conditional example
function startGame() {
  isAlive = true;
  let firstCard = getRandomCard(); // state when i click the start new game button
  let secondCard = getRandomCard(); // state when i click the start new game button
  cards = [firstCard, secondCard]; // state when i click the start new game button
  total = firstCard + secondCard; // state when i click the start new game button
  renderGame();
}

function renderGame() {
  totalSum.textContent = "Total: " + total;
  cardList.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardList.textContent += cards[i] + " ";
  }
  if (total <= 20) {
    message = "Do you want to draw another card?";
  } else if (total === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "Sorry!, better luck next time.";
    isAlive = false;
  }
  msgConfirm.textContent = message;
}

function newCard() {
  // console.log('Drawing new card from the deck');
  let card = getRandomCard();
  total += card;
  cards.push(card); // adding new value to the end of an array.
  renderGame();
}

// another if else example
let umur = 30;

if (umur < 21) {
  console.log("Kamu belum cukup umur");
} else {
  console.log("Selamat Datang!");
}

// if else example pt.3
let age = 90;

if (age < 100) {
  console.log("You're not eligible for the birthday card");
} else if (age === 100) {
  console.log("Happy birthday!, Here's your birthday card");
} else {
  console.log("sorry, you have received one already!");
}

// arrays
let featuredPost = ["lorem1", "lorem2", "lorem3"];
let skills = [
  "HTML & CSS",
  "Javascript",
  "Bootstrap",
  "Fluent english speaking & writing",
];
let bio = {
  namaDepan: "dwi",
  namaBelakang: "panca mahardhika",
  age: 21,
  sukaPizza: true,
}; // array dengan memakai object literal

let messages = [
  "Hey, How are you?",
  "i'm good, you?",
  "all good, been working on some stuff lately.",
];

let newMessage = "same here!";
messages.push(newMessage);

// for loops
//   START POINT     END POINT    STEP-BY-STEP
for (let count = 10; count < 21; count += 1) {
  console.log(count);
}

for (let i = 0; i < messages.length; i += 1) {
  console.log(messages);
}

let kartu = [7, 8, 9];
for (let i = 0; i < kartu.length; i++) {
  // i++ sama seperti i += 1
  console.log(kartu[i]);
}

let selamatDatang = ["Hello", "My", "Name", "Is", "Dwi"];
let selamatDatangMsg = document.getElementById("greeting-msg");

for (let i = 0; i < selamatDatang.length; i++) {
  selamatDatangMsg.textContent += selamatDatang[i] + " ";
}

// return value in function
let player1Time = 300;
let player2Time = 350;

function getFastestTime() {
  if (player1Time < player2Time){
    return player1Time;
  } else if (player2Time < player1Time) {
    return player2Time;
  } else {
    return player1Time;
  }
}

let fastestLapTime = getFastestTime();
console.log(fastestLapTime);

function totalRaceTime() {
  return player1Time + player2Time;
}
let totalTime = totalRaceTime();

// Math()
// Math.random() = generates a number between 0 and 0.999 (or almost 1)
// Math.floor() = removes the decimal in a number
let randomNumber = Math.random()*6;
let floorNumber = Math.floor(3.45632);

function rollDadu() {
  let dadu = Math.floor( Math.random()* 6) + 1;
  return dadu;
}