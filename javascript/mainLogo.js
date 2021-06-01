const mainLogo = document.querySelector('#logo-main');
document.addEventListener('scroll',() => {
    if(screen.width < 770){
        if(window.scrollY > 0){
            mainLogo.style.visibility = "hidden";
        }
        else if(window.scrollY == 0){
            mainLogo.style.visibility = 'visible';
        }
    }
})