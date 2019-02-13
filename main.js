function onLoad() {
  const marker = document.getElementById('anchor');
  marker.addEventListener('markerFound', () => {
    alert('found');
  });
}
