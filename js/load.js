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
