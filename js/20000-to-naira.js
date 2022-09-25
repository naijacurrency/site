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
 // console.log(response);
  
  var rate = parseFloat(response.info.rate);
 
  // console.log(rate);

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


  resultinput.innerHTML = format(result / 20000);
}
        
        
    } else {
       // alert("enter a value");
    
        document.getElementById("notification").innerHTML = "please complete all information required";
    }

});


//get rate for specific page




//global function to get month
function monthName(mon) {
   return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][mon - 1];
}



//new code

document.addEventListener("DOMContentLoaded", function() {
    
     setTimeout(function(){ console.log("After 3.5 seconds!"); 
    
    
// run the rest of the code
    

//add google adds
//$.getScript("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2277594145415677");

var tag = document.createElement("script");
tag.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2277594145415677";
tag.crossorigin = "anonymous";
document.getElementsByTagName("head")[0].appendChild(tag);


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

    
    
                           



//check if all data exists in LS

if(localStorage.getItem("all_data_20000")){
    
    console.log("data found");
    //get it and check for timestamp
    var p_data = JSON.parse(localStorage.getItem("all_data_20000"));
 
    var p_timestamp = p_data[7].timestamp;
   
    
    //subtract the timestamps
    
    var n_timestamp = Date.now();

    
    var d_timestamp = (n_timestamp - p_timestamp)/20000/60/60;
    
  
    
    if(d_timestamp < 1){
        //its not up to an hr since the last load
    
        loadLS();
    } else {
        //timestamp differenc is more than 1 hr

        loadApi();
    }
} else {
    //data is not available

    loadApi();
}  

     }, 3500);
    });


    



  //function for formating
    function format(n, sep, decimals) {
    sep = sep || "."; // Default to period as decimal separator
    decimals = decimals || 2; // Default to 2 decimals

    return n.toLocaleString().split(sep)[0]
        + sep
        + n.toFixed(decimals).split(sep)[1];
}






 function loadApi()
         {
    
        console.log("loading from API");
        //define variables
        var today = new Date();
        
        let previous6months = new Date(today.setDate(today.getDate() - 180));
        var today6 = previous6months.toISOString().slice(0, 10);
        
        //display on home
        
        
        
        var m61 = today6.split("-");
        var m6 = monthName(m61[1]);
        //console.log(m);
        
        
        var today = new Date();
        let previous5months = new Date(today.setDate(today.getDate() - 150));
        var today5 = previous5months.toISOString().slice(0, 10);
        var m51 = today5.split("-");
        var m5 = monthName(m51[1]);
        
        var today = new Date();
        let previous4months = new Date(today.setDate(today.getDate() - 120));
        var today4 = previous4months.toISOString().slice(0, 10);
        var m41 = today4.split("-");
        var m4 = monthName(m41[1]);
        
        var today = new Date();
        let previous3months = new Date(today.setDate(today.getDate() - 90));
        var today3 = previous3months.toISOString().slice(0, 10);
        var m31 = today3.split("-");
        var m3 = monthName(m31[1]);
        
        var today = new Date();
        let previous2months = new Date(today.setDate(today.getDate() - 60))
        var today2 = previous2months.toISOString().slice(0, 10);
        var m21 = today2.split("-");
        var m2 = monthName(m21[1]);
        
        var today = new Date();
        let previous1months = new Date(today.setDate(today.getDate() - 30))
        var today1 = previous1months.toISOString().slice(0, 10);
        var m11 = today1.split("-");
        var m1 = monthName(m11[1]);
        
        var currency = "USD";
        var from = 20000;
        var to = "NGN";
        
        
        //define urls
        var url1 = "https://api.exchangerate.host/"+today6+"?base=USD&symbols=USD,NGN&amount=20000";
        var url2 = "https://api.exchangerate.host/"+today5+"?base=USD&symbols=USD,NGN&amount=20000";
        var url3 = "https://api.exchangerate.host/"+today4+"?base=USD&symbols=USD,NGN&amount=20000";
        var url4 = "https://api.exchangerate.host/"+today3+"?base=USD&symbols=USD,NGN&amount=20000";
        var url5 = "https://api.exchangerate.host/"+today2+"?base=USD&symbols=USD,NGN&amount=20000";
        var url6 = "https://api.exchangerate.host/"+today1+"?base=USD&symbols=USD,NGN&amount=20000";
        var url7 = "https://api.exchangerate.host/convert?from="+currency+"&to="+to+"&amount="+from+"'";
		
		 //url for binance
var url8 = "https://api.binance.com/api/v3/ticker/price?symbol=USDTNGN";
        //url for central bank
var url9 ="https://api.allorigins.win/get?url=https://www.cbn.gov.ng/rates/outputExchangeRateJSN.asp";
    
        
        Promise.all([
            fetch(url1),fetch(url2),fetch(url3),fetch(url4),fetch(url5),fetch(url6),fetch(url7),fetch(url8),fetch(url9)
        ]).then(function(responses){
            return Promise.all(responses.map(function(response){
                return response.json();
            }));
        }).then(function(data){
       //    console.log(data);
      //     console.log("d1");
//console.log(data[8].data[0].sellingrate);
		

   //create a new array
   var all_data_20000 = data;
   
   //get timestamp

    var timestamp = Date.now()

    
    var addtime = {timestamp: timestamp };
    
    //add timestamp to data

    all_data_20000.push(addtime);
   
   //save data in ls
   localStorage.setItem("all_data_20000", JSON.stringify(all_data_20000));
    
		
//display sell rate 
var blrate = parseFloat(data[7].price);
//console.log(blrate);
var sellrate = blrate - 25;
		
var conbdispla = blrate * 20000;
var conbdisplay = conbdispla.toLocaleString();
//console.log(conbdisplay);
    
document.getElementById("selldollarsrate").innerHTML = sellrate;
	
 var n = data[6].result;
 var con2d = n.toLocaleString();
    
    //display main rate
     document.getElementById("con").innerHTML = con2d;
		
	   
 //display blackmarket rate
     document.getElementById("conb").innerHTML = conbdisplay;
	
	// cbn dsta manipulation	
const str = JSON.stringify(data[8]);
const [first, ...rest] = str.split('sellingrate');

//console.log(first); // ️ try
//console.log(rest); // ['again', 'later']

const str2 = rest;
const [first1, ...rest1] = str.split(','); 

//console.log(first1); // ️ try
//console.log(rest1[3]); // ['again', 'later']

var newt = rest1[3].replace("sellingrate","");

//console.log("yes:"+newt);

const str3 = newt;
const [first2, ...rest2] = newt.split(':'); 

//console.log(first2); // ️ try
//console.log(rest2[0]); // ['again', 'later']


const crate = rest2[0].slice(0, -1);

//console.log(crate);	

		
var concrate = parseFloat(crate)*20000;

var con2rated = concrate.toLocaleString();
	 //display cbn rate conversion
     document.getElementById("conc").innerHTML = con2rated;

    
    //display date
   // document.getElementById("dat").innerHTML = data[6].date;
   //   console.log(data[6]);
    //display rate
var numr = data[6].info.rate;
var rate2d = numr.toFixed(2);
    document.getElementById("rat").innerHTML = rate2d;

		
	 //display binance rate
    document.getElementById("ratb").innerHTML = blrate;	
		
    //display cbn rate
   document.getElementById("ratc").innerHTML = crate;
    

		
  // console.log(data[6].result);
 //  console.log(data[6].date);
    
    
    // plot the graph here
    
    const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [m6, m5, m4, m3, m4, m1],
        datasets: [{
            label: '20000 dollars to Naira exchange rate in the last 6 months',
            data: [data[0].rates.NGN, data[1].rates.NGN, data[2].rates.NGN, data[3].rates.NGN, data[4].rates.NGN, data[5].rates.NGN],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});
//}
    
      
    //end graph
    
  //display in dable
   document.getElementById("mm1").innerHTML = m6;
    document.getElementById("mm2").innerHTML = m5;
     document.getElementById("mm3").innerHTML = m4;
    document.getElementById("mm4").innerHTML = m3;
     document.getElementById("mm5").innerHTML = m2;
    document.getElementById("mm6").innerHTML = m1;
  
    
    document.getElementById("mr1").innerHTML = data[0].rates.NGN;
    document.getElementById("mr2").innerHTML = data[1].rates.NGN;
     document.getElementById("mr3").innerHTML = data[2].rates.NGN;
    document.getElementById("mr4").innerHTML = data[3].rates.NGN;
     document.getElementById("mr5").innerHTML = data[4].rates.NGN;
    document.getElementById("mr6").innerHTML = data[5].rates.NGN;
    
    
    }).catch(function(error){
            console.log(error);

});
        } close //load api
        
        
  
  
  
  
  
    function loadLS(){
        
        console.log("locading from LS");
        //get the data
        data = JSON.parse(localStorage.getItem("all_data_20000"));
        
         //define variables
        var today = new Date();
        
        let previous6months = new Date(today.setDate(today.getDate() - 180));
        var today6 = previous6months.toISOString().slice(0, 10);
        
        //display on home
        
        var m61 = today6.split("-");
        var m6 = monthName(m61[1]);
        //console.log(m);
        
        
        var today = new Date();
        let previous5months = new Date(today.setDate(today.getDate() - 150));
        var today5 = previous5months.toISOString().slice(0, 10);
        var m51 = today5.split("-");
        var m5 = monthName(m51[1]);
        
        var today = new Date();
        let previous4months = new Date(today.setDate(today.getDate() - 120));
        var today4 = previous4months.toISOString().slice(0, 10);
        var m41 = today4.split("-");
        var m4 = monthName(m41[1]);
        
        var today = new Date();
        let previous3months = new Date(today.setDate(today.getDate() - 90));
        var today3 = previous3months.toISOString().slice(0, 10);
        var m31 = today3.split("-");
        var m3 = monthName(m31[1]);
        
        var today = new Date();
        let previous2months = new Date(today.setDate(today.getDate() - 60))
        var today2 = previous2months.toISOString().slice(0, 10);
        var m21 = today2.split("-");
        var m2 = monthName(m21[1]);
        
        var today = new Date();
        let previous1months = new Date(today.setDate(today.getDate() - 30))
        var today1 = previous1months.toISOString().slice(0, 10);
        var m11 = today1.split("-");
        var m1 = monthName(m11[1]);
        
        var currency = "USD";
        var from = 20000;
        var to = "NGN";
         
	    
	    
	    
//display sell rate 
	var blrate = parseFloat(data[7].price);
	console.log(blrate);
    var sellrate = blrate - 25;
		
var conbdisplay = blrate * 20000;
console.log(conbdisplay);
    
	document.getElementById("selldollarsrate").innerHTML = format(sellrate);
	
      //display main rate
     document.getElementById("con").innerHTML = format(data[6].result);
		
	    //display blackmarket rate
     document.getElementById("conb").innerHTML = format(conbdisplay);
	 
	 //display cbn rate
     document.getElementById("conc").innerHTML = format(data[6].result);

    //display date
  //  document.getElementById("dat").innerHTML = data[6].date;
   //   console.log(data[6]);
    //display rate
    document.getElementById("rat").innerHTML = format(data[6].info.rate);
	
	 //display binance rate
    document.getElementById("ratb").innerHTML = format(blrate);
    
    //display cbn rate
    document.getElementById("ratc").innerHTML = format(data[8].info.rate);	    
	    
 
  // console.log(data[6].result);
 //  console.log(data[6].date);
    
    
    // plot the graph here
    
    const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [m6, m5, m4, m3, m4, m1],
        datasets: [{
            label: '20000 dollars to Naira exchange rate in the last 6 months',
            data: [data[0].rates.NGN, data[1].rates.NGN, data[2].rates.NGN, data[3].rates.NGN, data[4].rates.NGN, data[5].rates.NGN],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});
      
      
     //display in dable
   document.getElementById("mm1").innerHTML = m6;
    document.getElementById("mm2").innerHTML = m5;
     document.getElementById("mm3").innerHTML = m4;
    document.getElementById("mm4").innerHTML = m3;
     document.getElementById("mm5").innerHTML = m2;
    document.getElementById("mm6").innerHTML = m1;
  
    
    document.getElementById("mr1").innerHTML = data[0].rates.NGN;
    document.getElementById("mr2").innerHTML = data[1].rates.NGN;
     document.getElementById("mr3").innerHTML = data[2].rates.NGN;
    document.getElementById("mr4").innerHTML = data[3].rates.NGN;
     document.getElementById("mr5").innerHTML = data[4].rates.NGN;
    document.getElementById("mr6").innerHTML = data[5].rates.NGN;
     
      
      
        
    }
