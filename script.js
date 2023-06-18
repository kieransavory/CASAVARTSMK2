function scrollCheck(){


    let currentPos = window.scrollY;
    const heroSection = document.getElementById('heroSection');
    const heroPos = heroSection.offsetTop

    const aboutSection = document.getElementById('aboutSection')
    const aboutPos = aboutSection.offsetTop

    const tattooSection = document.getElementById('tattooSection');
    const tattooPos = tattooSection.offsetTop

    if (currentPos <= heroPos) {
        document.getElementById('homenav').style.opacity = "1"
    } else document.getElementById('homenav').style.opacity = "0.5"

    if (currentPos >= aboutPos && currentPos < tattooPos) {
        document.getElementById('aboutnav').style.opacity = "1";
    } else if (currentPos === tattooPos) {
        document.getElementById('aboutnav').style.opacity = "0.5";
    } else if (currentPos > heroPos < aboutPos) {
        document.getElementById('aboutnav').style.opacity = "0.5";
    }

    if (currentPos === tattooPos) {
        document.getElementById('tattoonav').style.opacity = "1";
    } else document.getElementById('tattoonav').style.opacity = "0.5";




    console.log(
       currentPos, tattooPos
    );
}

function navClickHandler() {
    
    const navButton = document.getElementById('navbarbutton');
    const navMenu = document.getElementById('navbar');
    const buttonText = document.getElementById('buttonspan');

    navButton.classList.toggle('active');
    navMenu.classList.toggle('active');
    buttonText.classList.toggle('active')

}



function homeScroll() {
    const heroPos = heroSection.offsetTop;
    window.scrollTo(0, heroPos);
}

function aboutScroll() {
    const aboutPos = aboutSection.offsetTop
    window.scrollTo(0, aboutPos)
}

function tattooScroll() {
    const tattooPos = tattooSection.offsetTop
    window.scrollTo(0,tattooPos)
}