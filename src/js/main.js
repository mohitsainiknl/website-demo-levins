/* eslint-disable no-undef */
$(document).ready(function() {
    var isScrolled = false;
    var isNavWhite = false;
    var isSlideWhite = false;

    $('.mobile-nav-list').removeClass('d-none');
    $('.mobile-nav-list').addClass('d-md-none');
    $('.mobile-nav-list').hide();

    if($(this).scrollTop() > 0) {
        $('#navbar').removeClass('transition-delay');
        $('#navbar').addClass('bg-white');
        isSlideWhite = true;
    }


   
    // Toggle open and close hidden nav on click
    $('#nav-toggle').click(function() {
        if(!$('.mobile-nav-list').is(':visible')) {
            $('#navbar').removeClass('transition-delay');
            $('#navbar').addClass('bg-white');
            isNavWhite = true;
        } else {
            if(!isSlideWhite) {
                $('#navbar').addClass('transition-delay');
                $('#navbar').removeClass('bg-white');
            }
            isNavWhite = false;
        }
        $('.mobile-nav-list').slideToggle();
    });
    

    // toggle X
    $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
    });

    $(window).on('scroll', function() {
        // for navbar color
        if($(this).scrollTop() > 0) {
            $('#navbar').removeClass('transition-delay');
            $('#navbar').addClass('bg-white');
            isSlideWhite = true;
        } else {
            if (!isNavWhite) {
                $('#navbar').removeClass('bg-white');
            }
            isSlideWhite = false;
        }

        // for navbar size
        if ($(this).scrollTop() > 80) {
            if(!isScrolled) {
                $('.nav-pills').removeClass('desktop-lg-py');
                $('.nav-pills').removeClass('desktop-md-py');
                isScrolled = true;
                // console.log('Scrolled');
            }
        } else {
            if(isScrolled) {
                $('.nav-pills').addClass('desktop-md-py');
                $('.nav-pills').addClass('desktop-lg-py');
                isScrolled = false;
                // console.log('Reset');
            }
        }
    });
    
});
