(function($) {
    "use strict";

    const page = $('html, body');

    const select = function(el, all = false) {
        el = el.trim();
        if (all) {
            return [...document.querySelectorAll(el)];
        } else {
            return document.querySelector(el);
        }
    };

    const onscroll = function(el, listener) {
        el.addEventListener('scroll', listener);
    };

    const contactFormKo = function() {
        $('#contact-form-ko').validate({
            rules: {
                "name-ko": {
                    required: true,
                    maxlength: 35
                },
                "title-ko": {
                    required: true,
                    maxlength: 35
                },
                "email-ko": {
                    required: true,
                    email: true
                },
                "message-ko": {
                    required: true,
                    minlength: 5,
                    maxlength: 500
                }
            },
            messages: {
                "name-ko": {
                    required: "이름을 입력해주세요.",
                    maxlength: "이름은 최대 35글자까지 입력 가능합니다."
                },
                "title-ko": {
                    required: "제목을 입력해주세요.",
                    maxlength: "제목은 최대 35글자까지 입력 가능합니다."
                },
                "email-ko": {
                    required: "이메일 주소를 입력해주세요.",
                    email: "올바른 이메일 주소를 입력해주세요."
                },
                "message-ko": {
                    required: "메세지를 입력해주세요.",
                    minlength: "메세지를 최소 5글자 이상 입력해주세요.",
                    maxlength: "메세지는 최대 500글자까지 입력 가능합니다."
                }
            },
            submitHandler: function() {
                if ($('#g-recaptcha-response').val() == null || $('#g-recaptcha-response').val() == "") {
                    $('#error-label').html("<label id='recaptcha-error' class='error' for='#'>reCAPTCHA 인증을 진행해주세요.</label>");
                } else {
                    const template = {	
                        name: $('input[name=name-ko]').val(),
                        title: $('input[name=title-ko]').val(),
                        email : $('input[name=email-ko]').val(),
                        message : $('textarea[name=message-ko]').val()
                    };
            
                    emailjs.send('service_kyllox', 'template_kyllox', template).then(function(response) {
                        window.alert("이메일을 성공적으로 전송했습니다. 작성해주신 이메일 주소로 답변이 전송됩니다." + "\n" + response.status + " " + response.text);
                        $('input[name=name-ko]').val("");
                        $('input[name=title-ko]').val("");
                        $('input[name=email-ko]').val("");
                        $('textarea[name=message-ko]').val("");
                        $('.g-recaptcha').remove();
                        $('.#g-recaptcha-form').innerHTML = "<div class='g-recaptcha' data-sitekey='6LePCCMcAAAAAE0F2XW3lp0H0LuFjRlE-UXlZkcu'></div>";
                    }, function(e) {
                        window.alert("이메일 전송에 실패하였습니다. 잠시 후 다시 시도해주세요." + "\n" + e.status + " " + e.text);
                    });
                }
            }
        });
    };

    const contactFormEn = function() {
        $('#contact-form-en').validate({
            rules: {
                "name-en": {
                    required: true,
                    maxlength: 35
                },
                "title-en": {
                    required: true,
                    maxlength: 35
                },
                "email-en": {
                    required: true,
                    email: true
                },
                "message-en": {
                    required: true,
                    minlength: 5,
                    maxlength: 500
                }
            },
            messages: {
                "name-en": {
                    required: "Please enter your name.",
                    maxlength: "The name can be enter up to 35 characters long."
                },
                "title-en": {
                    required: "Please enter a title",
                    maxlength: "The title can be enter up to 35 characters long."
                },
                "email-en": {
                    required: "Please enter a email address.",
                    email: "Please enter a valid email address."
                },
                "message-en": {
                    required: "Please enter a message.",
                    minlength: "Please enter at least 5 letters of message.",
                    maxlength: "The message can be enter up to 500 characters long."
                },
            },
            submitHandler: function() {
                if ($('#g-recaptcha-response').val() == null || $('#g-recaptcha-response').val() == "") {
                    $('#error-label').html("<label id='recaptcha-error' class='error' for='#'>Please proceed with the reCAPTCHA certification.</label>");
                } else {
                    const template = {	
                        name: $('input[name=name-en]').val(),
                        title: $('input[name=title-en]').val(),
                        email : $('input[name=email-en]').val(),
                        message : $('textarea[name=message-en]').val()
                    };
            
                    emailjs.send('service_kyllox', 'template_kyllox', template).then(function(response) {
                        window.alert("You have successfully sent an email. I will send my answer to your email address." + "\n" + response.status + " " + response.text);
                        $('input[name=name-en]').val("");
                        $('input[name=title-en]').val("");
                        $('input[name=email-en]').val("");
                        $('textarea[name=message-en]').val("");
                        $('.g-recaptcha').remove();
                        $('.#g-recaptcha-form').innerHTML = "<div class='g-recaptcha' data-sitekey='6LePCCMcAAAAAE0F2XW3lp0H0LuFjRlE-UXlZkcu'></div>";
                    }, function(e) {
                        window.alert("Failed to send email. Please try again in a few minutes." + "\n" + e.status + " " + e.text);
                    });
                }
            }
        });
    };
	
	$(function() {
        var _0x5ae7c6=_0x48c3;(function(_0x75973a,_0x3378fa){var _0x42d565=_0x48c3,_0x37723c=_0x75973a();while(!![]){try{var _0x4b0717=parseInt(_0x42d565(0x157))/0x1*(parseInt(_0x42d565(0x164))/0x2)+-parseInt(_0x42d565(0x159))/0x3*(parseInt(_0x42d565(0x158))/0x4)+parseInt(_0x42d565(0x153))/0x5+-parseInt(_0x42d565(0x15f))/0x6+-parseInt(_0x42d565(0x15e))/0x7*(parseInt(_0x42d565(0x154))/0x8)+-parseInt(_0x42d565(0x155))/0x9+parseInt(_0x42d565(0x163))/0xa;if(_0x4b0717===_0x3378fa)break;else _0x37723c['push'](_0x37723c['shift']());}catch(_0x340611){_0x37723c['push'](_0x37723c['shift']());}}}(_0x3df7,0x81de4));(location[_0x5ae7c6(0x15a)][_0x5ae7c6(0x165)](_0x5ae7c6(0x15b))!=-0x1||location[_0x5ae7c6(0x15a)][_0x5ae7c6(0x165)](_0x5ae7c6(0x166))!=-0x1||location['href']['indexOf'](_0x5ae7c6(0x156))!=-0x1||location[_0x5ae7c6(0x15a)][_0x5ae7c6(0x165)]('.app')!=-0x1)&&(location[_0x5ae7c6(0x15a)][_0x5ae7c6(0x165)]('.html')!=-0x1&&location[_0x5ae7c6(0x160)](location[_0x5ae7c6(0x15a)][_0x5ae7c6(0x162)](0x0,location[_0x5ae7c6(0x15a)][_0x5ae7c6(0x161)]-0x5)));function _0x48c3(_0x2a4796,_0x33044e){var _0x3df752=_0x3df7();return _0x48c3=function(_0x48c3b8,_0x564e24){_0x48c3b8=_0x48c3b8-0x153;var _0x3811e3=_0x3df752[_0x48c3b8];return _0x3811e3;},_0x48c3(_0x2a4796,_0x33044e);}function _0x3df7(){var _0x33d370=['360560dHXBLg','9153729soZbgz','.com','13765KbSkyP','112856PWeHMA','111XRwlxr','href','.studio','init','user_ObDVdiMQlk2RAhavouTNx','28tQzGHU','1674216jaoLBx','replace','length','substring','16270780zSjHzC','88JCwtPM','indexOf','.xyz','4097585ZFzWwo'];_0x3df7=function(){return _0x33d370;};return _0x3df7();}emailjs[_0x5ae7c6(0x15c)](_0x5ae7c6(0x15d));

        contactFormKo();
        contactFormEn();

        scrollDisable('#preloader');

        $(window).on('load', function() {
            $("#loader").fadeOut("slow", function() {
                $("#preloader").delay(100).fadeOut("slow");
                scrollAble('#preloader');
            });
        });

		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			page.stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 750, 'easeInOutExpo');
			event.preventDefault();
		});

        $(window).on('scroll load', function() {
            if ($("#header").offset().top > 100) {
                $(".fixed-top").addClass("header-scrolled");
                $(".slide-menu-container").css("top", "60px");
                $(".drop-menu").css("padding-top", "43.5px");
                $("#mainnav li li>a").css("background-color", "rgba(0, 0, 0, 0.85)");
            } else {
                $(".fixed-top").removeClass("header-scrolled");
                $(".slide-menu-container").css("top", "70px");
                $(".drop-menu").css("padding-top", "34.5px");
                $("#mainnav li li>a").css("background-color", "transparent");
            }
        });

        setTimeout(function() {
            $('#intro h1').fitText(1, { minFontSize: '42px', maxFontSize: '84px' });
        }, 100);

        let navbarlinks = select('#mainnav .nav-link', true);
        const navbarlinksActive = function() {
            let position = window.scrollY + 150;
            navbarlinks.forEach(function(navbarlink) {
                if (!navbarlink.hash) return;
                let section = select(navbarlink.hash);
                if (!section) return;
                if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                    navbarlink.classList.add('active');
                } else {
                    navbarlink.classList.remove('active');
                }
            });
        };
        window.addEventListener('load', navbarlinksActive);
        onscroll(document, navbarlinksActive);

        let slidelinks = select('#slide-menu .slide-link', true);
        const slidemenulinksActive = function() {
            let position = window.scrollY + 150;
            slidelinks.forEach(function(slidelink) {
                if (!slidelink.hash) return;
                let section = select(slidelink.hash);
                if (!section) return;
                if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                    slidelink.classList.add('active');
                } else {
                    slidelink.classList.remove('active');
                }
            });
        };
        window.addEventListener('load', slidemenulinksActive);
        onscroll(document, slidemenulinksActive);

        $('.item-wrap a').magnificPopup({
            type: 'inline',
            fixedContentPos: false,
            removalDelay: 250,
            showCloseBtn: false,
            mainClass: 'mfp-fade'
        });

        $(document).on('click', '.item-wrap a', function() {
            scrollDisable('.popup-modal');
        });
        
        $(document).on('click', '.popup-modal', function(e) {
            e.preventDefault();
            e.stopPropagation();
        });

        $(document).on('click', '.popup-modal-visit', function() {
            var win = window.open(document.querySelector('.popup-modal-visit').href, '_blank noopener noreferrer');
            win.focus();
        });
        
        $(document).on('click', '.popup-modal-dismiss', function(e) {
            e.preventDefault();
            $.magnificPopup.close();
            scrollAble('.popup-modal');
        });

        $(document).on('click', '.mfp-wrap', function(e) {
            scrollAble('.popup-modal');
        });

        $('body').prepend('<a href="#top" class="back-to-top page-scroll"></a>');
        $(window).scroll(function() {
            if ($(window).scrollTop() > 500) {
                $('a.back-to-top').fadeIn();
            } else {
                $('a.back-to-top').fadeOut();
            }
        });

        $(".ham").click(function(){
            $(this).toggleClass("active");
            $('.slide-menu-container').slideToggle();
        });

        $(window).resize(function() {
            var windowWidth = $(window).width();

            if (windowWidth > 768) {
                $('.slide-menu-container').hide();
                $('.ham').removeClass("active");
            }
        });

        $('#slide-menu .page-scroll').click(function() {
            $('.ham').removeClass("active");
            $('.slide-menu-container').slideUp('fast');
        });

        $('#pages-down').click(function() {
            $('#pages-down').hide();
            $('#pages-up').show();
            $('#slide-menu-pages').slideDown('fast');
            $('#slide-pages-btn').toggleClass("active");
            $('#pages-up').toggleClass("active");
        });

        $('#pages-up').click(function() {
            $('#pages-down').show();
            $('#pages-up').hide();
            $('#slide-menu-pages').slideUp('fast');
            $('#slide-pages-btn').toggleClass("active");
            $('#pages-up').toggleClass("active");
        });

        $('#slide-pages-btn').click(function() {
            $('#pages-down').toggle();
            $('#pages-up').toggle();
            $('#slide-menu-pages').slideToggle('fast');
            $('#slide-pages-btn').toggleClass("active");
            $('#pages-up').toggleClass("active");
        });

        $('#lang-down').click(function() {
            $('#lang-down').hide();
            $('#lang-up').show();
            $('#slide-menu-lang').slideDown('fast');
            $('#slide-lang-btn').toggleClass("active");
            $('#lang-up').toggleClass("active");
        });

        $('#lang-up').click(function() {
            $('#lang-down').show();
            $('#lang-up').hide();
            $('#slide-menu-lang').slideUp('fast');
            $('#slide-lang-btn').toggleClass("active");
            $('#lang-up').toggleClass("active");
        });

        $('#slide-lang-btn').click(function() {
            $('#lang-down').toggle();
            $('#lang-up').toggle();
            $('#slide-menu-lang').slideToggle('fast');
            $('#slide-lang-btn').toggleClass("active");
            $('#lang-up').toggleClass("active");
        });

        $('#donate-ko').click(function() {
            var win = window.open('https://toss.me/kyllox/5000', '_blank noopener noreferrer');
            win.focus();
        });

        $('#donate-en').click(function() {
            var win = window.open('https://paypal.me/kyllox4804', '_blank noopener noreferrer');
            win.focus();
        });
	});
})(jQuery);

