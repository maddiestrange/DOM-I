var intervalID = window.setInterval(myCounter, 10);
let secondTens = document.getElementById('secondTens');
let secondOnes = document.getElementById('secondOnes');
let msHundreds = document.getElementById('msHundreds');
let msTens = document.getElementById('msTens');

console.log(secondTens)

var msHunScount = 0;
var tenMScount = 0;
var Scount = 0;

msTens.textContent = 0;
secondOnes.textContent = 0;
msHundreds.textContent = 0;
secondTens.textContent = 0;
let timerText = document.querySelector('.digits');
console.log(timerText.classList);
function myCounter() {

  tenMScount = tenMScount + 1;
  msTens.textContent = tenMScount;

    if(tenMScount === 10){
    tenMScount = 0;
    msTens.textContent = tenMScount;
    msHunScount = msHunScount + 1;
    msHundreds.textContent = msHunScount;
    if (msHunScount === 10){
    msHunScount = 0;
    msHundreds.textContent = msHunScount;
    Scount = Scount + 1;
    secondOnes.textContent = Scount;
   if (Scount === 10){
    secondOnes.textContent = 0;
    secondTens.textContent = 1;
    clearInterval(intervalID);
    timerText.classList.add("redDigit");
    console.log(timerText);

   }
  }
}
}