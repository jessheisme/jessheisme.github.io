$(document).ready(function() {

	/*
	$("#enter-container").hover(function() {
		$("#map-container").show();
		$('#map-container').stop().animate({opacity: 1}, 500);
	})

	$("#background").hover(function() {
		$("#map-container").hide();
		$('#map-container').animate({opacity: 0}, 500);
	})
	*/


	/* make code better make a class for each individual map and do a all but kinda thing*/
	$("#vancouver-map").hover(function() {

		//hide other maps
		$("#toronto-map").stop().css("opacity", "0");
		$("#sf-map").stop().css("opacity", "0");
		$("#ny-map").stop().css("opacity", "0");

		// hide other description
		$("#sf-info-container").stop().css("opacity", "0");
		$("#ny-info-container").stop().css("opacity", "0");
		$("#toronto-info-container").stop().css("opacity", "0");

		//show current map
		$("#vancouver-map").stop().animate({opacity: 1}, 500);
		$("#vancouver-map").stop().css("opacity", 1);

		//show description
		$("#city-info-container").stop().animate({opacity: 1}, 500);
		$("#vancouver-info-container").stop().animate({opacity: 1}, 500);
	})

	$("#vancouver-map").click(function() {
		window.location.href="";
	})
	
	$("#ny-map").hover(function() {

		//hide other descriptions
		$("#sf-info-container").stop().css("opacity", "0");
		$("#vancouver-info-container").stop().css("opacity", "0");
		$("#toronto-info-container").stop().css("opacity", "0");

		//hide other maps
		$("#toronto-map").stop().css("opacity", "0");
		$("#vancouver-map").stop().css("opacity", "0");
		$("#sf-map").stop().css("opacity", "0");

		//show current map
		$("#ny-map").stop().animate({opacity: 1}, 500);

		//show description
		$("#city-info-container").stop().animate({opacity: 1}, 500);
		$("#ny-info-container").stop().animate({opacity: 1}, 500);
	})

	$("#sf-map").hover(function() {

		//hide other maps
		$("#toronto-map").stop().css("opacity", "0");
		$("#ny-map").stop().css("opacity", "0");
		$("#vancouver-map").stop().css("opacity", "0");

		//hide other descriptions
		$("#ny-info-container").stop().css("opacity", "0");
		$("#vancouver-info-container").stop().css("opacity", "0");
		$("#toronto-info-container").stop().css("opacity", "0");

		//show current map
		$("#sf-map").stop().animate({opacity: 1}, 500);
		
		//show description
		$("#city-info-container").stop().animate({opacity: 1}, 500);		
		$("#sf-info-container").stop().animate({opacity: 1}, 500);
	})


	$("#toronto-map").hover(function() {

		//hide other maps
		$("#sf-map").stop().css("opacity", "0");
		$("#ny-map").stop().css("opacity", "0");
		$("#vancouver-map").stop().css("opacity", "0");

		//hide other descriptions
		$("#sf-info-container").stop().css("opacity", "0");
		$("#ny-info-container").stop().css("opacity", "0");
		$("#vancouver-info-container").stop().css("opacity", "0");

		//show curent map
		$("#toronto-map").stop().animate({opacity: 1}, 500);

		//show description
		$("#city-info-container").stop().animate({opacity: 1}, 500);		
		$("#toronto-info-container").stop().animate({opacity: 1}, 500);
	})

	$("#map").hover(function() {
		$("#vancouver-map").stop().css("opacity", "0");
		$("#ny-map").stop().css("opacity", "0");
		$("#sf-map").stop().css("opacity", "0");
		$("#toronto-map").stop().css("opacity", "0");

		$("#city-info-container").stop().css("opacity", "0");
	})

	$("#about-city").hover(function() {
		$("#menu-contianer").css("left", "-50px");
	})

})