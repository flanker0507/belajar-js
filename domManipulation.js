// const judul = document.getElementById('judul');
// judul.innerHTML = "<em>Yuda Ganteng Habiezz</em>"
//
// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = "Yuda adalah seorang yang sukses dan dermawan"



// const judul = document.querySelector('#judul');
// judul.style.color = "lightblue";
// judul.style.backgroundColor = "salmon";

// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'yuda');

// const a = document.querySelector('section#a a');
//
// const p2 = document.querySelector('.p2')

// buat element baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Yuda Ganteng Habiezz');
// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru)

// simpan pBaru di akhir Section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru)

const liBaru = document.createElement('li');
const teksLiNew = document.createTextNode('Item Baru');

liBaru.appendChild(teksLiNew)

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)')

ul.insertBefore(liBaru,li2)

const link = document.getElementsByTagName('a')[0];

sectionA.removeChild(link)
