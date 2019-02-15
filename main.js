function onLoad() {
  $('.start').on('click', function() {
    $('.main-container').remove();
    $('a-scene').css('z-index', 100);
  });

  $('.marker').addEventListener('markerFound', () => {
    $('.controller')
      .fadeIn(2000)
      .queue(() => {
        $(this).css('z-index', 110);
      });
  });
}
