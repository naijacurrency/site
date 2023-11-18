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
     
     //console.log("firebase loaded");

     

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

         //add google analytics
        var tag = document.createElement("script");
        tag.src = "https://www.googletagmanager.com/gtag/js?id=G-XFZL8723RQ";
        document.getElementsByTagName("head")[0].appendChild(tag);
     
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

dg = 0;



document.getElementById('loginbtn').addEventListener(
    'click', function() {
       // e.preventDefault();
        //replace div with loading
        $.busyLoadFull("show"); 
        //there are errors on the form

    //    console.log("1");
      
    //    $("#loginbtn").attr("disabled", t);
//get data from the form
//var lusername = document.getElementById('uname').value;
//var lpass = document.getElementById('password').value;


var lusername= localStorage.getItem("lusername");
var lpass = localStorage.getItem('lpasswd');

//var lusername = document.getElementById('uname').value;
//var lpass = document.getElementById('password').value;

//check for empty fields
if(lusername == "" && lpass == "" ){
//form is empty

console.log("form is empty");
$("#info").text("Please compelete the form");


$.busyLoadFull("hide");
   
localStorage.setItem("lusername", "");
localStorage.setItem("lpasswd", "");

//clear the form
$("#lform")[0].reset();
$("#loginbtn").attr("disabled", true);


} else {

    console.log("check if in DB");
 //check if in DB
 
const db = firebase.firestore();

// const db = getFirestore(app);
console.log(lusername);
db.collection("users").where("username", "==", lusername)
.get().then(snap => {
   console.log(snap.size);
if(snap.size == 0){
   
    console.log("username not found");
    $.busyLoadFull("hide");
    $("#info").text("Email or password incorrect");
   
//clear the form
$("#lform")[0].reset();

    localStorage.setItem("lusername", "");
    localStorage.setItem("lpasswd", "");
    //$("#loginbtn").attr("disabled", false);

             } else {
    
        //compare username and password
        snap.forEach(doc => {
         console.log(doc.data());
        var uname = doc.data().username;
        var ypassword = doc.data().password;
            
        if(uname == lusername && ypassword == lpass){
            //user is authenticated
            localStorage.setItem("lgst", "yes");
            localStorage.setItem("lpasswd", "");
             
            //redirect to training page
        document.location.href="training_home.html";

        } else {
            $.busyLoadFull("hide");
    $("#info").text("Email or password incorrect");
    localStorage.setItem("lusername", "");
    localStorage.setItem("lpasswd", "");

//clear the form

$("#lform")[0].reset();

   // $("#loginbtn").attr("disabled", false);
        }
    });

  }
 });

}
});



//collecting username    
document.getElementById('uname').addEventListener(
    'keyup', function(e) {
        e.preventDefault();
       
       var lusername = document.getElementById('uname').value;
       localStorage.setItem("lusername", lusername);
       console.log("username set");
       dg++;
     
    });
    
  //collecting password
    document.getElementById('password').addEventListener(
    'keyup', function(e) {
        e.preventDefault();
   
         var lpass = document.getElementById('password').value;
        localStorage.setItem("lpasswd", lpass);
        
           console.log("password set");
        dg++;

        if(dg == 3){
            $("#loginbtn").attr("disabled", false);
        }
        
    });
         
