$(function () {
    
    "use strict";
    
    

    
//=========MENU FIX JS=========   
if ($('.main_menu').offset() != undefined) {
    var navoff = $('.main_menu').offset().top;
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > navoff) {
            $('.main_menu').addClass('menu_fix');
        } else {
            $('.main_menu').removeClass('menu_fix');
        }
    });
}
        
    
    
//*==========SEARCH==========  
$(".wsus__menu_search").click(function(){
    $(".wsus__search_form").toggleClass("show_form");
});


//*=======BANNER SLIDER====== 
$('.portfolio_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    arrows: true,
    nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
    prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',


    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }   
    ]

}); 

    
//===venobox.js===
$('.venobox').venobox(); 


 
    
    
    
    
    
    
    

});
