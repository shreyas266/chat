var firebaseConfig = {
      apiKey: "AIzaSyCVcR0u9mG7uNokrU5lhcSA0vrR-Ph3_aI",
      authDomain: "einstein-dso9.firebaseapp.com",
      databaseURL: "https://einstein-dso9-default-rtdb.firebaseio.com",
      projectId: "einstein-dso9",
      storageBucket: "einstein-dso9.appspot.com",
      messagingSenderId: "160085610000",
      appId: "1:160085610000:web:f2f90f6ef402125266c495"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
