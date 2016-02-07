$(document).ready(function() {

	// go to work page after opening animation
	var current = window.location.pathname.split("/").pop();
	if (current == "index.html" || window.location.hostname == "www.jessheisme.com") {	
		// once animation finishes on nav
		$(".nav").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
			window.location = "work.html";
		});
	}

	$("#logo").hover(function() {
		$("#logo #bg-outline").css("stroke","rgb(255, 112, 22)");
		$("#logo #bg-fill").css("fill","rgb(255, 112, 22)");
		$(".draw path").css("stroke","rgb(255, 112, 22)");
	}, function() {
		$("#logo #bg-outline").css("stroke","#3F3F3F");
		$("#logo #bg-fill").css("fill","#3F3F3F");
		$(".draw path").css("stroke","#3F3F3F");
	})

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

	/*
	// show project description + thumbnail on hover
	$(".project-preview h1").hover(function() {
		var number = $(this).attr('id').slice(-1);
		number = parseInt(number) - 1
		$(".project-preview #t" + number).addClass("project-hover-up");
		$(".project-thumbnail video").fadeOut();
		$("#v" + number).fadeIn();
		number = parseInt(number) + 2;
		$(".project-preview #t" + number).addClass("project-hover-down");
	}, function() {
		var number = $(this).attr('id').slice(-1);
		number = parseInt(number) - 1
		$(".project-preview #t" + number).removeClass("project-hover-up");
		number = parseInt(number) + 1;
		$(".project-preview #t" + number).removeClass("project-hover-down");
	});
	*/

	$(".project-preview h1 a").mouseenter(function() {
		var number = $(this).attr('id').slice(-1);
		$(".project-thumbnail video").fadeOut();
		$("#v" + number).css("display","block");
	});

	$(".project-preview h1 a").hover(function() {
		$(".project-preview h1 a").css("color","#565656");
		$(".project-preview h1 a").css("border","2px solid transparent");
		$(this).css("color","rgb(255, 112, 22)");
		$(this).css("border-left","2px solid rgb(255, 112, 22)");
	});

	// focus on clicked
	/*
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
*/
})