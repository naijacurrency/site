/*
 File will call api and convert currencies from calculator
 
 File will also get historical rates
 
 And display rate used
 
*/




//calculator
//calculator

document.getElementById("conv").addEventListener("click",function(){
    
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

var currency = basecurrency.value;
var from = firstinput.value;
var to = covertcurrency.value;

//call api to get current rate


var requestURL = 'https://v6.exchangerate-api.com/v6/a779c2ab746dc1471f4cf977/pair/'+currency+'/'+to;

//var requestURL = 'https://api.exchangerate.host/convert?from='+currency+'&to='+to+'&amount='+from+'';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response;
 //console.log(response);
  
  var rate = parseFloat(response.conversion_rate);
 
 //  console.log(rate);
   //console.log(from);

//calculate rate
var result = parseFloat(from) * rate;



//function for formating
    function format(n, sep, decimals) {
    sep = sep || "."; // Default to period as decimal separator
    decimals = decimals || 2; // Default to 2 decimals

    return n.toLocaleString().split(sep)[0]
        + sep
        + n.toFixed(decimals).split(sep)[1];
}


  resultinput.innerHTML = format(result);
}
        
        
    } else {
       // alert("enter a value");
    
        document.getElementById("notification").innerHTML = "please complete all information required";
    }

});





//on load

/* window.addEventListener('scroll', function() {
       console.log('scrolling');

//check counter
if(localStorage.getItem("scrollc")){
    //we have scolled so no code
} else {
    //no scoll yet
    localStorage.setItem("scrollc", "yes");
*/
//on load
document.addEventListener("DOMContentLoaded", function() {
    
 setTimeout(function(){// console.log("After 8 seconds!"); 
    
    
// run the rest of the code
    

//add google adds
//$.getScript("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2277594145415677");
/*
var tag = document.createElement("script");
tag.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2277594145415677";
tag.crossorigin = "anonymous";
document.getElementsByTagName("head")[0].appendChild(tag);
*/

//add google analytics
var tag = document.createElement("script");
tag.src = "https://www.googletagmanager.com/gtag/js?id=G-XFZL8723RQ";
document.getElementsByTagName("head")[0].appendChild(tag);

var tag = document.createElement("script");
tag.src = "js/gascript.js";
document.getElementsByTagName("head")[0].appendChild(tag);

//document.addEventListener("DOMContentLoaded", function() {
    

  var tag = document.createElement("script");
tag.src = "https://s7.addthis.com/js/300/addthis_widget.js#pubid=jetli004";
document.getElementsByTagName("body")[0].appendChild(tag);
         
   //s7.addthis.com/js/300/addthis_widget.js#pubid=jetli004        
           
       

//check if all data exists in LS

if(localStorage.getItem("all_rates")){
    
  //  console.log("data found");
    //get it and check for timestamp
    var p_data = JSON.parse(localStorage.getItem("all_rates"));
 
  //  console.log(p_data);
   
    var p_timestamp = p_data[1].timestamp;
   // console.log(p_data[1].timestamp);
    
    //subtract the timestamps
    
    var n_timestamp = Date.now();
  //  console.log("time now:"+n_timestamp);
    
    var d_timestamp = (n_timestamp - p_timestamp)/1000/60/60;
    
  //  console.log(d_timestamp)
    
    if(d_timestamp < 1){
        //its not up to an hr since the last load
     //   console.log("LS loading")
        loadLS();
    } else {
        //timestamp differenc is more than 1 hr
    //    console.log("api loading");
        loadApi();
    }
} else {
    //data is not available
 //   console.log("no data found");
    loadApi();
}  
}, 3500);  
//}
    });



