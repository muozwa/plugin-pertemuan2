var namaSaya: string = "bais yusfan";
console.log("nama gwejh" , namaSaya);

var umur: number = 11;
console.log("umur gwejh: " , umur);

var islife: boolean = false;
console.log("apakah saya sudah makan: " , islife);

let x : null = null;
console.log("nilai_x", x);

//non.primitif
//tipedata object
var person: {nama: string, umur: number}
={nama: "Arlot", umur:10}
console.log("nama hero saya: ", person);

//array
var numbers: number[] = [1, 2, 3, 4, 5];
console.log("nomer urut: ", numbers);

//tuple
var user: [string, number] = ['zilong', 65]
console.log("saya", user);

//any
var random: any = 25 ;
console.log("nilai belum diubah", random);
random = "tak ubah ah"
console.log("nilai setelah diubah", random);

//union
var id: string | number ;
id = 123;
console.log(id);

//for Loop
for (let i = 1; i<=5; i++){
    console.log(i);

}

//while loop
let angkat = 1
while (angkat <=5){
    console.log(angkat);
    angkat++
} 

//do while loop
var number = 10
do {
    console.log(number);
    number++
}while (number <= 20)
    