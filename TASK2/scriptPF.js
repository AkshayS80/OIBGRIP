let menu=document.querySelector('#menu-btn');
let navbar= document.querySelector('.navbar');


var typed = new Typed(".auto-type",{
    strings: ["a College Student", "an Open-Source Contributor","a Poet","a Dancer","a Coder"],
    typeSpeed:100,
    backSpeed:50,
    loop:true
});

var sample =  document.getElementById('h')

menu.addEventListener('click',() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

