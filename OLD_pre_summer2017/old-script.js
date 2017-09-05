// SITE BY JESSICA HE © 2016 // JESSHEISME.COM 

$(document).ready(function() {

	var marker = $("#background-image-container").offset().top - $(window).scrollTop();
	
	
	// STUFF HAPPENING ON SCROLL
	$(window).scroll(function() {

		var scrollTop = $(window).scrollTop();
		var imageTop = $(".first-image").offset().top;
		var distance = imageTop - scrollTop;
		// console.log(distance);
		// console.log("marker" + marker);

		var nextImage = $(".first-image").next();
		var prevImage = $(".first-image").prev();

		// change project name scrolling down
		if (distance < -300 && scrollTop > 0) {
			$(".first-image").removeClass("first-image");
			nextImage.addClass("first-image");
		}
		// change project name scrolling up
		if (distance >= marker + 30 && scrollTop > 0) {
			$(".first-image").removeClass("first-image");
			prevImage.addClass("first-image");
		}
		// get and change project name
		var projectNumber = $(".first-image").attr('id').slice(-1);
		var projectID = $("#p" + projectNumber);
		var projectName = projectID.html();
		$("#p0").text(projectName);

		$(".project-title").hover(function() {
			$("#i" + $(".first-image").attr('id').slice(-1)).css("opacity","0.8");
		}, function() {
			$("#i" + $(".first-image").attr('id').slice(-1)).css("opacity","1");
		})

		// reset if scrolled to top
		if (scrollTop <= 0) {
			$("#p0").text("my projects");
		}

		// links to go to project page (from title and thumbnail)
		var linkDictionary = {1: "quak.html", 2: "security-ninjas.html", 3: "family-map.html"} // CHANGE PROJECT LINKS HERE
		$("#p0").click(function () {
			window.location.href = linkDictionary[projectNumber];
		});
		$(".project-image").click(function () {
			window.location.href = linkDictionary[projectNumber];
		});

		// change background color
		var backgroundColors = {3: "#fffbcc", 2: "rgb(237, 194, 201)", 1: "rgb(203, 238, 229)", 4: "rgb(213, 235, 183)"};
		$("#background-color").css("background", backgroundColors[projectNumber])
		// reset background to white if scrolled to top
		if (scrollTop <= 10) {
			$("#background-color").css("background","white");
		}

	});



})

/****Notes****/
// fix overscroll problem - FIXED
// grid hover text appear bug 
// shrink image on scroll
// add project counter bottom right e.g. "1/6"