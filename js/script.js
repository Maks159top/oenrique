$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],
        startPosition: 1,

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });
});



