 //Load male users

  var maleCard = "";

   function fetch_Male_Users() {

    $.ajax({
        url: 'list-male-users.php',
        type: 'GET',
        dataType: 'json',
        success: function(res) {

           let data = res;

            for (var i in data) {

             maleCard = `<div class='people-holder'>
                           <div class='people-info'>
                                <div class='profile-section'>
                                    <div class='profile-div'><img src='../../uploads/${data[i].profile}' class='profile'></div>
                                 </div>
                                    <div class='name-section'>
                                       <div class='username-div'>${data[i].firstname}  ${data[i].lastname}</div>
                                        <div class='time-div'>
                                          <div class='reg'>Gender:</div>
                                        <div class='role'>${data[i].gender}</div>
                                        </div>
                                     </div>
                                     </div>
                                    <div class='details-div'>
                                        <div class='info-div'>
                                            <div class='email-intro'>Email:</div>
                                             <div class='email-data'>${data[i].email}</div>
                                        </div>

                                       <div class='info-div'>
                                            <div class='contact-intro'>Contact:</div>
                                           <div class='contact-data'>${data[i].contact}</div>
                                        </div>

                                         <div class='info-div'>
                                            <div class='role-intro'>Created:</div>
                                           <div class='role-data'>${data[i].registered_on}</div>
                                        </div>

                                       <div class='action-div'>
                                          <div class='type-intro'>Action:</div>
                                  <div class='type-data'>
                                    <form class='edit-form'>
                                        <input type='submit' class='deleteMale' value='Delete'>
                                       <input type='hidden' name='male_userID' value='${data[i].userID}' class='user-id-holder'>
                                  </form>
                                </div>
                            </div>
                         </div>
                     </div>
                     `;

                 $('#males-container').append(maleCard);
             
          }
       }
   });
}
     
fetch_Male_Users();



 //Load female users

  var femaleCard = "";

   function fetch_Female_Users() {

    $.ajax({
        url: 'list-female-users.php',
        type: 'GET',
        dataType: 'json',
        success: function(res) {

           let data = res;

            for (var i in data) {

             femaleCard = `<div class='people-holder'>
                           <div class='people-info'>
                                <div class='profile-section'>
                                    <div class='profile-div'><img src='../../uploads/${data[i].profile}' class='profile'></div>
                                 </div>
                                    <div class='name-section'>
                                       <div class='username-div'>${data[i].firstname}  ${data[i].lastname}</div>
                                        <div class='time-div'>
                                          <div class='reg'>Gender:</div>
                                        <div class='role'>${data[i].gender}</div>
                                        </div>
                                     </div>
                                     </div>
                                    <div class='details-div'>
                                        <div class='info-div'>
                                            <div class='email-intro'>Email:</div>
                                             <div class='email-data'>${data[i].email}</div>
                                        </div>

                                       <div class='info-div'>
                                            <div class='contact-intro'>Contact:</div>
                                           <div class='contact-data'>${data[i].contact}</div>
                                        </div>

                                         <div class='info-div'>
                                            <div class='role-intro'>Created:</div>
                                           <div class='role-data'>${data[i].registered_on}</div>
                                        </div>

                                       <div class='action-div'>
                                          <div class='type-intro'>Action:</div>
                                  <div class='type-data'>
                                    <form class='edit-form'>
                                        <input type='submit' class='deleteFemale' value='Delete'>
                                       <input type='hidden' name='female_userID' value='${data[i].userID}' class='user-id-holder'>
                                  </form>
                                </div>
                            </div>
                         </div>
                     </div>
                     `;

                 $('#females-container').append(femaleCard);
             
          }
       }
   });
}
     
fetch_Female_Users();


  //Load admin profile

  var profileCard = "";

   function fetch_Admin_Profile() {

    $.ajax({
        url: 'list-all-admins.php',
        type: 'GET',
        dataType: 'json',
        success: function(res) {

           let data = res;

            for (var i in data) {

             profileCard = `<div class='leaders-parent-div'>
                              <div class='leader-top-row'>
                                  <div class='image-section-div'>
                                      <img src='../../uploads/${data[i].profile}' class='leaders-image'>
                                  </div>
                                  <div class='name-section-div'>
                                      <div class='name-container-div'>${data[i].firstname} ${data[i].middlename} ${data[i].lastname}</div>
                                      <div class='office-container-div'>Admin</div>
                                  </div>
                              </div>

                              <div class='leader-bottom-column'>
                                  <div class='leader-data-holder'>
                                      <div class='email-intro'>Email :</div>
                                      <div class='email-data'>${data[i].email}</div>
                                  </div>

                                    <div class='leader-data-holder'>
                                      <div class='contact-intro'>Contact :</div>
                                      <div class='contact-data'>${data[i].contact}</div>
                                  </div>

                                   <div class='leader-data-holder'>
                                      <div class='role-intro'>Created :</div>
                                      <div class='role-data'>${data[i].created_on}</div>
                                  </div>


                                   <div class='type-data-holder'>
                                      <div class='type-intro'>Type: </div>
                                      <div class='type-data'>Site owner</div>
                                  </div>
                              </div>
                        </div>
                     `;

                 $('#leaders-main').append(profileCard);
             
          }
       }
   });
}
     
