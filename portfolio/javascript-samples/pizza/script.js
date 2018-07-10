/*
	JavaScript 6th Edition
    Chapter 7
  	Hands-on Project 7-5

    Author: Jenn B
    Date: Sept. 19, 2017  

    Filename: index.htm
*/
"use strict"; //interpret content in JavaScript strict mode

//global variable
var delivInfo = {};
var delivSummary = document.getElementById("deliverTo");
var foodInfo = {};
var foodSummary = document.getElementById("order");

//add input values into the object
function processDeliveryInfo() {
	delivInfo.name1 = document.getElementById("nameinput").value;
	delivInfo.addr = document.getElementById("addrinput").value;
	delivInfo.city = document.getElementById("cityinput").value;
	delivInfo.email = document.getElementById("emailinput").value;
	delivInfo.phone = document.getElementById("phoneinput").value;
	for(var prop in delivInfo) {
		delivSummary.innerHTML += "<p>" + delivInfo[prop] + "</p>";
	}
}

//add input elements from the order into the object
function processFood() {
	var prop;
	var crustOpt = document.getElementsByName("crust");
	var toppings = 0;
	var toppingBoxes = document.getElementsByName("toppings");
	var instr = document.getElementById("instructions");
	
	//if statement will check and set the the crust type
	if(crustOpt[0].checked) {
		foodInfo.crust = crustOpt[0].value;
	} else {
		foodInfo.crust = crustOpt[1].value;
	}
	
	//this statement will call and set the selected size
	foodInfo.size = document.getElementById("size").value;
	
	//this loop will determine which, if any, toppings have been selected
	for (var i = 0; i < toppingBoxes.length; i++) {
		if(toppingBoxes[i].checked) {
			toppings++;
			foodInfo["topping" + toppings] = toppingBoxes[i].value;
		}
	}
	
	if(!(instr.value === " ")) {
		foodInfo.instructions = instr.value;
	}
	
	//the following statements will add the object poperties to the order summary
	foodSummary.innerHTML += "<p><span>Crust</span>: " + foodInfo.crust + "</p>";
	foodSummary.innerHTML += "<p><span>Size</span>: " + foodInfo.size + "</p>";
	foodSummary.innerHTML += "<p><span>Topping(s)</span>: " + "</p>";
	foodSummary.innerHTML += "<ul>";
	for(var i = 1; i < 6; i++) {
		if(foodInfo["topping" + i]) {
			foodSummary.innerHTML += "<li>" + foodInfo["topping" + i] + "</li>";
		}
	}
	foodSummary.innerHTML += "</ul>";
	foodSummary.innerHTML += "<p><span>Instructions</span>: " + foodInfo.instructions;
	document.getElementById("order").style.display = "block";
}

//function will call and display the data entered by the user
function previewOrder() {
	processDeliveryInfo();
	processFood();
	document.getElementById("preview").style.display = "block";
	document.getElementById("deliverTo").style.display = "block";
}

//create an event listener for the submit button
function createEventListener() {
	var previewButton = document.getElementById("previewBtn");
	if (previewButton.addEventListener) {
		previewButton.addEventListener("click", previewOrder, false);
	} else if (previewButton.attachEvent) {
		previewButton.attachEvent("onclick", previewOrder);
	}	
}

//create listener event on page load
if(window.addEventListener) {
	window.addEventListener("load", createEventListener, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", createEventListener);
}

