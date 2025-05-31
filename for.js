// for (nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal++){
//     console.log("Hello World " + nilaiAwal)
// }

const data = [
    {id: 1, name: 'Asep', food:'Fried Rice'},
    {id: 2, name: 'Jane', food:'Sate'},
    {id: 3, name: 'Doe', food:'Sushi'},
    {id: 4, name: 'Doer', food:'Durian'},
    {id: 5, name: 'Doeni', food:'Martabak'},
];

for (let i = 0; i < data.length; i++) {
    if (data[i].food === 'Sushi'){
        // console.log(data[i].name)
        continue
    }
    console.log(data[i].name)

}