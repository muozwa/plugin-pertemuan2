"use strict";
// function declaration
function sapa(nama, umur) {
    console.log("Hallo, aku " + nama + "umurku" + umur);
}
sapa("yusuf", 18);
//anonymous function
const pcikers = function (name, role) {
    return name + role;
};
let pick = pcikers(" Nana ", "Mage");
console.log("Saya ingin pergi ke jungler menggunakan" + pick);
//Arrow Function
let multiplication = (a, b) => {
    return a * b;
};
let result = multiplication(8, 7);
console.log(result);
