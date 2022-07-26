<?php 

 require 'conn.php';

 $response = '';

 $email = mysqli_real_escape_string($conn, $_POST['email']);

 if (!empty($email)) {

    $sql = "SELECT email FROM female_users WHERE email = '$email'";

    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
         $response = 'This email already exists !';
    }else{
        $response = 'You are good to go.';
    }
}else{
    $response = 'Email field is empty';
 }

 echo $response;

 mysqli_close($conn);

?>