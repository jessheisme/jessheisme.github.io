$(document).ready(function() {

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

	/*
	// About Me Responsive
	window.onresize = function() {
		if (window.innerWidth <= 1060) {
			$("#about-me-left-content").css("margin-left", "10%");
		}
		if (window.innerWidth <= 891) {
			$("#about-me-right-content").css("right", "10%");
		}
		if (window.innerWidth <= 747) {
			$("#about-me-left-content").hide();
			$("#about-me-pic-right").show();
			$("#about-me-right-content").css("top","calc(50% - 453px/2)");
			$("#about-me-right-content").css("right","calc(50% - 350px/2)");
		}
	}

	if (window.innerWidth <= 747) {
		$("#about-me-left-content").hide();
		$("#about-me-pic-right").show();
		$("#about-me-right-content").css("top","calc(50% - 453px/2)");
		$("#about-me-right-content").css("right","calc(50% - 350px/2)");
	}
	*/
	

	// Dock animations

	$("#dock-hover-area").mouseenter(function() {
		$("#dock").animate({bottom: "-4px"}, 300);
	})
	$("#dock-hover-area").mouseleave(function() {
		$("#dock").animate({bottom: "-60px"}, 300);
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

	$(".close").click(function() {
		$(".window").css("display", "none");
		$("#topbar-title").html("Home");
	})

	$("#first-menu-item").click(function() {
		$(".window").css("display", "none");
		$("#about-me-window").css("display","block");
		$("#topbar-title").html("About Me");
	})

	$("#change-bg").click(function() {
		$(".window").css("display", "none");
		$("#change-bg-window").css("display","block");
		$("#topbar-title").html("Change Desktop Picture");
	})

	$("#bg1").click(function() {
		$("#background").html("<img id='bg-replaced' src='img/cotton-candy.jpg'/>");
	})
	$("#bg2").click(function() {
		$("#background").html("<img id='bg-replaced' src='img/beach.jpg'/>");
	})
	$("#bg3").click(function() {
		$("#background").html("<img id='bg-replaced' src='img/graffiti.jpg'/>");
	})

	$("#projects").click(function() {
		$(".window").css("display", "none");
		$("#projects-window").css("display","block");
		$("#topbar-title").html("Projects");
	})

})