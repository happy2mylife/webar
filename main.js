function onLoad() {
  const carObj = document.querySelector('#id-car-obj');
  carObj.addEventListener('click', () => {
    alert('touched.');
  });
  carObj.addEventListener('touchend', () => {
    alert('touched.');
  });

  const marker = document.getElementById('anchor');
  marker.addEventListener('markerFound', () => {
    const rect = carObj.getBoundingClientRect();
    alert(`${rect.top} : ${rect.left} : ${rect.bottom} ; ${rect.right}`);
  });
}
