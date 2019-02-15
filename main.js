function onLoad() {
$(window).on('touchmove.noScroll', function(e) {
    e.preventDefault();
});  
  $('.start').on('click', function() {
    //    $(this).css('visibility', 'hidden');
    $('.main-container').remove();
    $('a-scene').css('z-index', 999);
  });
}
