<?php

require 'conn.php';


$profile = '';
$email = '';
$contact = '';
$room_ID = '';


$sql = "SELECT roomID FROM female_rooms WHERE status = 'booked'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
	while($row = mysqli_fetch_assoc($result)){
		$room_ID = $row['roomID'];
	}
}else{
	$response = 'No record found !';
}

$sql = "SELECT profile, email, contact FROM female_users WHERE booked_roomID = '$room_ID'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
	while($row = mysqli_fetch_assoc($result)){
		$profile = $row['profile'];
		$email = $row['email'];
		$contact = $row['contact'];
	}
}else{
	$response = 'No record found !';
}


$sql = "SELECT * FROM female_rooms WHERE status = 'booked'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
	while($row = mysqli_fetch_assoc($result)){

		$roomID = $row['roomID'];
	    $targerDir = "../../uploads";
	    $fullname= $row['booked_by']; 
	    $date = $row['booking_date'];
		
    echo "<div class='people-holder'>
               <div class='people-info'>
                    <div class='profile-section'>
                        <div class='profile-div'><img src='$targerDir/$profile' class='profile'></div>
                     </div>
                        <div class='name-section'>
                           <div class='username-div'>$fullname</div>
                            <div class='time-div'>
                              <div class='reg'>Room booked:</div>
                            <div class='role'>Room $roomID</div>
                            </div>
                         </div>
                         </div>
                        <div class='details-div'>
                            <div class='info-div'>
                                <div class='email-intro'>Email:</div>
                                 <div class='email-data'>$email</div>
                            </div>

                           <div class='info-div'>
                                <div class='contact-intro'>Contact:</div>
                               <div class='contact-data'>$contact</div>
                            </div>

                             <div class='info-div'>
                                <div class='role-intro'>Date :</div>
                               <div class='role-data'>$date</div>
                            </div>

                           <div class='action-div'>
                              <div class='type-intro'>Action:</div>
                      <div class='type-data'>
                        <form class='edit-form'>
                            <input type='submit' class='deletButton' value='Delete'>
                           <input type='hidden' name='booking_ID' value='$roomID' class='user-id-holder'>
                      </form>
                    </div>
                </div>
             </div>
         </div>
       ";
	}
}else{
	$response = 'No record found !';
}



?>