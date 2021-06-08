window.addEventListener('load',() => {
    const mainLogo = document.querySelector('#logo-main');
    document.addEventListener('scroll',() => {
        if(screen.width < 1025){
            if(window.scrollY > 0){
                mainLogo.style.visibility = "hidden";
            }
            else if(window.scrollY == 0){
                mainLogo.style.visibility = 'visible';
            }
        }
    })
})