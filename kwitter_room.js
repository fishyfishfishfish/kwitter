var firebaseConfig = {
      apiKey: "AIzaSyA84mKAacc2foCcwCNmz3hTuItP2VOTFss",
      authDomain: "purplrhbdhgbdsuyzgyesno.firebaseapp.com",
      databaseURL: "https://purplrhbdhgbdsuyzgyesno-default-rtdb.firebaseio.com",
      projectId: "purplrhbdhgbdsuyzgyesno",
      storageBucket: "purplrhbdhgbdsuyzgyesno.appspot.com",
      messagingSenderId: "159058871931",
      appId: "1:159058871931:web:af2bee33e7f696764d84de",
      measurementId: "G-JJJPLZGM49"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
    
    function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }

//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
