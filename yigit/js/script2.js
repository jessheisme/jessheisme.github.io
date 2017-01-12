$(document).ready(function() {

	$(function() {

		var dragging;
		var dropped = false;
		var resultName;

		// start dragging cards on right
		$(".result-card").on("dragstart", function( event,ui) {
			// haven't dropped yet
			dropped = false;
			// below happens WHILE dragging
			// hide name of place
			$(this).find(".result-text-container").css("display","none");
			// make pictures bigger
			$(this).find(".result-thumbnail").addClass("result-thumbnail-new");
			// grab name and place and store in variable
			resultName = ": " + $(this).find(".result-name").text() + " @ " + $(this).find(".result-hood").text();
			// change the size of the card while you drag
			dragging = $(this).addClass("result-card-drag");
		});
		// let go of drag
		$(".result-card").on("dragstop", function( event,ui) {
			// if you didn't drop it (but you let go)
			if (dropped == false) {
				// undo changes to card size
				$(this).removeClass("result-card-drag");
				// show the name of the placa again
				$(this).find(".result-text-container").css("display","block");
				// make the images smaller again
				$(this).find(".result-thumbnail").removeClass("result-thumbnail-new");
			}
			// make droppable areas back to original background color
			$(".timeCard").removeClass("timeCard-drop");
		});

		// incoming drop!
		$(".timeCard").droppable({
			drop: function(event, ui) {
				// you dropped it
				dropped = true;
				// make the card completely opaque since it's dropped now
				dragging.css("opacity","1");
				// add what you dropped to the div
				$(this).append(dragging);
				// add the name and place above
				$(this).prev().append(resultName);
			}
		});

		// when you're dragging from the right, show where you can drag to (UX)
		$(".timeCard").on("dropactivate",function(event,ui) {
			$(this).addClass("timeCard-drop");
		});

		// have the cards "bounce back" to their orginal position if you don't drop
		$(".result-card").draggable({
			revert: true
		});

	})
})