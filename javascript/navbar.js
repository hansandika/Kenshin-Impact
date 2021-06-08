window.addEventListener("load", () => {
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
  
  window.addEventListener("resize", () => {
      const navbarLogo = document.querySelector("#logo-navbar");
      const navbar = document.querySelector('nav');
      if(screen.width >= 1025){
          navbar.style.backgroundColor= "rgba(0, 0, 0, 0.6)";
          navbarLogo.style.visibility = 'visible';
      }else{
          if(window.scrollY > 0){
              navbarLogo.style.visibility = 'visible';
              navbar.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
          }
          else if(window.scrollY == 0){
              navbarLogo.style.visibility = 'hidden';
              navbar.style.backgroundColor = "rgba(0, 0, 0, 0)";
          }
      }
      slide();
  })
  
  const windowSize = () => {
      const navbarLogo = document.querySelector("#logo-navbar");
      const navbar = document.querySelector('nav');
      if(screen.width < 1025){
          navbarLogo.style.visibility = 'visible';
          navbar.style.backgroundColor = "rgba(0, 0, 0, 0.4)";  
      }
  };
  
  
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
  
  const slide = () => {
      const slider = document.querySelector('.slide');
      var item = document.querySelectorAll('.menu-bar li');
      const dropdown = document.querySelector('.dropdown-content');
      const activeNavbar = document.querySelector('.active-navbar');
      indicator(activeNavbar.children[0]);
      function indicator(e){
          slider.style.left = e.offsetLeft + 'px';
          slider.style.width = e.offsetWidth + 'px';
      }
  
      item.forEach(e => {
          e.addEventListener('mouseover',(e) => {
              if(e.target.parentElement.classList.contains('dropdown-content')){
                  indicator(e.target.parentElement.parentElement.children[0]);
              }
              else{
                  indicator(e.target.children[0]);
              }
          })
          e.addEventListener('mouseout',(e) => {
              indicator(activeNavbar.children[0]);
          })
      });
  
      item[1].addEventListener('mouseover',(e) => {
          dropdown.style.left = item[1].offsetLeft + 'px';
      })
  }
  
  const app = () => {
      navSlide();
      scroll();
      slide();
      windowSize();
  }
  
  app();
});