function loadApi(){
    
    
   
  // console.log("loading api");
    
    //    var requestURL = 'https://api.exchangerate.host/latest?base=USD';
        var requestURL = 'https://openexchangerates.org/api/latest.json?app_id=2811fd1ec0024160ab4d4f63316e1730';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response;
   
 // console.log(response);
  //create a new array
   var all_rates = []
   
    all_rates.push(response);
 

    var timestamp = Date.now()

    
    var addtime = {timestamp: timestamp };
    
    //add timestamp to data

    all_rates.push(addtime);
    
  //  console.log(all_rates);
   
   //save data in ls
   localStorage.setItem("all_rates", JSON.stringify(all_rates));
  
  
  
 // console.log(response);
  
  var date = request.response.date;
 // console.log(date);

  var USDrate = response.rates.USD;
  var NGNrate = response.rates.NGN;
   var EUROrate = response.rates.EUR;
  var JPYrate = response.rates.JPY;
   var GBPrate = response.rates.GBP;
  var AUDrate = response.rates.AUD;
   var CADrate = response.rates.CAD;
  var CHFrate = response.rates.CHF;
   var CNYrate = response.rates.CNY;
  var SEKrate = response.rates.SEK;
   var MXNrate = response.rates.MXN;
  var NZDrate = response.rates.NZD;
    var SGDrate = response.rates.SGD;
  var HKDrate = response.rates.HKD;
   var NOKrate = response.rates.NOK;
  var KRWrate = response.rates.KRW;
   var TRYrate = response.rates.TRY;
  var INRrate = response.rates.INR;
   var RUBrate = response.rates.RUB;
  var BRLrate = response.rates.BRL;
    var ZARrate = response.rates.ZAR;
  var DKKrate = response.rates.DKK;
   var PLNrate = response.rates.PLN;
  var TWDrate = response.rates.TWD;
   var THBrate = response.rates.THB;
  var MYRrate = response.rates.MYR;
   var AEDrate = response.rates.AED;
  
  
 // console.log(AEDrate);
  
  //display
  
  document.getElementById("dat").innerHTML = date;
  
  
  
  document.getElementById("usd").innerHTML = USDrate;
  document.getElementById("ngn").innerHTML = NGNrate;
  document.getElementById("euro").innerHTML = EUROrate;
  document.getElementById("jpy").innerHTML = JPYrate;
  document.getElementById("gbp").innerHTML = GBPrate;
  document.getElementById("aud").innerHTML = AUDrate;
  document.getElementById("cad").innerHTML = CADrate;
  document.getElementById("chf").innerHTML = CHFrate;
  document.getElementById("cny").innerHTML = CNYrate;
  document.getElementById("sek").innerHTML = SEKrate;
  document.getElementById("mxn").innerHTML = MXNrate;
  document.getElementById("nzd").innerHTML = NZDrate;
  document.getElementById("sgd").innerHTML = SGDrate;
  document.getElementById("hkd").innerHTML = HKDrate;
  document.getElementById("nok").innerHTML = NOKrate;
  document.getElementById("krw").innerHTML = KRWrate;
  document.getElementById("try").innerHTML = TRYrate;
  document.getElementById("inr").innerHTML = INRrate;
  document.getElementById("rub").innerHTML = RUBrate;
  document.getElementById("brl").innerHTML = BRLrate;
  document.getElementById("zar").innerHTML = ZARrate;
  document.getElementById("dkk").innerHTML = DKKrate;
  document.getElementById("pln").innerHTML = PLNrate;
  document.getElementById("twd").innerHTML = TWDrate;
  document.getElementById("thb").innerHTML = THBrate;
  document.getElementById("myr").innerHTML = MYRrate;
  document.getElementById("aed").innerHTML = AEDrate;

}
 
    
  }


function loadLS(){
    
    //console.log("locading from LS");
        //get the data
     var data = JSON.parse(localStorage.getItem("all_rates"));
     
      var date = data[0].date;
  
  var USDrate = data[0].rates.USD;
  var NGNrate = data[0].rates.NGN;
   var EUROrate = data[0].rates.EUR;
  var JPYrate = data[0].rates.JPY;
   var GBPrate = data[0].rates.GBP;
  var AUDrate = data[0].rates.AUD;
   var CADrate = data[0].rates.CAD;
  var CHFrate = data[0].rates.CHF;
   var CNYrate = data[0].rates.CNY;
  var SEKrate = data[0].rates.SEK;
   var MXNrate = data[0].rates.MXN;
  var NZDrate = data[0].rates.NZD;
    var SGDrate = data[0].rates.SGD;
  var HKDrate = data[0].rates.HKD;
   var NOKrate = data[0].rates.NOK;
  var KRWrate = data[0].rates.KRW;
   var TRYrate = data[0].rates.TRY;
  var INRrate = data[0].rates.INR;
   var RUBrate = data[0].rates.RUB;
  var BRLrate = data[0].rates.BRL;
    var ZARrate = data[0].rates.ZAR;
  var DKKrate = data[0].rates.DKK;
   var PLNrate = data[0].rates.PLN;
  var TWDrate = data[0].rates.TWD;
   var THBrate = data[0].rates.THB;
  var MYRrate = data[0].rates.MYR;
   var AEDrate = data[0].rates.AED;
  
  
 // console.log(AEDrate);
  
  //display
  
  document.getElementById("dat").innerHTML = date;
  
  
  
  document.getElementById("usd").innerHTML = USDrate;
  document.getElementById("ngn").innerHTML = NGNrate;
  document.getElementById("euro").innerHTML = EUROrate;
  document.getElementById("jpy").innerHTML = JPYrate;
  document.getElementById("gbp").innerHTML = GBPrate;
  document.getElementById("aud").innerHTML = AUDrate;
  document.getElementById("cad").innerHTML = CADrate;
  document.getElementById("chf").innerHTML = CHFrate;
  document.getElementById("cny").innerHTML = CNYrate;
  document.getElementById("sek").innerHTML = SEKrate;
  document.getElementById("mxn").innerHTML = MXNrate;
  document.getElementById("nzd").innerHTML = NZDrate;
  document.getElementById("sgd").innerHTML = SGDrate;
  document.getElementById("hkd").innerHTML = HKDrate;
  document.getElementById("nok").innerHTML = NOKrate;
  document.getElementById("krw").innerHTML = KRWrate;
  document.getElementById("try").innerHTML = TRYrate;
  document.getElementById("inr").innerHTML = INRrate;
  document.getElementById("rub").innerHTML = RUBrate;
  document.getElementById("brl").innerHTML = BRLrate;
  document.getElementById("zar").innerHTML = ZARrate;
  document.getElementById("dkk").innerHTML = DKKrate;
  document.getElementById("pln").innerHTML = PLNrate;
  document.getElementById("twd").innerHTML = TWDrate;
  document.getElementById("thb").innerHTML = THBrate;
  document.getElementById("myr").innerHTML = MYRrate;
  document.getElementById("aed").innerHTML = AEDrate;
        
}
