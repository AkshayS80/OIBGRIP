let menu=document.querySelector('#menu-btn');
let navbar= document.querySelector('.navbar');

var sample =  document.getElementById('h')

menu.addEventListener('click',() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    // sample.style.borderRadius = "20px 20px 0px 0px";
});


