let jmlAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++){
    if (noAngkot <= angkotBeroperasi){
        console.log("Angko No. " + noAngkot + " beroperasi dengan baik.")
    } else {
        console.log("Angko No. " + noAngkot + " sedang tidak beroperasi.")
    }
}