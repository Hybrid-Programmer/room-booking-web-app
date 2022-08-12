
  var tabContainer = document.querySelectorAll('.tab-container');
    for (var i = 0; i < tabContainer.length; i++) {
         tabContainer[i].style.display = "none";
         tabContainer[0].style.display = "block"; //Change this to 0 later
    }

 var mainLink = document.querySelectorAll('.main-link');
    for (var i = 0; i < mainLink.length; i++) {
        mainLink[i].style.opacity = 0.4;
         mainLink[0].style.opacity = 1;
         mainLink[0].style.borderBottom = "5px solid red";
    }


     var typeDivs = document.querySelectorAll('.type-divs');
    for (var i = 0; i < typeDivs.length; i++) {
        typeDivs[i].style.opacity = 0.4;
         typeDivs[0].style.opacity = 1;
         typeDivs[0].style.borderBottom = "3px solid white";
    }


     var typeDivs1 = document.querySelectorAll('.type-divs1');
    for (var i = 0; i < typeDivs1.length; i++) {
        typeDivs1[i].style.opacity = 0.4;
         typeDivs1[0].style.opacity = 1;
         typeDivs1[0].style.borderBottom = "3px solid white";
    }

          
    var mediaDiv = document.querySelectorAll('.media-div');
        for (var i = 0; i < mediaDiv.length; i++) {
            mediaDiv[i].style.display = "none";
             mediaDiv[0].style.display = "block"; //Change the to 0 later
        }

    var audio = document.getElementById('audio-tab');
    var videos = document.getElementById('video-tab');
   
    audio.addEventListener('click', function () {
         audio.setAttribute('style', 'opacity: 1;border-bottom: 3px solid white;');
          videos.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
           var mediaDiv = document.querySelectorAll('.media-div');
            for (var i = 0; i < mediaDiv.length; i++) {
                mediaDiv[i].style.display = "none";
                 mediaDiv[0].style.display = "block";
             }
       })

        videos.addEventListener('click', function () {
         audio.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
          videos.setAttribute('style', 'opacity: 1;border-bottom: 3px solid white;');
             var mediaDiv = document.querySelectorAll('.media-div');
            for (var i = 0; i < mediaDiv.length; i++) {
                mediaDiv[i].style.display = "none";
                 mediaDiv[1].style.display = "block";
             }
       })


    var members = document.getElementById('members');
     var leaders = document.getElementById('leaders');
      var posts = document.getElementById('posts');
       var media = document.getElementById('media');
        var notifications = document.getElementById('notifications');
          var addMember = document.getElementById('add-member');
          var mainSection = document.getElementById('main-section');


       members.addEventListener('click', function () {
         members.setAttribute('style', 'opacity: 1;border-bottom: 5px solid red;');
         leaders.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
           posts.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
            media.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
            notifications.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
             addMember.setAttribute('style', 'background: green;');
              mainSection.style.marginTop = 0 + '%';
            for (var i = 0; i < tabContainer.length; i++) {
                tabContainer[i].style.display = "none";
                 tabContainer[0].style.display = "block";
            }

       })

       leaders.addEventListener('click', function () {
         members.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
         leaders.setAttribute('style', 'opacity: 1;border-bottom: 5px solid red;');
            media.setAttribute('style', 'oity: 0.4;border-bottom: none;');
           posts.setAttribute('style', 'opapacity: 0.4;border-bottom: none;');
            notifications.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
             //mainSection.style.marginTop = -18 + '%';
            for (var i = 0; i < tabContainer.length; i++) {
                tabContainer[i].style.display = "none";
                 tabContainer[1].style.display = "block";
            }

       })

        posts.addEventListener('click', function () {
         members.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
          leaders.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
           posts.setAttribute('style', 'opacity: 1;border-bottom: 5px solid red;');
           media.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
            notifications.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
             //mainSection.style.marginTop = -18 + '%';
             for (var i = 0; i < tabContainer.length; i++) {
                tabContainer[i].style.display = "none";
                 tabContainer[2].style.display = "block";
            }
       })

      media.addEventListener('click', function () {
         members.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
         leaders.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
           posts.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
           media.setAttribute('style', 'opacity: 1;border-bottom: 5px solid red;');
            notifications.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
            addMember.setAttribute('style', 'background: gray;');
             //mainSection.style.marginTop = -18 + '%';
             for (var i = 0; i < tabContainer.length; i++) {
                tabContainer[i].style.display = "none";
                 tabContainer[3].style.display = "block";
            }
             var maleRoomDiv = document.getElementById('male-room-div');
              maleRoomDiv.setAttribute('style', 'display: block !important;');

       })


        notifications.addEventListener('click', function () {
         members.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
         leaders.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
           posts.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
            media.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
            notifications.setAttribute('style', 'opacity: 1;border-bottom: 5px solid red;');
              //mainSection.style.marginTop = -18 + '%';
             for (var i = 0; i < tabContainer.length; i++) {
                tabContainer[i].style.display = "none";
                 tabContainer[4].style.display = "block";
            }
       })


          var mainAdmin = document.getElementById('main-admin');
                   var memberForm = document.getElementById('create-member');
                    var formTitle = document.getElementById('user-title');
                  var backButton = document.getElementById('back');
              var chooseBack = document.getElementById('choose-back');
             var creationDiv = document.getElementById('creation-div');
                var left = document.getElementById("left");
                 var inner = document.getElementById("inner");
                var mid = document.getElementById("mid");
                 var midImage = document.getElementById("mid-image");
                  var result = document.getElementById("responseHolder");
                   var mediaFooter = document.querySelector("media-footer-form");

          mainAdmin.addEventListener('click', function () {
              memberForm.style.width = 100 + '%';
              formTitle.textContent = "Create Admin";
           })

           backButton.addEventListener('click', function () {
              memberForm.style.width = 0 + '%';
              formTitle.textContent = "";
           })

             chooseBack.addEventListener('click', function () {
              creationDiv.style.width = 0 + '%';
           })


          addMember.addEventListener('click', function () {
             creationDiv.style.width = 100 + '%';
          })

        var malesTab = document.getElementById('males-tab');
        var femalesTab = document.getElementById('females-tab');
        var maleBookingsContainer = document.getElementById('male-bookings-container');
        var femaleBookingsContainer = document.getElementById('female-bookings-container');

         malesTab.setAttribute('style', 'opacity: 1;border-bottom: 3px solid white;');
          maleBookingsContainer.setAttribute('style', 'display: block;');
   
    malesTab.addEventListener('click', function () {
         malesTab.setAttribute('style', 'opacity: 1;border-bottom: 3px solid white;');
          femalesTab.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
            maleBookingsContainer.setAttribute('style', 'display: block;');
            femaleBookingsContainer.setAttribute('style', 'display: none;');
       })

        femalesTab.addEventListener('click', function () {
         malesTab.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
          femalesTab.setAttribute('style', 'opacity: 1;border-bottom: 3px solid white;');
            maleBookingsContainer.setAttribute('style', 'display: none;');
            femaleBookingsContainer.setAttribute('style', 'display: block;');
       })


    var maleRoomTab = document.getElementById('male-room-tab');
    var femaleRoomTab = document.getElementById('female-room-tab');
    var maleRoomDiv = document.getElementById('male-room-div');
    var femaleRoomDiv = document.getElementById('female-room-div');
     
     maleRoomTab.setAttribute('style', 'opacity: 1;border-bottom: 3px solid white;');
     maleRoomDiv.setAttribute('style', 'display: block !important;');
     femaleRoomDiv.setAttribute('style', 'display: none;');
   
    maleRoomTab.addEventListener('click', function () {
         maleRoomTab.setAttribute('style', 'opacity: 1;border-bottom: 3px solid white;');
          femaleRoomTab.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
            maleRoomDiv.setAttribute('style', 'display: block !important;');
            femaleRoomDiv.setAttribute('style', 'display: none;');
       })

        femaleRoomTab.addEventListener('click', function () {
         maleRoomTab.setAttribute('style', 'opacity: 0.4;border-bottom: none;');
          femaleRoomTab.setAttribute('style', 'opacity: 1;border-bottom: 3px solid white;');
            maleRoomDiv.setAttribute('style', 'display: none;');
            femaleRoomDiv.setAttribute('style', 'display: block !important;');
       })

  setTimeout(function () {
      var dataText = document.querySelectorAll(".data");
      for (var i = 0; i < dataText.length; i++) {
          if(dataText[i].textContent == "booked"){
            dataText[i].style.background = "red";
          }
      }

  },6000);


           