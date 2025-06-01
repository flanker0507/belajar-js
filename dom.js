//DOM Selection
// document.getElementById() -> mengembalikan Element
const judul = document.getElementById('judul');
judul.style.color = "red";
judul.style.backgroundColor = "green";
judul.innerHTML = "Yuda Ganteng";

// document.getElementsByTagName() -> HTMLCollection
const p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++) {
    p[i].style.color = "green";
    p[i].style.backgroundColor = "pink";
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = "50px";

// document.getElementsByClassName();
// HTMLCollection
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = "Yuda Calon Orang Sukses dan Kaya !!!";