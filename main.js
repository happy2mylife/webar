function onLoad() {
  $('.main-container').on('click', function() {
    $('.main-container')
      .fadeOut('slow')
      .queue(() => {
        $('.main-container').attr('display', 'hidden');
        $('a-scene').atrr('display', 'visible');

        const marker = document.getElementById('anchor');
        marker.addEventListener('click', () => {
          alert('click.');
        });
        marker.addEventListener('touchend', () => {
          alert('touched.');
        });
        marker.addEventListener('markerFound', () => {
          const rect = carObj.getBoundingClientRect();
          alert(`${rect.top} : ${rect.left} : ${rect.bottom} ; ${rect.right}`);
        });
      });
  });
}
