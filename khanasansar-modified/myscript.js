$(document).ready(function(){
  $('.sidenav').sidenav();

  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });

  // for autoplay function
  setInterval(function(){
    $('.carousel.carousel-slider').carousel('next');
  }, 3000);

  $('#carousel-2').carousel();

  // for autoplay function
  setInterval(function(){
    $('#carousel-2').carousel('next');
  }, 3000);
    

  $('#carousel-3').carousel();

  $('input#text').characterCounter();

  $('input#textarea1').characterCounter();

});

