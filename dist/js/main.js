$(document).ready(function(){function o(){$(".popup-bg").css("height",200+$(window).height())}function e(o,e){o.click(function(o){$(".popup-bg").addClass("active"),$("body").addClass("active"),e.addClass("active"),$("body").addClass("active"),o.preventDefault()}),$(".popup-bg").click(function(){$(this).removeClass("active"),e.removeClass("active"),$("body").removeClass("active")}),$(".popup-close").click(function(){$(".popup-bg").removeClass("active"),e.removeClass("active"),$("body").removeClass("active")}),$(".custom-click").click(function(){$(".customform").removeClass("active")}),e.click(function(o){o.preventDefault(),o.stopPropagation()})}$("ul.menu-items li>a").each(function(){this.href==location.href&&$(this).parent().addClass("active")}),$(".menu-toggle").on("click",function(){$(this).toggleClass("on"),$(".fixed-nav").toggleClass("show"),$(".logo-mob").toggleClass("none")}),$(window).resize(o()),o(),e($(".global-form"),$(".globalform")),e($(".polit-form"),$(".politform")),e($(".custom-form"),$(".customform")),$(".phone").mask("+7 (999) 999-9999"),wow=new WOW({boxClass:"wow",animateClass:"animated",offset:0}),(new WOW).init();var t=new Date;document.getElementById("copy").innerHTML=t.getFullYear()});