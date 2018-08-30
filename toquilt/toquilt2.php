<!--
  Project Name: To Quilt
  Description: A simple to do list that allows the user to add new quilting projects and remove completed projects.
  Author: Jennifer Bailey
  Version: 1.0
  Date: August 28, 2018
  File Name: toquilt2.php
-->

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>To Quilt Project List</title>
	<meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="styles.css"/>
	
	<style>
		h2 {font-family: Helvetica, Arial, 'sans-serif';
			font-size: 1.5em;
			opacity: 1;}
		ul {font-family: Helvetica, Arial, 'sans-serif';
		   font-size: 1.10em;
		   opacity: 1;}
	</style>
</head>
<body>
	<main>
		<h1>To Quilt</h1>
		
		<form name="quiltList" action="toquilt2.php" method="post">
			<?php
				$my_file = 'quilts.txt';
				$handle = fopen($my_file, 'r') or die('Cannot open file: '.$my_file);
				/**test to see if file found and read
					$data = fread($handle, filesize($my_file));
					echo $my_file . ': '.filesize($my_file).' bytes.'; 
				**/
				$data = file_get_contents( "quilts.txt" ); //returns file as a string
				$projects = explode(';', $data); //turns string into an array
				
				//reads out each array items as a checkbox item
				foreach($projects as $quilt) {
					echo "<input type='checkbox' name='completed[]' value='".$quilt."'/> ". $quilt. "<br>";
				}
				
			?>
			<br>
			<p>Add new project to list:
				<input type="text" name="newProject"/></p><br>
				
			<input type="submit" name="submit" value="Update List"/>
			
			<?php
				/**
					Upon submit, items that are checked will be deleted from the file 
					and any new additions will be added to and read from the quilts.txt file.
				**/
				
				if(isset($_POST['submit'])){
					//add new project to list
					$New = $_POST['newProject'];
					if(!empty($New)){
						$handle = fopen($my_file, 'a') or die('Cannot open file:  '.$my_file);
						$new_data = ";".$New;
						fwrite($handle, $new_data);
					} 
					
					//remove checked off projects from list
					if(!empty($_POST['completed'])) {
						//change a to w+ when done testing
						
						//$testString = implode(";", $_POST['completed']);
						//$new_line = "\n At least one box was checked.";
						
						$new_array = array_diff($projects, $_POST['completed']);
						$new_list = implode(";", $new_array);
						$handle = fopen($my_file, 'w+') or die('Cannot open file:  '.$my_file);
						fwrite($handle, $new_list);
					}
					
					//refresh page after data submitted
					header("location:toquilt2.php");
				}
			?>
		</form>
		
		<h2>Instructions</h2>
		<ul>
			<li>To Delete: Check off a project and click "Update List" to remove it from the list.</li>
	    	<li>To Add: Type the project name into the text box and click "Update List." </li>		
		</ul>
	</main>
         

	
					 
						
</body>
</html>
