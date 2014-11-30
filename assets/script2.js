$(document).ready(function() {

	$(window).scroll(function() {
		var scrollPosition = $(window).scrollTop();
		$("#background-img").css("opacity", 1-scrollPosition);
	});

}