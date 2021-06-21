const loaderWrapper = document.createElement('div');
loaderWrapper.classList.add('loader-wrapper');
const loader = document.createElement('div');
loader.classList.add("loader");
loader.textContent = "Please Wait ";
loaderWrapper.appendChild(loader);
loaderWrapper.style.position = "fixed";
document.querySelector('body').prepend(loaderWrapper);

$(()=>{ 
  setTimeout(()=>{
    $(".loader-wrapper").slideUp('slow');
  },2300)
});