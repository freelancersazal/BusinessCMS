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


//*=======PORTFOLIO SLIDER====== 
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
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
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



//=====STICKY SIDEBAR===== 
$("#sticky_sidebar").stickit({
    top:80,
})
    
    
//*=======BANNER SLIDER====== 
$('.prtfolio_det_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    arrows: false,


}); 


//*=======EX ZOOMER====== 
if($("#exzoom").length > 0){
    $("#exzoom").exzoom({
        autoPlay: false,
    });
}


//========NICE SELECT=======
$('#select_js').niceSelect();
    

//*=======TEAM SLIDER====== 
$('.clients_slider').slick({
    slidesToShow: 4,
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
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
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


    
//*=======TEAM SLIDER====== 
$('.team_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    arrows: true,
    nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
    prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',


    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
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



//*==========ISOTOPE============== 
var $grid = $('.grid').isotope({});

$('.gallery_filter').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
        filter: filterValue
    });
});

//active class
$('.gallery_filter button').on("click", function (event) {

    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();

});  


// =====EVENT COUNTER=====
var d = new Date(),
    countUpDate = new Date();
d.setDate(d.getDate() + 365);

// default example
simplyCountdown('.simply-countdown-one', {
    year: d.getFullYear(),
    month: d.getMonth() + 1,
    day: d.getDate(),
    enableUtc: true
});
    

//*=======EVENT DETAILS SLIDER====== 
$('.event_det_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    arrows: true,
    nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
    prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',

    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
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

});
