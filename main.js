function onLoad() {
  const marker = document.getElementById('anchor');
  marker.addEventListener('markerFound', () => {});

  const carObj = document.querySelector('#car-obj');
  carObj.addEventListener('click', () => {
    alert('touched.');
  });
  carObj.addEventListener('touchend', () => {
    alert('touched.');
  });
}
