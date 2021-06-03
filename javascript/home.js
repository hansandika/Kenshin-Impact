const scroll = () => {
    const navbarLogo = document.querySelector("#logo-navbar");
    const navbar = document.querySelector('nav');
    document.addEventListener('scroll',() => {
        if(screen.width < 1025){
            if(window.scrollY > 0){      
                navbarLogo.style.visibility = 'visible'; 
                navbar.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
            }
            else if(window.scrollY == 0){
                navbarLogo.style.visibility = 'hidden';
                navbar.style.backgroundColor = "rgba(0, 0, 0, 0)";
            }
        }
    })
}


const windowSizeHome = () => {
    const navbarLogo = document.querySelector("#logo-navbar");
    const navbar = document.querySelector('nav');
    if(screen.width < 1025){
        navbarLogo.style.visibility = 'hidden';
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
};

const appHome = () => {
    scroll();
    windowSizeHome();
}

appHome();