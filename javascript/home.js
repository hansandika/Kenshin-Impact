 $(()=>{    
  const showSlide = () =>{
      const imageSize = document.querySelector('.news-image img');
      const newSlide = document.querySelector('.news-latest');
    newSlide.style.height = imageSize.height+"px";
  }
  
  const slideImg = () =>{
        const slideWidth = $('.news-image').width();
        $('.news-slide').css({
            width: slideWidth,  
            left : -slideWidth
        });
        $('.news-slide').prepend($('.news-image:last-child'));

        $('.left-slider').click(() => { 
            $('.news-slide').animate({left: 0},500, ()=>{
                $('.news-slide').prepend($('.news-image:last-child'));
                $('.news-slide').css({left:-slideWidth});
            })
        });

        $('.right-slider').click(() => { 
            $('.news-slide').animate({left: -slideWidth * 2 },500, ()=>{
                $('.news-slide').append($('.news-image:first-child'));
                $('.news-slide').css({left:-slideWidth});
            })
        });
    }

  const appsHome = () =>{
      showSlide();
      slideImg();
  }
  
  appsHome();
});

