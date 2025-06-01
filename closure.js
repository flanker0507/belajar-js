// 1. Pembuat Password Gnerator

function buatPasswordGenerator(panjang) {
    const karakter = "abcdefghijklmnopqrstuvwxyzABZDEFGHIJKLMNOPQRSTUVWXYZ123456789"

    return function () {
        let password = "";
        for (let i = 0; i < panjang; i++) {
            const acak = Math.floor(Math.random() * karakter.length);
            const huruf = karakter[acak];

            // Debug
            console.log(`Iterasi ke-${i}`);
            console.log(`> Index acak: ${acak}`);
            console.log(`> Karakter terpilih: ${huruf}`);
            console.log(`> Password sementara: ${password + huruf}`);
            console.log(`------------------------------------------`);

            password += karakter[acak];
        }
        return password;
    };
}

const generate8Digit = buatPasswordGenerator(8);
console.log("Password Akhir: ",generate8Digit());
