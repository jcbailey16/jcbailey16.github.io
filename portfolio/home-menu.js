$(document).ready(function() {
	//hide and show links for about me pages
	$("#hnav1-links").hide();
	$('#hnav1').on('mouseover', function(event){
    	$("#hnav1-links").show();
	});

	$('#hnav1').on('mouseout', function(event){
    	$("#hnav1-links").hide();
	});
	
	
	//hide and show links for design pages
	$("#hnav2-links").hide();
	$('#hnav2').on('mouseover', function(event){
    	$("#hnav2-links").show();
	});

	$('#hnav2').on('mouseout', function(event){
    	$("#hnav2-links").hide();
	});
	
	
	//hide and show links for writing pages pages
	$("#hnav3-links").hide();
	$('#hnav3').on('mouseover', function(event){
    	$("#hnav3-links").show();
	});

	$('#hnav3').on('mouseout', function(event){
    	$("#hnav3-links").hide();
	});
});