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

// const generate8Digit = buatPasswordGenerator(8);
// console.log("Password Akhir: ",generate8Digit());

// 2. Menghitung klik tombol

function buatCounterKlik() {
    let jumlahKlik = 0 ;

    return function () {
        jumlahKlik++;
        console.log(`Tombol diklik: ${jumlahKlik} kali`);
    }
}

// const hitungKlik = buatCounterKlik();
//
// hitungKlik();
// hitungKlik();
// hitungKlik();

// 3. Cache sederhana
function buatCache() {
    const cache = {};

    return function (angka) {
        if (cache[angka]) {
            console.log(`Ambil dari cache: ${cache[angka]}`);
            return cache[angka];
        }else {
            const hasil = angka * angka;
            cache[angka] = hasil;
            console.log(`Hitung baru: ${hasil}`);
            return hasil;
        }
    };
}

const kuadratDenganCache = buatCache();

kuadratDenganCache(5)
kuadratDenganCache(5)
kuadratDenganCache(6)
kuadratDenganCache(6)
