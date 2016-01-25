$(document).ready(function() {

	// go to about page after opening animation
	var current = window.location.pathname.split("/").pop();
	if (current == "index.html" || window.location.href == "wwww.jessheisme.com") {	
		// once animation finishes on nav
		$(".nav").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
			window.location = "work.html";
		});
	}

	// fade in 
	$(".project-preview").hide().fadeIn(1000);

	// sticky nav bar at scrollpoint
	$(window).scroll(function() {
		if ($(window).scrollTop() > 58) {
			$("#logo-loaded").css("display","none");
			$("#nav-loaded").addClass("sticky");
		} else {
			$("#logo-loaded").css("display","block");
			$("#nav-loaded").removeClass("sticky");
		}
	});

	// show project description on hover
	$(".project-preview h1").hover(function() {
		var number = $(this).attr('id').slice(-1);
		$(this).addClass("project-hover-up");
		$(".project-preview #d" + number).css("opacity","1");
		number = parseInt(number) + 1;
		$(".project-preview #t" + number).addClass("project-hover-down");
	}, function() {
		var number = $(this).attr('id').slice(-1);
		$(this).removeClass("project-hover-up");
		$(".project-preview #d" + number).css("opacity","0");
		number = parseInt(number) + 1;
		$(".project-preview #t" + number).removeClass("project-hover-down");
	});

	// focus on clicked
	$(".project-preview a").click(function(e) {
		e.preventDefault();
		$(".project-preview a").css("opacity","0");
		var id = $(this).parent().attr('id');
		$(".project-preview #" + id + " a").css("opacity","1");
		$(".project-preview h1").unbind();
		var newLocation = this.getAttribute("href");
		$(".project-preview").delay(500).fadeOut(1000);
		setTimeout(function() {
			window.location = newLocation;
		}, 1500);
	});
})