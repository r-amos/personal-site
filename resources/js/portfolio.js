$(document).ready(function(){
	var waypoint = new Waypoint({
	  element: document.getElementById('my-skills'),
	  handler: function() {
	    $("nav").removeClass("navbar-hide");
	    $("nav").toggleClass("slideInDown slideOutUp");
	  },
		offset: 100
	})
	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top - 40
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});
});