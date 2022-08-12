<?php
      require 'conn.php';
      
      $id = mysqli_real_escape_string($conn, $_POST['male_userID']);
      
      $sql = "DELETE FROM male_users WHERE userID = '$id'";
         
      $result = mysqli_query($conn, $sql);
      
      if($result === true) {

        $response = "Male user deleted successfully";

        $date = date('M d, Y');

        mysqli_query($conn, "INSERT INTO notification (title, action, created) VALUES ('User deletion', 'A user was deleted from the male user section', '$date')");

      }else{ $response = "Error deleting user. Please try again."; }

      echo $response;
      
      mysqli_close($conn);
 ?>