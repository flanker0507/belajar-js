const data = [
    {id: 1, name: 'Asep', food: 'Bakso'},
    {id: 2, name: 'Asoy', food: 'Sushi'},
    {id: 3, name: 'Asepti', food: 'Nasi'},
    {id: 4, name: 'Ucok', food: 'Mie Ayam'},
    {id: 5, name: 'Aduy', food: 'Saksang'},
];

// turn data to be map
const dataMap = {};
for (let i = 0; i < data.length; i++) {
    // console.log(`sebelum MAP ${data[i].name.toLocaleLowerCase()}`);
    dataMap[data[i].name.toLocaleLowerCase()] = data[i];
    // console.log(`setelah MAP ${dataMap[i].name}`);
};

console.log(dataMap.asep.food);