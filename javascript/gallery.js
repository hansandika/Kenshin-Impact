$(()=> {
    const slideCount = $('.img-slider').length;
    const slideWidth = $('.img-slider').width();
    const totalwidth = slideCount * slideWidth;
    $('.slides').css({
        width: slideWidth,  
        marginLeft : -slideWidth
    });
    $('.img-slider:last-child').prependTo(".slides");

    $('.left-slider').click(() => { 
        $('.slides').animate({left: +slideWidth},500, ()=>{
            $('.img-slider:last-child').prependTo(".slides");
            $('.slides').css({left:0});
        })
    });

    $('.right-slider').click(() => { 
        $('.slides').animate({left: -slideWidth },500, ()=>{
            $('.img-slider:first-child').appendTo(".slides");
            $('.slides').css({left:0});
        })
    });

});

$('.icon').click(() =>{
    if($('.icon').hasClass('fa-moon')){
        $('body').addClass('light-theme');
        $('.icon').removeClass('fa-moon');
        $('.icon').addClass('fa-sun');
        $('.left-slider img').attr('src','../assets/ICON/Black Arrow Left.png');
        $('.right-slider img').attr('src','../assets/ICON/Black Arrow Right.png');
    }else{
        $('body').removeClass('light-theme');
        $('.icon').addClass('fa-moon');
        $('.icon').removeClass('fa-sun');
        $('.left-slider img').attr('src','../assets/ICON/Arrow Left.png');
        $('.right-slider img').attr('src','../assets/ICON/Arrow Right.png');
    }
})
