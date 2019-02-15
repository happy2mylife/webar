function onLoad() {
  $('.start').on('click', function() {
    $('.main-container').remove();
    $('a-scene').css('z-index', 100);
  });

  $('.marker').addEventListener('markerFound', () => {
    $('.controller').fadeIn('slow', () => {
      $(this).css('z-index', 110);
    });
  });
}
