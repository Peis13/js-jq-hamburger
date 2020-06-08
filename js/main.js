// Creare un hamburger menu con l’utilizzo di
// Html, Css e JavaScript.

// INPUT
var hamburgerOpen = $('.header-right > a');
var hamburgerClose = $('.hamburger-menu > a');

// LOGICA
// Aggiungendo e togliendo la classe active
hamburgerOpen.click(
  function() {

    // OUTPUT
    var hamburgerMenu = $('.hamburger-menu');
    hamburgerMenu.addClass('active');
  }
)

hamburgerClose.click(
  function() {

    // OUTPUT
    var hamburgerMenu = $('.hamburger-menu');
    hamburgerMenu.removeClass('active');
  }
)

// Applicando le funzioni show e hide
// hamburgerOpen.click(
//   function() {
//
//     // OUTPUT
//     var hamburgerMenu = $('.hamburger-menu');
//     hamburgerMenu.show(1000);
//   }
// )
//
// hamburgerClose.click(
//   function() {
//
//     // OUTPUT
//     var hamburgerMenu = $('.hamburger-menu');
//     hamburgerMenu.hide(1000);
//   }
// )
