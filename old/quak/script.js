$(document).ready(function() {
	setTimeout(function() {
		$("#button-container").show();
		$("#arrow-right-container").fadeIn();
	}, 5000)

	$("#button-a").click(function() {
		$("#answers").show();
		$("#button-container").hide();
		$("#back1").show();
		$("#answer-em-button").show();

		// if button-a clicked after clicking back1
		$("#home-still").hide();
	})

	$("#button-q").mouseenter(function() {
		$("#temp").fadeIn();
	})
	$("#button-q").mouseleave(function() {
		$("#temp").fadeOut();
	})

	$("#back1").click(function() {
		$("#home-still").show();
		$("#answer-em-button").hide();
		$("#answers").show();
		$("#button-container").show();

		// if back1 clicked after back2
		$("#answers-still").hide();
	})
{}
	$("#answer-em-button").click(function() {
		$("#answer-em").show();
		$("#back1").hide();
		$("#back2").show();
		$("#answer-em-button").hide();

		// if answer-em-button clicked after clicking back2
		$("#answers-still").hide();
	})

	$("#back2").click(function() {
		$("#answers-still").show();
		$("#answer-em-button").show();
		$("#back2").hide();
		$("#back1").show();
		$("#answer-em").hide();
	})
})