<?php

  require 'conn.php';
 
  $response = '';

    $membership = mysqli_real_escape_string($conn, $_POST['personality']);
    $firstname = mysqli_real_escape_string($conn, $_POST['firstname']);
    $middlename = mysqli_real_escape_string($conn, $_POST['middlename']);
    $lastname = mysqli_real_escape_string($conn, $_POST['lastname']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $contact = mysqli_real_escape_string($conn, $_POST['contact']);
    $gender = mysqli_real_escape_string($conn, $_POST['gender']);
    $age = mysqli_real_escape_string($conn, $_POST['age']);
    $marital_status = mysqli_real_escape_string($conn, $_POST['marital_status']);
    $address = mysqli_real_escape_string($conn, $_POST['location']);
    $parish = mysqli_real_escape_string($conn, $_POST['parish']);
    $roomNumber = mysqli_real_escape_string($conn, $_POST['roomNumber']);
    $academics = mysqli_real_escape_string($conn, $_POST['academics']);
    $institution = mysqli_real_escape_string($conn, $_POST['institution']);
    $qualification = mysqli_real_escape_string($conn, $_POST['qualifications']);
     
      if(!empty($membership) && !empty($firstname) && !empty($middlename) && !empty($lastname) && !empty($email) && !empty($contact) && !empty($gender) && !empty($age) && !empty($marital_status) && !empty($address)  && !empty($parish)  && !empty($roomNumber)  && !empty($academics) && !empty($institution) && !empty($qualification)){

        if(filter_var($email, FILTER_VALIDATE_EMAIL)){

            $sql = mysqli_query($conn, "SELECT email FROM male_users WHERE email = '$email'");
            
            if(mysqli_num_rows($sql) > 0){
                 $response = 'The emai '.$email.' already exists !';
            }
            else{
                if(isset($_FILES['profile']['name'])){
                    $targetDir = "../uploads";//The folder in the server that stores all the uploaded images
                    $img_name = $_FILES['profile']['name'];
                    $tmp_name = $_FILES['profile']['tmp_name'];
                    
                    $img_type = $_FILES['profile']['type'];
                    $img_explode = explode('.',$img_name);
                    $img_ext = end($img_explode);
    
                    $extensions = ["jpeg", "png", "jpg"];

                    if(in_array($img_ext, $extensions) === true){
                            $time = time();
                            $newName = $time.$img_name;
                            //Capitalize the first letters of the names
                             $firstname =  ucfirst($firstname);
                             $middlename = ucfirst($middlename);
                             $lastname = ucfirst($lastname);
                             $fullname = $firstname.' '.$middlename.' '.$lastname;
                             $date = date('M d, Y');
                            if(move_uploaded_file($tmp_name, "$targetDir/".$newName)){ //Move the uploaded image to this permanent folder on the server

                                $insert_query = mysqli_query($conn, "INSERT INTO male_users (membership, profile, firstname, middlename, lastname, email, contact, gender, marital_status, address, parish, academic_status, school_attended, level, qualification, registered_on, booked_roomID)

                                 VALUES ('$membership', '$newName', '$firstname', '$middlename', '$lastname', '$email', '$contact', '$gender', '$marital_status', '$address', '$parish', '$academics', '$institution', 'null', '$qualification', '$date', '$roomNumber')");

                                if($insert_query === true){

                                     $response = "You have registered successfully";

                                      mysqli_query($conn, "INSERT INTO notification (title, action, created) VALUES ('User registration', 'A new user registered on the website.', '$date')");

                                       mysqli_query($conn, "UPDATE male_rooms SET status = 'booked', booked_by = '$fullname', booking_date = '$date' WHERE roomID = '$roomNumber'");

                                }else{$response = 'Something went wrong !.'; }
                                
                        }else{$response = 'Failed to upload image '; }

                }else{$response = 'Image must have either .jpeg, .png or .jpg extension'; }

            }else{$response = 'Please upload a valid image !'; }
        }
    }else{$response = 'Email '.$email.' is not valid !'; }

}else{$response = 'All fields must be filled up !'; }

 echo $response;

 mysqli_close($conn);

?>
