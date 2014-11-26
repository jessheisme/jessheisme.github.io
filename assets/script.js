$(document).ready(function() {

	$("#enter-button").hover(function() {
		$("#map-container").show();
		$('#map-container').animate({opacity: 1}, 300);
	})

	$("#background").hover(function() {
		$("#map-container").hide();
	})

})