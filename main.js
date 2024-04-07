// Show menu

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    //Validate that variables exist

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            //we add the show-menu class to the div tog with the nav__menu
            nav.classList.toggle('show-menu');
            console.log("Nav clicked")
        })
        console.log("Running")
    }

}
showMenu('nav-toggle', 'nav-menu');

//Remove Menu Mobile

const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    //When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach((item)=>{
    item.addEventListener('click',linkAction)
})

//Scroll Sections Active link

const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach((current)=>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offserTop - 50;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive)

// Change Background Header

function scrollHeader(){
    const nav = document.getElementById('header');
    //When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag

    if(this.scrollY >= 200){
        nav.classList.add('scroll-header')
    }else{
        nav.classList.remove('scroll-header');
    }

    console.log("scrolling")
}

window.addEventListener('scroll', scrollHeader)

function scrollTop(){
    const scrollTop = document.getElementById('scrollTop');
    
    // when the scroll is heigher than 560vh, add the show-scroll class to the a tag with the scroll-top class
    
    if(this.scrollY >= 560){
        scrollTop.classList.add('show-scroll')
    }else{
        scrollTop.classList.remove('show-scroll');
    }
    
}

window.addEventListener('scroll', scrollTop)

// Dark Light Theme

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

//Previously selected topic (if user selected)

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

//We obtain the current theme that the interface has by validating the dark theme class

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

//We validate if the user previously choose a topic

if(selectedTheme){
    //If the validation is fulfilled, we ask what the issue was to know if we activate or deactivate the dark

    document.body.classList[selectedTheme==='dark'?'add':'remove'](darkTheme)
    themeButton.classList[selectedTheme==='bx-moon'?'add':'remove'](iconTheme)
}

//Activate or deactivate the theme manually

themeButton.addEventListener('click',()=>{
    //Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    //We save the theme and the current icon that the user choose

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})