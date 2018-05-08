$(document).ready(function() {
	
	/**hide all sub-menus on load**/
	$("#about-pages").hide();
	$("#act-pages").hide();
	$("#ticket-pages").hide();
	
	
	/**show about pages if "The Event" is clicked**/
	$("#the-event").click(function(event) {
		event.preventDefault();
		$("#about-pages").show();
	});
	
	/**close "The Event" section if "Close Dropdown" is clicked**/
	$("#close-about").click(function(event) {
		event.preventDefault();
		$("#about-pages").hide();
	});	
	
	
	/**show activities pages if "Activities" is clicked**/
	$("#activities").click(function(event) {
		event.preventDefault();
		$("#act-pages").show();
	});
	
	/**close "Activities" section if "Close Dropdown" is clicked**/
	$("#close-act").click(function(event) {
		event.preventDefault();
		$("#act-pages").hide();
	});	
	
	
	/**show tickets pages if "Tickets" is clicked**/
	$("#tickets").click(function(event) {
		event.preventDefault();
		$("#ticket-pages").show();
	});
	
	/**close "Tickets" section if "Close Dropdown" is clicked**/
	$("#close-ticket").click(function(event) {
		event.preventDefault();
		$("#ticket-pages").hide();
	});	
	
	
});