$(document).ready(function() {


	$(".outfit-selection").click(function() {
		// Hide the body and any activated outfits
		$("#body").hide();
		$(".outfit").hide();
		// Get the last character of outfit-selection id
		// which is the number corresponding to the outfit
		var number = $(this).attr('id').slice(-1);
		// Show the corresponding outfit
		$("#o" + number).show();
	})

/* 	
	This is an alternative way of doing the same thing as above.
	$("#s1").click(function() {
		$("#o1").show();
	})
	$("#s2").click(function() {
		$("#o2").show();
	})
	$("#s3").click(function() {
		$("#o3").show();
	})
	$("#s4").click(function() {
		$("#o4").show();
	})
	$("#s5").click(function() {
		$("#o5").show();
	})
*/


})