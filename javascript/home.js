$(()=> {
  const showSlide = () =>{
      const imageSize = document.querySelector('.news-image');
      const newSlide = document.querySelector('.news-latest');
      newSlide.style.height = imageSize.height+"px";
  }
  
  const slideImg = () =>{
        const slideCount = $('.news-image').length;
        const slideWidth = $('.news-image').width();
        const totalwidth = slideCount * slideWidth;
        console.log(slideWidth);
        $('.news-slide').css({
            width: slideWidth,  
            marginLeft : -slideWidth
        });
        $('.news-image:last-child').prependTo(".news-slide");

        $('.left-slider').click(() => { 
            $('.news-slide').animate({left: +slideWidth},500, ()=>{
                $('.news-image:last-child').prependTo(".news-slide");
                $('.news-slide').css({left:0});
            })
        });

        $('.right-slider').click(() => { 
            $('.news-slide').animate({left: -slideWidth },500, ()=>{
                $('.news-image:first-child').appendTo(".news-slide");
                $('.news-slide').css({left:0});
            })
        });

    }


  
  const appsHome = () =>{
      showSlide();
      slideImg();
  }
  
  appsHome();
});