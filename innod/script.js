$(document).ready(function() {

	$(".left").hover(function() {
		$("body").css("backgroundColor","#0293c0");
		$(".right").css("backgroundColor","#0293c0");
	}, function() {
		$("body").css("backgroundColor","#e8b03b");
		$(".right").css("backgroundColor","#c93354");
	});

	$(".right").hover(function() {
		$("body").css("backgroundColor","#c93354");
		$(".left").css("backgroundColor","#c93354");
	}, function() {
		$("body").css("backgroundColor","#e8b03b");
		$(".left").css("backgroundColor","#0293c0");
	});

})