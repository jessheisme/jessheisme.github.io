$(document).ready(function(){
  $('.image-carousel').slick({
  	dots: true,
  	arrows: false,
  });

  if (screen.wdith > 800) {
  	$("#main-container").hide();
  }

});
		