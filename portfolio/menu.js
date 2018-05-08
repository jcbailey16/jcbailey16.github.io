/**jQuery for dropdown menu**/

$(document).ready(function() {
	
	/**hide all sub-menus on load**/
	$("#about-pages").hide();
	$("#design-pages").hide();
	$("#publications").hide();
	
	
	/**show about pages if "About" is clicked**/
	$("#about").click(function(event) {
		event.preventDefault();
		$("#about-pages").show();
	});
	
	/**close "About" section if "Close" is clicked**/
	$("#close-about").click(function(event) {
		event.preventDefault();
		$("#about-pages").hide();
	});	
	
	
	/**show design pages if "Design" is clicked**/
	$("#design").click(function(event) {
		event.preventDefault();
		$("#design-pages").show();
	});
	
	/**close "Design" section if "Close" is clicked**/
	$("#close-design").click(function(event) {
		event.preventDefault();
		$("#design-pages").hide();
	});	
	
	
	/**show writings pages if "Writings" is clicked**/
	$("#writings").click(function(event) {
		event.preventDefault();
		$("#publications").show();
	});
	
	/**close "Tickets" section if "Close Dropdown" is clicked**/
	$("#close-writings").click(function(event) {
		event.preventDefault();
		$("#publications").hide();
	});	
	
	
});