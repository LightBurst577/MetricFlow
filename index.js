/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const converter = document.getElementById("Converter");
let mainINPUT = document.getElementById("mainInput");
let lengthEl = document.getElementById("Length");
let volumeEL = document.getElementById("Volume");
let massEL = document.getElementById("Mass");

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;

const feetToMeters = 0.3048;
const gallonsToLiters = 3.78541;
const poundsToKilos = 2.20462;

mainINPUT.addEventListener("input", function () {
  if (isNaN(mainINPUT.value)) {
    // to reset if you fail to put a number
    mainINPUT.value = "";
  }

  let value = String(mainINPUT.value); // convert to String
  if (value.length > 2) {
    // so that the input fild can cap to 2 digit
    mainINPUT.value = value.slice(0, 2);
  }
  if (value === "") {
    // just in-case if noting in input it will put to 0
    value = 0;
  }

  converter.addEventListener("click", function () {
    // all caulation stuff
    lengthEl.textContent = `${value} meter = ${(value * meterToFeet).toFixed(3)}
            feet | ${value} feet = ${(value * feetToMeters).toFixed(3)} meters`;

    volumeEL.textContent = `${value} liters = ${(value * literToGallon).toFixed(3)}
            gallons | ${value} gallons = ${(value * gallonsToLiters).toFixed(3)} liters`;

    massEL.textContent = `${value} kilos = ${(value * kiloToPound).toFixed(3)}
            pounds | ${value} pounds = ${(value / poundsToKilos).toFixed(3)} kilos`;
  });
});
