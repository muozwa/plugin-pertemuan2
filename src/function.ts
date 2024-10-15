// function declaration
function sapa(nama : string, umur:number) {
    console.log("Hallo, aku " + nama + "umurku" +  umur);
}
sapa("yusuf", 18)

//anonymous function
const pcikers = function (name : string , role : string){
    return name + role
}
let pick = pcikers(" Nana ", "Mage")
console.log("Saya ingin pergi ke jungler menggunakan" +pick);

//Arrow Function
let multiplication= (a : number, b : number) => {
    return a * b
}
let result = multiplication(8,7)
console.log(result);