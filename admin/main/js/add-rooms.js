
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
                                        <input type='submit' class='deleteMaleRoom' value='Delete'>
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

function checkStatus() {
   setTimeout(function () {
      var dataText = document.querySelectorAll(".data");
      for (var i = 0; i < dataText.length; i++) {
          if(dataText[i].textContent == "booked"){
            dataText[i].style.background = "red";
          }
      }

  },4000);
}



      function add_Male_Room() {

            $('#male-room-form').hide();
            
            //Initialize HTTP request to server
             var xmlhttp = new XMLHttpRequest();
             var url = "add-male-room.php";
             var form = new FormData(document.getElementById('male-room-form'));

            xmlhttp.open("POST",url,true);
            xmlhttp.send(form);

           xmlhttp.onreadystatechange = function() {

         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
              
               var serverResponse = xmlhttp.responseText;
              
               if (serverResponse == "New room added successfully") {
                     alert('New room added successfully');
                   $('#male-room-container').empty();
                    fetch_Male_Rooms();
                    $('#male-room-form').css({"display":"flex"});
                    checkStatus();
                     setTimeout(function () {
                        $('#male-room-form').show();
                   },6000);
               }else{
                    alert(serverResponse);
               }
               
          }
      }
   }


   function add_Female_Room() {

            $('#female-room-form').hide();
            
            //Initialize HTTP request to server
             var xmlhttp = new XMLHttpRequest();
             var url = "add-female-room.php";
              var form = new FormData(document.getElementById('female-room-form'));

            xmlhttp.open("POST",url,true);
            xmlhttp.send(form);

           xmlhttp.onreadystatechange = function() {

         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
              
               var serverResponse = xmlhttp.responseText;
              
               if (serverResponse == "New room added successfully") {
                   alert('New room added successfully');
                   $('#female-room-container').empty();
                    fetch_Female_Rooms();
                    checkStatus();
                     setTimeout(function () {
                        $('#female-room-form').show();
                   },6000);
               }else{
                    alert(serverResponse);
               }
               
          }
      }
   }


    // get form element from the DOM
    var maleForm = document.getElementById('male-room-form');
        maleForm.addEventListener('submit', function (e) {
           e.preventDefault(); // prevent page refresh
         add_Male_Room();
    });

        // get form element from the DOM
    var femaleForm = document.getElementById('female-room-form');
        femaleForm.addEventListener('submit', function (e) {
           e.preventDefault(); // prevent page refresh
         add_Female_Room();
    });