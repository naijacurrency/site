//var tmenu = '<a class="uk-navbar-brand" href="index.html"><span class="customspan">NaijaCurrencyConverter</span></a><div class="uk-container uk-container-center"><ul class="uk-navbar-nav uk-hidden-small"><li><a href="index.html">Welcome</a></li><li><a href="aboutus.html">About Us</a></li><li><a href="blog.html">Blog</a></li><li><a href="#qc">Quick Calculators</a></li><li><a href="contactus.html">Contact us</a></li></ul><a href="#tm-offcanvas" class="uk-visible-small" data-uk-offcanvas=""><span><i class="fas fa-bars fa-lg" style="margin-top:12px"></i></span></a></div>';

var tmenu  = '<a class="uk-navbar-item uk-logo" href="index.html">NaijaCurrencyConverter</a><ul class="uk-navbar-nav uk-visible@s"><li><a href="index.html">Welcome</a></li><li><a href="aboutus.html">About Us</a></li><li><a href="blog.html">Blog</a></li><li><a href="#qc">Quick Calculators</a></li><li><a href="contactus.html">Contact Us</a></li></ul></div><div class="uk-navbar-right"><a class="uk-navbar-toggle uk-hidden@s" href="#offcanvas-nav" uk-toggle><span uk-navbar-toggle-icon></span><span class="uk-margin-small-left">Menu</span></a></div>';

var qcc = '<ul class="uk-grid custom-body" data-uk-grid-margin><li class="uk-width lwidht"><a href="convert-naira-to-dollar.html">Convert naira to dollar</a></li><li class="uk-width lwidht"><a href="20000-dollars-to-naira.html">20000 dollars to naira</a></li><li class="uk-width lwidht"><a href="100-dollars-in-pounds.html">100 dollars in pounds</a></li><li class="uk-width lwidht"><a href="200000-dollars-to-naira.html">200000 dollars to naira</a></li><li class="uk-width lwidht"><a href="convert-500-dollars-to-naira.html">Convert 500 dollars to naira</a></li><li class="uk-width lwidht"><a href="50-dollars-to-naira.html">50 dollars to naira</a></li><li class="uk-width lwidht"><a href="5000-dollars-to-naira.html">5000 dollars to naira</a></li><li class="uk-width lwidht"><a href="convert-2000-dollars-to-naira.html">Convert 2000 dollars to naira</a></li><li class="uk-width lwidht"><a href="3000-dollars-to-naira.html">3000 dollars to naira</a></li><li class="uk-width lwidht"><a href="canadian-dollar-to-naira.html">canadian dollar to naira</a></li><li class="uk-width lwidht"><a href="convert-200-dollars-to-naira.html">Convert 200 dollars to naira</a></li><li class="uk-width lwidht"><a href="1-euro-to-naira.html">1 euro to naira</a></li><li class="uk-width lwidht"><a href="2000000-dollars-to-naira.html">2000000 dollars to naira</a></li><li class="uk-width lwidht"><a href="convert-btc-to-usd.html">Convert btc to usd</a></li><li class="uk-width lwidht"><a href="200000-naira-to-USD.html">200000 naira to USD</a></li><li class="uk-width lwidht"><a href="1000-dollars-to-naira.html">1000 dollars to naira</a></li></ul>';

var calcu = "";

var offers = '<table style="width:90%;max-width:600px"><tr><tr><td><figure class="image"><a href="https://s3.amazonaws.com/cdn.naijacurrencyconverter.com.ng/bmtracker-release/app-release.apk"><img style="aspect-ratio:810/450;" src="img/Track-BlackMarket.webp" loading="lazy" width="100%" height=100% alt="black-market-exchange-rate-tracker"></a></figure></td></tr><tr><td style="padding:10px"><span style="color:blue; font-weight:bold;">Open a Multicurrency Account - USD, GBP, EUR for FREE with a Debit card </span>.<br> Send money cheaper and easier than old-school banks, Use your card in more than 175 countries and withdraw money from 2.3 million ATMs. Tap or swipe anywhere — and use Google Pay and Apple Pay in supported countries. <br><a href="https://bit.ly/dollarstransfernow">See how to open an account</a></td> </tr></table>';


var bmenu = '<ul class="uk-nav uk-nav-offcanvas" data-uk-nav="{ multiple: true }"><li class="uk-parent" aria-expanded="false"><a href="#">Menu</a></li><li class="uk-nav-header"><a href="index.html">Home</a></li><li class="uk-nav-header"><a href="aboutus.html">About Us</li><li class="uk-nav-header"><a href="#qc">Quick Calculators</a></li><li class="uk-nav-header"><a href="contactus.html">Contact us</li><li class="uk-nav-header"><a href="disclaimer.html">Data Disclaimer</a></li><li class="uk-nav-header"><a href="privacy-policy.html">Privacy Policy</a></li></ul>';

var bottom_menu = '<div class="uk-container uk-container-center uk-text-center"><div class="uk-panel"><p class="custom-body"><a href="index.html">Home</a> | <a href="#qc">Quick Calculators </a> | <a href="aboutus.html">About Us</a> | <a href="contactus.html">Contact us </a> | <a href="disclaimer.html">Data Disclaimer</a> | <a href="privacy-policy.html">Privacy Policy </a><div class="row"><img src="img/logo.webp" loading="lazy" alt="NaijaCurrencyConverter Logo" style="left:0; right:0; width:50px; height:50px; margim-bottom:10px; margin-top:10px;"> </div><p>2022 @ NaijaCurrenCyconverter. A WIS Online Ent. Business.</p><p><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="dab2bfb6b6b59ab4bbb3b0bbb9afa8a8bfb4b9a3b9b5b4acbfa8aebfa8f4b9b5b7f4b4bd">[email&#160;protected]</a> | P.O. Box 200132, Ibadan, Nigeria </p><p style="color:grey">Made by YOOtheme with love and caffeine.<br class="uk-hidden-small">Licensed under MIT license.</p></div></div>';


document.addEventListener('DOMContentLoaded', function () {
    // Load the menu
    var tmenuElement = document.getElementById("tmenuu");
    if (tmenuElement) {
        tmenuElement.innerHTML = tmenu;
    }

    // Load Quick Calculators (qcc)
    var qccElement = document.getElementById("qccc");
    if (qccElement) {
        qccElement.innerHTML = qcc;
    }

    // Load the bottom menu
    var bmenuElement = document.getElementById("bmenuu");
    if (bmenuElement) {
        bmenuElement.innerHTML = bmenu;
    }

    // Load offers if the element exists
    var offersElement = document.getElementById("ofr");
    if (offersElement) {
        offersElement.innerHTML = offers;
    }

    // Load the bottom footer menu
    var bottomMenuElement = document.getElementById("nf");
    if (bottomMenuElement) {
        bottomMenuElement.innerHTML = bottom_menu;
    }

    // Append Google Tag Manager noscript iframe
    var noscript = document.createElement('noscript');
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', "https://www.googletagmanager.com/ns.html?id=GTM-KK65QMMQ");
    iframe.setAttribute("height", "0");
    iframe.setAttribute("width", "0");
    iframe.setAttribute("style", "display:none;visibility:hidden");
    noscript.appendChild(iframe);
    document.body.appendChild(noscript);

    // Optionally load modal_load.js script if needed
    // var tag = document.createElement("script");
    // tag.src = "js/modal_load.js";
    // document.getElementsByTagName("body")[0].appendChild(tag);
});
