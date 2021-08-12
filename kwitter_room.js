
var firebaseConfig = {
      apiKey: "AIzaSyBNw6zrIJiih77Dd87blNCOuOauTFH3wUo",
      authDomain: "project-93-e295d.firebaseapp.com",
      projectId: "project-93-e295d",
      storageBucket: "project-93-e295d.appspot.com",
      messagingSenderId: "173458388592",
      appId: "1:173458388592:web:ad8a4101dd9e5b3d2466b5"
    };
    
    firebase.initializeApp(firebaseConfig);  
    user_name = localStorage.getItem("user_name");

    room_name = localStorage.getItem("room_name");
    document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

    function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room Name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_room.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      console.log("room name- "+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_room.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
      }