(function($) {
    "use strict"; 
	
	$(function() {
        $(document).ready(function() {
            if (location.href.indexOf(".xyz") > -1 || location.href.indexOf(".com") > -1 || location.href.indexOf(".app") > -1) {
                if (location.href.indexOf(".html") > -1) {
                    location.replace(location.href.substring(0, location.href.length - 5));
                }
            }
    
            emailjs.init("user_ObDVdiMQlk2RAhavouTNx");
    
            contactFormKo();
            contactFormEn();
        });

		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 750, 'easeInOutExpo');
			event.preventDefault();
		});
	});

	$('body').prepend('<a href="#top" class="back-to-top page-scroll"></a>');
    var amountScrolled = 700;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });

    $('#logo-text').click(function() {
        reloadPage();
    })

    $('#nav-pages').hover(function() {
        $('#second-drop-link').hide();
        window.setTimeout(function() {
            $('#second-drop-link').fadeIn();
        }, 450);
    });

    $('#nav-language').hover(function() {
        $('#second-drop-link2').hide();
        window.setTimeout(function() {
            $('#second-drop-link2').fadeIn();
        }, 450);
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

    $('.dialog-content').click(function(event) {
        event.preventDefault();
        event.stopPropagation();
    });

    $('.dialog-close').click(function() {
        $('.dialog-content').slideUp();
        window.setTimeout(function() {
            $('.dialog').fadeOut();
        }, 400);
        scrollAble();
        $("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    });

    $('.dialog').click(function() {
        $('.dialog-content').slideUp();
        window.setTimeout(function() {
            $('.dialog').fadeOut();
        }, 400);
        scrollAble();
        $("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    });

    $('#show-durango-dialog').click(function() {
        $('#durango-dialog').fadeIn();
        window.setTimeout(function() {
            $('#durango-dialog-content').slideDown();
        }, 400);
        scrollDisable();
    });

    $('#show-video-dialog-01').click(function() {
        $('#video-dialog-01').fadeIn();
        window.setTimeout(function() {
            $('#video-dialog-01-content').slideDown();
        }, 400);
        scrollDisable();
    });

    $('#show-video-dialog-02').click(function() {
        $('#video-dialog-02').fadeIn();
        window.setTimeout(function() {
            $('#video-dialog-02-content').slideDown();
        }, 400);
        scrollDisable();
    });

    $('#show-video-dialog-03').click(function() {
        $('#video-dialog-03').fadeIn();
        window.setTimeout(function() {
            $('#video-dialog-03-content').slideDown();
        }, 400);
        scrollDisable();
    });

    const contactFormKo = function() {
        $('#contact-form-ko').validate({
            rules: {
                "name-ko": {
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
                if (chkRecaptcha()) {
                    const template = {	
                        name: $('input[name=name-ko]').val(),
                        email : $('input[name=email-ko]').val(),
                        message : $('textarea[name=message-ko]').val()
                    };
            
                    emailjs.send('service_kyllox', 'template_kyllox', template).then(function(response) {
                        window.alert("이메일을 성공적으로 전송했습니다. 작성해주신 이메일 주소로 답변이 전송됩니다." + "\n" + response.status + " " + response.text);
                        $('input[name=name-ko]').val("");
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
                if (chkRecaptcha()) {
                    const template = {	
                        name: $('input[name=name-en]').val(),
                        email : $('input[name=email-en]').val(),
                        message : $('textarea[name=message-en]').val()
                    };
            
                    emailjs.send('service_kyllox', 'template_kyllox', template).then(function(response) {
                        window.alert("You have successfully sent an email. I will send my answer to your email address." + "\n" + response.status + " " + response.text);
                        $('input[name=name-en]').val("");
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

const chkRecaptcha = function() {
    if ($('#g-recaptcha-response').val() == "") {
        if (window.location.href.indexOf("ko") > -1) {
            $('#error-label').html("<label id='recaptcha-error' class='error' for='#'>reCAPTCHA 인증을 진행해주세요.</label>");
        }
        else {
            $('#error-label').html("<label id='recaptcha-error' class='error' for='#'>Please proceed reCAPTCHA certification.</label>");
        }
        return false;
    }
    else {
        return true;
    }
};

const slide = new Swiper('#projects', {
    slidesPerView : 'auto',
    spaceBetween : 0,
    pagination: true,
    autoHeight: false,
    autoplay : {
        delay : 3250,
        disableOnInteraction : false,
    },
    pagination : {
        el : '.pagination',
        clickable : true,
        type : 'bullets',
    },
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

    if (location.href.indexOf(".xyz") > -1 || location.href.indexOf(".com") > -1 || location.href.indexOf(".app") > -1) {
        location.assign(pageUrl + page.substring(0, page.length - 5));
    }
    else {
        location.assign(pageUrl + page);
    }
};