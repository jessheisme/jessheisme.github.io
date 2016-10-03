$(document).ready(function() {

	// side nav + map hover effects
	$(".city-link").hover(function() {
		var number = $(this).attr('id').slice(-1);
		$(".map").css("opacity","0");
		$("#map" + number).css("opacity","1");
	});

	// fade in map effect
	$(".map").hide().fadeIn(1500);

	// fade out map + fade in media
	$("a").click(function(e) {
		e.preventDefault();
		var newLocation = this.getAttribute("href");
		$(".map").fadeOut(300);
		$(".picture").fadeOut(300);

		setTimeout(function() {
			window.location = newLocation;
		}, 300);
	});

	// snapchat
	$("#img1").click(function() {
		$(this).fadeOut();
		$("#vid1").get(0).play();
	});
	$("#img2").click(function() {
		$(this).fadeOut();
		$("#vid2").get(0).play();
	});

	// enlarging picture when clicked (only on desktop)
	if (screen.width >= 900) {
		$(".instagram").click(function() {
			$("#overlay").show();
			$(this).addClass("instagram-click");
			$(this).hover().css("cursor","auto");
		});
		$(".picture").click(function() {
			$("#overlay").show();
			$(this).addClass("pic-click");
			$(this).hover().css("cursor","auto");
		});
		$("#overlay").click(function() {
			$(this).hide();
			$(".picture").removeClass("pic-click");
			$(".picture").removeClass("instagram-click");
			$(".picture").hover().css("cursor","pointer");
		})
	}
});