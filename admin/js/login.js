
var modal = document.getElementById("left");
var inner = document.getElementById("inner");
var mid = document.getElementById("mid");
var midImage = document.getElementById("mid-image");
var button = document.getElementById('loginAdmin');
var result = document.getElementById("responseHolder");
var inputs = document.querySelectorAll('.contact-inputs');
var loginForm = document.getElementById('loginForm');
var start;

  function refresh() {
    result.textContent = "";
    inner.style.border = "none";
    mid.style.opacity = 0;
    mid.style.border = "none";
    midImage.src = "";
    left.setAttribute("style", "opacity: 0;z-index: -5000;");
   for (var i = 0; i < inputs.length; i++) {
       inputs[i].value = "";
   }

}

    function loginAdmin() {
            
            //Initialize HTTP request to server
             var xmlhttp = new XMLHttpRequest();
             var url = "login.php";
             var form = new FormData(document.getElementById('loginForm'));

            xmlhttp.open("POST",url,true);
            xmlhttp.send(form);

           xmlhttp.onreadystatechange = function() {

         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               
               var serverResponse = xmlhttp.responseText;
                result.textContent = serverResponse;

               if(serverResponse == "Admin is verified and can log in") {
                    left.style.zIndex = 5000;
                    left.style.opacity = 1;
                    mid.style.opacity = 1;
                    mid.style.border = "3px solid blue";
                    midImage.src = "img/tick.jfif";
                    inner.style.border = "3px solid blue";
                    
                     start = setTimeout(function () {
                         refresh();
                          loginForm.setAttribute("style", "opacity: 0;z-index: -1000;");
                          window.location = "main/index.html";
                     },2000)
                 
               }
               else{
                    left.style.zIndex = 5000;
                    left.style.opacity = 1;
                    mid.style.opacity = 1;
                    mid.style.border = "3px solid red";
                    midImage.src = "img/exclamation.jfif";
                    inner.style.border = "3px solid red";
                       start = setTimeout(function () {
                         refresh();
                     },2000)
               }
               
          }
      }
   }

   //Get the form from the DOM
    var form = document.getElementById('loginForm');

    // handle login on submit
    form.addEventListener('submit', function (e) {
       e.preventDefault(); // prevent page refresh
       loginAdmin();
    });