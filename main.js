function onLoad() {
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

  $('.main-container').on('click', function() {
    $('.main-container').fadeOut('slow');
  });
}
