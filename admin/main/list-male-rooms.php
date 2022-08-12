<?php

    require 'conn.php';

  //Display all leaders
$sql= "SELECT * FROM male_rooms";
$result = mysqli_query($conn, $sql);

 $data = [];
 $encodedData = '';

if(mysqli_num_rows($result) > 0){

    while($row = mysqli_fetch_assoc($result)) {

        $data[] = $row;

     }
}

$encodedData = json_encode($data, JSON_FORCE_OBJECT);

echo $encodedData;

mysqli_close($conn);

?>


