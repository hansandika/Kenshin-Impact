const navSlide = () => {
    const burger = document.querySelector('.burger');
    const sidebar = document.querySelector(".sidebar");
    const navLink = document.querySelectorAll('.sidebar-content');

    burger.addEventListener('click', () => {
        sidebar.classList.toggle('menu-active');   
        navLink.forEach((e,index) => {
            if(e.style.animation){
                e.style.animation = "";
            }else{
                e.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 0.5}s`
            }
        })
        burger.classList.toggle('toggle');
    })
}

const navbarLogo = document.querySelector("#logo-navbar");
const mainLogo = document.querySelector('#logo-main');
const navbar = document.querySelector('nav');
document.addEventListener('scroll',() => {
    if(window.scrollY > 0){
        navbarLogo.style.visibility = 'visible';
        mainLogo.style.visibility = "hidden";
        navbar.style.backgroundColor = "rgb(0, 0, 0, 0.8)";
        console.log(window.scrollY)
    }
    else if(window.scrollY == 0){
        navbarLogo.style.visibility = 'hidden';
        mainLogo.style.visibility = 'visible';
        navbar.style.backgroundColor = "rgb(0, 0, 0, 0)";
    }
})


navSlide();