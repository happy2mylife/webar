function onLoad() {
  $('.start').on('click', function() {
    //    $(this).css('visibility', 'hidden');
    $('.main-container').remove();
    $('a-scene').css('z-index', 999);
  });
}
