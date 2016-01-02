$(document).ready(function() {
	$(".city-link").hover(function() {
		var number = $(this).attr('id').slice(-1);
		$(".map").css("opacity","0");
		$("#map" + number).css("opacity","1");
	});

	$(".map").hide().fadeIn(1500);

	$("a").click(function(e) {
		e.preventDefault();
		var newLocation = this.getAttribute("href");
		$(".map").fadeOut(300);
		$(".picture").fadeOut(300);

		setTimeout(function() {
			window.location = newLocation;
		}, 300);
	});



});