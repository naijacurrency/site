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
  
  var rate = parseFloat(response.result);
 
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


  resultinput.innerHTML = format(result / 1000);
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
    
    console.log("checking");

//check if all data exists in LS

if(localStorage.getItem("all_data_etn")){
    
    console.log("data found");
    //get it and check for timestamp
    var p_data = JSON.parse(localStorage.getItem("all_data_etn"));
 

   
    var p_timestamp = p_data[7].timestamp;
   
    
    //subtract the timestamps
    
    var n_timestamp = Date.now();

    
    var d_timestamp = (n_timestamp - p_timestamp)/1000/60/60;
    
  
    
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
        
        var currency = "EUR";
        var from = 1;
        var to = "NGN";
        
        
        //define urls
        var url1 = "https://api.exchangerate.host/"+today6+"?base=USD&symbols=EUR,NGN&amount=1";
        var url2 = "https://api.exchangerate.host/"+today5+"?base=USD&symbols=EUR,NGN&amount=1";
        var url3 = "https://api.exchangerate.host/"+today4+"?base=USD&symbols=EUR,NGN&amount=1";
        var url4 = "https://api.exchangerate.host/"+today3+"?base=USD&symbols=EUR,NGN&amount=1";
        var url5 = "https://api.exchangerate.host/"+today2+"?base=USD&symbols=EUR,NGN&amount=1";
        var url6 = "https://api.exchangerate.host/"+today1+"?base=USD&symbols=EUR,NGN&amount=1";
        var url7 = "https://api.exchangerate.host/convert?from="+currency+"&to="+to+"&amount="+from+"'";
        
        Promise.all([
            fetch(url1),fetch(url2),fetch(url3),fetch(url4),fetch(url5),fetch(url6),fetch(url7)
        ]).then(function(responses){
            return Promise.all(responses.map(function(response){
                return response.json();
            }));
        }).then(function(data){
           // console.log(data);
           
   //create a new array
   var all_data_etn = data;
   
   //get timestamp

    var timestamp = Date.now()

    
    var addtime = {timestamp: timestamp };
    
    //add timestamp to data

    all_data_etn.push(addtime);
   
   //save data in ls
   localStorage.setItem("all_data_etn", JSON.stringify(all_data_etn));
    
    //function for formating
    /*
    function format(n, sep, decimals) {
    sep = sep || "."; // Default to period as decimal separator
    decimals = decimals || 2; // Default to 2 decimals

    return n.toLocaleString().split(sep)[0]
        + sep
        + n.toFixed(decimals).split(sep)[1];
}

    */
    
    
    
    //display main rate
     document.getElementById("con").innerHTML = format(data[6].result);
    //display date
    document.getElementById("dat").innerHTML = data[6].date;
    
    //display rate
    document.getElementById("rat").innerHTML = format(data[6].result / 100);
    
  // console.log(data[6].result);
 //  console.log(data[6].date);
    
    
    // plot the graph here
    
    const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [m6, m5, m4, m3, m4, m1],
        datasets: [{
            label: '1 EURO to Naira exchange rate in the last 6 months',
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
        data = JSON.parse(localStorage.getItem("all_data_etn"));
        
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
        
        var currency = "EUR";
        var from = 1;
        var to = "NGN";
         
    //display main rate
     document.getElementById("con").innerHTML = format(data[6].result);
    //display date
    document.getElementById("dat").innerHTML = data[6].date;
    
    //display rate
    document.getElementById("rat").innerHTML = format(data[6].result / 100);
    
  // console.log(data[6].result);
 //  console.log(data[6].date);
    
    
    // plot the graph here
    
    const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [m6, m5, m4, m3, m4, m1],
        datasets: [{
            label: '1 EURO to Naira exchange rate in the last 6 months',
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
