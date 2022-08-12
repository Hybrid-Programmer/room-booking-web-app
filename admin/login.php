<?php 

require 'conn.php';

$response = '';

$email = mysqli_real_escape_string($conn, $_POST['email']);
$password = mysqli_real_escape_string($conn, $_POST['password']);

if(!empty($email) && !empty($password)){

    $sql = mysqli_query($conn, "SELECT email, password FROM admin WHERE email = '$email'");

    if(mysqli_num_rows($sql) > 0){

        $row = mysqli_fetch_assoc($sql);
        
        $user_email = $row['email'];
        $user_pass = $password;
        $enc_pass = $row['password'];
        
        //Redirect admins based on their role on the database
        if($user_pass === $enc_pass && $email === $user_email){

               $response = "Admin is verified and can log in";

               $date = date('M d, Y  H:i');

             mysqli_query($conn, "INSERT INTO notification (title, action, created)  VALUES ('Admin login', 'Admin was successfully logged into the panel', '$date')");
                                  
        }else{ $response = 'Please ensure that your login details are correct then try again.'; }
    }
    else{ $response = "No record found !"; }
         
}else{  $response = "All inputs must be filled out !"; }
        
echo $response;

mysqli_close($conn);
    
?>