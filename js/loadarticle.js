var tmenu = '<a class="uk-navbar-brand" href="../index.html"><span class="customspan">NaijaCurrencyConverter</span></a><div class="uk-container uk-container-center"><ul class="uk-navbar-nav uk-hidden-small"><li><a href="../index.html">Welcome</a></li><li><a href="../aboutus.html">About Us</a></li><li><a href="../#qc">Quick Calculators</a></li><li><a href="../contactus.html">Contact us</a></li></ul><a href="../#tm-offcanvas" class="uk-visible-small" data-uk-offcanvas=""><span><i class="fas fa-bars fa-lg" style="margin-top:12px"></i></span></a></div>';

var qcc = '<ul class="uk-grid custom-body" data-uk-grid-margin><li class="uk-width lwidht"><a href="../convert-naira-to-dollar.html">Convert naira to dollar</a></li><li class="uk-width lwidht"><a href="../20000-dollars-to-naira.html">20000 dollars to naira</a></li><li class="uk-width lwidht"><a href="../200000-dollars-to-naira.html">200000 dollars to naira</a></li><li class="uk-width lwidht"><a href="../convert-500-dollars-to-naira.html">Convert 500 dollars to naira</a></li><li class="uk-width lwidht"><a href="../50-dollars-to-naira.html">50 dollars to naira</a></li><li class="uk-width lwidht"><a href="../5000-dollars-to-naira.html">5000 dollars to naira</a></li><li class="uk-width lwidht"><a href="../convert-2000-dollars-to-naira.html">Convert 2000 dollars to naira</a></li><li class="uk-width lwidht"><a href="../3000-dollars-to-naira.html">3000 dollars to naira</a></li><li class="uk-width lwidht"><a href="../canadian-dollar-to-naira.html">canadian dollar to naira</a></li><li class="uk-width lwidht"><a href="../convert-200-dollars-to-naira.html">Convert 200 dollars to naira</a></li><li class="uk-width lwidht"><a href="../1-euro-to-naira.html">1 euro to naira</a></li><li class="uk-width lwidht"><a href="../2000000-dollars-to-naira.html">2000000 dollars to naira</a></li><li class="uk-width lwidht"><a href="../convert-btc-to-usd.html">Convert btc to usd</a></li><li class="uk-width lwidht"><a href="../200000-naira-to-USD.html">200000 naira to USD</a></li></ul>';

var calcu = "";

var offers = '<table style="width:90%;max-width:600px"><tr><td style="padding:10px"><span style="color:blue; font-weight:bold;">Pay USD, receive in Naira Bank account</span> <br> Payoneer, USD bank transfer, USD Cards payments accepted. <br><b><a href="https://wa.me/2348032367641?text=I%20am%20interested%20in%20exchanging%20Some%20dollars">Chat now to start</a></b></td></tr><tr><td style="padding:10px"><span style="color:blue; font-weight:bold;">Buy Pound Sterling with Naira</span>.<br> We give unbeliveable rates. Direct deposit into UK bank account only. Minimum 100GBP, Maximum 1000 GBP. 2 days maximum bank transfer time. Escrow services available.<br><b><a href="https://wa.me/2348032367641?text=I%20am%20interested%20in%20buying%20Some%20pounds">Chat now to start</a></b></td> </tr> <tr> <td style="padding:10px"><span style="color:blue; font-weight:bold;">Open a Multicurrency Account - USD, GBP, EUR for FREE with a Debit card </span>.<br> Send money cheaper and easier than old-school banks, Use your card in more than 175 countries and withdraw money from 2.3 million ATMs. Tap or swipe anywhere — and use Google Pay and Apple Pay in supported countries. <br><b><a href="https://bit.ly/dollarstransfernow">Learn more</a></b></td> </tr></table>';


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
	
});
