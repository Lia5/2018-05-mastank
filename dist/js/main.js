$(document).ready(function(){$("ul.menu-items li>a").each(function(){this.href==location.href&&$(this).parent().addClass("active")}),$(".menu-toggle").on("click",function(){$(this).toggleClass("on"),$(".fixed-nav").toggleClass("show"),$(".logo-mob").toggleClass("none")}),wow=new WOW({boxClass:"wow",animateClass:"animated",offset:0}),(new WOW).init()});