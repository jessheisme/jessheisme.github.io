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

	$('#nav-icon1').click(function(){
		if ($("#nav-icon1").hasClass("open")) {
			$("#menu-overlay").fadeOut(200);
		} else {
			$("#menu-overlay").fadeIn(200);
		}
		$(this).toggleClass('open');
	});

	// highlight current page in left nav
	$(".social-link").each(function() {
		if ($(this).prop('href') == window.location.href) {
			$(this).addClass('current');
		}
	});


})

/****Notes****/
// fix overscroll problem - FIXED
// grid hover text appear bug 
// shrink image on scroll
// add project counter bottom right e.g. "1/6"