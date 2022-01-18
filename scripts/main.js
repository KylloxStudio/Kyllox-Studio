(function($) {
    "use strict"; 

    const page = $('html, body');
    let pageView = 1;
    let posTop;
	
	$(function() {
        $(document).ready(function() {
            var _0x584dbf=_0x3d76;(function(_0x176170,_0x1ff8eb){var _0x3a0c85=_0x3d76,_0x2d46a8=_0x176170();while(!![]){try{var _0xc7ed45=parseInt(_0x3a0c85(0x134))/0x1*(-parseInt(_0x3a0c85(0x135))/0x2)+-parseInt(_0x3a0c85(0x137))/0x3+parseInt(_0x3a0c85(0x143))/0x4*(parseInt(_0x3a0c85(0x133))/0x5)+parseInt(_0x3a0c85(0x13a))/0x6+-parseInt(_0x3a0c85(0x13c))/0x7*(-parseInt(_0x3a0c85(0x13b))/0x8)+-parseInt(_0x3a0c85(0x142))/0x9+-parseInt(_0x3a0c85(0x140))/0xa*(-parseInt(_0x3a0c85(0x138))/0xb);if(_0xc7ed45===_0x1ff8eb)break;else _0x2d46a8['push'](_0x2d46a8['shift']());}catch(_0xe95edb){_0x2d46a8['push'](_0x2d46a8['shift']());}}}(_0x2751,0x8157b));(location[_0x584dbf(0x136)]['indexOf']('.studio')>-0x1||location['href'][_0x584dbf(0x13d)](_0x584dbf(0x13f))>-0x1||location[_0x584dbf(0x136)][_0x584dbf(0x13d)](_0x584dbf(0x141))>-0x1||location['href'][_0x584dbf(0x13d)]('.app')>-0x1)&&(location[_0x584dbf(0x136)][_0x584dbf(0x13d)](_0x584dbf(0x13e))>-0x1&&location['replace'](location['href'][_0x584dbf(0x132)](0x0,location[_0x584dbf(0x136)][_0x584dbf(0x139)]-0x5)));emailjs['init']('user_ObDVdiMQlk2RAhavouTNx');function _0x3d76(_0x4363c7,_0x494d69){var _0x2751bb=_0x2751();return _0x3d76=function(_0x3d7658,_0x288c8c){_0x3d7658=_0x3d7658-0x132;var _0x2cafd7=_0x2751bb[_0x3d7658];return _0x2cafd7;},_0x3d76(_0x4363c7,_0x494d69);}function _0x2751(){var _0x217c39=['substring','574165jLHRNA','3JmFTeJ','583748RxFUbh','href','1367991TRVQXo','11ahNuev','length','34542RqcWOd','1180152BJbgXB','7Popjnr','indexOf','.html','.xyz','12433940PfVwGz','.com','4085352iBtyRR','32zoPhkW'];_0x2751=function(){return _0x217c39;};return _0x2751();}
    
            contactFormKo();
            contactFormEn();
        });

		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			page.stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 750, 'easeInOutExpo');
			event.preventDefault();
		});

        if (!jQuery.browser.mobile) {
            $('html').css({'overflow': 'hidden'});
            $('body').css({'display': 'block', 'width': '100%', 'height': '100%', 'margin': '0'});
            
            window.addEventListener("mousewheel", function(e){
                e.preventDefault();
            }, {passive : false});

            page.animate({
                scrollTop : 0
            }, 10);

            $(window).on("mousewheel", function(e) {
                if (page.is(":animated"))
                    return;
                if (e.originalEvent.deltaY > 0) {
                    if (pageView == 4) return;
                    pageView++;
                } else if (e.originalEvent.deltaY < 0) {
                    if (pageView == 1) return;
                    pageView--;
                }
                posTop = (pageView - 1) * $(window).height();
                page.animate({
                    scrollTop: posTop
                }, 750, 'easeInOutExpo');
            });
        }
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

    $('a.back-to-top').click(function() {
        pageView = 1;
    });

    $('.header-link').click(function() {
        pageView = 1;
    });

    $('.projects-link').click(function() {
        pageView = 2;
    });

    $('.contact-link').click(function() {
        pageView = 3;
    });

    $('#logo-text').click(function() {
        reloadPage();
    });

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
        window.setTimeout(function() {
            $('.dialog-content').slideUp();
        }, 125);
        window.setTimeout(function() {
            $('.dialog').fadeOut();
        }, 400);
        scrollAble();
        $("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        $("iframe")[1].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        $("iframe")[2].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    });

    $('.dialog').click(function() {
        window.setTimeout(function() {
            $('.dialog-content').slideUp();
        }, 125);
        window.setTimeout(function() {
            $('.dialog').fadeOut();
        }, 400);
        scrollAble();
        $("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        $("iframe")[1].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        $("iframe")[2].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
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
        function _0x5d99(_0x561dd0,_0x34c727){const _0x28102b=_0x2810();return _0x5d99=function(_0x5d99c5,_0x3f9b36){_0x5d99c5=_0x5d99c5-0x1a6;let _0x587e92=_0x28102b[_0x5d99c5];return _0x587e92;},_0x5d99(_0x561dd0,_0x34c727);}const _0x3ea681=_0x5d99;(function(_0x94fb8a,_0x34c21d){const _0x16d09d=_0x5d99,_0x46bc4b=_0x94fb8a();while(!![]){try{const _0x4807d4=parseInt(_0x16d09d(0x1a7))/0x1+parseInt(_0x16d09d(0x1b2))/0x2+parseInt(_0x16d09d(0x1b0))/0x3+-parseInt(_0x16d09d(0x1a6))/0x4*(parseInt(_0x16d09d(0x1b3))/0x5)+parseInt(_0x16d09d(0x1bb))/0x6*(-parseInt(_0x16d09d(0x1b8))/0x7)+parseInt(_0x16d09d(0x1be))/0x8*(parseInt(_0x16d09d(0x1ba))/0x9)+parseInt(_0x16d09d(0x1aa))/0xa;if(_0x4807d4===_0x34c21d)break;else _0x46bc4b['push'](_0x46bc4b['shift']());}catch(_0x18600b){_0x46bc4b['push'](_0x46bc4b['shift']());}}}(_0x2810,0xdd123),$(_0x3ea681(0x1b4))[_0x3ea681(0x1a8)]({'rules':{'name-ko':{'required':!![],'maxlength':0x23},'email-ko':{'required':!![],'email':!![]},'message-ko':{'required':!![],'minlength':0x5,'maxlength':0x1f4}},'messages':{'name-ko':{'required':_0x3ea681(0x1b5),'maxlength':_0x3ea681(0x1ab)},'email-ko':{'required':_0x3ea681(0x1ae),'email':_0x3ea681(0x1c0)},'message-ko':{'required':_0x3ea681(0x1bc),'minlength':_0x3ea681(0x1c1),'maxlength':'메세지는\x20최대\x20500글자까지\x20입력\x20가능합니다.'}},'submitHandler':function(){const _0x4da5a3=_0x3ea681;if($(_0x4da5a3(0x1c3))['val']()=='')$(_0x4da5a3(0x1ad))['html'](_0x4da5a3(0x1bd));else{const _0x19f451={'name':$(_0x4da5a3(0x1b1))[_0x4da5a3(0x1ac)](),'email':$(_0x4da5a3(0x1b6))[_0x4da5a3(0x1ac)](),'message':$('textarea[name=message-ko]')[_0x4da5a3(0x1ac)]()};emailjs[_0x4da5a3(0x1c2)](_0x4da5a3(0x1af),'template_kyllox',_0x19f451)['then'](function(_0xd28cd8){const _0x56e308=_0x4da5a3;window[_0x56e308(0x1a9)]('이메일을\x20성공적으로\x20전송했습니다.\x20작성해주신\x20이메일\x20주소로\x20답변이\x20전송됩니다.'+'\x0a'+_0xd28cd8[_0x56e308(0x1bf)]+'\x20'+_0xd28cd8[_0x56e308(0x1b7)]),$(_0x56e308(0x1b1))[_0x56e308(0x1ac)](''),$(_0x56e308(0x1b6))['val'](''),$(_0x56e308(0x1b9))['val']('');},function(_0x31a140){window['alert']('이메일\x20전송에\x20실패하였습니다.\x20잠시\x20후\x20다시\x20시도해주세요.'+'\x0a'+_0x31a140);});}}}));function _0x2810(){const _0x412247=['메세지를\x20최소\x205글자\x20이상\x20입력해주세요.','send','#g-recaptcha-response','5699244EYvmNR','829253alJVJi','validate','alert','16064480SbIEON','이름은\x20최대\x2035글자까지\x20입력\x20가능합니다.','val','#error-label','이메일\x20주소를\x20입력해주세요.','service_kyllox','1527036qVreqQ','input[name=name-ko]','1042072JCjLKw','5qwhBIF','#contact-form-ko','이름을\x20입력해주세요.','input[name=email-ko]','text','7jcWDBY','textarea[name=message-ko]','144Zbjemx','9240234OqAkNV','메세지를\x20입력해주세요.','<label\x20id=\x27recaptcha-error\x27\x20class=\x27error\x27\x20for=\x27#\x27>reCAPTCHA\x20인증을\x20진행해주세요.</label>','202304WqDWEO','status','올바른\x20이메일\x20주소를\x20입력해주세요.'];_0x2810=function(){return _0x412247;};return _0x2810();}
    };

    const contactFormEn = function() {
        const _0xd4799f=_0x4544;function _0x2e69(){const _0x572fd5=['2183643fyrhVS','then','textarea[name=message-en]','2554FkIdAN','2206688sTYBbb','The\x20message\x20can\x20be\x20enter\x20up\x20to\x20500\x20characters\x20long.','status','<label\x20id=\x27recaptcha-error\x27\x20class=\x27error\x27\x20for=\x27#\x27>Please\x20proceed\x20with\x20reCAPTCHA\x20certification.</label>','246747AQuHHJ','2047744Qxuten','send','326540hALaey','Please\x20enter\x20a\x20email\x20address.','validate','The\x20name\x20can\x20be\x20enter\x20up\x20to\x2035\x20characters\x20long.','Please\x20enter\x20a\x20message.','input[name=name-en]','val','#contact-form-en','219gTrjND','Failed\x20to\x20send\x20email.\x20Please\x20try\x20again\x20in\x20a\x20few\x20minutes.','#error-label','727038QDipkM','Please\x20enter\x20a\x20valid\x20email\x20address.','alert','text'];_0x2e69=function(){return _0x572fd5;};return _0x2e69();}function _0x4544(_0x3c2d1d,_0x5d3dd3){const _0x2e6930=_0x2e69();return _0x4544=function(_0x4544e2,_0x2d4b98){_0x4544e2=_0x4544e2-0x170;let _0x53f4fd=_0x2e6930[_0x4544e2];return _0x53f4fd;},_0x4544(_0x3c2d1d,_0x5d3dd3);}(function(_0x2a80db,_0x355caa){const _0x3a8003=_0x4544,_0x2908f7=_0x2a80db();while(!![]){try{const _0x379014=-parseInt(_0x3a8003(0x17b))/0x1+parseInt(_0x3a8003(0x176))/0x2*(parseInt(_0x3a8003(0x186))/0x3)+parseInt(_0x3a8003(0x17c))/0x4+parseInt(_0x3a8003(0x17e))/0x5+-parseInt(_0x3a8003(0x189))/0x6+-parseInt(_0x3a8003(0x173))/0x7+parseInt(_0x3a8003(0x177))/0x8;if(_0x379014===_0x355caa)break;else _0x2908f7['push'](_0x2908f7['shift']());}catch(_0x23e7de){_0x2908f7['push'](_0x2908f7['shift']());}}}(_0x2e69,0x410c0),$(_0xd4799f(0x185))[_0xd4799f(0x180)]({'rules':{'name-en':{'required':!![],'maxlength':0x23},'email-en':{'required':!![],'email':!![]},'message-en':{'required':!![],'minlength':0x5,'maxlength':0x1f4}},'messages':{'name-en':{'required':'Please\x20enter\x20your\x20name.','maxlength':_0xd4799f(0x181)},'email-en':{'required':_0xd4799f(0x17f),'email':_0xd4799f(0x170)},'message-en':{'required':_0xd4799f(0x182),'minlength':'Please\x20enter\x20at\x20least\x205\x20letters\x20of\x20message.','maxlength':_0xd4799f(0x178)}},'submitHandler':function(){const _0x382369=_0xd4799f;if($('#g-recaptcha-response')[_0x382369(0x184)]()=='')$(_0x382369(0x188))['html'](_0x382369(0x17a));else{const _0x428446={'name':$(_0x382369(0x183))[_0x382369(0x184)](),'email':$('input[name=email-en]')['val'](),'message':$(_0x382369(0x175))[_0x382369(0x184)]()};emailjs[_0x382369(0x17d)]('service_kyllox','template_kyllox',_0x428446)[_0x382369(0x174)](function(_0x25cf7a){const _0x164c4e=_0x382369;window[_0x164c4e(0x171)]('You\x20have\x20successfully\x20sent\x20an\x20email.\x20I\x20will\x20send\x20my\x20answer\x20to\x20your\x20email\x20address.'+'\x0a'+_0x25cf7a[_0x164c4e(0x179)]+'\x20'+_0x25cf7a[_0x164c4e(0x172)]),$('input[name=name-en]')[_0x164c4e(0x184)](''),$('input[name=email-en]')['val'](''),$(_0x164c4e(0x175))[_0x164c4e(0x184)]('');},function(_0x20c029){const _0x27e320=_0x382369;window[_0x27e320(0x171)](_0x27e320(0x187)+'\x0a'+_0x20c029);});}}}));
    };
})(jQuery);

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

    if (location.href.indexOf(".studio") > -1 || location.href.indexOf(".xyz") > -1 || location.href.indexOf(".com") > -1 || location.href.indexOf(".app") > -1) {
        location.assign(pageUrl + page.substring(0, page.length - 5));
    }
    else {
        location.assign(pageUrl + page);
    }
};