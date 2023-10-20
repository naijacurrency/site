/*
Script to show bank details

Script to receive confirmation data and send by email

*/



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

if(name == "" && email == "" && date ==""){
    //no sending
    document.getElementById("formsubmit").innerHTML="Send Confirmation";
} else {


//send email

function sendvmail(){
    AWS.config.update({
        accessKeyId: 'AKIAJCJ7KVDGB4ZGVEOA',
        secretAccessKey: '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',
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

    sendvmail();
}

});





