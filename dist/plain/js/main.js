"use strict";$(document).ready(function(){function t(t){return t.preventDefault(),t.stopPropagation(),!1}svg4everybody(),$(".main-slider").owlCarousel({items:3,dots:!1,nav:!1,center:!0,margin:0,loop:!0,dragEndSpeed:1500,fluidSpeed:1500,smartSpeed:1500,navSpeed:1500,autoWidth:!0,responsive:{0:{items:1,autoWidth:!1,center:!1,smartSpeed:800,navSpeed:800,dragEndSpeed:800,fluidSpeed:800},992:{}}}),$(".news-slider").owlCarousel({items:1,dots:!1,nav:!1,margin:0,responsive:{0:{margin:10,stagePadding:20,items:1},420:{margin:15,stagePadding:20,autoWidth:!0},768:{margin:15,stagePadding:0,autoWidth:!1},1320:{stagePadding:7,margin:14,autoWidth:!1,items:1}}}),$(".smi-slider").owlCarousel({dots:!1,nav:!1,margin:14,autoplayHoverPause:!0,autoplayTimeout:5e3,smartSpeed:1500,onDrag:t,onDragged:t,responsive:{0:{items:1,smartSpeed:800,center:!1,margin:14,autoplay:!1,autoWidth:!0},992:{items:2,autoplay:!1,center:!1,autoWidth:!0},1320:{items:4,center:!1,autoplay:!1,autoWidth:!0}}}),$(".book-detail-image").owlCarousel({items:1,dots:!1,nav:!0}),new ClipboardJS("#copyUrl",{text:function(){return document.location.href}}),$("#printPage").on("click",function(){return window.print()}),$(".password-toggle").on("click",function(){var t=$(".password-input");"password"==t.attr("type")?t.attr("type","text"):t.attr("type","password")}),$(".openLogin").on("click",function(){return $.fancybox.close(),$.fancybox.open({src:"#signIn"}),!1}),$(".openReg").on("click",function(){return $.fancybox.close(),$.fancybox.open({src:"#signUp"}),!1}),$(".books-slider").owlCarousel({items:4,dots:!1,nav:!1,margin:14,responsive:{0:{items:1,autoWidth:!0},992:{items:3,autoWidth:!0,center:!1},1320:{items:4,center:!1,autoWidth:!1}}}),$(".mediaprojects-slider").owlCarousel({items:3,dots:!1,nav:!1,margin:14,responsive:{0:{items:1,autoWidth:!0},992:{items:1,autoWidth:!0,center:!1},1320:{items:3,autoWidth:!1,center:!1}}}),$(".content-slider").owlCarousel({dots:!1,nav:!1,margin:26,responsive:{0:{items:1,stagePadding:20,autoWidth:!0,margin:10},726:{items:2},992:{items:2,autoWidth:!0},1320:{items:2}}}),$(".articles-slider").owlCarousel({dots:!1,nav:!1,margin:12,responsive:{0:{items:1,stagePadding:20,autoWidth:!0},768:{items:2,autoWidth:!0},992:{items:2,autoWidth:!1},1320:{items:3,autoWidth:!1}}}),$(".smi-slider").on("click",".smi-slider__item",function(t){var e=$(this).find("img").attr("src"),i=$(this).attr("href"),n=$(this).attr("smi-caption"),o=$(this).attr("button-caption");return $.fancybox.open('\n            <div class="subSmi-wrapper">\n            <div class="subSmi">\n                <div class="subSmi__image">\n                    <img src="'+e+'" alt="">\n                </div>\n                <div class="subSmi__text">\n                    <div class="subSmi__caption">'+n+'</div>\n                     <a href="'+i+'" class="subSmi__button">'+o+"</a>\n                </div>\n             </div>\n             </div>"),!1}),$(window).width()<1320&&$(".burger-menu").on("click",function(){$(this).parent(".main-menu-row")&&($(this).toggleClass("active"),$(".main-menu").toggleClass("active"))}),$(".header-lang--mobile").on("click",function(){$(this).find(".header-lang-menu").fadeIn()}).on("click",".header-lang--mobile",function(t){t.stopPropagation()}),$(document).click(function(t){var e=$(".header-lang--mobile");e.is(t.target)||0!==e.has(t.target).length||$(".header-lang-menu").fadeOut()}),$(window).width()<1320&&($(".products-row").owlCarousel({items:4,responsive:{992:{items:4},768:{items:3},600:{items:2},0:{items:1}}}),$(".category-adv").owlCarousel({items:4,responsive:{992:{items:4},768:{items:3},600:{items:2},0:{items:1}}})),$(".form__file input[type=file]").change(function(){var t=$(this).val().replace(/.*\\/,"");console.log(t),$(this).siblings(".form__file-name").fadeIn().val(t)}),$(function(){$("form .phone-input").mask("+9 (999) 999-99-99")}),$(function(){var i=$(".input-counter input"),t=$(".input-counter__down"),e=$(".input-counter__up");t.on("click",function(){return n("down")}),e.on("click",function(){return n("up")});var n=function(t){var e=Number(i.val());"down"===t&&e<=0||("up"===t?i.val(e+1):i.val(e-1))}}),$(function(){$(".order__hint").each(function(){console.log($(this));var t=$(this).data("hint");console.log(t),new Tooltip($(this),{placement:"right",title:t})})})});