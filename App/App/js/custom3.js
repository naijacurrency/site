/*


*/


//calculator
document.getElementById("ccurrency").addEventListener("change",function(){
    console.log("yyyy");
    document.getElementById("r1").value="";
    document.getElementById("rate").innerHTML="";
    document.getElementById("result").innerHTML="<img src='img/dollars-to-naira-loading.svg'>";
});

document.getElementById("bcurrency").addEventListener("change",function(){
    console.log("yyy");
    document.getElementById("r1").value="";
    document.getElementById("rate").innerHTML="";
    document.getElementById("result").innerHTML="<img src='img/dollars-to-naira-loading.svg'>";
});


document.getElementById("r1").addEventListener("keyup",function(){
    
  //  console.log("running");
      
      //check if value to be converted is 0
      if(!document.getElementById("r1").value == 0
         && document.getElementById("ccurrency")
         && document.getElementById("bcurrency") ){
  
  //define cosntants
  var basecurrency = document.getElementById("bcurrency");
  var covertcurrency = document.getElementById("ccurrency");
  var firstinput = document.getElementById("r1");
  var resultinput = document.getElementById("result");
  
  
  //get inputs
  var from_currency = basecurrency.value;
  var amount= firstinput.value;
  var to_currency = covertcurrency.value;
  
  //save in LS
  localStorage.setItem("from_currency", from_currency);
  localStorage.setItem("amount", amount);
  localStorage.setItem("to_currency", to_currency);

    //get data from LS
    var s_data = JSON.parse(localStorage.getItem("sell_data"));

    console.log(s_data);

    console.log(from_currency, amount,to_currency);


    //sort same currency
    if(from_currency == to_currency){
        //exchange rate is 1
        
        document.getElementById("rate").innerHTML = 1;
        
        //amount is the same
        document.getElementById("result").innerHTML = amount;
       
    }
    
    
   //get receiving currency
   
   //get the pair to be converted
   var to_currency = localStorage.getItem("to_currency");
   var from_currency = localStorage.getItem("from_currency");
   console.log(to_currency,from_currency );

 //  exchange with NGN

 
   if(to_currency == "NGN" && to_currency != from_currency ){
    var type = "buying";
   console.log(type);
    if(from_currency == "CAD"){

        //get the exchange rate

        var cadbrate = parseFloat(localStorage.getItem("cadbuyrate"));
       //calculate the amount 
       var f_amount = (cadbrate * parseFloat(localStorage.getItem("amount"))).toFixed(2);
        //display
        document.getElementById("result").innerHTML = f_amount;
        document.getElementById("rate").innerHTML = f_amount/amount;
       
    }
    
    if(from_currency == "USD"){
        //get the exchange rate
        var usdbrate = parseFloat(localStorage.getItem("usdbuyrate"));
       //calculate the amount 
       var f_amount = (usdbrate * parseFloat(localStorage.getItem("amount"))).toFixed(2);
        //display
        document.getElementById("result").innerHTML = f_amount;
        document.getElementById("rate").innerHTML = f_amount/amount;
    }
   
   
    if(from_currency == "GBP"){
        //get the exchange rate
        var gbpbrate = parseFloat(localStorage.getItem("gbbuyrate"));
       //calculate the amount 
       var f_amount = (gbpbrate * parseFloat(localStorage.getItem("amount"))).toFixed(2);
        //display
        document.getElementById("result").innerHTML = f_amount;
        document.getElementById("rate").innerHTML = f_amount/amount;
       
    }
   
   
    if(from_currency == "EUR"){
        //get the exchange rate
        var eurbrate = parseFloat(localStorage.getItem("eurobuyrate"));
       //calculate the amount 
       var f_amount = (eurbrate * parseFloat(localStorage.getItem("amount"))).toFixed(2);
        //display
        document.getElementById("result").innerHTML = f_amount;
        document.getElementById("rate").innerHTML = f_amount/amount;
       
    }
    

    } 

   if(from_currency == "NGN" && to_currency != from_currency)
   {
    var type = "selling";
       if(to_currency == "CAD"){
        //get the exchange rate
        var cadsrate = parseFloat(localStorage.getItem("cadsellrate"));
       //calculate the amount 
       var f_amount = (1/cadsrate * parseFloat(localStorage.getItem("amount"))).toFixed(2);
        //display
        document.getElementById("result").innerHTML = f_amount;
        document.getElementById("rate").innerHTML = (1/f_amount*amount).toFixed(2);
    }

       if(to_currency == "USD"){
        //get the exchange rate
        var usdsrate = parseFloat(localStorage.getItem("usdsellrate"));
        //calculate the amount 
       var f_amount = (1/usdsrate* parseFloat(localStorage.getItem("amount"))).toFixed(2);
        //display
        document.getElementById("result").innerHTML = f_amount;
        document.getElementById("rate").innerHTML = (1/f_amount*amount).toFixed(2);
    }
    
     if(to_currency == "GBP"){
        //get the exchange rate
        var gbpsrate = parseFloat(localStorage.getItem("gbsellrate"));
         //calculate the amount 
       var f_amount = (1/gbpsrate * parseFloat(localStorage.getItem("amount"))).toFixed(2);
        //display
        document.getElementById("result").innerHTML = f_amount;
        document.getElementById("rate").innerHTML = (1/f_amount*amount).toFixed(2);
    }
    
    if(to_currency == "EUR"){
        //get the exchange rate
        var eursrate = parseFloat(localStorage.getItem("eusellrate"));
        //calculate the amount 
       var f_amount = (1/eursrate * parseFloat(localStorage.getItem("amount"))).toFixed(2);
        //display
        document.getElementById("result").innerHTML = f_amount;
        document.getElementById("rate").innerHTML = (1/f_amount*amount).toFixed(2);
    }
} 
  // exchange with other currencies

  //CAD
  
    if(from_currency == 'CAD' && to_currency != 'NGN' && from_currency != to_currency ){
   
    console.log("here");
    if(to_currency == 'USD'){
        var USDcadrate = parseFloat(s_data[3].result.USDTCAD.o);
          //calculate the amount 
       var f_amount = (1/USDcadrate * parseFloat(localStorage.getItem("amount"))).toFixed(2);
       //display
       document.getElementById("result").innerHTML = f_amount;
       document.getElementById("rate").innerHTML = f_amount/amount;
    }

    if(to_currency == 'GBP'){
        console.log("here");
        var USDgbprate = parseFloat(s_data[1].price);
        var USDcadrate = parseFloat(s_data[3].result.USDTCAD.o);
     
       //convert to USD 1st
       var usd_amount = 1/USDcadrate * parseFloat(localStorage.getItem("amount"));
         
        //calculate the final amount 
     var f_amount = (1/USDgbprate * usd_amount).toFixed(2);
     //display
     document.getElementById("result").innerHTML = f_amount;
     document.getElementById("rate").innerHTML = f_amount/amount;
    }

    if(to_currency == 'EUR'){
        var USDeurrate = parseFloat(s_data[2].price);
        var USDcadrate = parseFloat(s_data[3].result.USDTCAD.o);
     
       //convert to USD 1st
       var usd_amount = 1/USDcadrate * parseFloat(localStorage.getItem("amount"));
         
        //calculate the final amount 
     var f_amount = (1/USDeurrate * usd_amount).toFixed(2);
     //display
     document.getElementById("result").innerHTML = f_amount;
     document.getElementById("rate").innerHTML = f_amount/amount;
    }

    } 

 //GBP
    if(from_currency == 'GBP' && to_currency != 'NGN' && from_currency != to_currency ){
    
    if(to_currency == 'USD'){
        var USDgbprate = parseFloat(s_data[1].price);
        //calculate the amount 
       var f_amount = (USDgbprate * parseFloat(localStorage.getItem("amount"))).toFixed(2);
       //display
       document.getElementById("result").innerHTML = f_amount;
       document.getElementById("rate").innerHTML = f_amount/amount;
    }

    if(to_currency == 'CAD'){
        var USDgbprate = parseFloat(s_data[1].price);
        var USDcadrate = parseFloat(s_data[3].result.USDTCAD.o);
     
       //convert to USD 1st
       var usd_amount = USDcadrate * parseFloat(localStorage.getItem("amount"));
         
        //calculate the final amount 
     var f_amount = (USDgbprate * usd_amount).toFixed(2);
     //display
     document.getElementById("result").innerHTML = f_amount;
    }document.getElementById("rate").innerHTML = f_amount/amount;

    if(to_currency == 'EUR'){
        var USDeurrate = parseFloat(s_data[2].price);
        var USDgbprate = parseFloat(s_data[1].price);
       
       //convert to USD 1st
       var usd_amount = USDeurrate * parseFloat(localStorage.getItem("amount"));
         
        //calculate the final amount 
     var f_amount = (USDgbprate * usd_amount).toFixed(2);
     //display
     document.getElementById("result").innerHTML = f_amount;
    }document.getElementById("rate").innerHTML = f_amount/amount;

    } 


 //EURO
 if(from_currency == 'EUR' && to_currency != 'NGN' && from_currency != to_currency ){
    
    if(to_currency == 'USD'){
        var USDeurrate = parseFloat(s_data[2].price);
        //calculate the amount 
       var f_amount = (USDeurrate * parseFloat(localStorage.getItem("amount"))).toFixed(2);
       //display
       document.getElementById("result").innerHTML = f_amount;
       document.getElementById("rate").innerHTML = f_amount/amount;
   
    }

    if(to_currency == 'GBP'){
        var USDgbprate = parseFloat(s_data[1].price);
        var USDeurrate = parseFloat(s_data[2].price);
      
       //convert to USD 1st
       var usd_amount = USDeurrate * parseFloat(localStorage.getItem("amount"));
         
        //calculate the final amount 
     var f_amount = (USDgbprate * usd_amount).toFixed(2);
     //display
     document.getElementById("result").innerHTML = f_amount;
     document.getElementById("rate").innerHTML = f_amount/amount;
    }

    if(to_currency == 'CAD'){
        var USDeurrate = parseFloat(s_data[2].price);
        var USDcadrate = parseFloat(s_data[3].result.USDTCAD.o);
     
       //convert to USD 1st
       var usd_amount = USDcadrate * parseFloat(localStorage.getItem("amount"));
         
        //calculate the final amount 
     var f_amount = (USDeurrate * usd_amount).toFixed(2);
     //display
     document.getElementById("result").innerHTML = f_amount;
    
     document.getElementById("rate").innerHTML = f_amount/amount;
    }

    } 


    //USD
 if(from_currency == 'USD' && to_currency != 'NGN' && from_currency != to_currency ){
    
    if(to_currency == 'EUR'){
        var USDeurrate = parseFloat(s_data[2].price);
        //calculate the amount 
       var f_amount = (USDeurrate * parseFloat(localStorage.getItem("amount"))).toFixed(2);
       //display
       document.getElementById("result").innerHTML = f_amount;
    }

    if(to_currency == 'GBP'){
        var USDgbprate = parseFloat(s_data[1].price);
       // var USDeurrate = parseFloat(s_data[2].price);
      
       //convert to USD 1st
      // var usd_amount = USDeurrate * parseFloat(localStorage.getItem("amount"));
         
        //calculate the final amount 
    // var f_amount = (USDgbprate * usd_amount).toFixed(2);
    var f_amount = (USDgbprate * parseFloat(localStorage.getItem("amount"))).toFixed(2);
     //display
     document.getElementById("result").innerHTML = f_amount;
     document.getElementById("rate").innerHTML = f_amount/amount;
    }

    if(to_currency == 'CAD'){
      //  var USDeurrate = parseFloat(s_data[2].price);
        var USDcadrate = parseFloat(s_data[3].result.USDTCAD.o);
     
       //convert to USD 1st
      // var usd_amount = USDcadrate * parseFloat(localStorage.getItem("amount"));
         
        //calculate the final amount 
     //var f_amount = (USDeurrate * usd_amount).toFixed(2);

     var f_amount = USDcadrate * parseFloat(localStorage.getItem("amount"));
     //display
     document.getElementById("result").innerHTML = f_amount;
     document.getElementById("rate").innerHTML = f_amount/amount;
    }

    } 
 
    
  }   else {
    // alert("enter a value");
 
     document.getElementById("notification").innerHTML = "please complete all information required";
 }
  
});
          
 



