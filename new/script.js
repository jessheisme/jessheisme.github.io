// SITE BY JESSICA HE © 2016 // JESSHEISME.COM 

$(document).ready(function() {


	$("#grid-container").hover(function() {
		$(".square").addClass("gridHover");
		// $("#grid-text").delay(100).fadeIn(100);
	}, function() {
		// $("#grid-text").hide();
		$(".square").removeClass("gridHover");
	}
	);


})

/****Notes****/
// fix overscroll problem - FIXED
// grid hover text appear bug 
// shrink image on scroll
// add project counter bottom right e.g. "1/6"