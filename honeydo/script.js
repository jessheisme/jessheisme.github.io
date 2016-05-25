$(document).ready(function() {
	var solids = false;
	var base = false;
	var oil = false;
	$("#solids-option").click(function() {
		$("polygon#solids").css("opacity","1");
		$("polygon#solids").css("transform","translateY(10px)");
	})

	$(".option-base").click(function() {
		$(".option-base").css("background","none");
		$(".option-base").css("color","rgb(108, 108, 108)");
		$(this).css("background","#8DB74A");
		$(this).css("color","white");
	})
	$(".option-oil").click(function() {
		$(".option-oil").css("background","none");
		$(".option-oil").css("color","rgb(108, 108, 108)");
		$(this).css("background","#8DB74A");
		$(this).css("color","white");
	})
	$(".option-solid").click(function() {
		$(".option-solid").css("background","none");
		$(".option-solid").css("color","rgb(108, 108, 108)");
		$(this).css("background","#8DB74A");
		$(this).css("color","white");
	})

	$("#o1").click(function() {
		$("#solids").css("fill","#FEE5C6");
	})
	$("#o2").click(function() {
		$("#solids").css("fill","#F4D01C");
	})
	$("#o3").click(function() {
		$("#solids").css("fill","#CE5DA0");
	})


	$("#base-option").click(function() {
		$("rect#base").css("opacity","1");
		$("rect#base").css("transform","translateY(10px)");
	})
	$("#o4").click(function() {
		$("#base").css("fill","#C8E2E8");
	})
	$("#o5").click(function() {
		$("#base").css("fill","#FF8D4D");
	})
	$("#o6").click(function() {
		$("#base").css("fill","#B2DBBA");
	})

	$("#oils-option").click(function() {
		$("rect#oil").css("opacity","1");
		$("rect#oil").css("transform","translateY(10px)");
	})
	$("#o7").click(function() {
		$("#oil").css("fill","#F4E8B3");
	})
	$("#o8").click(function() {
		$("#oil").css("fill","#EDDAC8");
	})
	$("#o9").click(function() {
		$("#oil").css("fill","#F4E5F9");
	})

	$("#done").click(function() {
		$("#custom-bottle").addClass("animated shake");
		$("rect").css("opacity","1");
		$("rect").css("opacity","1");
	})
})