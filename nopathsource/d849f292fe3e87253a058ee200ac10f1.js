jQuery(function(i){function s(s){"close"==s?diviSosCloseOverlay():i(".divi-sos-overlay.active").length?(diviSosCurrentOverlayId=i(".divi-sos-overlay.active").attr("id").substr(17),i(".divi-sos-overlay.active.divi-sos-transition-fade").fadeOut(function(){i(this).removeClass("active"),i("body").removeClass("divi-sos-active"),diviSosCurrentOverlayId!=s&&o(s)}),i(".divi-sos-overlay.active.divi-sos-transition-slide").slideUp(function(){i(this).removeClass("active"),i("body").removeClass("divi-sos-active"),diviSosCurrentOverlayId!=s&&o(s)}),i(".divi-sos-overlay.active.divi-sos-transition-none").hide(function(){i("body").removeClass("divi-sos-active"),i(this).removeClass("active"),diviSosCurrentOverlayId!=s&&o(s)})):o(s)}function o(s){i("body").removeClass("divi-sos-light divi-sos-dark"),divi_sos.layouts[s].background&&("dark"==divi_sos.layouts[s].background?i("body").addClass("divi-sos-dark"):"light"==divi_sos.layouts[s].background&&i("body").addClass("divi-sos-light")),i("#divi-sos-overlay-"+s).length||(diviSosMarkup='<div id="divi-sos-overlay-'+s+'" class="divi-sos-overlay divi-sos-transition-'+divi_sos.layouts[s].transition+" divi-sos-loader-"+divi_sos.layouts[s].loader+'">',diviSosMarkup+=divi_sos.layouts[s].iframe,diviSosMarkup+='<div class="divi-sos-iframe-loader"></div>',divi_sos.layouts[s].close&&(diviSosMarkup+='<a class="divi-sos-close-button" href="#divi-sos-close" style="color: '+divi_sos.layouts[s].close_color+"; background-color: "+divi_sos.layouts[s].close_background_color+';"></a>'),diviSosMarkup+="</div>",i("#et-main-area").length?i("#et-main-area").prepend(diviSosMarkup):i("#main-content").prepend(diviSosMarkup),i("#divi-sos-overlay-"+s+" iframe").load(function(){i("#divi-sos-overlay-"+s).addClass("divi-sos-iframe-loaded"),window.setTimeout(function(){i("#divi-sos-overlay-"+s+" .sos-iframe-loader").remove()},200)})),window.setTimeout(function(){i("body").addClass("divi-sos-active")}),i("#divi-sos-overlay-"+s+".divi-sos-overlay.divi-sos-transition-fade").fadeIn(function(){i(this).addClass("active")}),i("#divi-sos-overlay-"+s+".divi-sos-overlay.divi-sos-transition-slide").slideDown(function(){i(this).addClass("active")}),i("#divi-sos-overlay-"+s+".divi-sos-overlay.divi-sos-transition-none").show(function(){i(this).addClass("active")})}function e(i,s){var o="",e=new Date;e.setTime(e.getTime()+2592e6),o="; expires="+e.toUTCString(),document.cookie=i+"="+(s||"")+o+"; path=/"}function a(i){for(var s=i+"=",o=document.cookie.split(";"),e=0;e<o.length;e++){for(var a=o[e];" "==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(s))return a.substring(s.length,a.length)}return null}i.each(divi_sos.layouts,function(i,s){s.automatic&&-1==window.location.href.indexOf("et_fb=1")&&window.setTimeout(function(){s.cookie&&a("divi_sos")?(diviSosCookie=a("divi_sos").split(","),-1==diviSosCookie.indexOf(i)&&(diviSosCookie.push(i),e("divi_sos",diviSosCookie.toString()),o(i))):(e("divi_sos",i),o(i))},s.automatic_delay)}),i(".mobile_menu_bar_toggle").click(function(s){i("body").hasClass("divi-sos-active")&&diviSosCloseOverlay()}),"undefined"!=typeof et_link_options_data&&i.each(et_link_options_data,function(o,e){e.url.startsWith("#divi-sos-")&&i("."+e.class).click(function(i){i.preventDefault(),diviSosOverlayId=e.url.substr(10),s(diviSosOverlayId)})}),i("body").on("click",'*[href^="#divi-sos-"]',function(o){o.preventDefault(),href=i(this).attr("href"),diviSosOverlayId=href.substr(10),s(diviSosOverlayId)}),diviSosCloseOverlay=function(s){(s=i(".divi-sos-overlay.active")).hasClass("divi-sos-transition-fade")&&s.fadeOut(function(){i(this).removeClass("active"),i("body").removeClass("divi-sos-active")}),s.hasClass("divi-sos-transition-slide")&&s.slideUp(function(){i(this).removeClass("active"),i("body").removeClass("divi-sos-active")}),s.hasClass("divi-sos-transition-none")&&(s.hide().removeClass("active"),i("body").removeClass("divi-sos-active")),s.find("iframe").length&&s.find("iframe")[0].contentWindow.diviSosResetVideos()}});