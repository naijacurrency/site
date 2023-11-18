
$(document).ready(function(){

  $.busyLoadFull("show");
  $("#loginbtn").attr("disabled", true);

  const firebaseConfig = {
    apiKey: "AIzaSyBJsdRrFLF4HuB-gGtEvSB29Sf2ixQgmR8",
    authDomain: "naijacurrency-455ac.firebaseapp.com",
    projectId: "naijacurrency-455ac",
    storageBucket: "naijacurrency-455ac.appspot.com",
    messagingSenderId: "182668691544",
    appId: "1:182668691544:web:31167a41a3ede45192a22d",
    measurementId: "G-7BTPEXYNN1"
  };

   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   const auth = firebase.auth(); 
   
   console.log("firebase loaded");
if(auth){
   //login User

   firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      console.log("user is signed in:" + uid);
      localStorage.setItem("userid", uid);
      // ...
      $.busyLoadFull("hide");

      // Initialize Cloud Firestore and get a reference to the service
    const db = firebase.firestore();

    } else {

        //signin User AnnonymoisAnonymously

firebase.auth().signInAnonymously().catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.log("errorCode:" +errorCode);
     console.log("errorMessage:" +errorMessage);
  });
    }
    // ...
  });
} else {
  console.log("firebase auth not found");


}

});



 

 
//  console.log("1");
         


document.getElementById('loginbtn').addEventListener(
    'click', function(e) {
        e.preventDefault();
        //replace div with loading
        $.busyLoadFull("show"); 
        //there are errors on the form
      
        $("#loginbtn").attr("disabled", false);
        //get form data
     //   var nusername = document.getElementById("uname").value;
     //   var npassword = document.getElementById('password').value;
   console.log("getting username from LS");   
        var username = localStorage.getItem("lusername");
        var loginstats = localStorage.getItem("lgst");
        var password = localStorage.getItem('lpasswd');
   
    if(loginstats == "yes"){
      //login user and redirect

     document.location.href="training_home.html";
    //    console.log("password not retrieved");
    }  else {
        

 //console.log("4");
//get username from db

const db = firebase.firestore();

// const db = getFirestore(app);

db.collection("users").where("username", "==", username)
.get().then(snap => {
   console.log(snap.size);
if(snap.size == 0){

  console.log("username not found");

  //clear ls
  localStorage.setItem("lusername", "");
  localStorage.setItem("lgst", "");
  localStorage.setItem("lpasswd", "");

  //  console.log("username not found");
      $("#info").text("Email or password incorrect");
       } else {
    //    console.log("username is found");
             snap.forEach(doc => {
        console.log(doc.data());
            var uname = doc.data().username;
            var ypassword = doc.data().password;


            if (password == ypassword){
              //user is authenticated
              //save user details in LS
              localStorage.setItem("lusername", uname);
              localStorage.setItem("lgst", "yes");
              localStorage.setItem("lpasswd", ypassword);
             
              //redirect to training page
              document.location.href="training_home.html";

            } else {
              //passwords do not match
               //clear ls
  localStorage.setItem("lusername", "");
  localStorage.setItem("lgst", "");
  localStorage.setItem("lpasswd", "");
           
  $("#info").text("Email or password incorrect");
   
            }
            /*
            var url = doc.data().ul;
             var emvi = doc.data().emv;
             //get user type
               var usertype = doc.data().ua;
            //pass to google
            */
// console.log("passing to google");
//const auth = firebase.auth(); 
/*
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    
    
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(error.message);
  
$("#info").text("Email or password is incorrect");
  // ...
});

firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    
console.log(error.message);
  
  });


            
firebase.auth().onAuthStateChanged(function(user) {
         if (user) {
             
             
        console.log("saving user details in LS");   
            //get uid
           var uid = user.uid;
           console.log("user is signed in:" + uid);
           localStorage.setItem("userid", uid);
           localStorage.setItem("ut", fr);
           localStorage.setItem("username", username);
           localStorage.setItem("email", email);
      //      localStorage.setItem("register_time", firebase.firestore.FieldValue.serverTimestamp());
      //         localStorage.setItem("emailverified", "no");
           localStorage.setItem("loginstatus", "yes");
             localStorage.setItem("pic", url);
             
if(emvi && emvi == "yes"){ 
           document.location.href="index.html";
            
         } else {
            //show email confirm page
              $("div#regform").hide();
               $("div#loginform").hide();
           var x =  document.getElementById('confirmationc');
  x.style.display = "block";
  
         }// close if emvi
         

    } //close if user is defined
            

        });
       */
    });
}

    

   });
    }
});


//listen for retrive password input
/*
document.getElementById('email2').addEventListener(
    'change', function(e) {
        e.preventDefault();
    //    console.log("changed");
        //replace div with loading
        $("#retrivepass").html("<div class='preloader-wrapper active'><div class='spinner-layer spinner-red-only'><div class='circle-clipper left'><div class='circle'></div></div><div class='gap-patch'><div class='circle'></div></div><div class='circle-clipper right'><div class='circle'></div></div></div></div>");
        //search db for matching username and email new password
        
        
 }, false
);
*/

//collecting username    
  document.getElementById('uname').addEventListener(
    'change', function(e) {
        e.preventDefault();
       
       var lusername = document.getElementById('uname').value;
       if(localStorage.setItem("lusername", lusername)){
          console.log("username set");
       } 
     
    });
    
  //collecting password
    document.getElementById('password').addEventListener(
    'keyup', function(e) {
        e.preventDefault();
   
         var lpass = document.getElementById('password').value;
        localStorage.setItem("lpasswd", lpass);
        
           console.log("3");
        
         $("#loginbtn").attr("disabled", false);
        
    });
         
         
         
function spw() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
document.getElementById("fghy").innerHTML= "Hide password";
  } else {
    x.type = "password";
    
document.getElementById("fghy").innerHTML= "Show password";
  }
}