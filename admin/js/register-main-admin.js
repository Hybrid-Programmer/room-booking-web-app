      
var left = document.getElementById("left");
var inner = document.getElementById("inner");
var mid = document.getElementById("mid");
var midImage = document.getElementById("mid-image");
var result = document.getElementById("responseHolder");
var button = document.getElementById('registerMainAdmin');
var adminForm = document.getElementById('registerForm');
var formInputs = document.querySelectorAll(".contact-input");
 var innerDivs = document.querySelectorAll('.inner-div');
var start;

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
}

      function registerAdmin() {
                
            //Initialize HTTP request to server
             var xmlhttp = new XMLHttpRequest();
             var url = "register-admin.php";
             var form = new FormData(document.getElementById('registerForm'));
             
            xmlhttp.open("POST",url,true);
            xmlhttp.send(form);

           xmlhttp.onreadystatechange = function() {

         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

               var serverResponse = xmlhttp.responseText;
                result.textContent = serverResponse;

               if (serverResponse == "You have registered successfully") {
                    left.style.zIndex = 5000;
                    left.style.opacity = 1;
                     mid.style.opacity = 1;
                     mid.style.border = "3px solid blue";
                     midImage.src = "img/tick.jfif";
                    inner.style.border = "3px solid blue";
                     start = setTimeout(function () {
                       refresh();
                         adminForm.style.opacity = 0;
                          adminForm.style.zIndex = -1000;
                           for (var i = 0; i < innerDivs.length; i++) {
                               innerDivs[i].style.display = "none";
                               innerDivs[0].style.display = "block";
                        }
                    },2000);
               }else{
                    left.style.zIndex = 5000;
                     left.style.opacity = 1;
                    mid.style.opacity = 1;
                    mid.style.border = "3px solid red";
                     midImage.src = "img/exclamation.jfif";
                    inner.style.border = "3px solid red";
                     start = setTimeout(function () {
                       refresh();
                          adminForm.style.opacity = 1;
                          adminForm.style.zIndex = 1000;
                           for (var i = 0; i < innerDivs.length; i++) {
                               innerDivs[i].style.display = "none";
                               innerDivs[1].style.display = "block";
                        }
                    },20000);
               }
               
          }
      }
   }


    // get form element from the DOM
    var form = document.getElementById('registerForm');
    // handle signup on submit
    form.addEventListener('submit', (event) => {
       event.preventDefault(); // prevent page refresh
       registerAdmin();
    });
    