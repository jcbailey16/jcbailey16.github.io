/* 
	Author: Jennifer Bailey
	Document: jQuery functions
*/

$(document).ready(function() {
	
	//denote active page on mobile
	$("#on-page").css('color', '#ffffff');
	
	
	//denote active page on desktop
	$("#active").css('color', '#ffffff');
	//hide and show more podcasts or stories
	$(".load-more").hide();
	$(".more2").click(function(event) {
		event.preventDefault();
		$(".load-more").show();
		$(".more2").hide();
		$(".continue").show();
	});
});