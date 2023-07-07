//navabr fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    // const toTop = document.querySelector('#to-top');

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        // toTop.classList.add('fixed');
        // toTop.classList.remove('hidden');
    }else{
        header.classList.remove('navbar-fixed');
        // toTop.classList.add('hidden');
        // toTop.classList.remove('fixed');
    }

}

//hamburger

const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    nav.classList.toggle('hidden');
});

//klik dimanapun

window.addEventListener('click', function(e){
    if(e.target != hamburger && e.target != nav){
        hamburger.classList.remove('hamburger-active');
        nav.classList.add('hidden');
    }
});

//Dark mode

const checkbox = document.querySelector("#dark-toggle");

const html = document.querySelector("html");

checkbox.addEventListener('click', function(){
    if(checkbox.checked){
        html.classList.add('dark');
        localStorage.theme = 'dark';
    }else{
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    checkbox.checked = true;
  } else {
    checkbox.checked = false;
  }