/*
	Jenn Bailey
	CTP 136-875
	Lab 7
*/

$(document).ready(function() {
	//set styles
	$("h1").addClass("headline"); //animate doesn't have the font-weight or font-style
	$("body").animate({backgroundColor: "#F4E5C9"});
	$("label").css("font-weight", "bold"); //animate doesn't have the font-weight option
	$("label").animate({color: "#8B0000"});
	$("#submit").animate({
		color: "#F4E5C9",
		backgroundColor: "#8B0000"
	});

	//set slider
	$("#slider").slider({
	    value: 1, 
		min: 1, 
		max: 10, 
		step: 1, 
		slide: function (event, ui) {
			$("#value").val(ui.value);
		}
	});
	
	/*$("#slider").hide();
	$("#value").focus(function() {
		$("#slider").show();
	});*/
	
	
	//set datepicker
	$("#datepicker").datepicker({
    	changeMonth: true,
    	changeYear: true
	});
	
	//preventing submit because form can't be validated or sent
	$("#submit").click(function(event) {
		event.preventDefault();
	});
});

//show instructions for datepicker
$( function() {
    $( document ).tooltip();
  } );
