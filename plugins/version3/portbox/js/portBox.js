(function($){$(document).on("click","[data-display]",function(e){e.preventDefault();var portBoxID=$(this).attr("data-display");$("#"+portBoxID).display($(this).data());});$.fn.display=function(options){var defaults={animation:"fade",animationspeed:200,closeBGclick:true,};options=$.extend({},defaults,options);return this.each(function(){var portBox=$(this),locked=false,portBoxBG=$(".portBox-overlay"),scrollBar;var mobileIE=false;if(navigator.userAgent.match(/Windows Phone/i)){mobileIE=true;}function unlockPB(){locked=false;}function lockPB(){locked=true;}if(portBoxBG.length==0){portBoxBG=$('<div class="portBox-overlay" />').insertAfter(portBox);}if(typeof $.fn.slimScroll=="function"){scrollBar=true;}else{scrollBar=false;}if(portBox.has(".scrollBar").length==0&&scrollBar==true){portBox.wrapInner('<div class="scrollBar" style="padding-right:20px;" />'),portBox.css({"padding-right":10});$(function(){$(".scrollBar").slimScroll({height:"100%"});});portBox.append('<a class="close-portBox">&#215;</a>');}if(portBox.has(".close-portBox").length==0&&scrollBar==false){portBox.append('<a class="close-portBox">&#215;</a>');}portBox.center=function(){var top,left;if(portBox.outerHeight()+25>$(window).height()&&scrollBar===true&&mobileIE===false){var maxH=$(window).height()-80;portBox.css({"height":maxH+"px"});}portBox.css({top:0,left:0});top=Math.max($(window).height()-portBox.outerHeight(),0)/2;left=Math.max($(window).width()-portBox.outerWidth(),0)/2;portBox.css({top:top+$(window).scrollTop(),left:left+$(window).scrollLeft()});if(portBox.innerWidth()+10>=$(window).width()){portBox.css({"margin-right":5+"px"}),$(".close-portBox").css({"top":3,"right":3});}else{portBox.css({"margin-right":0+"px"}),$(".close-portBox").css({"top":-6,"right":-7});}if(portBox.outerHeight()>=$(window).height()&&scrollBar==false){portBox.css({"top":20+$(window).scrollTop()});}};portBox.center();$(window).on("resize.portBox",portBox.center);portBox.on("portBox:open",function(){if(!locked){lockPB();if(options.animation==""){portBox.css({"display":"block"}),portBoxBG.css({"display":"block"});unlockPB();}else{portBoxBG.fadeIn(options.animationspeed);portBox.show(options.animation,options.animationspeed);unlockPB();}}});portBox.on("portBox:close",function(){if(!locked){lockPB();if(options.animation==""){portBox.css({"display":"none"}),portBoxBG.css({"display":"none"});unlockPB();}else{portBoxBG.fadeOut(options.animationspeed),portBox.fadeOut(options.animationspeed);unlockPB();}$(window).off("resize.portBox");}});portBox.trigger("portBox:open");var closeButton=$(".close-portBox").one("click.portBoxEvent",function(){portBox.trigger("portBox:close");});if(options.closeBGclick){portBoxBG.css({"cursor":"pointer"});portBoxBG.one("click.portBoxEvent",function(){portBox.trigger("portBox:close");});}$("body").keyup(function(e){if(e.which===27){portBox.trigger("portBox:close");}});});};})(jQuery);