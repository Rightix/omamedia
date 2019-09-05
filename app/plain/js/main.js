"use strict";
$(document).ready(function () {
    svg4everybody();

    $('.main-slider').owlCarousel({
        // stagePadding: 100,
        items: 3,
        dots: false,
        nav: false,
        center: true,
        margin: 0,
        loop: true,
        dragEndSpeed: 1500,
        fluidSpeed: 1500,
        smartSpeed: 1500,
        navSpeed: 1500,
        autoWidth: true,
        responsive: {
            0: {
                items: 1,
                autoWidth: false,
                center: false,
                smartSpeed: 800,
                navSpeed: 800,
                dragEndSpeed: 800,
                fluidSpeed: 800,
            },
            992: {}
        }
    });

    $('.news-slider').owlCarousel({
        items: 1,
        dots: false,
        nav: false,
        margin: 0,
        responsive: {
            0: {
                margin: 25,
                stagePadding: 20,
            },
            992: {
                margin: 15,
                stagePadding: 0,
            },
            1320: {
                stagePadding: 30,
                margin: 14,
                autoWidth: false,
                items: 1,
            }
        }
    });

    $('.smi-slider').owlCarousel({
        dots: false,
        nav: false,
        margin: 14,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        smartSpeed: 1500,
        responsive: {
            0: {
                items: 1,
                smartSpeed: 800,
                center: false,
                margin: 14,
                autoplay: false,
                autoWidth: true
            },
            992: {
                items: 2,
                autoplay: true,
                center: false,
                autoWidth: true,
            },
            1320: {
                items: 4,
                center: false,
                autoWidth: false
            }
        }

    });

    $('.books-slider').owlCarousel({
        items: 4,
        dots: false,
        nav: false,
        margin: 14,
        // center: true,
        responsive: {
            0: {
                items: 1,
                autoWidth: true
            },
            992: {
                items: 3,
                autoWidth: true,
                center: false
            },
            1320: {
                items: 4,
                center: false,
                autoWidth: false
            }

        }
    });

    $('.mediaprojects-slider').owlCarousel({
        items: 3,
        dots: false,
        nav: false,
        margin: 14,
        responsive: {
            0: {
                items: 1,
                autoWidth: true,
            },
            992: {
                items: 1,
                autoWidth: true,
                center: false,
            },
            1320: {
                items: 3,
                autoWidth: false,
                center: false
            }
        }

        // center: true,

    });

    $('.content-slider').owlCarousel({
        dots: false,
        nav: false,
        margin: 26,
        responsive: {
            0: {
                items: 1,
                stagePadding: 20,
                autoWidth: true,
                margin: 10,
            },
            726: {
                items: 2,
            },
            992: {
                items: 2,
                autoWidth: true
            },
            1320: {
                items: 2
            }
        }
    });

    $('.articles-slider').owlCarousel({
        dots: false,
        nav: false,
        margin: 12,
        responsive: {
            0: {
                items: 1,
                stagePadding: 20,
                autoWidth: true
            },
            768: {
                items: 2,
                autoWidth: false,
            },
            992: {
                items: 2,
                autoWidth: false,
            },
            1320: {
                items: 3,
                autoWidth: false
            }
        }
    });

    // Smi slider Pop-up

    $('.smi-slider__item').on('click', function () {
        const smiImageSrc = $(this).find('img').attr('src');
        $.fancybox.open(`
            <div class="subSmi-wrapper">
            <div class="subSmi">
                <div class="subSmi__image">
                    <img src="${smiImageSrc}" alt="">
                </div>
                <div class="subSmi__text">
                    <div class="subSmi__caption">на финском</div>
                     <a href="" class="subSmi__button">
                                Читай
                     </a>
                </div>
             </div>
             </div>`);
        return false;

    });

    if ($(window).width() < 1320) {
        // const sumbmenuElement = $('.')
        $('.burger-menu').on('click', function () {
            if ($(this).parent('.main-menu-row')) {
                $(this).toggleClass('active');
                $('.main-menu').toggleClass('active');
            }
            // $('.header-menu--mobile').slideToggle();
        });


    }

    // Language picker

    $('.header-lang--mobile').on('click', function () {
        $(this).find('.header-lang-menu').fadeIn();
    }).on('click', '.header-lang--mobile', function (e) {
        e.stopPropagation()
    });

    $(document).click(function (e) { // событие клика по веб-документу
        var div = $(".header-lang--mobile"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            $('.header-lang-menu').fadeOut(); // скрываем его
        }
    });


    function listTo(event) {
        var index = event.item.index;
        $('.author-galleryPreview').trigger('to.owl.carousel', index, 500);
        $('.author-galleryPreview .owl-item').eq(index).addClass('show').siblings().removeClass('show');
        $('.author-gallery-counter__count').html(index + 1);

    }

    function galleryQuantity(event) {
        let quantity = event.item.count;

    }

    function showInit(event) {
        var index = event.item.index;
        var quantity = event.item.count;
        $('.author-galleryPreview .owl-item').eq(index).addClass('show');
        $('.author-gallery-counter__quantity').html(quantity);


    }

    $(".author-galleryPreview .owl-item").on('click', function () {

        event.preventDefault();
        var index = $(this).index();
        $(this).addClass('show').siblings().removeClass('show');
        // $('.lot-slider .owl-item').eq(index).addClass('show');

        $('.author-gallery').trigger('to.owl.carousel', index, 500);
    });


//Моб. скрипты
    if ($(window).width() < 1320) {
        $('.products-row').owlCarousel({
            items: 4,
            responsive: {
                992: {
                    items: 4,
                },
                768: {
                    items: 3,
                },
                600: {
                    items: 2,
                },
                0: {
                    items: 1,
                }
            }
        });

        $('.category-adv').owlCarousel({
            items: 4,
            responsive: {
                992: {
                    items: 4,
                },
                768: {
                    items: 3,
                },
                600: {
                    items: 2,
                },
                0: {
                    items: 1,
                }
            }
        });

    }

    if ($(window).width() < 992) {

        $('.menu-trigger').on('click', function () {
            $('.header-menu--mobile').slideToggle();
        });


    }

    $(".form__file input[type=file]").change(function () {
        var filename = $(this).val().replace(/.*\\/, "");
        console.log(filename)
        $(this).siblings(".form__file-name").fadeIn().val(filename);
    });

    // Favorites


    // Validate Form

    // $.validate({
    //
    //     borderColorOnError: '#c72b11',
    //     lang: 'ru',
    //     validateOnBlur: false, // disable validation when input looses focus
    //     errorMessagePosition: 'top', // Instead of 'inline' which is default
    //     scrollToTopOnError: false, // Set this property to true on longer forms
    //     onElementValidate: function (valid, $el, $form, errorMess) {
    //         $el.closest('.form-row').addClass('error');
    //         console.log('Input ' + $el.attr('name') + ' is ' + (valid ? 'VALID' : 'NOT VALID'));
    //     }
    // });

    $(function () {
        //2. Получить элемент, к которому необходимо добавить маску
        $("form .phone-input").mask("+9 (999) 999-99-99");
    });

    // Waves.attach('.header-mid-account__login');
    // Waves.init();


});



