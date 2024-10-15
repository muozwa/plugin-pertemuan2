"use strict";
class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    greet() {
        console.log(`Hi, nama saya ${this.name} rumah saya di kota ${this.address}`);
    }
}
class Employe extends Person {
    constructor(name, address, jobTitlle) {
        super(name, address);
        this.jobTittle = jobTitlle;
    }
    work() {
        console.log(`Aku ${this.name} bekerja  sebagai ${this.jobTittle}`);
    }
}
let employe1 = new Employe(`Yusuf`, "Lebaksiu", `Pegawai sipil`);
employe1.greet();
employe1.work();
