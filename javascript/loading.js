const loaderWrapper = document.createElement('div');
loaderWrapper.classList.add('loader-wrapper');
const span = document.createElement('span');
span.classList.add('loader');
const span2 = document.createElement('span');
span2.classList.add('loader-inner');
span.appendChild(span2);
loaderWrapper.appendChild(span);
document.querySelector('body').prepend(loaderWrapper);

$(()=>{ 
  setTimeout(()=>{
    $(".loader-wrapper").slideUp('slow')
  },2500)
});

