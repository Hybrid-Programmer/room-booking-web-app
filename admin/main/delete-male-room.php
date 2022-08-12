<?php
      require 'conn.php';
      
      $id = mysqli_real_escape_string($conn, $_POST['id']);
      
      $sql = "DELETE FROM male_rooms WHERE roomID = '$id'";
         
      $result = mysqli_query($conn, $sql);
      
      if($result === true) {

        $response = "Male room deleted successfully";

        $date = date('M d, Y');

        mysqli_query($conn, "INSERT INTO notification (title, action, created) VALUES ('Room deletion', 'A room was deleted from the male room section', '$date')");

      }else{ $response = "Error deleting room. Please try again."; }

      echo $response;
      
      mysqli_close($conn);
 ?>