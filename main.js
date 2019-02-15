function onLoad() {
  const marker = document.getElementById('anchor');
  marker.addEventListener('markerFound', () => {});

  const carObj = document.getElementById('car-obj');
  carObj.addEventListener('click', () => {
    alert('touched.');
  });

  AFRAME.registerComponent('cursor-listener', {
    init: function() {
      this.el.addEventListener('click', function(evt) {
        alert(evt.detail.intersection.point);
      });
    }
  });
}
