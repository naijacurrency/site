let ds;

document.addEventListener('DOMContentLoaded', function () {
    
  //check if discount is applied

  if(localStorage.getItem("disco")){
    var dis_stat = localStorage.getItem("disco");

    if(dis_stat == "y"){
      //dont disply any modal
      ds = 0;
    }
  }
  

// Get the modal
var moda = document.getElementById("mModal");

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];


//listen for if user has even scrolled the page

let didScroll = false;

window.onscroll = () => didScroll = true;

setInterval(() => {
    if ( didScroll ) {
        didScroll = false;
      //  console.log('Someone scrolled me!')
       // console.log("modal ready");
      //if yes, 
// load the modal after 10 minutes
setTimeout(function(){ 

  console.log("modal running");
  if(ds != 0){
  moda.style.display = "block";
  }
}, 120000);
    }

}, 250);






//if no scrolling, listen for if the user wants to leave
//if yes, fire modal


// When the user clicks on the button, open the modal
//btn.onclick = function(e) {
 //   e.preventDefault();
//  modal.style.display = "block";
//}



// When the user clicks on <span> (x), close the modal
//span.onclick = function() {
//  modal.style.display = "none";
//}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == moda) {
    document.getElementById("mModal").style.display = "none";
  }
}

});

//exit intent on mobile
var moda = document.getElementById("mModal");

//detect the user is on mobile
jQuery(document).on('touchstart', function(){
  $(body).addClass('on-mobile-device');
  console.log("we are on mobile");
});

//Detecting the scroll direction, scroll speed and displaying Exit Intent popup:

 function myScrollSpeedFunction(){
     if( jQuery('body').hasClass('on-mobile-device') ){ 
         if(my_scroll() < -200){
             //Your code here to display Exit Intent popup
             console.log('Must show mobile Exit Intent popup');
             //display modal
             if(ds != 0){
              moda.style.display = "block";
              }
             
         }
     }
 }

 var my_scroll = (function(){ 
  
  //Function that checks the speed of scrolling
 var last_position, new_position, timer, delta, delay = 50; 
 function clear() {
     last_position = null;
     delta = 0;
 }
 clear();
 return function(){
     new_position = window.scrollY;
     if ( last_position != null ){
         delta = new_position -  last_position;
     }
     last_position = new_position;
     clearTimeout(timer);
     timer = setTimeout(clear, delay);
     return delta;
 };
 })();

 jQuery(document).on('scroll', myScrollSpeedFunction );

 //exit intent on desktop

 const exit = e => {
  const shouldExit =
      [...e.target.classList].includes('exit-intent-popup') || // user clicks on mask
      e.target.className === 'close' || // user clicks on the close icon
      e.keyCode === 27; // user hits escape

  if (shouldExit) {

    if(ds != 0){
      moda.style.display = "block";
      }
      
  }
};


const CookieService = {
  setCookie(name, value, days) {
      let expires = '';

      if (days) {
          const date = new Date();
          date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
          expires = '; expires=' + date.toUTCString();
      }

      document.cookie = name + '=' + (value || '')  + expires + ';';
  },

  getCookie(name) {
      const cookies = document.cookie.split(';');

      for (const cookie of cookies) {
          if (cookie.indexOf(name + '=') > -1) {
              return cookie.split('=')[1];
          }
      }

      return null;
  }
}

const mouseEvent = e => {
  const shouldShowExitIntent = 
      !e.toElement && 
      !e.relatedTarget &&
      e.clientY < 10;

  if (shouldShowExitIntent) {
      document.removeEventListener('mouseout', mouseEvent);
      //document.querySelector('.exit-intent-popup').classList.add('visible');
      if(ds != 0){
        moda.style.display = "block";
        }

      CookieService.setCookie('exitIntentShown', true, 30);
  }
};

if (!CookieService.getCookie('exitIntentShown')) {
  setTimeout(() => {
      document.addEventListener('mouseout', mouseEvent);
      document.addEventListener('keydown', exit);
   //   document.querySelector('mModal').addEventListener('click', exit);
  }, 0);
}