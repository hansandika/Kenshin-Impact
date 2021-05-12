const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector(".sidebar");
    const navLink = document.querySelectorAll('.sidebar-content');

    burger.addEventListener('click', () => {
        nav.classList.toggle('menu-active');   
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

navSlide();