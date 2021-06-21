$(()=> {
    const slideWidth = $('.img-slider').width();
    $('.slides').css({
        width: slideWidth,  
        left : -slideWidth
    });

    $('.slides').prepend($('.img-slider:last-child'))

    $('.left-slider').click(() => { 
        $('.slides').animate({left: 0},500, ()=>{
            $('.slides').prepend($('.img-slider:last-child'))
            $('.slides').css({left:-slideWidth});
        })
    });

    $('.right-slider').click(() => { 
        $('.slides').animate({left: -slideWidth * 2 },500, ()=>{
            $('.slides').append($('.img-slider:first-child'))
            $('.slides').css({left:-slideWidth});
        })
    });

    $('.theme-icon').click(() =>{
        if($('.theme-icon').hasClass('fa-moon')){
            $('body').removeClass('light-theme');
            $('.theme-icon').removeClass('fa-moon');
            $('.theme-icon').addClass('fa-sun');
            $('.left-slider img').attr('src','../assets/ICON/Arrow Left.png');
            $('.right-slider img').attr('src','../assets/ICON/Arrow Right.png');
        }else if($('.theme-icon').hasClass('fa-sun')){
            $('body').addClass('light-theme');
            $('.theme-icon').addClass('fa-moon');
            $('.theme-icon').removeClass('fa-sun');
            $('.left-slider img').attr('src','../assets/ICON/BlackArrowLeft.png');
            $('.right-slider img').attr('src','../assets/ICON/BlackArrowRight.png');
        }
    })
});

