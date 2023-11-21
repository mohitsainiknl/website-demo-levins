/* eslint-disable no-undef */
$(document).ready(function() {
    $('.product-carousel').owlCarousel({
        loop:true,
        margin:20,
        autoplay:true,
        autoplayTimeout:1500,
        animateOut: 'ease',
        autoplayHoverPause:true,
        responsive:{
            10:{
                items:1
                
            },
            500:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:3
            },
            1400:{
                items:4
            }
        }
    });
    $('.review-carousel').owlCarousel({
        loop:true,
        margin:30,
        autoplay:true,
        nav:false,
        dots:false,
        autoplayTimeout:1500,
        animateOut: 'linear',
        responsive:{
            10:{
                items:1,
                dots: true,
                autoplay: false
            },
            500:{
                items:1,
                dots: true,
                autoplay: false
            },
            992:{
                items:2
            },
            1200:{
                items:3
            },
            1400:{
                items:3
            }
        }
    });
})


