const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
// Rumus BMI:
//     BMI = berat badan (kg) / (tinggi badan (m))^2.
// Keterangan:
//     Berat badan ideal: BMI antara 18,5 hingga 24,9.
// Berat badan kurang: BMI kurang dari 18,5.
// Berat badan berlebih: BMI 25 atau lebih.
//     Obesitas: BMI 30 atau lebih.

// let weight = null;
// let height = null;
//
// const bmi = weight / (height ** 2);


rl.question('Masukkan Berat Badan (kg): ', (beratInput) => {
    const weight = parseFloat(beratInput);

    rl.question('Masukkan Tinggi Badan (m): ', (tinggiBadan) => {
        const height = parseFloat(tinggiBadan) / 100;
        const bmi = weight / (height ** 2);

        console.log(`BMI Anda: ${bmi.toFixed(2)}`);

        if (bmi < 18.5){
            console.log("Berat badan kurang")
        } else if (bmi >= 18.5 && bmi <= 24.9){
            console.log("Berat badan ideal")
        } else if (bmi >= 25 && bmi < 30){
            console.log("Berat badan berlebih")
        }else {
            console.log("Obesitas")
        }

        rl.close()
    });
});
