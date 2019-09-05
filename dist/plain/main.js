"use strict";
$(document).ready(function () {

    // Lot Popup
    $('.lot-help__pay').on('click', function () {
        $.fancybox.open({
            src: '#pay',
            touch: false

        });
    });

    $('.lot-help__deliv').on('click', function () {
        $.fancybox.open({
            src: '#deliv',
            touch: false
        });
    });

    $('.lot-about__buy').on('click', function () {
        $.fancybox.open({
            src: '#order',
            touch: false
        });
    });



    // Lot slider

    $('.lot-slider').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        onChanged: listTo,

    });
    $('.lot-preview').owlCarousel({
        items: 7,
        margin: 0,
        dots: false,
        nav: true,
        onInitialized: showInit

    });
    function listTo(event) {
        var index = event.item.index;
        $('.lot-preview').trigger('to.owl.carousel', index, 500);
        $('.lot-preview .owl-item')
            .eq(index).addClass('show')
            .siblings().removeClass('show');
    }
    function showInit(event) {
        var index = event.item.index;
        $('.lot-preview .owl-item').eq(index).addClass('show')
    }

    $(".lot-preview .owl-item").on('click', function() {

        event.preventDefault();
        var index = $(this).index();
        $(this).addClass('show').siblings().removeClass('show');
        // $('.lot-slider .owl-item').eq(index).addClass('show');

        $('.lot-slider').trigger('to.owl.carousel', index, 500);

    });


    // Custom Catalog Select Start

    $('.catalog-philter__title').on('click', function (e) {
        $(this).closest('.catalog-selector').siblings().find('.catalog-philter-options').slideUp(300);
        $(this).next('.catalog-philter-options').slideToggle(300);
    }).on('click', '.catalog-philter', function (e) {
        e.stopPropagation()
    });


    $('.catalog-selector--catalog .catalog-philter__option').on('click', function () {
        let data = $(this).attr('data-target'),
            html = $(this).html(),
            targetInner = `
            <div data-target="${data}" class="catalog-target__item">
                ${html} 
                <span class="close"></span>
             </div>
        `;
        if ($(this).hasClass('active')) {
            $('.catalog-target [data-target='+data+']')
                .fadeOut(300)
                .queue(function () {
                    $(this).remove();
                });
            $(this).removeClass('active');

        } else {
            $(this).addClass('active');
            $('.catalog-target').append(targetInner);
        }


    });


    $(function () {
        $(document).click(function (event) {
            if ($(event.target).closest(".catalog-philter").length) return;
            $('.catalog-philter-options').slideUp(400);
            event.stopPropagation();
        });
    });

    $('.catalog-target').on('click', '.catalog-target__item .close', function () {
        $(this).parent()
            .fadeOut(300)
            .queue(function () {
                $(this).remove();
            });
        var data = $(this).parent().attr('data-target');
        console.log(data);
        $('.catalog-philter__option[data-target=' + data + ']').removeClass('active');
    });

    $('.catalog-selector--price .catalog-philter__option').on('click', function () {
        let html = $(this).html();
        $(this).parent().prev('.catalog-philter__title').html(`${html}`);
        $(this).parent().slideUp(300);
    });


    // Custom Catalog Select End


//Моб. скрипты
    if ($(window).width() < 992) {

        $('.main-news-row').owlCarousel({
           items: 1
        });


        // Меню и все такое
        $('.perfomances-ticket__price br').remove();
        $('.burger-button').click(function () {
            $('.overlay').fadeToggle(200);
            $('.mobile-menu').toggleClass('open');
            $('.mobile-menu-list').slideToggle(500);
            $('body').toggleClass('noscroll');

        });
    }

    if ($(window).width() < 768) {

        $('.mobile-menu,.burger-button').click(function (e) {
            e.stopPropagation();
            //эта строка остановит события до родительских элементов

        });

        $('.overlay').click(function () {
            $('.mobile-menu-list').slideUp(400);
            $('.mobile-menu').removeClass('open');
            $('.overlay').fadeOut(200);
            $('body').removeClass('noscroll');

        })
    }

    $(".form__file input[type=file]").change(function () {
        var filename = $(this).val().replace(/.*\\/, "");
        $(".form__file-name").val(filename);
    });

    // Favorites


    // Validate Form

    $.validate({

        // onElementValidate: function (valid, $el, $form, errorMess) {
        //     if (valid) {
        //         $el.closest('.form-row').removeClass('error');
        //
        //     } else {
        //         $el.closest('.form-row').addClass('error');
        //     }
        // },

        borderColorOnError: '#c72b11',
        lang: 'ru',
        validateOnBlur: false, // disable validation when input looses focus
        errorMessagePosition: 'top', // Instead of 'inline' which is default
        scrollToTopOnError: false, // Set this property to true on longer forms
        onElementValidate : function(valid, $el, $form, errorMess) {
            $el.closest('.form-row').addClass('error');
            console.log('Input ' +$el.attr('name')+ ' is ' + ( valid ? 'VALID':'NOT VALID') );
        }
    });

    $(function(){
        //2. Получить элемент, к которому необходимо добавить маску
        $("form input[name='phone']").mask("+9 (999) 999-99-99");
    });

    // Waves.attach('.header-mid-account__login');
    // Waves.init();


});



