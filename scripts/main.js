(function($) {
    "use strict"; 

    const page = $('html, body');

    const select = (el, all = false) => {
        el = el.trim();
        if (all) {
          return [...document.querySelectorAll(el)];
        } else {
          return document.querySelector(el);
        }
    };

    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener);
    };
	
	$(function() {
        $(document).ready(function() {
            var _0x584dbf=_0x3d76;(function(_0x176170,_0x1ff8eb){var _0x3a0c85=_0x3d76,_0x2d46a8=_0x176170();while(!![]){try{var _0xc7ed45=parseInt(_0x3a0c85(0x134))/0x1*(-parseInt(_0x3a0c85(0x135))/0x2)+-parseInt(_0x3a0c85(0x137))/0x3+parseInt(_0x3a0c85(0x143))/0x4*(parseInt(_0x3a0c85(0x133))/0x5)+parseInt(_0x3a0c85(0x13a))/0x6+-parseInt(_0x3a0c85(0x13c))/0x7*(-parseInt(_0x3a0c85(0x13b))/0x8)+-parseInt(_0x3a0c85(0x142))/0x9+-parseInt(_0x3a0c85(0x140))/0xa*(-parseInt(_0x3a0c85(0x138))/0xb);if(_0xc7ed45===_0x1ff8eb)break;else _0x2d46a8['push'](_0x2d46a8['shift']());}catch(_0xe95edb){_0x2d46a8['push'](_0x2d46a8['shift']());}}}(_0x2751,0x8157b));(location[_0x584dbf(0x136)]['indexOf']('.studio')>-0x1||location['href'][_0x584dbf(0x13d)](_0x584dbf(0x13f))>-0x1||location[_0x584dbf(0x136)][_0x584dbf(0x13d)](_0x584dbf(0x141))>-0x1||location['href'][_0x584dbf(0x13d)]('.app')>-0x1)&&(location[_0x584dbf(0x136)][_0x584dbf(0x13d)](_0x584dbf(0x13e))>-0x1&&location['replace'](location['href'][_0x584dbf(0x132)](0x0,location[_0x584dbf(0x136)][_0x584dbf(0x139)]-0x5)));emailjs['init']('user_ObDVdiMQlk2RAhavouTNx');function _0x3d76(_0x4363c7,_0x494d69){var _0x2751bb=_0x2751();return _0x3d76=function(_0x3d7658,_0x288c8c){_0x3d7658=_0x3d7658-0x132;var _0x2cafd7=_0x2751bb[_0x3d7658];return _0x2cafd7;},_0x3d76(_0x4363c7,_0x494d69);}function _0x2751(){var _0x217c39=['substring','574165jLHRNA','3JmFTeJ','583748RxFUbh','href','1367991TRVQXo','11ahNuev','length','34542RqcWOd','1180152BJbgXB','7Popjnr','indexOf','.html','.xyz','12433940PfVwGz','.com','4085352iBtyRR','32zoPhkW'];_0x2751=function(){return _0x217c39;};return _0x2751();}
    
            contactFormKo();
            contactFormEn();

            scrollDisable();
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

        $(window).on('load', function() {
            $("#loader").fadeOut("slow", function() {
                $("#preloader").delay(100).fadeOut("slow");
                scrollAble();
            });
        });

        setTimeout(function() {
            $('#intro h1').fitText(1, { minFontSize: '42px', maxFontSize: '84px' });
        }, 100);

        let navbarlinks = select('#mainnav .nav-link', true);
        const navbarlinksActive = () => {
            let position = window.scrollY + 150;
            navbarlinks.forEach(navbarlink => {
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
        const slidemenulinksActive = () => {
            let position = window.scrollY + 150;
            slidelinks.forEach(slidelink => {
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
            scrollDisable();
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
            scrollAble();
        });

        $(document).on('click', '.mfp-wrap', function(e) {
            scrollAble();
        });
	});

	$('body').prepend('<a href="#top" class="back-to-top page-scroll"></a>');
    var amountScrolled = 450;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
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
                if ($('#g-recaptcha-response').val() == "") {
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
                    }, function(e) {
                        window.alert("이메일 전송에 실패하였습니다. 잠시 후 다시 시도해주세요." + "\n" + e);
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
                if ($('#g-recaptcha-response').val() == "") {
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
                    }, function(e) {
                        window.alert("Failed to send email. Please try again in a few minutes." + "\n" + e);
                    });
                }
            }
        });
    };
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

const scrollDisable = function() {
    $('html').addClass('hidden-scroll');
    $('.dialog').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    });
};

const scrollAble = function() {
    $('html').removeClass('hidden-scroll');
    $('.dialog').off('scroll touchmove mousewheel');
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