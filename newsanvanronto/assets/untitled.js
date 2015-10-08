$(document).ready(function() {

$(window).scroll(function() {
parallax();
var scrollPosition = $(window).scrollTop();
var blog1Top = $('#blog1').offset().top;
var blog2Top = $('#blog2').offset().top;
var blog3Top = $('#blog3').offset().top;
var blog4Top = $('#blog4').offset().top;
$('.parallax').css('opacity', 1);
if (scrollPosition > blog1Top && scrollPosition < blog2Top) {
    $('#para1').css('opacity', 1 - (scrollPosition - blog1Top)/540);
} else if (scrollPosition > blog2Top && scrollPosition < blog3Top) {
     $('#para2').css('opacity', 1 - (scrollPosition - blog2Top)/540);
} else if (scrollPosition > blog3Top && scrollPosition < blog4Top) {
     $('#para3').css('opacity', 1 - (scrollPosition - blog3Top)/540);
} else if (scrollPosition > blog4Top) {
    $('#para4').css('opacity', 1 - (scrollPosition - blog4Top)/540);
}
});

}