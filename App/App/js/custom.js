/*


*/


//calculator

document.getElementById("r1").addEventListener("change",function(){
    
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
    
    var rate = parseFloat(response.info.rate);
   
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
    resultinput.innerHTML = format(result);
  }
          
          
      } else {
         // alert("enter a value");
      
          document.getElementById("notification").innerHTML = "please completed all information required";
      }
  
  });
  

function monthName(mon){return['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][mon-1];}

document.addEventListener("DOMContentLoaded",function(){
    setTimeout(function(){
 
        /*
var tag=document.createElement("script");
tag.src="https://www.googletagmanager.com/gtag/js?id=G-XFZL8723RQ";
document.getElementsByTagName("head")[0].appendChild(tag);
var tag=document.createElement("script");
tag.src="js/gascript.js";
*/
/*document.getElementsByTagName("head")[0].appendChild(tag);
var tag=document.createElement("script");
tag.src="https://s7.addthis.com/js/300/addthis_widget.js#pubid=jetli004";

document.getElementsByTagName("body")[0].appendChild(tag);
*/
if(localStorage.getItem("all_data_3000"))
{
    console.log("data found");

var p_data=JSON.parse(localStorage.getItem("all_data_3000"));
var p_timestamp=p_data[7].timestamp;
var n_timestamp=Date.now();
var d_timestamp=(n_timestamp-p_timestamp)/3000/60/60;
if(d_timestamp<1){loadLS();}else{loadApi();}

}else{
    //show loading animation
    loadApi();
    }
},3200);}

); //close unload script

function format(n,sep,decimals){sep=sep||".";
decimals=decimals||2;
return n.toLocaleString().split(sep)[0]+sep+n.toFixed(decimals).split(sep)[1];}

function loadApi()

{   
    /*
    var today=new Date();
    let previous6months=new Date(today.setDate(today.getDate()-180));
    var today6=previous6months.toISOString().slice(0,10);
    var m61=today6.split("-");
    var m6=monthName(m61[1]);

    var today=new Date();
    let previous5months=new Date(today.setDate(today.getDate()-150));
    var today5=previous5months.toISOString().slice(0,10);var m51=today5.split("-");
    var m5=monthName(m51[1]);

    var today=new Date();
    let previous4months=new Date(today.setDate(today.getDate()-120));
    var today4=previous4months.toISOString().slice(0,10);var m41=today4.split("-");
    var m4=monthName(m41[1]);

    var today=new Date();
    let previous3months=new Date(today.setDate(today.getDate()-90));
    var today3=previous3months.toISOString().slice(0,10);var m31=today3.split("-");
    var m3=monthName(m31[1]);

    var today=new Date();
    let previous2months=new Date(today.setDate(today.getDate()-60))
    var today2=previous2months.toISOString().slice(0,10);
    var m21=today2.split("-");
    var m2=monthName(m21[1]);var today=new Date();

    let previous1months=new Date(today.setDate(today.getDate()-30))
    var today1=previous1months.toISOString().slice(0,10);
    var m11=today1.split("-");
    var m1=monthName(m11[1]);
*/
    var currency="USD";
    var from=3000;
    var to="NGN";
    /*
    var url1="https://api.exchangerate.host/"+today6+"?base=USD&symbols=USD,NGN&amount=3000";
    var url2="https://api.exchangerate.host/"+today5+"?base=USD&symbols=USD,NGN&amount=3000";
    var url3="https://api.exchangerate.host/"+today4+"?base=USD&symbols=USD,NGN&amount=3000";
    var url4="https://api.exchangerate.host/"+today3+"?base=USD&symbols=USD,NGN&amount=3000";
    var url5="https://api.exchangerate.host/"+today2+"?base=USD&symbols=USD,NGN&amount=3000";
    var url6="https://api.exchangerate.host/"+today1+"?base=USD&symbols=USD,NGN&amount=3000";
    */

    var url7="https://api.exchangerate.host/convert?from="+currency+"&to="+to+"&amount="+from+"'";
    var url8="https://api.binance.com/api/v3/ticker/price?symbol=USDTNGN";
    var url9="https://api.allorigins.win/get?url=https://www.cbn.gov.ng/rates/outputExchangeRateJSN.asp";
    var url10="https://api.binance.com/api/v3/ticker/price?symbol=GBPUSDT";
    var url11="https://api.binance.com/api/v3/ticker/price?symbol=EURUSDT";
    console.log("euro")
    var url12="https://api.kraken.com/0/public/Ticker?pair=USDTCAD";

Promise.all(
    [fetch(url7),fetch(url8),fetch(url9),fetch(url10),fetch(url11),fetch(url12)]).then(function(responses){return Promise.all(responses.map(function(response){return response.json();}));}).then(function(data){
    var all_data_3000=data;
    console.log(data);
    //let us view the data and determine what we need

    var timestamp=Date.now()
    var addtime={timestamp:timestamp};
    all_data_3000.push(addtime);
    localStorage.setItem("all_data_3000",JSON.stringify(all_data_3000));

   //check this output
    var blrate=parseFloat(data[1].price);
    console.log(blrate);
    var sellrate=blrate-25;
    var conbdispla=blrate*3000;
    var conbdisplay=conbdispla.toLocaleString();
    document.getElementById("selldollarsrate").innerHTML=sellrate;
    var n=data[6].result;
    var con2d=n.toLocaleString();
    document.getElementById("con").innerHTML=con2d;
    document.getElementById("conb").innerHTML=conbdisplay;
    const str=JSON.stringify(data[8]);
    const[first,...rest]=str.split('sellingrate');
    const str2=rest;
    const[first1,...rest1]=str.split(',');
    
    var newt=rest1[3].replace("sellingrate","");
    const str3=newt;
    const[first2,...rest2]=newt.split(':');
    const crate=rest2[0].slice(0,-1);
    var concrate=parseFloat(crate)*3000;
    var con2rated=concrate.toLocaleString();
    document.getElementById("conc").innerHTML=con2rated;
    var numr=data[6].info.rate;
    var rate2d=numr.toFixed(2);
    document.getElementById("rat").innerHTML=rate2d;
    document.getElementById("ratb").innerHTML=blrate;
    document.getElementById("ratc").innerHTML=crate;
    var gbrate=parseFloat(data[9].price);
    var gate=gbrate+(0.00*gbrate);
    console.log(gate);
    console.log(blrate);
    var gbp2ngn=gate*blrate;
    var grate=gbp2ngn.toFixed(2);
    document.getElementById("pou").innerHTML=grate;

    //chart starts here - we dont need it
    const ctx=document.getElementById('myChart').getContext('2d');
    const myChart=new Chart(ctx,{type:'line',data:{labels:[m6,m5,m4,m3,m4,m1],datasets:[{label:'3000 dollars to Naira exchange rate in the last 6 months',data:[data[0].rates.NGN,data[1].rates.NGN,data[2].rates.NGN,data[3].rates.NGN,data[4].rates.NGN,data[5].rates.NGN],backgroundColor:['rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)'],borderColor:['rgba(255, 99, 132, 1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)','rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)'],borderWidth:1}]},options:{scales:{y:{beginAtZero:false}}}});
    
    document.getElementById("mm1").innerHTML=m6;document.getElementById("mm2").innerHTML=m5;
    document.getElementById("mm3").innerHTML=m4;document.getElementById("mm4").innerHTML=m3;document.getElementById("mm5").innerHTML=m2;document.getElementById("mm6").innerHTML=m1;document.getElementById("mr1").innerHTML=data[0].rates.NGN;document.getElementById("mr2").innerHTML=data[1].rates.NGN;document.getElementById("mr3").innerHTML=data[2].rates.NGN;document.getElementById("mr4").innerHTML=data[3].rates.NGN;document.getElementById("mr5").innerHTML=data[4].rates.NGN;document.getElementById("mr6").innerHTML=data[5].rates.NGN;}).catch(function(error){console.log(error);});
 }
 //close

    function loadLS(){
        data=JSON.parse(localStorage.getItem("all_data_3000"));

        /*
        var today=new Date();
        let previous6months=new Date(today.setDate(today.getDate()-180));
        var today6=previous6months.toISOString().slice(0,10);
        var m61=today6.split("-");
        var m6=monthName(m61[1]);
        var today=new Date();
        let previous5months=new Date(today.setDate(today.getDate()-150));
        var today5=previous5months.toISOString().slice(0,10);
        var m51=today5.split("-");
        var m5=monthName(m51[1]);
        var today=new Date();
        let previous4months=new Date(today.setDate(today.getDate()-120));
        var today4=previous4months.toISOString().slice(0,10);
        var m41=today4.split("-");
        var m4=monthName(m41[1]);
        var today=new Date();
        let previous3months=new Date(today.setDate(today.getDate()-90));
        var today3=previous3months.toISOString().slice(0,10);
        var m31=today3.split("-");
        var m3=monthName(m31[1]);
        var today=new Date();
        let previous2months=new Date(today.setDate(today.getDate()-60))
        var today2=previous2months.toISOString().slice(0,10);
        var m21=today2.split("-");
        var m2=monthName(m21[1]);
        var today=new Date();
        let previous1months=new Date(today.setDate(today.getDate()-30))
        var today1=previous1months.toISOString().slice(0,10);
        var m11=today1.split("-");
        var m1=monthName(m11[1]);
        */
        var currency="USD";
        var from=3000;var to="NGN";
        var blrate=parseFloat(data[7].price);
        console.log(blrate);
        var sellrate=blrate-25;
        var conbdisplay=blrate*3000;
        console.log(conbdisplay);document.getElementById("selldollarsrate").innerHTML=format(sellrate);
        var n=data[6].result;
        var con2d=n.toLocaleString();
        document.getElementById("con").innerHTML=con2d;document.getElementById("conb").innerHTML=format(conbdisplay);
        document.getElementById("conc").innerHTML=format(data[6].result);
        document.getElementById("rat").innerHTML=format(data[6].info.rate);
        var conbdispla=blrate*3000;
        var conbdisplay=conbdispla.toLocaleString();
        document.getElementById("ratb").innerHTML=conbdisplay;
        document.getElementById("ratc").innerHTML=format(data[8].info.rate);
        var gbrate=parseFloat(data[9].price);
        var gate=gbrate+(0.0*gbrate);
        console.log(gate);
        console.log(blrate);
        var gbp2ngn=gate*blrate;
        var grate=gbp2ngn.toFixed(2);
        document.getElementById("pou").innerHTML=grate;

        //chart
        /*
        const ctx=document.getElementById('myChart').getContext('2d');
        const myChart=new Chart(ctx,{type:'line',data:{labels:[m6,m5,m4,m3,m4,m1],datasets:[{label:'3000 dollars to Naira exchange rate in the last 6 months',data:[data[0].rates.NGN,data[1].rates.NGN,data[2].rates.NGN,data[3].rates.NGN,data[4].rates.NGN,data[5].rates.NGN],backgroundColor:['rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)'],borderColor:['rgba(255, 99, 132, 1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)','rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)'],borderWidth:1}]},options:{scales:{y:{beginAtZero:false}}}});document.getElementById("mm1").innerHTML=m6;document.getElementById("mm2").innerHTML=m5;document.getElementById("mm3").innerHTML=m4;document.getElementById("mm4").innerHTML=m3;document.getElementById("mm5").innerHTML=m2;document.getElementById("mm6").innerHTML=m1;console.log("2:"+data[0].rates.NGN);document.getElementById("mr1").innerHTML=data[0].rates.NGN;document.getElementById("mr2").innerHTML=data[1].rates.NGN;document.getElementById("mr3").innerHTML=data[2].rates.NGN;document.getElementById("mr4").innerHTML=data[3].rates.NGN;document.getElementById("mr5").innerHTML=data[4].rates.NGN;document.getElementById("mr6").innerHTML=data[5].rates.NGN;
        */
    }


    //form

    



