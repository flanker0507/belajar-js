const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function ()  {
    // alert('clicked!');

    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const teksLiNew = document.createTextNode('Item Baru');

    liBaru.appendChild(teksLiNew)
    ul.appendChild(liBaru)
})

const p3 = document.querySelector('.p3');

p3.addEventListener('mouseenter', function () {
    p3.style.backgroundColor = 'lightblue'
    p3.style.color = 'red'
});

p3.addEventListener('mouseleave', function () {
    p3.style.color = 'black'
    p3.style.backgroundColor = 'white'

});