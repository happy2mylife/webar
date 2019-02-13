function onLoad() {
  const marker = document.getElementById('anchor');
  marker.addEventListener('markerFound', () => {});

  const carObj = document.getElementById('car-obj');
  marker.addEventListener('click', () => {
    alert('touched.');
  });
}
