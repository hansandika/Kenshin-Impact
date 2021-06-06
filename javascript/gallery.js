$(()=> {
    let slideCount = $('.img-slider').length;
    let slideWidth = $('.img-slider').width();
    let totalwidth = slideCount * slideWidth;
    $('.slides').css({
        width: slideWidth,  
        marginLeft : -slideWidth
    });
    $('.img-slider:last-child').prependTo(".slides");

    $('.left-slider').click(function () { 
        $('.slides').animate({left: +slideWidth},500, ()=>{
            $('.img-slider:last-child').prependTo(".slides");
            $('.slides').css({left:0});
        })
    });

    $('.right-slider').click(function () { 
        $('.slides').animate({left: -slideWidth },500, ()=>{
            $('.img-slider:first-child').appendTo(".slides");
            $('.slides').css({left:0});
        })
    });


    // setInterval(()=>[
    //     $('.slides').animate({left: -slideWidth },500, ()=>{
    //         $('.slide:first-child').appendTo(".slides");
    //         $('.slides').css({left:0});
    //     })
    // ],1000);
});

