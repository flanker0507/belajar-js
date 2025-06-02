// //DOM Selection
// // document.getElementById() -> mengembalikan Element
// const judul = document.getElementById('judul');
// judul.style.color = "red";
// judul.style.backgroundColor = "green";
// judul.innerHTML = "Yuda Ganteng";
//
// // document.getElementsByTagName() -> HTMLCollection
// const p = document.getElementsByTagName('p');
// for (let i = 0; i < p.length; i++) {
//     p[i].style.color = "green";
//     p[i].style.backgroundColor = "pink";
// }
//
// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = "50px";
//
// // document.getElementsByClassName();
// // HTMLCollection
// const p1 = document.getElementsByClassName('p1');
// p1[0].innerHTML = "Yuda Calon Orang Sukses dan Kaya !!!";


// document.querySelector() -> element
// const p4 = document.querySelector('#b p');
// p4.style.backgroundColor = 'red';
//
// const li2 = document.querySelector('section ul li:nth-child(2)');
// li2.style.backgroundColor = 'blue';
//
// // document.querySelectorAll()
// const p = document.querySelectorAll('p');
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'green';
// }


const section8 = document.querySelector('section#b');
const p4 = section8.getElementsByTagName('p')[0];
p4.style.backgroundColor = "orange";