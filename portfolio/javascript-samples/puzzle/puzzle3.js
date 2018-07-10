/*
	Jenn Bailey
	CTP 136-875
	Lab 4 Part 3
	
*/

$(document).ready(function(event) {
	$("img").click(function(){
		
		var isMovable = false;
		//white square
		var blankSquare = $("#blank");
		var blankIndex = $("img").index(blankSquare);
		var blankSource = $(blankSquare).attr("src");
		//alert(blankSource);
		 
		//selected image
		var imageSquare = $(this);  
		var imageSource = $(imageSquare).attr("src");
		//alert(imageSource);
		var imageIndex = $("img").index(this); //returns index of selected image
		
		/*imageSquare.attr("src", blankSource);
		imageSquare.attr("id", "blank");
		blankSquare.attr("src", imageSource);
		blankSquare.attr("id", " ");*/
		
		//switch images if clicked image has an index of 0 and the blank image has an index of 1 or 3
		//switch images if clicked image has an index of 1 and the blank image has an index of 0, 2, or 4
		//switch images if clicked image has an index of 2 and the blank image has an index of 1 or 5
		//switch images if clicked image has an index of 3 and the blank image has an index of 0, 4, 6
		//switch images if clicked image has an index of 4 and the blank image has an index of 1, 3, 5 or 7
		//switch images if clicked image has an index of 5 and the blank image has an index of 2, 4, or 6
		//switch images if clicked image has an index of 6 and the blank image has an index of 3 or 7
		//switch images if clicked image has an index of 7 and the blank image has an index of 4, 6, or 8
		//switch images if clicked image has an index of 8 and the blank image has an index of 5 or 7
		
		if((imageIndex == 0 && blankIndex == 1) || (imageIndex == 0 && blankIndex == 3)) { 
			//switch images if clicked image has an index of 0 and the blank image has an index of 1 or 3
			imageSquare.attr("src", blankSource);
			imageSquare.attr("id", "blank");
			blankSquare.attr("src", imageSource);
			blankSquare.attr("id", " ");
		} else if((imageIndex == 1 && blankIndex == 0) || (imageIndex == 1 && blankIndex == 2) || (imageIndex == 1 && blankIndex == 4))  {
			//switch images if clicked image has an index of 1 and the blank image has an index of 0, 2, or 4
			imageSquare.attr("src", blankSource);
			imageSquare.attr("id", "blank");
			blankSquare.attr("src", imageSource);
			blankSquare.attr("id", " ");
		} else if((imageIndex == 2 && blankIndex == 1) || (imageIndex == 2 && blankIndex == 5)) { 
			//switch images if clicked image has an index of 2 and the blank image has an index of 1 or 5
			imageSquare.attr("src", blankSource);
			imageSquare.attr("id", "blank");
			blankSquare.attr("src", imageSource);
			blankSquare.attr("id", " ");
		} else if((imageIndex == 3 && blankIndex == 0) || (imageIndex == 3 && blankIndex == 4) || (imageIndex == 3 && blankIndex == 6)) { 
			//switch images if clicked image has an index of 1 and the blank image has an index of 0, 2, or 4
			imageSquare.attr("src", blankSource);
			imageSquare.attr("id", "blank");
			blankSquare.attr("src", imageSource);
			blankSquare.attr("id", " ");
		} else if((imageIndex == 4 && blankIndex == 1) || (imageIndex == 4 && blankIndex == 3) || (imageIndex == 4 && blankIndex == 5) || (imageIndex == 4 && blankIndex == 7)) {
			//switch images if clicked image has an index of 4 and the blank image has an index of 1, 3, 5 or 7
			imageSquare.attr("src", blankSource);
			imageSquare.attr("id", "blank");
			blankSquare.attr("src", imageSource);
			blankSquare.attr("id", " ");
		} else if((imageIndex == 5 && blankIndex == 2) || (imageIndex == 5 && blankIndex == 4) || (imageIndex == 5 && blankIndex == 8)) {
			//switch images if clicked image has an index of 5 and the blank image has an index of 2, 4, or 6
			imageSquare.attr("src", blankSource);
			imageSquare.attr("id", "blank");
			blankSquare.attr("src", imageSource);
			blankSquare.attr("id", " ");
		} else if((imageIndex == 6 && blankIndex == 3) || (imageIndex == 6 && blankIndex == 7)) {
			//switch images if clicked image has an index of 6 and the blank image has an index of 3 or 7
			imageSquare.attr("src", blankSource);
			imageSquare.attr("id", "blank");
			blankSquare.attr("src", imageSource);
			blankSquare.attr("id", " ");
		} else if((imageIndex == 7 && blankIndex == 4) || (imageIndex == 7 && blankIndex == 6) || (imageIndex == 7 && blankIndex == 8)) {
			//switch images if clicked image has an index of 7 and the blank image has an index of 4, 6, or 8
			imageSquare.attr("src", blankSource);
			imageSquare.attr("id", "blank");
			blankSquare.attr("src", imageSource);
			blankSquare.attr("id", " ");
		} else if((imageIndex == 8 && blankIndex == 5) || (imageIndex == 8 && blankIndex == 7)) {
			//switch images if clicked image has an index of 8 and the blank image has an index of 5 or 7
			imageSquare.attr("src", blankSource);
			imageSquare.attr("id", "blank");
			blankSquare.attr("src", imageSource);
			blankSquare.attr("id", " ");
		} 

	});
});