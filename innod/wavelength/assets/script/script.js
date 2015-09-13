$(document).ready(function() {
	$("#login").click(function() {
		$(".screen").css("display", "none");
		$("#login-screen").fadeIn();
	})
	$("#profile").click(function() {
		$(".screen").css("display", "none");
		$("#profile-screen").fadeIn();
	})
	$("#discover").click(function() {
		$(".screen").css("display", "none");
		$("#discover-screen").fadeIn();
	})
	$("#results").click(function() {
		$(".screen").css("display", "none");
		$("#results-screen").fadeIn();
	})
	$("#event").click(function() {
		$(".screen").css("display", "none");
		$("#event-screen").fadeIn();
	})
	$("#circles").click(function() {
		$(".screen").css("display", "none");
		$("#circles-screen").fadeIn();
	})
	$("#top10").click(function() {
		$(".screen").css("display", "none");
		$("#top10-screen").fadeIn();
	})
})