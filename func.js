// function jumlahTotal(a,b) {
//     // let total
//     // total = a + b
//     // console.log(`Total: ${total}`)
//     return a + b;
//
// }
//
// console.log(jumlahTotal(100,200))

//
// function hello(object) {
//     console.log(`Hello ${object.name} tinggal di ${object.address}`);
// }
//
// hello({
//     address: 'Binjai',
//     name: 'John',
// })


// function hello(listName) {
//     for (let i = 0; i < listName.length; i++) {
//         console.log(`Hello ${listName[i]}`);
//     }
// }
//
//
// hello(['Ipul', 'Komar', 'Izal']);
//
// function hello(listName) {
//     for (let i = 0; i < listName.length; i++) {
//         const element = listName[i];
//         console.log(`Hello ${element}`);
//     }
// }
//
// hello(['Ipul', 'Komar', 'Izal']);
//
// function getFinalScore(value) {
//     if (value >= 90) {
//         return "A"
//     } else if (value > 80) {
//         return "B"
//     } else if (value > 70) {
//         return "C"
//     } else if (value > 60) {
//         return "D"
//     } else {
//         return "E"
//     }
// }
//
// let score = getFinalScore(81)
// console.log(`Nilai Anda : ${score}`)

// function isContains(array, searchValue) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === searchValue) {
//             console.log(array[i]);
//             return true;
//         }
//     }
//     console.log(searchValue);
//     return false
// }
//
// let array = [1, 2, 3, 4, 5];
// let searchValue = 5;
// let found = isContains(array, searchValue);
// console.log(found);

// const say = function (name) {
//     console.log(`Hello ${name}`)
// }
//
// say("Anto")
//
// function giveMeName(callback) {
//     callback("Sambo")
// }
//
// giveMeName(say)
//
// giveMeName(function (name) {
//     console.log(`Hi ${name}`)
// })

function hitung(a,b) {
    console.log(a,b)
    return a - b;
}

