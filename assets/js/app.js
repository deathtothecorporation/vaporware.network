/*
=====================
JS Table of Conttent 
=====================
01. Mobile Menu 


*/

(function ($) {
  "use strict";

 /*
  ------------------------  
  01. Mobile Menu 
  --------------------------
  */
  $(".mobile-toggle").on("click", function () {
    $(this).toggleClass("open");
    $(".toggle-menu-class").toggleClass("mobile-device-active");
  });
  $(".toggle").on("click", function () {
    if ($(this).text().includes("-")) {
      $(this).text("+")
    } else {
      $(this).text("-")
    }
    $(this).parent().siblings(".submenu").slideToggle();
  });
  
}(jQuery));



