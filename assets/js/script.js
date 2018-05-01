$(function () {
    "use strict";
    //Main slider
    $('.slider_active').owlCarousel({
        nav: false,
        loop: true,
        dots: true,
        autoplay: false,
        autoplayTimeout: 2000,
        navText: ['<i class="icofont icofont-double-left"></i>', '<i class="icofont icofont-double-right"></i>'],
        responsive: {
            0: {
                items: 1

            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    

    
});

$(function() {
        "use strict";
// Active Isotope Gallery
    
    
$('.iso_items').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
});

//Isotope click function

$('.iso_nav ul li').click(function ( ){
    $('.iso_nav ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.iso_items').isotope({
        filter: selector
    });
    return false;

});
});
    // Scroll to Top
//    $(window).scroll(function () {
//        if ($(this).scrollTop() > 50) {
//            $('.scrolltop:hidden').stop(true, true).fadeIn();
//        } else {
//            $('.scrolltop').stop(true, true).fadeOut();
//        }
//    });
//    $(function () {
//        $(".scroll").click(function () {
//            $("html,body").animate({
//                scrollTop: $(".top").offset().top
//            }, "1000");
//            return false
//        })
//    })
//
//});


  //Isotope items hover direction function  
$(function() {
"use strict";
$(".snake").snakeify({
  speed: 200
});
});

 //Map plugin 
$(function() {
     "use strict";
    var map = new google.maps.Map($('.map-canvas')[0], {
        zoom: 14,
        center: new google.maps.LatLng(40.72, -74)
    });
    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.72, -74)
    });
    var info = new SnazzyInfoWindow({
        marker: marker,
        content: 'Your snazzy content.'
    });
    info.open();
});