function scrollCheck(){

    let currentPos = window.scrollY;
    const heroSection = document.getElementById('heroSection');
    const heroPos = heroSection.offsetTop
    const aboutSection = document.getElementById('aboutSection')
    const aboutPos = aboutSection.offsetTop

    if (currentPos === heroPos) {
        document.getElementById('homenav').style.opacity = "1"
    } else document.getElementById('homenav').style.opacity = "0.5"

    if (currentPos === aboutPos) {
        document.getElementById('aboutnav').style.opacity = "1"
    } else document.getElementById('aboutnav').style.opacity = "0.5"


    console.log(currentPos, heroPos);
}

function navClickHandler() {
    
    const navButton = document.getElementById('navbarbutton');
    const navMenu = document.getElementById('navbar');
    const buttonText = document.getElementById('buttonspan');

    navButton.classList.toggle('active');
    navMenu.classList.toggle('active');
    buttonText.classList.toggle('active')

}