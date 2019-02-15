function onLoad() {
  $('.main-container').on('click', function() {
    //    $(this).css('visibility', 'hidden');
    $(this).css('display', 'none');
    $(this).css('z-index', 0);
    $('a-scene').css('z-index', 999);
  });
}
