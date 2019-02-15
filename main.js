let isStarted = false;
function onLoad() {
  $('.start').on('click', function() {
    $('.main-container').remove();
    $('a-scene').css('z-index', 100);
    isStarted = true;
  });

  $('#marker')[0].addEventListener('markerFound', () => {
    // スタートボタン押す前も裏でカメラが動いていて検知しているため
    // スタート押されるまでは何もしない
    if (!isStarted) {
      return;
    }
    $('.controller').fadeIn('slow', () => {
      $('.controller').css('z-index', 110);
    });
  });
  $('#marker')[0].addEventListener('markerLost', () => {
    $('.controller').css('z-index', -50);
    $('.controller').css('display', 'none');
  });
}
