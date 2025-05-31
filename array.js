let name = ["yuda", "wira", "pratama", "aloy"]

for (let i = 0; i < name.length; i++) {
    let element = name[i];
   // console.log(`mahasiswa ke - ${i+1}. ${element.toUpperCase()}`);
}

// name.push("ganteng")
//
// name.pop();
//
// name.unshift("Asep");
//
// name.shift();

// name.splice(1, 2, "Asep", "Rudy");

// let name2 = name.slice(1,3)

// console.log(name2.join(' - '));

// name.forEach(function (item, index) {
//     console.log(`${index +1}. Halo, ${item} !`);
// })

let angka = [3,6,9,12];

angka.forEach(function (nilai, index) {
    if (nilai % 2 === 0 ){
        console.log(`Index ${index +1}: Genap`)
    } else {
        console.log(`Index ${index+1}: Ganjil`)
    }
})

