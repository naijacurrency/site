var tag = document.createElement("script");
tag.src = "../js/modal_load.js";
document.getElementsByTagName("body")[0].appendChild(tag);



var tmenu = '<a class="uk-navbar-brand" href="/index.html"><span class="customspan">NaijaCurrencyConverter</span></a><div class="uk-container uk-container-center"><ul class="uk-navbar-nav uk-hidden-small"><li><a href="../index.html">Welcome</a></li><li><a href="../aboutus.html">About Us</a></li><li><a href="../blog.html">Blog</a></li><li><a href="../#qc">Quick Calculators</a></li><li><a href="../contactus.html">Contact us</a></li></ul><a href="../#tm-offcanvas" class="uk-visible-small" data-uk-offcanvas=""><span><i class="fas fa-bars fa-lg" style="margin-top:12px"></i></span></a></div>';

var qcc = '<ul class="uk-grid custom-body" data-uk-grid-margin><li class="uk-width lwidht"><a href="../convert-500-dollars-to-naira.html">Convert 500 dollars to Naira</a></li><li class="uk-width lwidht"><a href="../convert-naira-to-dollar.html">Convert naira to dollar</a></li><li class="uk-width lwidht"><a href="../20000-dollars-to-naira.html">20000 dollars to naira</a></li><li class="uk-width lwidht"><a href="../200000-dollars-to-naira.html">200000 dollars to naira</a></li><li class="uk-width lwidht"><a href="../convert-500-dollars-to-naira.html">Convert 500 dollars to naira</a></li><li class="uk-width lwidht"><a href="../50-dollars-to-naira.html">50 dollars to naira</a></li><li class="uk-width lwidht"><a href="../5000-dollars-to-naira.html">5000 dollars to naira</a></li><li class="uk-width lwidht"><a href="../convert-2000-dollars-to-naira.html">Convert 2000 dollars to naira</a></li><li class="uk-width lwidht"><a href="../3000-dollars-to-naira.html">3000 dollars to naira</a></li><li class="uk-width lwidht"><a href="../canadian-dollar-to-naira.html">canadian dollar to naira</a></li><li class="uk-width lwidht"><a href="../convert-200-dollars-to-naira.html">Convert 200 dollars to naira</a></li><li class="uk-width lwidht"><a href="../1-euro-to-naira.html">1 euro to naira</a></li><li class="uk-width lwidht"><a href="../2000000-dollars-to-naira.html">2000000 dollars to naira</a></li><li class="uk-width lwidht"><a href="../convert-btc-to-usd.html">Convert btc to usd</a></li><li class="uk-width lwidht"><a href="../200000-naira-to-USD.html">200000 naira to USD</a></li><li class="uk-width lwidht"><a href="../1000-dollars-to-naira.html">1000 dollars to naira</a></li></ul>';

var calcu = "";

//var offers = '<table style="width:90%;max-width:600px"><tr><td style="padding:10px"><span style="color:blue; font-weight:bold; font-size:18px">How to buy Dollars, Pounds and any foreign Currency from Home FAST lower than Black market</span>.<br><span style="font-size:18px">Learn how to exchange currencies by yourself easily and safely </span> <br><a href=""><button id="myBtn">Instant Access</button></a></td></tr><div id="myModal" class="modal"><div class="modal-content"><iframe width="540" height="535" src="https://b5030a47.sibforms.com/serve/MUIFAIJ1d3n1KOv-zI-IjCEUHzj5tCSlu9RSXkKMR71yJND53_tiuwbIxIKA0SSWYDM5kZSYI_Oaf1156qiYBFFFMHm0OAnqU9Hl4wjPJllooCzLpkGuAuIbYOCf3t4P30mcguAaX3rSwWxA34bqwG7gvKZPLttHKrWPjX0K60aJrWamsrCisSDQEFiAhANnihn1W2TGdY8yCbzY" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe></div></div><tr> <td style="padding:10px"><span style="color:blue; font-weight:bold;">Open a Multicurrency Account - USD, GBP, EUR for FREE with a Debit card </span>.<br> Send money cheaper and easier than old-school banks, Use your card in more than 175 countries and withdraw money from 2.3 million ATMs. Tap or swipe anywhere — and use Google Pay and Apple Pay in supported countries. <br><a href="https://bit.ly/dollarstransfernow">Learn more</a></td> </tr></table>';

var offers = '';


var bmenu = '<ul class="uk-nav uk-nav-offcanvas" data-uk-nav="{ multiple: true }"><li class="uk-parent" aria-expanded="false"><a href="../#">Menu</a></li><li class="uk-nav-header"><a href="../index.html">Home</a></li><li class="uk-nav-header"><a href="../aboutus.html">About Us</li><li class="uk-nav-header"><a href="../#qc">Quick Calculators</a></li><li class="uk-nav-header"><a href="../contactus.html">Contact us</li><li class="uk-nav-header"><a href="../disclaimer.html">Data Disclaimer</a></li><li class="uk-nav-header"><a href="../privacy-policy.html">Privacy Policy</a></li></ul>';

var bottom_menu = '<div class="uk-container uk-container-center uk-text-center"><div class="uk-panel"><p class="custom-body"><a href="../index.html">Home</a> | <a href="../#qc">Quick Calculators </a> | <a href="../aboutus.html">About Us</a> | <a href="../contactus.html">Contact us </a> | <a href="../disclaimer.html">Data Disclaimer</a> | <a href="../privacy-policy.html">Privacy Policy </a><div class="row"><img src="../img/logo.webp" alt="NaijaCurrencyConverter Logo" style="left:0; right:0; width:50px; height:50px; margim-bottom:10px; margin-top:10px;"> </div><p>2022 @ NaijaCurrenCyconverter. A WIS Online Ent. Business.</p><p><a href="..//cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="dab2bfb6b6b59ab4bbb3b0bbb9afa8a8bfb4b9a3b9b5b4acbfa8aebfa8f4b9b5b7f4b4bd">[email&#160;protected]</a> | P.O. Box 200132, Ibadan, Nigeria </p><p style="color:grey">Made by YOOtheme with love and caffeine.<br class="uk-hidden-small">Licensed under MIT license.</p></div></div>';


document.addEventListener('DOMContentLoaded', function () {
	
	//load qcc
	document.getElementById("qccc").innerHTML = qcc;
	//load calcu
	//load menu
	document.getElementById("tmenuu").innerHTML = tmenu;
	//load bottom menu
	document.getElementById("bmenuu").innerHTML = bmenu;
	//load offers
	document.getElementById("ofr").innerHTML = offers;
	//load bottom menu
	document.getElementById("nf").innerHTML = bottom_menu;


	
		//add google analytics
	  var tag = document.createElement("script");
	  tag.src = "https://www.googletagmanager.com/gtag/js?id=G-XFZL8723RQ";
	  document.getElementsByTagName("head")[0].appendChild(tag);
	  
	  var tag = document.createElement("script");
	  tag.src = "../js/gascript.js";
	  document.getElementsByTagName("head")[0].appendChild(tag);
	  

	
});


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
  
  
