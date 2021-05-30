const background = document.querySelector('.character-background');
var flag = true;

setInterval(()=>{
    if(flag){
        background.style.backgroundImage = "url('../assets/background/Liyue.jpg')";
    }else{  
        background.style.backgroundImage = "url('../assets/background/Mondstat.png')";
    }
    flag = !flag;
},15000)

let currSlideIndex = 0;
const slider = () =>{
    const leftSlider =  document.querySelector('.left-slider');
    const rightSlider = document.querySelector('.right-slider');
    const activeDiv = document.querySelectorAll('.active-div');
    const size = activeDiv[3].children.length;


    leftSlider.addEventListener('click',()=>{
        if(currSlideIndex === 0){
            currSlideIndex = size-1;
        }else{
            currSlideIndex--;
        }
        showSlider(currSlideIndex);
    })

    rightSlider.addEventListener('click',()=>{
        if(currSlideIndex === size-1){
            currSlideIndex = 0;
        }else{
            currSlideIndex++;
        }
        showSlider(currSlideIndex);
    })
}

const showSlider = (index) => {
    const activeDiv = document.querySelectorAll('.active-div');
    const characterName= activeDiv[0];
    const characterText = activeDiv[1];
    const characterImage = activeDiv[2];
    const imageContent = activeDiv[3];

    for (let i = 0; i < imageContent.children.length; i++) {
        imageContent.children[i].className = imageContent.children[i].className.replace(" active-character"," ");
    }
    imageContent.children[index].classList.add("active-character");

    for(let i = 0;i < characterImage.children.length;i++){
        characterImage.children[i].className = characterImage.children[i].className.replace(" active-character-image"," ");
    }
    characterImage.children[index].classList.add("active-character-image");

    for(let i = 0;i < characterName.children.length;i++){
        characterName.children[i].className = characterName.children[i].className.replace(" active-character-name"," ");
    }
    characterName.children[index].classList.add("active-character-name");

    for(let i = 0;i < characterText.children.length;i++){
        characterText.children[i].className = characterText.children[i].className.replace(" active-character-text"," ");
    }
    characterText.children[index].classList.add("active-character-text");
}

const imageShow = () => {
    window.addEventListener('click',(e)=>{
        const activeDiv = document.querySelectorAll('.active-div');
        const imageContent = activeDiv[3].children;
        let index;
        let nowSlide = e.target;
        flag = false;
        for(let i = 0;i < imageContent.length;i++){
            if(imageContent[i] === nowSlide){
                index = i;
                currSlideIndex = index;
                flag = true;
            }
        }
        if(!nowSlide.classList.contains('active-character') && flag){
            showSlider(index);
        }
    })
}

const map = () =>{
    
    window.addEventListener('click',(e)=>{
        if(e.target.classList.contains('map-content')){
            const mapContent = document.querySelectorAll('.map-content');
            let currIndex;
            let slideIndex;
            for (let i = 0; i < mapContent.length; i++) {
                if(mapContent[i].classList.contains('map-active')){
                    currIndex = i;
                }
                if(e.target == mapContent[i]){
                    slideIndex=  i;
                }
            }

            const characterNameDiv = document.querySelectorAll('.character-name-div');
            const characterTextDiv = document.querySelectorAll(".character-text-div");
            const imageDiv = document.querySelectorAll('.character-image-div');
            const imageList = document.querySelectorAll('.image-list');
            if(currIndex !== slideIndex){
                currSlideIndex = 0;
                showSlider(0);
                mapContent[currIndex].className = mapContent[currIndex].className.replace(' map-active',' ');
                mapContent[slideIndex].classList.add('map-active');
                if(currIndex === 0){
                    characterNameDiv[0].classList.remove('active-div');
                    characterTextDiv[0].classList.remove("active-div");
                    imageDiv[0].classList.remove("active-div");
                    imageList[0].classList.remove('active-div');

                    characterNameDiv[1].classList.add('active-div');
                    characterTextDiv[1].classList.add('active-div');
                    imageDiv[1].classList.add('active-div');
                    imageList[1].classList.add('active-div');
                }else{
                    characterNameDiv[0].classList.add('active-div');
                    characterTextDiv[0].classList.add('active-div');
                    imageDiv[0].classList.add('active-div');
                    imageList[0].classList.add('active-div');

                    characterNameDiv[1].classList.remove('active-div');
                    characterTextDiv[1].classList.remove("active-div");
                    imageDiv[1].classList.remove("active-div");
                    imageList[1].classList.remove('active-div');

                }
            }
        }
    })
}

const appCharacter = ()=>{
    slider();
    imageShow();
    map();
}

appCharacter();

// const activeDiv = document.querySelectorAll('.active-div');
// console.log('tetst' , activeDiv[3].children.length);