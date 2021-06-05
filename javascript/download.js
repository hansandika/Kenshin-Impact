const appDownload = () =>{
    const media = document.querySelectorAll('.media');
    const activeMedia = document.querySelector('.active-media');
    const specification = document.querySelectorAll('.specification');
    media.forEach(e => {
        e.addEventListener('click',() => {
            if(!e.classList.contains('active-media')){
                let index;
                for(let i = 0;i < media.length;i++){
                    if(media[i] === e){
                        index = i;
                    }
                    if(media[i].classList.contains('active-media')){
                        media[i].classList.remove('active-media');
                    }
                    if(specification[i].classList.contains('active-specification')){
                        specification[i].classList.remove('active-specification');
                    }
                }   
                media[index].classList.add('active-media');
                specification[index].classList.add('active-specification');
            }
        });
    });
}  

appDownload();