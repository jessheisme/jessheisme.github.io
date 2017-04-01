// SITE BY JESSICA HE © 2016 // JESSHEISME.COM 

$(document).ready(function() {

	$(this).scrollTop(0);

	$('#nav-icon1').click(function(){
		if ($("#nav-icon1").hasClass("open")) {
			$("#menu-overlay").fadeOut(200);
		} else {
			$("#menu-overlay").fadeIn(200);
		}
		$(this).toggleClass('open');
	});


	var marker = $("#background-image-container").offset().top - $(window).scrollTop();
	
	
	// STUFF HAPPENING ON SCROLL
	$(window).scroll(function() {

		// distance from top of window
		var scrollTop = $(window).scrollTop();
		try {
			var imageTop = $(".first-image").offset().top;
		}
		catch(e) {
			$("#i0").addClass("first-image");
		}
		var distance = imageTop - scrollTop;
		// console.log(distance);
		// console.log("marker" + marker);

		var nextImage = $(".first-image").next();
		var prevImage = $(".first-image").prev();

		// change name to whatever is being hovered on
		$(".project-image").hover(function () {
			hoverText = $("#p" + $(this).attr('id').slice(-1)).html();
			$("#p0").text(hoverText);
			$(".project-image").css("opacity","0.3");
			$(this).css("opacity","1");
		});

		
		if (scrollTop >= 400) {
			// sticky project title
			$("body #project-title-container").css("position","fixed");
			$("body #project-title-container").css("top","100px");
			// side and bottom stuff come in after intro
			$("#left-sidebar-container").fadeIn();
			$("#about-container").fadeIn();
			$("#footer").fadeIn();

			// get and change project name
			var projectNumber = $(".first-image").attr('id').slice(-1);
			var projectID = $("#p" + projectNumber);
			var projectName = projectID.html();
			$("#p0").text(projectName);

			console.log(projectName);
		}


		// unstick project title
		if (scrollTop < 400) {
			$("body #project-title-container").css("position","absolute");
			$("body #project-title-container").css("top","initial");
			// side and bottom stuff leave when scrolling back
			$("#left-sidebar-container").fadeOut();
			$("#about-container").fadeOut();
			$("#footer").fadeOut();
		}
		// console.log("distance: " + distance + "\nscrollTop: " + scrollTop + "\nmarker: " + marker);
		// change project name scrolling down
		if (distance < -50 && scrollTop > 0) {
			$(".first-image").removeClass("first-image");
			nextImage.addClass("first-image");
		}
		// change project name scrolling up
		if (distance+350 >= marker && scrollTop > 0) {
			$(".first-image").removeClass("first-image");
			prevImage.addClass("first-image");
		}

		// $(".project-title").hover(function() {
		// 	$("#i" + $(".first-image").attr('id').slice(-1)).css("opacity","1");
		// }, function() {
		// 	$("#i" + $(".first-image").attr('id').slice(-1)).css("opacity","0.95");
		// })

		$(".project-image").css("opacity","0.3");
		$("#i" + $(".first-image").attr('id').slice(-1)).css("opacity","1");

		// reset if scrolled to top
		if (scrollTop <= 0) {
			$("#p0").text("my projects");
			$("#intro").fadeIn();
			$("i1").addClass(".first-image")
		}

		// links to go to project page (from title and thumbnail)
		var linkDictionary = {1: "quak.html", 2: "security-ninjas.html", 3: "family-map.html", 4: "comingsoon.html", 5: "comingsoon.html", 6: "sync.html", 7: "upstream.html"} // CHANGE PROJECT LINKS HERE
		$("#p0").click(function () {
			window.location.href = linkDictionary[projectNumber];
		});
		$(".project-image").click(function () {
			window.location.href = linkDictionary[$(this).attr('id').slice(-1)];
		});


		// change background color
		var backgroundColors = {3: "#fffbcc", 2: "rgb(239, 220, 234)", 1: "rgb(239, 222, 189)", 4: "rgb(213, 235, 183)", 6: "rgb(189, 239, 212)", 5: "rgb(220, 239, 236)", 7: "rgb(255, 203, 173)"};
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