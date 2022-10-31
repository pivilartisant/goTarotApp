//Declaring my variables
const burgerMenu = document.getElementById('burger-menu')
const nav = document.getElementById('nav-link')
const burgerIcon = document.getElementById('menu-icon')

const navLink1 = document.getElementById('home');
const navLink2 = document.getElementById('search');
const navLink3 = document.getElementById('about');
const navLink4 = document.getElementById('support');

//Burgermenu click event listener
burgerMenu.addEventListener('click',()=>burgerClick());

//Burger menu function which toggle a couple of different classes

function burgerClick (){
    burgerMenu.classList.toggle('active')
    nav.classList.toggle('active')
    burgerIcon.classList.toggle('toggled')
}

//click on nav event listeners 
navLink1.addEventListener('click',()=> navClick());
navLink2.addEventListener('click',()=> navClick());
navLink3.addEventListener('click',()=> navClick());

//this function removes a number of the classes that we're previously added 
function navClick (){
    burgerMenu.classList.remove('active')
    burgerIcon.classList.remove('toggled')
    nav.classList.remove('active')
}

