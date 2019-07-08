var intervalID = window.setInterval(myCounter, 10);
let secondTens = document.getElementById('secondTens');
let secondOnes = document.getElementById('secondOnes');
let msHundreds = document.getElementById('msHundreds');
let msTens = document.getElementById('msTens');

console.log(secondTens)

var msHunScount = 0;
var tenMScount = 0;
var Scount = 0;

msTens.textContent = '0';
secondOnes.textContent = scount;
msHundreds.textContent = tenmscount;
secondTens.textContent = tenseccount;

function myCounter() {

  tenMScount = tenMScount + 1;
  msTens.textContent = tenMScount;

    if(tenMScount === 10){
    tenMScount = 0;
    msTens.textContent = tenMScount;
    msHundreds.textContent = msHunScount + 1;

    if (msHunScount === 10){
    msHunScount = 0;
    msHundreds.textContent = msHunScount;
    secondOnes.textContent = Scount + 1;
    
   if (secondOnes === 10){
    Scount = 0;
    secondOnes.textContent = Scount;
    secondTens.textContent = 1;
   }
  }
}
}