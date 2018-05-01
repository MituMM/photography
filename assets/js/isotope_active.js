//Active isotope with JQuery code:

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
