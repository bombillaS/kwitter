
//AÑADE TUS ENLACES DE FIREBASE

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyASMBARcOFl85PzAIK4S-yq8HgxuEYuqsQ",
      authDomain: "witter-4a7cc.firebaseapp.com",
      databaseURL: "https://witter-4a7cc-default-rtdb.firebaseio.com",
      projectId: "witter-4a7cc",
      storageBucket: "witter-4a7cc.appspot.com",
      messagingSenderId: "188189374382",
      appId: "1:188189374382:web:f0546bf14ff08b3a2efa3f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name")
room_name = localStorage.getItem("room_name")
document.getElementById("user_name").innerHTML = "wenas tardes pequeño pousitos chiquitito" + user_name + "!";

function addRoom() {

      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
      }
      )
      localStorage.setItem("room_name", room_name);
      window.location.replace("kwitter_page.html")
}


function getRoom() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Inicio del código
console.log("room name-"+ Room_names);

row = "<div class='room_name' id=" + Room_names +" onclick='redirectToRoomName(this.id)' >#" +
Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;

                  //Final del código
            });
      });
}
getRoom();

function redirectToRoomName(Room_names) {console.log(Room_names);
localStorage.setItem("room_name",Room_names);
window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("user_name");
window.location.replace("index_html");
}




