$(document).ready(function() {

	$(".fade").hide(0).fadeIn(1500);

	$(".left").hover(function() {
		$("body").css("backgroundColor","#0293c0");
		$(".right").css("backgroundColor","#0293c0");
		$("#hidden1").css("display","block");
	}, function() {
		$("body").css("backgroundColor","#e8b03b");
		$(".right").css("backgroundColor","#c93354");
		$("#hidden1").css("display","none");
	});

	$(".right").hover(function() {
		$("body").css("backgroundColor","#c93354");
		$(".left").css("backgroundColor","#c93354");
		$("#hidden2").css("display","block");
	}, function() {
		$("body").css("backgroundColor","#e8b03b");
		$(".left").css("backgroundColor","#0293c0");
		$("#hidden2").css("display","none");
	});

})