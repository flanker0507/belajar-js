// let namaMahasiswa = {
//     name: "Yuda Wira Pratama",
//     age: 25,
//     occupation: "Programmer",
//     address: {
//         country: "Indonesia",
//         city: "Binjai",
//         street: "JL. Danau Poso LK. V"
//     }
// }

// // Function Declaration
// function buatObjectMahasiswa(name, npm, email, jurusan) {
//     let mhs = [];
//     mhs.name = name;
//     mhs.npm = npm;
//     mhs.email = email;
//     mhs.jurusan = jurusan;
//     return mhs;
// }


// Constructor
function Mahasiswa(name, npm, email, jurusan){
    this.name = name;
    this.npm = npm;
    this.email = email;
    this.jurusan = jurusan;
}

let mhs1 = new Mahasiswa('Yuda Wira Pratama', 1914370072, 'yuda@ganteng.com', 'Siskom');
console.log(mhs1)
