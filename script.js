$(function() {
    // Fixed Header
    let header = $('#header');
    let intro = $('#intro');
    let introHeight = intro.innerHeight();
    let scrollPosition = $(window).scrollTop();
    let nav = $('#nav');
    let navToggle = $('#navToggle');
    
    checkScroll(scrollPosition, introHeight);
    header.addClass('fixed');
    
    $(window).on('scroll resize', function() {
        introHeight = intro.innerHeight();
        scrollPosition = $(this).scrollTop();
        checkScroll(scrollPosition, introHeight);
    });

    function checkScroll(scrollPosition, introHeight) {
        if (scrollPosition > introHeight) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }        
    }

    // Scroll
    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass('show');

        $('html, body').animate({
            scrollTop: elementOffset - 70
        }, 600)
    });

    // Nav Toggle
    $('#navToggle').on('click', function(event) {
        event.preventDefault();
        nav.toggleClass('show');
    });

    // Testimonials
    let slider = $('#testimonailsSlider');
    
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
      });

});
