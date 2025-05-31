function Angkot (sopir, trayek, penumpang, kas){
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang){
        if(this.penumpang.length === 0){
            this.penumpang.push(namaPenumpang)
            return this.penumpang;
        }else{
            for(let i=0; i<this.penumpang.length; i++){
                if(penumpang[i]===undefined){
                    penumpang[i] = namaPenumpang;
                    return this.penumpang;
                } else if(penumpang[i] === namaPenumpang){
                    console.log(`${namaPenumpang} sudah berada di dalam angkot `)
                    return this.penumpang;
                }
            }
            this.penumpang.push(namaPenumpang);
            return this.penumpang;
        }
    }

    this.penumpangTurun = function(namaPenumpang, bayar){
        if(this.penumpang.length === 0){
            console.log('Angkot masih kosong')
            return this.penumpang;
        }

        for(let i = 0; i < this.penumpang.length; i++){
            if(this.penumpang[i] === namaPenumpang){
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
        console.log(`${namaPenumpang} tidak ada di dalam angkot`)
        return this.penumpang
    }
}



let angkot1 = new Angkot('Asep Suryadi', ['Binjai', 'Tanjung Balai'], [], 0);
let angkot2 = new Angkot('Ucok Purnama', ['Takengon', 'New York'], [], 0);