fetch_Admin_Profile();


 //Load male rooms

  var maleRoomCard = "";

   function fetch_Male_Rooms() {

    $.ajax({
        url: 'list-male-rooms.php',
        type: 'GET',
        dataType: 'json',
        success: function(res) {

           let data = res;

            for (var i in data) {

             maleRoomCard = `<div class='people-holder'>
                           <div class='people-info'>
                                <div class='profile-section'>
                                    <div class='profile-div'><img src='img/room.jfif' class='profile'></div>
                                 </div>
                                    <div class='name-section'>
                                       <div class='username-div'>Room ${data[i].roomID}</div>
                                        <div class='time-div'>
                                          <div class='status-title'>Room status: </div>
                                        <div class='data'>${data[i].status}</div>
                                        </div>
                                     </div>
                                     </div>
                                    <div class='details-div'>
                                        <div class='info-div'>
                                            <div class='row1'>Booked by:</div>
                                             <div class='row2'>${data[i].booked_by}</div>
                                        </div>

                                       <div class='info-div'>
                                            <div class='row1'>Booking date:</div>
                                           <div class='row2'>${data[i].booking_date}</div>
                                        </div>

                                         <div class='info-div'>
                                            <div class='row1'>RoomID:</div>
                                           <div class='row2'>${data[i].roomID}</div>
                                        </div>

                                       <div class='action-div'>
                                          <div class='title'>Action:</div>
                                  <div class='inner-div'>
                                    <form class='edit-form'>
                                        <input type='submit' class='deleteMaleRoom' value='Delete'>
                                       <input type='hidden' name='id' value='${data[i].roomID}' class='user-id-holder'>
                                  </form>
                                </div>
                            </div>
                         </div>
                     </div>
                     </div>
                     `;

                 $('#male-room-container').append(maleRoomCard);
             
          }
       }
   });
}
     
fetch_Male_Rooms();



 //Load female rooms

  var femaleRoomCard = "";

   function fetch_Female_Rooms() {

    $.ajax({
        url: 'list-female-rooms.php',
        type: 'GET',
        dataType: 'json',
        success: function(res) {

           let data = res;

            for (var i in data) {

             femaleRoomCard = `<div class='people-holder'>
                           <div class='people-info'>
                                <div class='profile-section'>
                                    <div class='profile-div'><img src='img/room.jfif' class='profile'></div>
                                 </div>
                                    <div class='name-section'>
                                       <div class='username-div'>Room ${data[i].roomID}</div>
                                        <div class='time-div'>
                                          <div class='status-title'>Room status: </div>
                                        <div class='data'>${data[i].status}</div>
                                        </div>
                                     </div>
                                     </div>
                                    <div class='details-div'>
                                        <div class='info-div'>
                                            <div class='row1'>Booked by:</div>
                                             <div class='row2'>${data[i].booked_by}</div>
                                        </div>

                                       <div class='info-div'>
                                            <div class='row1'>Booking date:</div>
                                           <div class='row2'>${data[i].booking_date}</div>
                                        </div>

                                         <div class='info-div'>
                                            <div class='row1'>RoomID:</div>
                                           <div class='row2'>${data[i].roomID}</div>
                                        </div>

                                       <div class='action-div'>
                                          <div class='title'>Action:</div>
                                  <div class='inner-div'>
                                    <form class='edit-form'>
                                        <input type='submit' class='deleteFemaleRoom' value='Delete'>
                                       <input type='hidden' name='id' value='${data[i].roomID}' class='user-id-holder'>
                                  </form>
                                </div>
                            </div>
                         </div>
                     </div>
                     </div>
                     `;

                 $('#female-room-container').append(femaleRoomCard);
             
          }
       }
   });
}
     
fetch_Female_Rooms();


//Load notifications

var notificationContainer = "";

   function fetch_Notifications() {

    $.ajax({
        url: 'list-all-notifications.php',
        type: 'GET',
        dataType: 'json',
        success: function(res) {

           let data = res;

            for (var i in data) {

             notificationContainer = `<div class='message-holder'>
                                         <div class='sender'>${data[i].title}</div>
                                        <div class='message-text'>
                                            ${data[i].action}
                                        </div>
                                     <div class='message-action'>
                                         <form class='message-form'>
                                             <button class='delete-button' type='submit'>Delete</button>
                                             <div class='date-div'>${data[i].created}</div>
                                              <input type='hidden' name='id' value='${data[i].notificationID}' class='idInput'>
                                         </form>
                                     </div>
                                    </div>
                                  `;

                 $('#notification-container').append(notificationContainer);
             
          }
       }
   });
}

 fetch_Notifications();


  //Load user section script
   function load_Male_Bookings() {
      $('#male-bookings-container').load('list-male-bookings.php');
 }

 //Load user section script
   function load_Female_Bookings() {
      $('#female-bookings-container').load('list-female-bookings.php');
 }


 setTimeout(load_Male_Bookings, 2000);

 setTimeout(load_Female_Bookings, 4000);


