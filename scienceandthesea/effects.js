/* 
	Author: Jennifer Bailey
	Document: jQuery functions
*/

$(document).ready(function() {
	
	//denote active page on mobile
	$("#on-page").css('color', '#ffffff');
	
	//hide and show more podcasts or stories
	$(".load-more").hide();
	$(".more2").click(function(event) {
		event.preventDefault();
		$(".load-more").show();
	});
});