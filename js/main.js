/*
	Foxstar Theme Scripts
*/

(function($){ "use strict";
             
    $(window).on('load', function() {
        $('body').addClass('loaded');
    });

/*=========================================================================
    Sticky Header
=========================================================================*/ 
    $(function() {
        var header = $("#header"),
            yOffset = 0,
            headerHeight = $('.header_section').height(),
            triggerPoint = 10;
        $(window).on( 'scroll', function() {
            yOffset = $(window).scrollTop();

            if (yOffset >= triggerPoint) {
                header.addClass("fixed-top");
            } else {
                header.removeClass("fixed-top");
            }

        });
        $('.header_height').css( 'margin-top', headerHeight );
    });

/*=========================================================================
    Isotope Active
=========================================================================*/
	$('.portfolio_items').imagesLoaded( function() {

		 // Add isotope click function
		$('.portfolio_filter li').on( 'click', function(){
	        $(".portfolio_filter li").removeClass("active");
	        $(this).addClass("active");
	 
	        var selector = $(this).attr('data-filter');
	        $(".portfolio_items").isotope({
	            filter: selector,
	            animationOptions: {
	                duration: 750,
	                easing: 'linear',
	                queue: false,
	            }
	        });
	        return false;
	    });

	    $(".portfolio_items").isotope({
	        itemSelector: '.single_item',
	        layoutMode: 'masonry',
	    });
	});
             
/*=========================================================================
	Testimonial Carousel
=========================================================================*/
	var testiSelector = $('#testimonial_carousel');
	testiSelector.owlCarousel({
        loop: true,
        autoplay: false,
        smartSpeed: 500,
        margin: 20,
        nav: true,
        dots: false,
        navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
        responsive : {
		    // breakpoint from 0 up
		    0 : {
		        items: 1
		    },
		    // breakpoint from 480 up
		    480 : {
		       items: 2
		    },
		    // breakpoint from 768 up
		    768 : {
		       items: 3
		    }
		}
    });
			 
 
/*=========================================================================
    Initialize smoothscroll plugin
=========================================================================*/
	smoothScroll.init({
		offset: 60
	});

/*=========================================================================
        Active venobox
=========================================================================*/
	var vbSelector = $('.img_popup');
	vbSelector.venobox({
		numeratio: true,
		infinigall: true
	}); 
				 
/*=========================================================================
    Scroll To Top
=========================================================================*/     
    $(window).on( 'scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });

})(jQuery);
