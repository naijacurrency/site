/*
Script to show bank details

Script to receive confirmation data and send by email

*/

document.addEventListener('DOMContentLoaded', function () {

   //add google analytics
var tag = document.createElement("script");
tag.src = "https://www.googletagmanager.com/gtag/js?id=G-XFZL8723RQ";
document.getElementsByTagName("head")[0].appendChild(tag); 

var tag = document.createElement("script");
tag.src = "js/gascript.js";
document.getElementsByTagName("head")[0].appendChild(tag);



});

//show or hide bank details

    document.getElementById("show").addEventListener("click", function(){
        if(document.getElementById("payinfo").style.display=="block"){
            document.getElementById("payinfo").style.display="none";
            document.getElementById("show").innerHTML="Show Bank details";
        } else {
            document.getElementById("payinfo").style.display="block";
            document.getElementById("show").innerHTML="Hide Bank details";
        }
    });

    

document.getElementById("formsubmit").addEventListener("click", function(){



    //
    document.getElementById("formsubmit").innerHTML="submitting";

//collect form data
var name = document.getElementById("name").value;
var bank = document.getElementById("bank").value;
var date = document.getElementById("date").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;

if(name == "" && email == "" && date ==""){
    //no sending
    document.getElementById("formsubmit").innerHTML="Send Confirmation";
} else {


//send email
var data = {
    name: name,
    bank: bank,
    date: date,
    email: email,
    phone: phone,
    
}
//console.log(data);

$.ajax({
    method: 'POST',
    data: data,
    //url: 'http://localhost/test_php/send_email.php',
    url: 'https://axamen.atwebpages.com/test_php/send_email.php',
    success:function(data){
     //  console.log(data);
    }
   
}).fail(function(){
    console.log("ajax failed");
});




/*

function sendvmail(){
    AWS.config.update({
        accessKeyId: '',
        secretAccessKey: '',
          region: 'us-east-1',
    });
     
    const ses = new AWS.SES({
      region: 'us-east-1',
      apiVersion: '2020-1-01'
    
     })
    var params = {
    Destination: {
     ToAddresses: [
       //  window.vemail 
       "hello@naijacurrencyconverter.com.ng"
     ]
    },
    Message: {
     Body: {
      Html: {
       Charset: "UTF-8",
      
       Data: "Dear Chairman,<p> You just got a payment for Exchange product. <br>Name:"+name+", email:"+email+" on "+date+" from "+bank+".</p><p>send signing-details fast </p><br><p>Your PA</p>"
    
      },
      Text: {
       Charset: "UTF-8",
       Data: "This is the message body in text format."
      }
     },
     Subject: {
      Charset: "UTF-8",
      Data: "You just got a Payment!"
     }
    },
    ReplyToAddresses: [
    "chameleonapp@wisonline.com.ng"
    ],
    //ReturnPath: "",
    //ReturnPathArn: "",
    Source: "chameleonapp@wisonline.com.ng",
    //SourceArn: ""
    };
    
      // console.log(AWS.config.credentials)
    ses.sendEmail(params, function(err, data) {
    console.log("email sending");
     if (err) console.log(err, err.stack); // an error occurred
     else     console.log(data);
    
    console.log("email sent");
    //$("#info2").text("We have received your details. Please allow 15 minutes for confirmation and login details");
    alert("Confirmation sent!");
    document.getElementById("formsubmit").innerHTML="Send Confirmation";
             });
         
         
    }
  */
   // sendvmail();
}

});



/* get query string and apply discount */

//var querystring = window.location.querystring;
//var discount_set = querystring["disc"];

//var qs = new QueryString();

// use_id is now available in the use_id variable
//var discount_set = qs.get("disc");

var urlParam = function(name, w){
    w = w || window;
    var rx = new RegExp('[\&|\?]'+name+'=([^\&\#]+)'),
        val = w.location.search.match(rx);
    return !val ? '':val[1];
}

var discount_set = urlParam('disc');
console.log(discount_set);



if(discount_set == "y"){

    //update ls
    localStorage.setItem("disco", "y");
    //reduce the amount by 15%
    var namt = 45500 - (45500*.15);
    //diplay discount div
    document.getElementById("discountapplied").style.display = "block";

    

    if(document.getElementById("aprice")){
    //write new amount into page
    document.getElementById("aprice").innerHTML=namt;

  
    //scroll to order area
    setTimeout(function(){ 
document.getElementById("showorder").scrollIntoView();
}, 1000);
    
    //disable popup
    var moda = document.getElementById("mModal");
    moda.style.display = "none";

    //delete discount from ls
    localStorage.setItem("disco", "");

    } else {
        console.log("div not found");
    }
}
