// function isContains(array, serachValue) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === serachValue) {
//             return true;
//         }
//     }
//     return false;
// }
//
// let array = [1,2,3,4,5,6]
// let search = 22
// let found = isContains(array, search);
// console.log(found);

// function sum(name, ...data) {
//     let total = 0;
//     for (let i = 0; i < data.length; i++) {
//         total += data[i];
//     }
//     console.log(`Total ${name} is ${total}`);
// }
//
// sum('Orance', 10,20,30);
//
// const values = [10,20,30,40];
// sum("Test", ...values);

// const luasPersegi = function (sisi) {
//     return sisi * sisi;
// }
//
// function luasSemua(sisi, luasPersegi) {
//     const luas = luasPersegi(sisi);
//     console.log(luas);
// }
//
// luasSemua(5, luasPersegi)

// const hitungLuasPersegi = function (sisi) {
//     return sisi * sisi;
// }
//
// function jalankanPerhitungan(sisi, hitungPersegi) {
//     let luas = hitungPersegi(sisi)
//     console.log(`Hasilnya: ${luas}`)
// }
//
// jalankanPerhitungan(4, hitungLuasPersegi)

const hitungPajak = function (pajak){
    // console.log(`sebelum diskon ${pajak}`);
    let diskon = 0;
    diskon = pajak * 0.11;
    // console.log(`pajak ${diskon}`);
    // let totalBiaya = pajak - diskon;
    return diskon;
}

function runPajak(pajak, result) {
    let pajakk = result(pajak);
    console.log(`Pajak: Rp. ${pajakk.toLocaleString()}`);
}

// runPajak(50000, hitungPajak);

const angkaLama = [1,2,3,4,5,6];
const angkaBaru = [];

for (let i = 0; i < angkaLama.length; i++) {
    // console.log(angkaLama[i]);
    const element = angkaLama[i];
    angkaBaru.push(element + 2);
}

// console.log(angkaBaru);

const caraBaru = angkaLama.map(element => element + 2)

// console.log(caraBaru);

const recursive = (n) => {
    if (n === 0) {
        return 1;
    }
    return n * recursive(n -1);
};

console.log(recursive(5));

