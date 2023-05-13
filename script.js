$(document).ready(function(){

    $('#menu-bar').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        
        $('#menu-bar').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let id = $(this).attr('id');
            let offset = $(this).offset().top - 200;

            if(top > offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });
    $('.dot1').click(function(){
            $('.vid1').css('display', 'block');
            $('.vid2').css('display', 'none');
            $('.vid3').css('display', 'none');
    });
    $('.dot2').click(function(){
        $('.vid2').css('display', 'block');
        $('.vid1').css('display', 'none');
        $('.vid3').css('display', 'none');
});
$('.dot3').click(function(){
    $('.vid3').css('display', 'block');
    $('.vid1').css('display', 'none');
    $('.vid2').css('display', 'none');
});

    $('.list .btn').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        let src = $(this).attr('data-src');
        $('.menu .row .image img').attr('src',src);
    });

});
    $('.pastrylist .pastrybtn').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        let src = $(this).attr('data-src');
        $('.pastrymenu .pastryrow .pastryimage img').attr('src',src);
    });


