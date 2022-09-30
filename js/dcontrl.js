/*
assign username (email address from purchase) to user
check count on page load against username
if less than 3, load the a unique download link
listen for clicks
increment a counter onclick
once count is up to 3, 
show the link has expired for user

*/





document.addEventListener("DOMContentLoaded", function() {
//upload files for nannies
    console.log("Yed Na");

  // Your web app's Firebase configuration

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

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

  const app = initializeApp(firebaseConfig);

  const analytics = getAnalytics(app);


  console.log("firebase loaded");


  //login User
   //login User

       firebase.auth().onAuthStateChanged(function(user) {
         if (user) {
           // User is signed in.
           var isAnonymous = user.isAnonymous;
           var uid = user.uid;
           console.log("user is signed in:" + uid);
           localStorage.setItem("userid", uid);
           // ...
		   //get email from ls or session or url
		   
		   //assign email to variable
		   
		   //get search db with email and check count 
		   
		   //if less than 3, load the a unique download link
		   
		   //listen for clicks
		   document.getElementById("").addEventListener("click",function(){
			   //grab the email
			   
			   
			function makecoid(length){
                         var result = ' ';
                         var characters = '012u3o4567p89';
                         var charactersLength= characters.length;
                         for( var i=0; i< length; i++){
                             result += characters.charAt(Math.floor(Math.random() * charactersLength));
                         }
                         return result;
                         }

                                function func() {
                     // Original string containing whitespace
                           var coid = makecoid(8);
                     // Trimmed string
                           id = coid.trim();
                                }
                                func();   
			   
			   
			   
			      var data2 = {
                               id: id,
                               email: email,
                               count: window.reciever,
                               tm: firebase.firestore.FieldValue.serverTimestamp(),
                               tp: type,
                               ci: content_id,
                               sd: user
                           };

                           db.collection("prod_4th_method").doc(id).set(data2)
			   
		   });
           
    
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

     
});



