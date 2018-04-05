/* 
	Author: Jennifer Bailey
	Document: jQuery functions for Novel! Publishing
*/

$(document).ready(function() {
	/** open search**/
	$("#search").hide();
	$("#search-icon").click(function(event) {
		event.preventDefault();
		$("#search").show();
	});	
	
	/**close search**/
	$("#close").click(function(event) {
		event.preventDefault();
		$("#search").hide();
	});	
	
	/**hide billing address form if "same" checkbox is checked**/
	$("#same").click(function(){
		$("#billing").hide();
	});
	
});