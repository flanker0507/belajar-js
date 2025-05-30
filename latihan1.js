    let penumpang = [];

let tambahPenumpang = function (namaPenumpang, penumpang) {
    //1. Jika angkot kosong
    if (penumpang.length === 0) {
        penumpang.push(namaPenumpang);
        return penumpang;
    } else {
        //2. Telusuri seluruh kursi dari awal
        for (let i = 0; i < penumpang.length; i++) {
            // a. Jika ada kursi
            if (penumpang[i] === undefined) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            }
            //b. Jika nama sudah ada
            else if (penumpang[i] === namaPenumpang) {
                console.log(`${namaPenumpang} sudah ada di dalam angkot.`);
                return penumpang;
            }
        }
        //3. Jika seluruh kursi terisi
        penumpang.push(namaPenumpang);
        return penumpang;
    }
}

let hapusPenumpang = function (namaPenumpang, penumpang) {
    //1. Cek apakah angkot kosong
    if (penumpang.length === 0) {
        console.log("Angkot masih kosong");
        return penumpang;
    }

    //2. Telusuri kursi 1 per 1
    for (let i = 0; i < penumpang.length; i++) {
        if (penumpang[i] === namaPenumpang) {
            //3. Hapus penumpang
            penumpang[i] = undefined;
            return penumpang;
        }
    }

    //4. Jika tidak ditemukan
    console.log(`${namaPenumpang} Tidak ada di dalam angkot.`);
    return penumpang;
}

tambahPenumpang("Yuda", penumpang);
tambahPenumpang("Wira", penumpang);
tambahPenumpang("Pratama", penumpang);

console.log(penumpang);

penumpang[1] = undefined;
console.log(penumpang);
tambahPenumpang("Asep", penumpang);
tambahPenumpang("Kasep", penumpang);
console.log(penumpang);

