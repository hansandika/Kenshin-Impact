const burger = document.querySelector('.burger');
const sidebar = document.querySelector(".sidebar");
const navLink = document.querySelectorAll('.sidebar-content');
const sidebarDiv = document.querySelector('.sidebar-div');
const navSlide = () => {
    burger.addEventListener('click', () => {
        sidebarDiv.style.display = "block";
        if(sidebar.classList.contains('menu-active')){
            sidebar.classList.remove('menu-active');
        }
        else{
            sidebar.classList.add('menu-active');
        } 
        navLink.forEach((e,index) => {
            if(e.style.animation){
                e.style.animation = "";
            }else{
                e.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 0.25}s`
            }
        })
        if(burger.classList.contains('toggle')){
            burger.classList.remove('toggle');
            sidebarDiv.style.display = "none";
        }else{
            burger.classList.add('toggle');
        }
    })
}

const scroll = () => {
    const navbarLogo = document.querySelector("#logo-navbar");
    const mainLogo = document.querySelector('#logo-main');
    const navbar = document.querySelector('nav');
    document.addEventListener('scroll',() => {
        if(screen.width < 770){
            if(window.scrollY > 0){
                navbarLogo.style.visibility = 'visible';
                mainLogo.style.visibility = "hidden";
                navbar.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
                // console.log(window.scrollY)
            }
            else if(window.scrollY == 0){
                navbarLogo.style.visibility = 'hidden';
                mainLogo.style.visibility = 'visible';
                navbar.style.backgroundColor = "rgba(0, 0, 0, 0)";
            }
        }
    })
}

window.addEventListener('click', (e) =>{
    if(e.target == sidebarDiv && sidebarDiv.style.display == "block"){
        sidebarDiv.style.display = "none";
        sidebar.classList.remove('menu-active');
        burger.classList.remove('toggle');
        navLink.forEach((e,index) => {
            if(e.style.animation){
                e.style.animation = "";
            }else{
                e.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 0.25}s`
            }
        })
    }
})

const app = () => {
    navSlide();
    scroll();
}

app();