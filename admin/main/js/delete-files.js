
  //Delete male user

    $('.deleteMale').click(function (e) {

           e.preventDefault();

           var xmlhttp = new XMLHttpRequest();
           var url = "delete-male-user.php";
           var form = new FormData(this.form);

           xmlhttp.open("POST",url,true);
           xmlhttp.send(form);

            xmlhttp.onreadystatechange = function() {

         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

               var serverResponse = xmlhttp.responseText;

               if (serverResponse == "Male user deleted successfully") {
                   alert('User deleted successfully');
               }else{
                    alert(serverResponse);
               }
               
          }
      }  
  })

    //Delete female user

    $('.deleteFemale').click(function (e) {

           e.preventDefault();

           var xmlhttp = new XMLHttpRequest();
           var url = "delete-female-user.php";
           var form = new FormData(this.form);

           xmlhttp.open("POST",url,true);
           xmlhttp.send(form);

            xmlhttp.onreadystatechange = function() {

         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

               var serverResponse = xmlhttp.responseText;

               if (serverResponse == "Female user deleted successfully") {
                   alert('User deleted successfully');
               }else{
                    alert(serverResponse);
               }
               
          }
      }  
  })


    //Delete male room

    $('.deleteMaleRoom').click(function (e) {

           e.preventDefault();

           var xmlhttp = new XMLHttpRequest();
           var url = "delete-male-room.php";
           var form = new FormData(this.form);

           xmlhttp.open("POST",url,true);
           xmlhttp.send(form);

            xmlhttp.onreadystatechange = function() {

         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

               var serverResponse = xmlhttp.responseText;

               if (serverResponse == "Male room deleted successfully") {
                   alert('Room deleted successfully');
               }else{
                    alert(serverResponse);
               }
               
          }
      }  
  })


    $('.deleteFemaleRoom').click(function (e) {

           e.preventDefault();

           var xmlhttp = new XMLHttpRequest();
           var url = "delete-female-room.php";
           var form = new FormData(this.form);

           xmlhttp.open("POST",url,true);
           xmlhttp.send(form);

            xmlhttp.onreadystatechange = function() {

         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

               var serverResponse = xmlhttp.responseText;

               if (serverResponse == "Female room deleted successfully") {
                   alert('Room deleted successfully');
               }else{
                    alert(serverResponse);
               }
               
          }
      }  
  })


     $('.delete-button').click(function (e) {

           e.preventDefault();

           var xmlhttp = new XMLHttpRequest();
           var url = "delete-notification.php";
           var form = new FormData(this.form);

           xmlhttp.open("POST",url,true);
           xmlhttp.send(form);

            xmlhttp.onreadystatechange = function() {

         if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               
                var serverResponse = xmlhttp.responseText;
              
               if(serverResponse == "Notification deleted") {
                    alert('Notification deleted');
               }else{
                   alert(serverResponse);
               }
               
          }
      }  
  })