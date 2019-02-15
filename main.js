function onLoad() {
  $('.main-container').on('click', function() {
    $('.main-container')
      .fadeOut('slow')
      .queue(() => {
        $('.main-container').css('display', 'hidden');
        $('a-scene').css('display', 'visible');
        const marker = document.getElementById('anchor');
        marker.addEventListener('markerFound', () => {
          const rect = carObj.getBoundingClientRect();
          alert(`${rect.top} : ${rect.left} : ${rect.bottom} ; ${rect.right}`);
        });
      });
  });
}
