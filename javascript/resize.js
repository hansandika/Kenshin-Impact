window.addEventListener('load',() => {
    const resize = () => {
        window.addEventListener("resize", () => {
            const navbarLogo = document.querySelector("#logo-navbar");
            const navbar = document.querySelector('nav');
            if(screen.width >= 1025){
                navbar.style.backgroundColor= "rgba(0, 0, 0, 0.6)";
                navbarLogo.style.visibility = 'visible';
            }else{
                navbarLogo.style.visibility = 'visible';
                navbar.style.backgroundColor = "rgba(0, 0, 0, 0.4)";  
            }
        })
    }

    resize();
})