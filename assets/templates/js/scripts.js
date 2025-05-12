$(function() {

    // Telephone number mask
    Inputmask.extendDefinitions({
      'p': {  //masksymbol
        "validator": "[78]"
      },
      'n': {  //masksymbol
        "validator": "[39]"
      }
    })
    $('.input-tel').inputmask({"mask": "+7 (n99) 999-9999"});

    // Slick carousel
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<span class="arrow-next" id="arrow-prev"><i class="icon-left"></i></span>',
        nextArrow: '<span class="arrow-prev" id="arrow-prev"><i class="icon-right"></i></span>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
    ]
    });


    // Scroll to section
    $('.nav-item').click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html, body').animate({ scrollTop: destination-60 }, 1000);
        return false;
    });


    // Open more reviews
    $('#js-more').click(function () {
        $('.hidden-item').slideToggle(550);
        return false;
    });

	// Open image popup
	$('.image-popup').magnificPopup({
		type: 'image',
		removalDelay: 300,
		mainClass: 'mfp-with-zoom mfp-img-mobile mfp-fade',		
        image: {
            verticalFit: false
        }		
	});

    $('form').submit(function(){
        location.href = "#submit";
    });

    /* FORM POPUP */
    $('.js-popup-open-link').magnificPopup({
        removalDelay: 300,
        mainClass: 'mfp-fade'
     }); 

    $('form').submit(function(){
        location.href = "/#submit";
    });
});


$(window).scroll(function () {
    if ( $(this).scrollTop() > 1 ) {
        $('#js-fixed').addClass('fixed-header');
    } else {
        $('#js-fixed').removeClass('fixed-header');
    }
});

$('input[type="file"]').change(function(){
    var $closest=$(this).closest('.add_photos');
    $closest.find('.photos-text').remove();
    $closest.find('.photos').after('<div class="photos-text">Выбрано файлов: '+jQuery(this)[0].files.length+' <i></i></div>');
    $closest.find('.photos-text i').click(function(){$closest.find('input[name="photos[]"]').val('');
    $closest.find('.photos-text').remove();});
});
