$(document).ready(function() {

	/* THINGS TO ADD/Change
	 * 
	 * 1) Write a function for opening/closing windows.
	 * 2) Allow layering of windows. (Play with z-index).
	 * 3) Clean and document up code.
	 * 4) Add "story behind the apple theme" - kickstarted creativity because of easy UX
	 *
	 */


	// Window re-sizing
	window.onresize = function() {
		if (window.innerWidth <= 520) {
			$(".topbar-icon-hide").hide();
			$(".topbar-icon").css("opacity", "0");;
		}
		if (window.innerWidth <= 737) {
			$(".topbar-text").hide();
		} else {
			$(".topbar-text").show();
			$(".topbar-icon-hide").show();
			$(".topbar-icon").css("opacity", "1");;
		}
	}

	// Window on load
	if (window.innerWidth <= 520) {
		$(".topbar-icon-hide").hide();
		$(".topbar-icon").css("opacity", "0");;
	}
	if (window.innerWidth <= 737) {
		$(".topbar-text").hide();
	} else {
		$(".topbar-text").show();
		$(".topbar-icon-hide").show();
		$(".topbar-icon").css("opacity", "1");;
	}
	

	// Dock animations
	$("#dock-hover-area").hover(function() {
		$("#dock").animate({right: "0px"}, 300);
	}, function() {
		$("#dock").animate({right: "-65px"}, 300);
	});

	$(".app-icon").hover(function() {
		$(".dock-title").css("opacity", "0"); // first hide all titles (only one shown at a time)
		var selectedApp = $(this).attr('id'); // grab the id of whatever app is being hovered over
		$("#" + selectedApp + "-title").css("opacity", "1"); // show title of corresponding app
	}, function() {
		$(".dock-title").css("opacity", "0");
	})


	// Dropdown menu
	var x = true;
	$("#apple-logo").click(function() {
		if (x) {
			$("#apple-logo").css("-webkit-filter", "invert(100%)");
			$("#apple-logo").css("background-color", "#e59425");
			$("#dropdown-menu").show();
			x = false;
		} else {
			$("#apple-logo").css("-webkit-filter", "invert(0%)");
			$("#apple-logo").css("background-color", "none");
			$("#dropdown-menu").hide();
			x = true;
		}
	})
	$(document).mouseup(function (e) {
		if (!$("#apple-logo").is(e.target) && $("#apple-logo").has(e.target).length === 0) {
			x = true;
			$("#dropdown-menu").hide();
			$("#apple-logo").css("-webkit-filter", "invert(0%)");
			$("#apple-logo").css("background-color", "none");
		}
	});


	// close window
	$(".close").click(function() {
		// get name of app that was just closed
		var closedApp = $(this).attr('id').substring(0,$(this).attr('id').length-6);
		// hide closed app's dot
		$("#" + closedApp + "-dot").css("opacity","0");
		$("#" + closedApp + "-window").css("display", "none"); 
		$("#topbar-title").html("Home");
	})


	// opening "applications"
	$(".app-icon").click(function() {
		var selectedApp = $(this).attr('id');
		$(".window").css("display", "none"); // hiding all other windows
		$("#" + selectedApp + "-window").css("display","block"); // showing specific window
		var selectedAppTitle = selectedApp.charAt(0).toUpperCase() + selectedApp.substring(1,selectedApp.length);
		$("#topbar-title").html(selectedAppTitle); // changing topbar title
		$("#" + selectedApp+ "-dot").css("opacity","1"); // making dot appear
	})


	// opens about me window from topbar
	$("#first-menu-item").click(function() {
		$(".window").css("display", "none"); // hiding all other windows
		$("#about-window").css("display","block"); // showing aboutwindow
		$("#topbar-title").html("About"); // changing topbar title
		$("#about-dot").css("opacity","1"); // making dot appear
	})


	// changing background
	$("#change-bg").click(function() {
		$(".window").css("display", "none");
		$("#change-bg-window").css("display","block");
		$("#topbar-title").html("Change Desktop Picture");
	})
	$("#bg1").click(function() {
		$("#background").html("<img id='bg-replaced' src='img/cotton-candy.jpg'/>");
	})
	$("#bg2").click(function() {
		$("#background").html("<img id='bg-replaced' src='img/dream.jpg'/>");
	})
	$("#bg3").click(function() {
		$("#background").html("<img id='bg-replaced' src='img/forest.jpg'/>");
	})

	/*PROJECT WINDOW*/
	var off = true;
	$("#projects-menu-icon").click(function() {
		if (off) {
			$("#projects-menu-icon").css("margin-left", "calc(20% + 30px)");
			$("#project-thumbnail-container").css("margin-left","0%");
			$(".project-content").css("margin-left","20%");
			off = false;
		} else {
			$("#projects-menu-icon").css("margin-left", "30px");
			$("#project-thumbnail-container").css("margin-left","-20%");
			$(".project-content").css("margin-left","0%");
			off = true;
		}
	})

	$(".project-thumbnail").click(function() {
		var thumbnail = $(this).attr('id').substring($(this).attr('id').length-1);
		$(".project-content").hide();
		$("#proj" + thumbnail).show();
	})

		/*TEMPORARY STUFF

	$("#newsanvanronto").mouseenter(function() {
		$("#newsanvanronto-description").css("display", "block");
	})
	$("#newsanvanronto").mouseleave(function() {
		$("#newsanvanronto-description").css("display", "none");
	})

	$("#quak").mouseenter(function() {
		$("#quak-description").css("display", "block");
	})
	$("#quak").mouseleave(function() {
		$("#quak-description").css("display", "none");
	})

	$("#cmyk").mouseenter(function() {
		$("#cmyk-description").css("display", "block");
	})
	$("#cmyk").mouseleave(function() {
		$("#cmyk-description").css("display", "none");
	})
	

	/*
	// About Me Responsive
	window.onresize = function() {
		if (window.innerWidth <= 1060) {
			$("#about-left-content").css("margin-left", "10%");
		}
		if (window.innerWidth <= 891) {
			$("#about-right-content").css("right", "10%");
		}
		if (window.innerWidth <= 747) {
			$("#about-left-content").hide();
			$("#about-pic-right").show();
			$("#about-right-content").css("top","calc(50% - 453px/2)");
			$("#about-right-content").css("right","calc(50% - 350px/2)");
		}
	}

	if (window.innerWidth <= 747) {
		$("#about-left-content").hide();
		$("#about-pic-right").show();
		$("#about-right-content").css("top","calc(50% - 453px/2)");
		$("#about-right-content").css("right","calc(50% - 350px/2)");
	}
	*/


})