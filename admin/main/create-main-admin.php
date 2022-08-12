<?php

    require 'conn.php';
 
   $response = '';

    $firstname = mysqli_real_escape_string($conn, $_POST['firstname']);
    $lastname = mysqli_real_escape_string($conn, $_POST['lastname']);
    $contact = mysqli_real_escape_string($conn, $_POST['contact']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
   
      if(!empty($firstname) && !empty($lastname) && !empty($contact) && !empty($email)){

        if(filter_var($email, FILTER_VALIDATE_EMAIL)){

            $sql = mysqli_query($conn, "SELECT email FROM users WHERE email = '$email'");

            if(mysqli_num_rows($sql) > 0){
                 $response = 'Email'.' '.$email.' '.'already exists !';
            }
            else{
                if(isset($_FILES['photo']['name'])){
                   $targetDir = "../../uploads";//The folder in the server that stores all the uploaded images
                    $img_name = $_FILES['photo']['name'];
                    $img_type = $_FILES['photo']['type'];
                    $tmp_name = $_FILES['photo']['tmp_name'];
                    
                    $img_explode = explode('.',$img_name);
                    $img_ext = end($img_explode);
    
                    $extensions = ["jpeg", "png", "jpg"];
                    if(in_array($img_ext, $extensions) === true){
                            $time = time();
                            $newImage = $time.$img_name;
                            $role = "admin";
                             //Capitalize the first letters of the names
                             $firstname =  ucfirst($firstname);
                             $lastname = ucfirst($lastname);
                            if(move_uploaded_file($tmp_name, "$targetDir/".$newImage)){ //Move the uploaded image to this permanent folder on the server

                                $date = date('M d, Y');
                                
                                $insert_query = mysqli_query($conn, "INSERT INTO users (profile, firstname, lastname, contact, email, registered_on, role)
                                 VALUES ('$newImage', '$firstname', '$lastname', '$contact', '$email', '$date', '$role')");

                                if($insert_query === true){

                                     $response = "New admin created successfully";

                                      $date = date('d-m-Y h:ia');

                                      mysqli_query($conn, "INSERT INTO notification (notification_type, notification, created)

                                    VALUES ('New admin creation', 'New admin was created.', '$date')");

                                }else{$response = 'Something went wrong !.'; }
                                
                        }else{$response = 'Failed to upload image '; }

                }else{$response = 'Image must have either .jpeg, .png or .jpg extension'; }

            }else{$response = 'Please upload a valid image !'; }
        }
    }else{$response = 'Email '.$email. ' is not valid !'; }

}else{$response = 'All fields must be filled up !'; }

 echo $response;

 mysqli_close($conn);

?>
