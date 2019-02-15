function onLoad() {
  $('.main-container').on('click', function() {
    $('.main-container')
      .fadeOut('slow')
      .queue(() => {
        $('.main-container').css('visibility', 'hidden');
      });
    
  });
}
