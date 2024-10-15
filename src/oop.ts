class Person {
    name: string
    address : string

    constructor (name: string, address:string){
        this.name = name
        this.address = address
    }

    greet(){
        console.log(`Hi, nama saya ${this.name} rumah saya di kota ${this.address}`);
    }
}

class Employe extends Person {
    jobTittle : string

    constructor(name: string, address: string, jobTitlle: string){
        super(name, address)
        this.jobTittle = jobTitlle

    }
    work(){
        console.log(`Aku ${this.name} bekerja  sebagai ${this.jobTittle}`);
    }
}

let employe1 = new Employe (`Yusuf`, "Lebaksiu", `Pegawai sipil`)
employe1.greet()
employe1.work()
