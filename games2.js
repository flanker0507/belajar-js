let main = true;

while (main){
    alert("Tebak angka dari 1 - 10\nKamu punya 3 kesempatan");

    // generate angka acak
    let angkaBenar = Math.floor(Math.random() *10)+1;
    let kesempatan = 3;
    let menang = false;

    while (kesempatan > 0) {
        let tebakan = prompt("Masukkan tebakan kamu (1-10): ");

        //ubah ke int
        tebakan = parseInt(tebakan)

        if (tebakan === angkaBenar){
            alert("Selamat !, Tebakan kamu benar Angka yang benar adalah " + angkaBenar)
            menang = true;
            break;
        } else if (tebakan < angkaBenar){
            alert("Tebakan Kamu Terlalu Kecil")
        } else if (tebakan > angkaBenar){
            alert("Tebakan Kamu Terlalu Besar")
        } else {
            alert("Angka Invalid !!!")
        }

        kesempatan--
    }

    if (!menang){
        alert("Kesempatan Habis !!! Angka yang benar adalah " + angkaBenar)
    }

    console.log(angkaBenar)


    main = confirm("Main Lagi ?")
}

alert("Terima kasih sudah bermain!");
