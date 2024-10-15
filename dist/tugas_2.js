"use strict";
const IpkTest = [85, 92, 67, 58, 75];
let jumlahGanjil = 0;
let jumlahGenap = 0;
for (let i = 0; i < IpkTest.length; i++) {
    if (IpkTest[i] % 2 === 0) {
        jumlahGenap++;
    }
    else {
        jumlahGanjil++;
    }
}
console.log("=========== Tugas 2 ===========");
console.log(`Jumlah nilai genap: ${jumlahGenap}`);
console.log(`Jumlah nilai ganjil: ${jumlahGanjil}`);
