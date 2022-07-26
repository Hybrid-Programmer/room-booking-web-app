<?php 

require 'conn.php';

$response = '';

$room_array = array();
$json_room_format = '';

$sql = "SELECT roomID FROM female_rooms";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
	while($row = mysqli_fetch_assoc($result)){

		$room_array[] = $row;

	}
}else{
	$response = 'No data available';
}

$json_room_format = json_encode($room_array, JSON_FORCE_OBJECT);

echo $json_room_format;

mysqli_close($conn);

?>