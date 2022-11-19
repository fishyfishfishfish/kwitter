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
    firebase.initializeApp(firebaseConfig)


    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
