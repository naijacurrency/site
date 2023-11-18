/*

check if user is logged in before opeoning

*/
//get a loader to block page
$.busyLoadFull("show");

//get login status from LS
var username = localStorage.getItem("lusername");
var loginstats = localStorage.getItem("lgst");
var password = localStorage.getItem('lpasswd');

if(loginstats != "yes"){
    //login user and redirect

   document.location.href="login.html";
  //    console.log("password not retrieved");
  }  else {
    //remove loader
    $.busyLoadFull("hide");

    if(document.getElementById("logout").style.display = "block"){
      document.getElementById("logout").style.display == "none";
    }
  }

  document.getElementById("logout").addEventListener("click", function(){
    //clear login details from ls
    localStorage.setItem("lusername", "");
    localStorage.setItem("lgst", "");
    localStorage.setItem('lpasswd', "");
    //redirect to login.html
    document.location.href="login.html";

  });