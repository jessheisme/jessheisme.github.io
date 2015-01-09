$(document).ready(function() {

	$(window).scroll(function() {
		var scrollPosition = $(window).scrollTop();
		var top = $("#description-container").offset().top;

		if (scrollPosition >= top) {
			$("#description-container").addClass("fixed");
		} else {
			$("#description-container").removeClass("fixed");
		}
	});

});