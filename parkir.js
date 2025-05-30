const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Data Kendaraan
// const kenderaan = {
//     nopol: undefined,
//     warna: undefined,
//     jenis: undefined,
//     lamaParkir: undefined,
// }

function tampilanMenu() {
    console.log('\n=== PARKEE ====')
    console.log('1. Sepeda Motor')
    console.log('2. Mobil')
    console.log('3. Keluar')
    rl.question('Pilih Jenis Kenderaan (1/2/3): ',handleMenu)
}

// Proses input data dan perhitungan
function prosesParkir(jenis) {
    console.log(`=== Input untuk ${jenis.toUpperCase()} ====`);
    rl.question('Masukkan Nomor Polisi: ', (nopol) => {
        rl.question('Masukkan Warna Kenderaan: ', (warna) => {
            rl.question('Masukkan Lama Parkir (jam): ', (lamaStr) => {
                const lamaParkir = parseInt(lamaStr);
                let totalBiaya = 0;

                if (jenis === 'motor') {
                    totalBiaya += 3000;
                    for (let i = 2; i <= lamaParkir ; i++) {
                        totalBiaya += 2000;
                    }
                } else if (jenis === 'mobil') {
                    totalBiaya += 7000
                    for (let i = 2; i <= lamaParkir ; i++) {
                        totalBiaya += 5000;
                    }
                }

                console.log(`\n=== DETAIL PARKIR ===`);
                console.log(`Nopol          : ${nopol.toUpperCase()}`);
                console.log(`Warna          : ${warna.toUpperCase()}`);
                console.log(`Jenis          : ${jenis.toUpperCase()}`);
                console.log(`Lama Parkir    : ${lamaParkir} JAM`);
                console.log(`Total Biaya    : Rp ${totalBiaya.toLocaleString()}`);

                // Tanya apakah ingin ulang
                rl.question("\nApakah masih mau berhitung lagi? (y/n): ", (jawaban) => {
                    if (jawaban.toLocaleLowerCase() === "y") {
                        tampilanMenu();
                    } else {
                        console.log("Terima Kasih telah menggunakan PARKEE");
                        rl.close();
                    }
                })

            })
        })
    })
}

function handleMenu(pilihan) {
    if (pilihan === '1') {
        prosesParkir("motor")
    } else if (pilihan === '2') {
        prosesParkir("mobil")
    } else if (pilihan === '3') {
        console.log("Good Luck");
        rl.close()
    } else {
        console.log("Pilihan Tidak Valid")
        tampilanMenu();
    }
}


// jalankan program
tampilanMenu();