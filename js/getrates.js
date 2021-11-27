/*
 File will call api and convert currencies from calculator
 
 File will also get historical rates
 
 And display rate used
 
*/

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


var requestURL = 'https://api.exchangerate.host/convert?from='+currency+'&to='+to+'&amount='+from+'';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response;
  //console.log(response);
  
  var rate = parseFloat(response.result);
 
 //  console.log(rate);

//calculate rate
var result = parseFloat(from) * rate;
//console.log(result);

//display final value
//console.log(result);

 function format(n, sep, decimals) {
    sep = sep || "."; // Default to period as decimal separator
    decimals = decimals || 2; // Default to 2 decimals

    return n.toLocaleString().split(sep)[0]
        + sep
        + n.toFixed(decimals).split(sep)[1];
}

//resultinput.innerHTML = result.toLocaleString();
  resultinput.innerHTML = format(result / 1000);
}
        
        
    } else {
       // alert("enter a value");
    
        document.getElementById("notification").innerHTML = "please completed all information required";
    }

});



//get gurrent rates
document.addEventListener("DOMContentLoaded", function() {
 

    var requestURL = 'https://api.exchangerate.host/latest?base=USD';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response;
 // console.log(response);
  
  var date = request.response.date;
  
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
        


});



