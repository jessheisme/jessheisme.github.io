$(document).ready(function() {

	var naked = true;

	$(".outfit-selection").click(function() {
		$("#body").hide();
		$(".outfit").hide();
		naked = false;
	})

	$(".outfit").hover(function() {
		$("#body").show();
		$(active_outfit).hide();
	})
	$("#drake-container").hover(function() {
		if (naked == false) {
			$("#body").hide();
			$(active_outfit).show();
		}
	})
	

	var active_outfit;
	$("#s1").click(function() {
		active_outfit = $("#o1");
		$("#o1").show();
	})
	$("#s2").click(function() {
		active_outfit = $("#o2");
		$("#o2").show();
	})
	$("#s3").click(function() {
		active_outfit = $("#o3");
		$("#o3").show();
	})
	$("#s4").click(function() {
		active_outfit = $("#o4");
		$("#o4").show();
	})
	$("#s5").click(function() {
		active_outfit = $("#o5");
		$("#o5").show();
	})

	/*
	$("#s1").hover(function() {
		$("#o1").show();
	})
	$("#s2").hover(function() {
		$("#o2").show();
	})
	$("#s3").hover(function() {
		$("#o3").show();
	})
	$("#s4").hover(function() {
		$("#o4").show();
	})
	$("#s5").hover(function() {
		$("#o5").show();
	})
	*/
})