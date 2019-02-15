function onLoad() {
  $('.start').on('click', function() {
    $('.main-container').remove();
    $('a-scene').css('z-index', 100);
  });

  $('#marker')[0].addEventListener('markerFound', () => {
    $('.controller').fadeIn('slow', () => {
      $('.controller').css('z-index', 110);
    });
  });
  $('#marker')[0].addEventListener('markerLost', () => {
    $('.controller').css('z-index', -50);
    $('.controller').css('display', 'none');
  });
}
