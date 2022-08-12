<?php

require 'conn.php';

$response = '';

	$sql = "INSERT INTO female_rooms (status, booked_by, booking_date) VALUES ('free', 'null', 'null')";
    $result = mysqli_query($conn, $sql);

    if ($result === true) {
	    $response = 'New room added successfully';
         $date = date('M d, Y');
        mysqli_query($conn, "INSERT INTO notification (title, action, created) VALUES ('New room creation', 'New room was created in the female room section', '$date')");
   }else{
	$response = "Couldn't add room. Please try again";
  }

echo $response;

mysqli_close($conn);


?>