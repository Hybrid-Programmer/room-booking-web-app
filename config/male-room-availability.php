<?php 

 require 'conn.php';

 $response = '';

 $roomNumber = mysqli_real_escape_string($conn, $_POST['roomNumber']);

 if (!empty($roomNumber)) {

 	$sql = "SELECT status FROM male_rooms WHERE roomID = '$roomNumber'";

 	$result = mysqli_query($conn, $sql);

 	if (mysqli_num_rows($result) > 0) {

 		$row = mysqli_fetch_assoc($result);

 		$status = $row['status'];

 		if ($status == "booked") {
 			$response = 'This room has been booked. Kindly select another room';
 		}else{
 			$response = 'This room is currently free and open to booking';
 		}
 	}else{
 		$response = 'No record found for a room with this number. Kindly book another one';
 	}

 }else{
 	$response = 'Select a room number between 1 to 30';
 }

 echo $response;

 mysqli_close($conn);

?>