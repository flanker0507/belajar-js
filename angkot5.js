let jmlAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++){
   if ( noAngkot <= angkotBeroperasi && noAngkot !== 5){
        console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.")
    } else if ( noAngkot % 5 === 0 ||noAngkot % 8 === 0 || noAngkot % 10 === 0){
        console.log("Angkot No. " + noAngkot + " sedang lembur.")
    } else {
        console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.")
    }
}