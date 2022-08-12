var left = document.getElementById("left");
var inner = document.getElementById("inner");
var mid = document.getElementById("mid");
var midImage = document.getElementById("mid-image");
var form = document.getElementById("create-member");
var button = document.getElementById('create');
var result = document.getElementById("responseHolder");
var formInputs = document.querySelectorAll(".contact-input");
var hide;

  function refresh() {
    result.textContent = "";
    inner.style.border = "none";
    mid.style.opacity = 0;
    midImage.src = "";
    left.style.zIndex = -5000;  
    left.style.opacity = 0;
    button.disabled = false;
    for (var i = 0; i < formInputs.length; i++) {
          formInputs[i].value = "";
      }
       form.style.opacity = 0;
       form.style.zIndex = -1000;
  }

  function update_Members_Tab() {
        $('#members-container').load('list-all-users.php');
  }

      function create_Main_Admin() {

             button.disabled = true;
            
            //Initialize HTTP request to server
             var xmlhttp = new XMLHttpRequest();
             var url = "create-main-admin.php";
             var form = new FormData(document.getElementById('create-member'));

            xmlhttp.open("POST",url,true);
            xmlhttp.send(form);

           xmlhttp.onreadystatechange = function() {

         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
              
               var serverResponse = xmlhttp.responseText;
                result.textContent = serverResponse;

               if (serverResponse == "New admin created successfully") {
                    left.style.zIndex = 5000;
                    left.style.opacity = 1;
                     mid.style.opacity = 1;
                     mid.style.border = "3px solid blue";
                     midImage.src = "img/tick.jfif";
                    inner.style.border = "3px solid blue";
                    hide = setTimeout(function () {
                        refresh();
                          $('#members-container').empty(); //Clear the div first
                         update_Members_Tab();
                    },2000)
               }else{
                    left.style.zIndex = 5000;
                     left.style.opacity = 1;
                     mid.style.opacity = 1;
                     mid.style.border = "3px solid red";
                     midImage.src = "img/exclamation.jfif";
                     inner.style.border = "3px solid red";
                     hide = setTimeout(function () {
                        refresh();
                    },2000)
               }
               
          }
      }
   }


    // get form element from the DOM
    var form = document.getElementById('create-member');
      // handle signup on submit
        form.addEventListener('submit', function (e) {
           e.preventDefault(); // prevent page refresh
              create_Main_Admin();
    });
    