function monthName(mon){return['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][mon-1];}

document.addEventListener("DOMContentLoaded",function(){
    setTimeout(function(){
 
        
//check if all data exists in LS

if(localStorage.getItem("sell_data")){
    
   
    //console.log("data found");
    //get it and check for timestamp
    var p_data = JSON.parse(localStorage.getItem("sell_data"));
 
  //  //console.log(p_data);
   
    var p_timestamp = p_data[4].timestamp;
    //console.log("current saved time stamp:", p_data[1].timestamp);
     //translate to date

     var d =p_timestamp;
var date=new Date(+d); //NB: use + before variable name

var today = date.toDateString();

    
     //display
     document.getElementById("dat").innerHTML =  today;
    
    //subtract the timestamps
    
    var n_timestamp = Date.now();
    //console.log("time now:"+n_timestamp);
    
    var d_timestamp = (n_timestamp - p_timestamp)/1000/60/60;
    
    //console.log("time difference: ",d_timestamp);
    
    if(d_timestamp < 1){
        //its not up to an hr since the last load
        //console.log("LS loading")
        loadLS();
    } else {
        //console.log("timestamp differenc is more than 1 hr");
    //    //console.log("api loading");
        loadApi();
    }
} else {
    //data is not available
    //console.log("no data found");
    loadApi();
}  
});  
//}
    });



function loadApi(){
    
   // CONST tok = "4f07fb6d8910d6861b68b1f171a2d8e9";
   
   //console.log("loading api");
   /*
  
*/
//load selling rates

var url8="https://api.binance.com/api/v3/ticker/price?symbol=USDTNGN";
var url10="https://api.binance.com/api/v3/ticker/price?symbol=GBPUSDT";
var url11="https://api.binance.com/api/v3/ticker/price?symbol=EURUSDT";
////console.log("euro")
var url12="https://api.kraken.com/0/public/Ticker?pair=USDTCAD";

Promise.all(
    [fetch(url8),fetch(url10),fetch(url11),fetch(url12)]).then(
        function(responses){return Promise.all(responses.map(function(response){return response.json();}));}
        ).then(
            function(data){

        var sell_data=data;
     console.log(sell_data);

        var timestamp=Date.now()
    var addtime={timestamp:timestamp};
    sell_data.push(addtime);
    localStorage.setItem("sell_data",JSON.stringify(sell_data));


    var d =timestamp;
    var date=new Date(+d); //NB: use + before variable name
    
    var today = date.toDateString();
    
        
         //display time
         document.getElementById("dat").innerHTML =  today;


//usd
    var blrate=parseFloat(data[0].price);
    var usdsellrate=(blrate+5).toFixed(2);
    localStorage.setItem("usdsellrate", usdsellrate);
 //   //console.log(usdsellrate);
    var usdbuyrate = (blrate - 25).toFixed(2);
    localStorage.setItem("usdbuyrate", usdbuyrate);

   

    //display
document.getElementById("usdsrate").innerHTML=usdsellrate;
document.getElementById("usd").innerHTML=usdbuyrate;

//gbp
var gbrate=parseFloat(data[1].price);
var gbsellrate=(blrate*gbrate+25).toFixed(2);
// //console.log(gbsellrate);

var gbbuyrate = (usdbuyrate * parseFloat(data[1].price)).toFixed(2);

localStorage.setItem("gbsellrate",gbsellrate );
localStorage.setItem("gbbuyrate", gbbuyrate);

//display
document.getElementById("gbpsrate").innerHTML=gbsellrate;
document.getElementById("gbp").innerHTML=gbbuyrate;

//euro
////console.log(eurate);

var eurate=parseFloat(data[2].price);

var eusellrate=(blrate*eurate+10).toFixed(2);
////console.log(eusellrate);
eurobuyrate = (usdbuyrate * parseFloat(data[2].price)).toFixed(2);

localStorage.setItem("eurobuyrate",eurobuyrate );
localStorage.setItem("eusellrate", eusellrate);

//display
document.getElementById("eursrate").innerHTML=eusellrate;
document.getElementById("euro").innerHTML=eurobuyrate;


//cad
////console.log(data[3].result.USDTCAD.o);
////console.log(data[3].result.USDT[o]);
////console.log(data[3].result);
var cadrateu=parseFloat(data[3].result.USDTCAD.o);
////console.log("usd:", usdsellrate);
////console.log("cad usd:", cadrateu);
var cadrate = usdsellrate / cadrateu;

////console.log(cadrate);

var cadsellrate=cadrate.toFixed(2);

//var cadsellrate=(1/cadrate).toFixed(2);
////console.log(cadsellrate);
var caccy = usdbuyrate / cadrateu;
////console.log(caccy);

var cadbuyrate = caccy.toFixed(2);

localStorage.setItem("cadbuyrate",cadbuyrate );
localStorage.setItem("cadsellrate", cadsellrate);

//display
document.getElementById("cadsrate").innerHTML=cadsellrate;
document.getElementById("cad").innerHTML=cadbuyrate;

    });






}
 
    
 // }


function loadLS(){
    
   
    

  //load sell data

   //get the data
   var sdata = JSON.parse(localStorage.getItem("sell_data"));

 //usd
 var blrate=parseFloat(sdata[0].price);
 var usdsellrate=(blrate+5).toFixed(2);
 ////console.log(usdsellrate);
var usdbuyrate = (blrate - 25).toFixed(2);

   

    //display
document.getElementById("usdsrate").innerHTML=usdsellrate;
document.getElementById("usd").innerHTML=usdbuyrate;




//gbp
var gbrate=parseFloat(sdata[1].price);
var gbsellrate=(blrate*gbrate+25).toFixed(2);
////console.log(gbsellrate);

var gbbuyrate = (usdbuyrate * parseFloat(sdata[1].price)).toFixed(2);

//display
document.getElementById("gbpsrate").innerHTML=gbsellrate;
document.getElementById("gbp").innerHTML=gbbuyrate;


//euro
////console.log(eurate);

var eurate=parseFloat(sdata[2].price);

var eusellrate=(blrate*eurate+10).toFixed(2);
////console.log(eusellrate);
eurobuyrate = (usdbuyrate * parseFloat(sdata[2].price)).toFixed(2);


//display
document.getElementById("eursrate").innerHTML=eusellrate;
document.getElementById("euro").innerHTML=eurobuyrate;

//cad

var cadrateu=parseFloat(sdata[3].result.USDTCAD.o);
////console.log("usd:", usdsellrate);
////console.log("cad usd:", cadrateu);
var cadrate = usdsellrate / cadrateu;

////console.log(cadrate);

var cadsellrate=cadrate.toFixed(2);

//var cadsellrate=(1/cadrate).toFixed(2);
////console.log(cadsellrate);
var caccy = usdbuyrate / cadrateu;
//console.log(caccy);

var cadbuyrate = caccy.toFixed(2);


//display
document.getElementById("cadsrate").innerHTML=cadsellrate;
document.getElementById("cad").innerHTML=cadbuyrate;
}
    


    //form

    



