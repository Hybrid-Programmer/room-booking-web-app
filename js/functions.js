$(document).ready(function () {
 
 var selectTag = '';

 //Fetch male rooms

	 function fetchMaleRooms() {
	   	$.ajax({
			        url: 'config/list-male-rooms.php',
			        cache: false,
			        type: 'GET',
			        dataType: 'json',
			        success: function(response) {
			        		if (response !== 'No data available') {
			        				 let data = response;
			        				 console.log(data);
			        				 for(var i in data){
			        				 	  selectTag = `
																		 		<option value="${data[i].roomID}">Room ${data[i].roomID}</option>
			        				 	              `;
			        				 	              $('#roomNumber').append(selectTag);
			        			  }		
			        	 }
			        	 else {
			        	 	  alert(response);
			        	 }
			         }

				});
	    }


 //Fetch female rooms

	  function fetchFemaleRooms() {
	   	$.ajax({
			        url: 'config/list-female-rooms.php',
			        cache: false,
			        type: 'GET',
			        dataType: 'json',
			        success: function(response) {
			        		if (response !== 'No data available') {
			        				 let data = response;
			        				 for(var i in data){
			        				 	  selectTag = `
																		 		<option value="${data[i].roomID}">Room ${data[i].roomID}</option>
			        				 	              `;
			        				 	              $('#roomNumber').append(selectTag);
			        			  }		
			        	 }
			        	 else {
			        	 	  alert(response);
			        	 }
			         }

				});
	    }



	$('#male-user').click(function () {
		$('#scroll-one').css({"z-index":"1000","opacity":"1"});
	  	fetchMaleRooms();
	})

	$('#close').click(function () {
		$('#scroll-one').css({"z-index":"-1000","opacity":"0"});
	})

	$('#female-user').click(function () {
		$('#scroll-one').css({"z-index":"1000","opacity":"1"});
		$('#header-row-text').text("Register as a female.");
		  fetchFemaleRooms();
		$('#gender').val("Female");
	})

	$('#roomNumber').on('keyup', function () {
		if ($(this).val() > 30) {
			 $(this).val("");
		}
	})


	//Disable these elements when the pages loads, then toggle their disability attribute when the value of #personality changes

         	   $('#academics').attr('disabled', true);
         	      $('#professional-institution').attr('disabled', true);
         	         $('#level').attr('disabled', true);
         	            $('#qualifications').attr('disabled', true);
         	             $('#institution').attr('disabled', true);
         	               $('#institution').css({"opacity":"0.5"});


	   //Toggle form view based on whether the user is a watchman personnel or a visitor

   $("#personality").on('change', function(){
    
         if($(this).val() == "Watchman"){

         	   $('#academics').attr('disabled', true);
         	      $('#professional-institution').attr('disabled', true);
         	         $('#level').attr('disabled', true);
         	            $('#qualifications').attr('disabled', true);
         	             $('#institution').attr('disabled', true);
         	               $('#institution').css({"opacity":"0.5"});


         	   
         }else{
         	  
         	   $('#academics').attr('disabled', false);
         	      $('#professional-institution').attr('disabled', false);
         	         $('#level').attr('disabled', true);
         	            $('#qualifications').attr('disabled', false);
         	             $('#institution').attr('disabled', false);
         	               $('#institution').css({"opacity":"1"});


         }
         
   });


   //Toggle inputs disability status based on the value of the academic select tag

   $("#academics").on('change', function(){
    
       if($(this).val() == "Professional"){

         	   $('#institution').attr('disabled', false);
         	    $('#institution').css({"opacity":"1"});
         	   $('#level').attr('disabled', true);
         	   $('#qualifications').attr('disabled', false);

         }else if($(this).val() == "Under-graduate"){

         	   $('#institution').attr('disabled', false);
         	    $('#institution').css({"opacity":"1"});
         	   $('#level').attr('disabled', false);
         	   $('#qualifications').attr('disabled', true);

         }else if($(this).val() == "Graduate"){

         	   $('#institution').attr('disabled', false);
         	    $('#institution').css({"opacity":"1"});
         	   $('#level').attr('disabled', true);
         	   $('#qualifications').attr('disabled', false);
         }
         else if($(this).val() == "Post-graduate"){

         	   $('#institution').attr('disabled', false);
         	    $('#institution').css({"opacity":"1"});
         	   $('#level').attr('disabled', true);
         	   $('#qualifications').attr('disabled', false);
         	
         }else{

         	   $('#institution').attr('disabled', true);
         	    $('#institution').css({"opacity":"0.5"});
         	   $('#level').attr('disabled', true);
         	   $('#qualifications').attr('disabled', true);
         }
         
   });	

     
     //Function to check if a male room is booked or not, and take an action respectively

	   function checkMaleRoom() {
	      $.ajax({
			        url: 'config/male-room-availability.php',
			        cache: false,
			        type: 'POST',
			        data: {
			        	      roomNumber: $('#roomNumber').val()
			        },
			        success: function(response) {

			        	 if (response == 'This room is currently free and open to booking') {
			        	 		alert('Great !  This room has been reserved for you.');
			        	 		$('#register').attr('disabled', false);
			        	 		 $('#register').css({"opacity":"1","background":"green"});
			        	 		 $('#roomNumber').css({"border":"2px solid green"});
			        	 } else {
			        	 	  alert(response);
			        	 	  $('#register').attr('disabled', true);
			        	 	   $('#register').css({"opacity":"0.4","background":"gray"});
			        	 	   $('#roomNumber').css({"border":"2px solid red"});
			        	 }
			          }

			     });
	      }

	    //Function to check if a female room is booked or not, and take an action respectively

	   function checkFemaleRoom() {
	   	$.ajax({
			        url: 'config/female-room-availability.php',
			        cache: false,
			        type: 'POST',
			        data: {
			        	      roomNumber: $('#roomNumber').val()
			        },
			        success: function(response) {
			        		if (response == 'This room is currently free and open to booking') {
			        	 		alert('Great !  This room has been reserved for you.');
			        	 		 $('#register').attr('disabled', false);
			        	 		 $('#register').css({"opacity":"1","background":"green"});
			        	 		 $('#roomNumber').css({"border":"2px solid green"});
			        	 } else {
			        	 	  alert(response);
			        	 	  $('#register').attr('disabled', true);
			        	 	  $('#register').css({"opacity":"0.4","background":"gray"});
			        	 	  $('#roomNumber').css({"border":"2px solid red"});
			        	 }
			         }

				});
	    }


	   //Check if a room is booked or free asynchronously at onblur

	   $('#roomNumber').on('change', function () {
	   	 if ($(this).val() !== "") {
	   	 	 if ($('#gender').val() == 'Male') {
		   	 		checkMaleRoom();
	   	 	 }else{
	   	 	 	checkFemaleRoom();
	   	 	 }
	   	 }else{
	   	 	alert("Kindly fill this column");
	   	 }
	  });


 //Function to check if an email exists or not, and take an action respectively

	  function check_Male_Email_Availability() {
	   	$.ajax({
			        url: 'config/check-male-email-availability.php',
			        cache: false,
			        type: 'POST',
			        data: {
			        	      email: $('#email').val()
			        },
			        success: function(response) {
			        		if (response == 'You are good to go.') {
			        	 		alert('Your email is unique. Lucky you !');
			        	 		 $('#register').attr('disabled', false);
			        	 		 $('#register').css({"opacity":"1","background":"green"});
			        	 		 $('#email').css({"border":"2px solid green"});
			        	 } else {
			        	 	  alert(response);
			        	 	  $('#register').attr('disabled', true);
			        	 	  $('#register').css({"opacity":"0.4","background":"gray"});
			        	 	  $('#email').css({"border":"2px solid red"});
			        	 }
			         }

				});
	    }
	    

 //Function to check if an email exists or not, and take an action respectively

    function check_Female_Email_Availability() {
	   	$.ajax({
			        url: 'config/check-female-email-availability.php',
			        cache: false,
			        type: 'POST',
			        data: {
			        	      email: $('#email').val()
			        },
			        success: function(response) {
			        		if (response == 'You are good to go.') {
			        	 		alert('Your email is unique. Lucky you !');
			        	 		 $('#register').attr('disabled', false);
			        	 		 $('#register').css({"opacity":"1","background":"green"});
			        	 		 $('#email').css({"border":"2px solid green"});
			        	 } else {
			        	 	  alert(response);
			        	 	  $('#register').attr('disabled', true);
			        	 	  $('#register').css({"opacity":"0.4","background":"gray"});
			        	 	  $('#email').css({"border":"2px solid red"});
			        	 }
			         }

				});
	    }


	   //Check if an email address exists on the database or not asynchronously at onblur

	   $('#email').on('blur', function () {
	   	 if ($(this).val() !== "") {
	   	 	 if ($('#gender').val() == 'Male') {
		   	 		check_Male_Email_Availability();
	   	 	 }else{
	   	 	 	check_Female_Email_Availability();
	   	 	 }
	   	 }else{
	   	 	alert("Kindly fill this column");
	   	 }
	  });


	  
  //Background registration functions

  function resetForm() {
  	setTimeout(function () {
  		$('#signupForm')[0].reset();
      	$('#scroll-one').css({"z-index":"-1000","opacity":"0"});
  	},4000); //Feel free to increase or decrease this delay value
  }

    function register_Male_Watchman() {
	   	if ($('#profile').val() == "" || $('#firstanme').val() == "" || $('#middlename').val() == "" || $('#lastname').val() == "" || $('#email').val() == "" || $('#contact').val() == "" 
	   		|| $('#location').val() == "" || $('#parish').val() == "" || $('#roomNumber').val() == "") {
	   		  alert("Please fill out all columns before submitting !");
	   	}else{
	   		   //Initialize HTTP request to server
	             var xmlhttp = new XMLHttpRequest();
	             var url = "config/register-male-watchman.php";
	             var form = new FormData(document.getElementById('signupForm'));

	              xmlhttp.open("POST",url,true);
                  xmlhttp.send(form);

			           xmlhttp.onreadystatechange = function() {

			         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			              var serverResponse = xmlhttp.responseText;
			               
			               if (serverResponse == "You have registered successfully") {
			                   alert("You have registered successfully. Thank you for working with us.");
			                   resetForm();
			               }else{
			                    alert(serverResponse);
			               }
			               
			          }
			      }
	  		  }
                     
       }


       function register_Female_Watchman() {
	   	if ($('#profile').val() === "" || $('#firstanme').val() === "" || $('#middlename').val() === "" || $('#lastname').val() === "" || $('#email').val() === "" || $('#contact').val() === "" 
	   		|| $('#location').val() === "" || $('#parish').val() === "" || $('#roomNumber').val() === "") {
	   		  alert("Please fill out all columns before submitting !");
	   	}else{
	   		   //Initialize HTTP request to server
	             var xmlhttp = new XMLHttpRequest();
	             var url = "config/register-female-watchman.php";
	             var form = new FormData(document.getElementById('signupForm'));

	              xmlhttp.open("POST",url,true);
                 xmlhttp.send(form);

			           xmlhttp.onreadystatechange = function() {

			         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			              var serverResponse = xmlhttp.responseText;
			               
			               if (serverResponse == "You have registered successfully") {
			                   alert("You have registered successfully. Thank you for working with us.");
			                   resetForm();
			               }else{
			                    alert(serverResponse);
			               }
			               
			          }
			      }
	  		  }
                     
       }



   function register_Male_Professional() {
   	if ($('#profile').val() === "" || $('#firstanme').val() === "" || $('#middlename').val() === "" || $('#lastname').val() === "" || $('#email').val() === "" || $('#contact').val() === "" 
   		|| $('#location').val() === "" || $('#parish').val() === "" || $('#institution').val() === "" || $('#roomNumber').val() === "" || $('#qualifications').val() == "") {
   		  alert("Please fill out all columns before submitting !");
   	}else{
		    //Initialize HTTP request to server
             var xmlhttp = new XMLHttpRequest();
             var url = "config/register-male-professional.php";
             var form = new FormData(document.getElementById('signupForm'));

              xmlhttp.open("POST",url,true);
              xmlhttp.send(form);

		           xmlhttp.onreadystatechange = function() {

		         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

		              var serverResponse = xmlhttp.responseText;
		               
		               if (serverResponse == "You have registered successfully") {
		                   alert("You have registered successfully. Thank you for working with us.");
		                   resetForm();
		               }else{
		                    alert(serverResponse);
		               }
		               
		          }
		      }
   	  }
   }


    function register_Female_Professional() {
   	if ($('#profile').val() === "" || $('#firstanme').val() === "" || $('#middlename').val() === "" || $('#lastname').val() === "" || $('#email').val() === "" || $('#contact').val() === "" 
   		|| $('#location').val() === "" || $('#parish').val() === "" || $('#institution').val() === "" || $('#roomNumber').val() === "" || $('#qualifications').val() == "") {
   		  alert("Please fill out all columns before submitting !");
   	}else{
		     //Initialize HTTP request to server
             var xmlhttp = new XMLHttpRequest();
             var url = "config/register-female-professional.php";
             var form = new FormData(document.getElementById('signupForm'));

              xmlhttp.open("POST",url,true);
              xmlhttp.send(form);

		           xmlhttp.onreadystatechange = function() {

		         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

		              var serverResponse = xmlhttp.responseText;
		               
		               if (serverResponse == "You have registered successfully") {
		                   alert("You have registered successfully. Thank you for working with us.");
		                    resetForm();
		               }else{
		                    alert(serverResponse);
		               }
		               
		          }
		      }
   	  }
   }




    function register_Undergraduate() {
   	if ($('#profile').val() === "" || $('#firstanme').val() === "" || $('#middlename').val() === "" || $('#lastname').val() === "" || $('#email').val() === "" || $('#contact').val() === "" 
   		|| $('#location').val() === "" || $('#parish').val() === "" || $('#institution').val() === ""  || $('#level').val() === "" || $('#roomNumber').val() === "") {
   		  alert("Please fill out all columns before submitting !");
   	}else{
		     //Initialize HTTP request to server
             var xmlhttp = new XMLHttpRequest();
             var url = "config/register-undergraduate.php";
             var form = new FormData(document.getElementById('signupForm'));

              xmlhttp.open("POST",url,true);
              xmlhttp.send(form);

		           xmlhttp.onreadystatechange = function() {

		         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

		              var serverResponse = xmlhttp.responseText;
		               
		               if (serverResponse == "You have registered successfully") {
		                   alert("You have registered successfully. Thank you for working with us.");
		                   resetForm();
		               }else{
		                    alert(serverResponse);
		               }
		               
		          }
		      }
   	  }
   }




    function register_Female_Undergraduate() {
   	if ($('#profile').val() === "" || $('#firstanme').val() === "" || $('#middlename').val() == "" || $('#lastname').val() == "" || $('#email').val() == "" || $('#contact').val() == "" 
   		|| $('#location').val() == "" || $('#parish').val() == "" || $('#level').val() == "" || $('#roomNumber').val() == "") {
   		  alert("Please fill out all columns before submitting !");
   	}else{
		    //Initialize HTTP request to server
             var xmlhttp = new XMLHttpRequest();
             var url = "config/register-female-undergraduate.php";
             var form = new FormData(document.getElementById('signupForm'));

              xmlhttp.open("POST",url,true);
              xmlhttp.send(form);

		           xmlhttp.onreadystatechange = function() {

		         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

		              var serverResponse = xmlhttp.responseText;
		               
		               if (serverResponse == "You have registered successfully") {
		                   alert("You have registered successfully. Thank you for working with us.");
		                    resetForm();
		               }else{
		                    alert(serverResponse);
		               }
		               
		          }
		      }
   	  }
   }


  
    function register_Graduate() {
   	if ($('#profile').val() == "" || $('#firstanme').val() == "" || $('#middlename').val() == "" || $('#lastname').val() == "" || $('#email').val() == "" || $('#contact').val() == "" 
   		|| $('#location').val() == "" || $('#parish').val() == "" || $('#institution').val() == "" ||  $('#qualifications').val() == "" || $('#roomNumber').val() == "") {
   		  alert("Please fill out all columns before submitting !");
   	}else{
		     //Initialize HTTP request to server
             var xmlhttp = new XMLHttpRequest();
             var url = "config/register-graduate.php";
             var form = new FormData(document.getElementById('signupForm'));

              xmlhttp.open("POST",url,true);
              xmlhttp.send(form);

		           xmlhttp.onreadystatechange = function() {

		         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

		              var serverResponse = xmlhttp.responseText;
		               
		               if (serverResponse == "You have registered successfully") {
		                   alert("You have registered successfully. Thank you for working with us.");
		                    resetForm();
		               }else{
		                    alert(serverResponse);
		               }
		               
		          }
		      }
   	  }
   }


   function register_Female_Graduate() {
   	if ($('#profile').val() == "" || $('#firstanme').val() == "" || $('#middlename').val() == "" || $('#lastname').val() == "" || $('#email').val() == "" || $('#contact').val() == "" 
   		|| $('#location').val() == "" || $('#parish').val() == "" || $('#institution').val() == "" ||  $('#qualifications').val() == "" || $('#roomNumber').val() == "") {
   		  alert("Please fill out all columns before submitting !");
   	}else{
   		   //Initialize HTTP request to server
             var xmlhttp = new XMLHttpRequest();
             var url = "config/register-female-graduate.php";
             var form = new FormData(document.getElementById('signupForm'));

              xmlhttp.open("POST",url,true);
              xmlhttp.send(form);

		           xmlhttp.onreadystatechange = function() {

		         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

		              var serverResponse = xmlhttp.responseText;
		               
		               if (serverResponse == "You have registered successfully") {
		                   alert("You have registered successfully. Thank you for working with us.");
		                     resetForm();
		               }else{
		                    alert(serverResponse);
		               }
		               
		          }
		      }
   	 }
   }


    function register_Post_Graduate() {
   	//Basic validations
   	if ($('#profile').val() == "" || $('#firstanme').val() == "" || $('#middlename').val() == "" || $('#lastname').val() == "" || $('#email').val() == "" || $('#contact').val() == "" 
   		|| $('#location').val() == "" || $('#parish').val() == "" || $('#institution').val() == "" ||  $('#qualifications').val() == "" || $('#roomNumber').val() == "") {
   		  alert("Please fill out all columns before submitting !");
   	}else{
   		   //Initialize HTTP request to server
             var xmlhttp = new XMLHttpRequest();
             var url = "config/register-post-graduate.php";
             var form = new FormData(document.getElementById('signupForm'));

              xmlhttp.open("POST",url,true);
              xmlhttp.send(form);

		           xmlhttp.onreadystatechange = function() {

		         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

		              var serverResponse = xmlhttp.responseText;
		               
		               if (serverResponse == "You have registered successfully") {
		                   alert("You have registered successfully. Thank you for working with us.");
		                    resetForm();
		               }else{
		                    alert(serverResponse);
		               }
		               
		          }
		      }
   	  }
   }


    function register_Female_Post_Graduate() {
   	//Basic validations
   	if ($('#profile').val() == "" || $('#firstanme').val() == "" || $('#middlename').val() == "" || $('#lastname').val() == "" || $('#email').val() == "" || $('#contact').val() == "" 
   		|| $('#location').val() == "" || $('#parish').val() == "" || $('#institution').val() == "" ||  $('#qualifications').val() == "" || $('#roomNumber').val() == "") {
   		  alert("Please fill out all columns before submitting !");
   	}else{
   		   //Initialize HTTP request to server
             var xmlhttp = new XMLHttpRequest();
             var url = "config/register-female-postgraduate.php";
             var form = new FormData(document.getElementById('signupForm'));

              xmlhttp.open("POST",url,true);
              xmlhttp.send(form);

		           xmlhttp.onreadystatechange = function() {

		         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

		              var serverResponse = xmlhttp.responseText;
		               
		               if (serverResponse == "You have registered successfully") {
		                   alert("You have registered successfully. Thank you for working with us.");
		                    resetForm();
		               }else{
		                    alert(serverResponse);
		               }
		               
		          }
		      }
   	  }
   }


   function register_Non_Student() {
   	//Basic validations
   	if ($('#profile').val() == "" || $('#firstanme').val() == "" || $('#middlename').val() == "" || $('#lastname').val() == "" || $('#email').val() == "" || $('#contact').val() == "" 
   		|| $('#location').val() == "" || $('#parish').val() == "" || $('#roomNumber').val() == "") {
   		  alert("Please fill out all columns before submitting !");
   	}else{
   		   //Initialize HTTP request to server
             var xmlhttp = new XMLHttpRequest();
             var url = "config/register-non-student.php";
             var form = new FormData(document.getElementById('signupForm'));

              xmlhttp.open("POST",url,true);
              xmlhttp.send(form);

		           xmlhttp.onreadystatechange = function() {

		         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

		              var serverResponse = xmlhttp.responseText;
		               
		               if (serverResponse == "You have registered successfully") {
		                   alert("You have registered successfully. Thank you for working with us.");
		                    resetForm();
		               }else{
		                    alert(serverResponse);
		               }
		               
		          }
		      }
   	  }
   }


    function register_Female_Non_Student() {
   	//Basic validations
   	if ($('#profile').val() == "" || $('#firstanme').val() == "" || $('#middlename').val() == "" || $('#lastname').val() == "" || $('#email').val() == "" || $('#contact').val() == "" 
   		|| $('#location').val() == "" || $('#parish').val() == "" || $('#roomNumber').val() == "") {
   		  alert("Please fill out all columns before submitting !");
   	}else{
   		   //Initialize HTTP request to server
             var xmlhttp = new XMLHttpRequest();
             var url = "config/register-non-female-nonstudent.php";
             var form = new FormData(document.getElementById('signupForm'));

              xmlhttp.open("POST",url,true);
              xmlhttp.send(form);

		           xmlhttp.onreadystatechange = function() {

		         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

		              var serverResponse = xmlhttp.responseText;
		               
		               if (serverResponse == "You have registered successfully") {
		                   alert("You have registered successfully. Thank you for working with us.");
		                    resetForm();
		               }else{
		                    alert(serverResponse);
		               }
		               
		          }
		      }
   	 }
   }

  
  //Submit the form based on several criteria

    $('#register').click(function (e) {

		 e.preventDefault();

		 if($('#personality').val() == 'Watchman' && $('#gender').val() == 'Male'){
		 	  register_Male_Watchman();
		 }
		 else if ($('#personality').val() == 'Watchman' && $('#gender').val() == 'Female') {
		 	 register_Female_Watchman();
		 }
		 else if ($('#personality').val() == 'Visitor' && $('#gender').val() == 'Male' && $('#academics').val() == 'Professional') {
		 	 register_Male_Professional();
		 }
		 else if ($('#personality').val() == 'Visitor' && $('#gender').val() == 'Female' && $('#academics').val() == 'Professional') {
		 	 register_Female_Professional();
		 }
		 else if ($('#personality').val() == 'Visitor' && $('#gender').val() == 'Male' && $('#academics').val() == 'Under-graduate') {
		 	 register_Undergraduate();
		 }
		 else if ($('#personality').val() == 'Visitor' && $('#gender').val() == 'Female' && $('#academics').val() == 'Under-graduate') {
		 	 register_Female_Undergraduate();
		 }
		 else if ($('#personality').val() == 'Visitor' && $('#gender').val() == 'Male' && $('#academics').val() == 'Graduate') {
		 	 register_Graduate();
		 }
		 else if ($('#personality').val() == 'Visitor' && $('#gender').val() == 'Female' && $('#academics').val() == 'Graduate') {
		 	 register_Female_Graduate();
		 }
		 else if ($('#personality').val() == 'Visitor' && $('#gender').val() == 'Male' && $('#academics').val() == 'Post-graduate') {
		 	 register_Post_Graduate();
		 }
		 else if ($('#personality').val() == 'Visitor' && $('#gender').val() == 'Female' && $('#academics').val() == 'Post-graduate') {
		 	 register_Female_Post_Graduate();
		 }
		 else if ($('#personality').val() == 'Visitor' && $('#gender').val() == 'Male' && $('#academics').val() == 'Out of school') {
		 	 register_Non_Student();
		 }
		 else{
		 	 register_Female_Non_Student();
		 }
						
   });

})