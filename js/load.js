var tmenu = '<a class="uk-navbar-brand" href="index.html"><span class="customspan">NaijaCurrencyConverter</span></a><div class="uk-container uk-container-center"><ul class="uk-navbar-nav uk-hidden-small"><li><a href="index.html">Welcome</a></li><li><a href="aboutus.html">About Us</a></li><li><a href="#qc">Quick Calculators</a></li><li><a href="contactus.html">Contact us</a></li></ul><a href="#tm-offcanvas" class="uk-visible-small" data-uk-offcanvas=""><span><i class="fas fa-bars fa-lg" style="margin-top:12px"></i></span></a></div>';

var qcc = '<ul class="uk-grid custom-body" data-uk-grid-margin><li class="uk-width lwidht"><a href="convert-naira-to-dollar.html">Convert naira to dollar</a></li><li class="uk-width lwidht"><a href="20000-dollars-to-naira.html">20000 dollars to naira</a></li><li class="uk-width lwidht"><a href="200000-dollars-to-naira.html">200000 dollars to naira</a></li><li class="uk-width lwidht"><a href="convert-500-dollars-to-naira.html">Convert 500 dollars to naira</a></li><li class="uk-width lwidht"><a href="50-dollars-to-naira.html">50 dollars to naira</a></li><li class="uk-width lwidht"><a href="5000-dollars-to-naira.html">5000 dollars to naira</a></li><li class="uk-width lwidht"><a href="convert-2000-dollars-to-naira.html">Convert 2000 dollars to naira</a></li><li class="uk-width lwidht"><a href="3000-dollars-to-naira.html">3000 dollars to naira</a></li><li class="uk-width lwidht"><a href="canadian-dollar-to-naira.html">canadian dollar to naira</a></li><li class="uk-width lwidht"><a href="convert-200-dollars-to-naira.html">Convert 200 dollars to naira</a></li><li class="uk-width lwidht"><a href="1-euro-to-naira.html">1 euro to naira</a></li><li class="uk-width lwidht"><a href="2000000-dollars-to-naira.html">2000000 dollars to naira</a></li><li class="uk-width lwidht"><a href="convert-btc-to-usd.html">Convert btc to usd</a></li><li class="uk-width lwidht"><a href="200000-naira-to-USD.html">200000 naira to USD</a></li></ul>';

var calcu = "";

var bmenu = '<ul class="uk-nav uk-nav-offcanvas" data-uk-nav="{ multiple: true }"><li class="uk-parent" aria-expanded="false"><a href="#">Menu</a></li><li class="uk-nav-header"><a href="index.html">Home</a></li><li class="uk-nav-header"><a href="aboutus.html">About Us</li><li class="uk-nav-header"><a href="#qc">Quick Calculators</a></li><li class="uk-nav-header"><a href="contactus.html">Contact us</li><li class="uk-nav-header"><a href="disclaimer.html">Data Disclaimer</a></li><li class="uk-nav-header"><a href="privacy-policy.html">Privacy Policy</a></li></ul>';

document.addEventListener('DOMContentLoaded', function () {
	
	//load qcc
	document.getElementById("qccc").innerHTML = qcc;
	//load calcu
	//load menu
	document.getElementById("tmenuu").innerHTML = tmenu;
	//load bottom menu
	document.getElementById("bmenuu").innerHTML = bmenu;
	
});
