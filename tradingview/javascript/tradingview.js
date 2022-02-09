// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.investagrams.com/Chart/PSE:*
// @icon         https://www.google.com/s2/favicons?domain=investagrams.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
     setInterval(function(){
         $("div[data-ng-controller=intrusiveShowmanUserControlController]").css("display", "none");
         $("div[data-ng-controller=popupAdsUserControlController]").css("display", "none");
         $("div.modal-backdrop").css("display", "none");
         console.log("hide ads");
     }, 2000);

})();

/* ================================================================= */

// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.investagrams.com/Stock/*
// @icon         https://www.google.com/s2/favicons?domain=investagrams.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

     setInterval(function(){
         $("div[data-ng-controller=intrusiveShowmanUserControlController]").css("display", "none");
         $("div[data-ng-controller=popupAdsUserControlController]").css("display", "none");
         $("div.modal-backdrop").css("display", "none");
         console.log("hide ads");
     }, 2000);

})();


/* ================================================================= */


/* Greasemonkey script */
 /* This script will hide the TradingView logo or any custom logo */
 setInterval(function() { 
   /* hide the logo */
     document.getElementsByTagName("iframe")[0].contentWindow.document.querySelector('div > .onchart-custom-logo').innerHTML="";
   /* hide the ads */  
   document.getElementById("toast-container").style.visibility="hidden";
 }, 1000);


/* hide investagram popup */
setInterval(function() {
 $("div[data-ng-controller=popupAdsUserControlController]").css("display", "none")
}, 1000);


