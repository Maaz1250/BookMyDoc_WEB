$(function(){
  // show navbar after scrolling 100px
  $(window).on('scroll', function(){
    if ($(this).scrollTop() > 100) {
      $('#navbar').fadeIn();
    } else {
      $('#navbar').fadeOut();
    }
  });

  // initialize carousel: 3s
  $('.carousel').carousel({
    interval: 3000
  });
});
