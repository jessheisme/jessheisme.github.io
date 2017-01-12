$(document).ready(function() {
	$('.datepicker').pickadate({
		selectMonths: true, // Creates a dropdown to control month
		selectYears: 15 // Creates a dropdown of 15 years to control year
	});

	$("#go-container").mouseover(function() {
		$("#go-text-container").css("width","105px");
		$("#plane").addClass("go-plane-hover");
	});
	$("#go-container").mouseleave(function() {
		$("#go-text-container").css("width","0px");
		$("#plane").removeClass("go-plane-hover");
	});

	$(function() {
		$(".result-card").draggable({
			revert : function(event, ui) {
				$(this).data("uiDraggable").originalPosition = {
					top: 0,
					left: 0
				};
				return !event;
			}
		});
		$(".timecard").droppable();
	})
})