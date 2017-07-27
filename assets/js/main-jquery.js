$(document).ready(function(){

  $(window).on('scroll', function(){

    /* -- Menu bg change on scroll -- */
    if ( $(window).scrollTop() > 50 ){
      $('nav').addClass('navbar-height');
    } else {
      $('nav').removeClass('navbar-height');
    }

    /* -- Services animation -- */
    if ( window.scrollY - (window.screen.height / 1.25) > $('.services-all').get(0).scrollTop ){
      $('.services-all')
        .removeClass('hide')
        .addClass('animated');
    }

  });

  /* -- Animate scroll -- */
  $('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000, 'swing');
    }
  });

  /* -- On click on map, scroll well active -- */
  $('.map-frame')
    .click(function(){
      $(this).find('iframe').addClass('clicked')})
    .mouseleave(function(){
      $(this).find('iframe').removeClass('clicked')});

});