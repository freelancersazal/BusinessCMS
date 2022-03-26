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


    
    
    
    
    
    
    
    
    
    
    

});
