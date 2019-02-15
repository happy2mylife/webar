function onLoad() {
  $('.start').on('click', function() {
    $('.main-container').remove();
    $('a-scene').css('z-index', 100);
  });

  $('#marker')[0].addEventListener('markerFound', () => {
    $('.controller').fadeIn('slow', () => {
      $(this).css('z-index', 110);
    });
  });
}