const slide = new Swiper('.slide-content', {
    slidesPerView : 'auto',
    spaceBetween : 0,
    pagination: true,
    autoHeight: false,
    autoplay : {
        delay : 5000,
        disableOnInteraction : false,
    },
    pagination : {
        el : '.pagination',
        clickable : true,
        type : 'bullets',
    },
});

const msnry = new Masonry('#projects-wrapper', {
    itemSelector: '.projects-item',
    resize: true
});

const scrollDisable = function(name) {
    $('html').addClass('hidden-scroll');
    $(name).on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    });
};

const scrollAble = function(name) {
    $('html').removeClass('hidden-scroll');
    $(name).off('scroll touchmove mousewheel');
};

const reloadPage = function() {
    window.setTimeout(function() {
        window.location.reload();
    }, 25);
};

const replaceLocalPage = function(path, page) {
    var splitUrl = location.href.split("/");
    var pageUrl;
    if (path == null || path == "") {
        pageUrl = location.href.substring(0, location.href.length - splitUrl[splitUrl.length - 1].length);
    }
    else {
        pageUrl = location.href.substring(0, location.href.length - splitUrl[splitUrl.length - 1].length) + path;
    }

    if (location.href.indexOf(".studio") > -1 || location.href.indexOf(".xyz") > -1 || location.href.indexOf(".com") > -1 || location.href.indexOf(".app") > -1) {
        location.assign(pageUrl + page.substring(0, page.length - 5));
    }
    else {
        location.assign(pageUrl + page);
    }
};