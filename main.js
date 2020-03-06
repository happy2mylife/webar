let scene;
let camera;
let renderer;
let cube;
let objLoader;

function onLoad() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, +1000);


  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  var geometry = new THREE.CubeGeometry(1, 1, 1);
  var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  var light = new THREE.DirectionalLight(0xffffff);
  light.intensity = 2;
  light.position.set(1, 1, 1);

  cube = new THREE.Mesh(geometry, material);
  //  scene.add(cube);
  scene.add(light);
  camera.position.z = 5;

  const mtlLoader = new THREE.MTLLoader();
  mtlLoader.load('./obj/earth.mtl', (materials) => {
    materials.preload();

    const objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load('./obj/earth.obj', (meshes) => {
      meshes.children.forEach(function(mesh) {
        mesh.geometry.computeFaceNormals();
        mesh.geometry.computeVertexNormals();
      });
      meshes.scale.set(1, 1, 1);
      meshes.rotation.set(0, Math.PI, 0);
      meshes.position.set(0, 0, 0);
      scene.add(meshes);
      render();
      tick();
    });
  });



}

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}



function tick() {
  requestAnimationFrame(tick);
  cube.rotation.y += 0.01;
  cube.rotation.x += 0.01;
  renderer.render(scene, camera);
}