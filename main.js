(function () {
  // Escena => Donde se colocan los objetos
  // Cámara => Lo que se ve de la escena
  // Render => Construir los gráficos

  // Definimos la escena
  const scene = new THREE.Scene();

  // Definimos la cámara
  const aspectRatio = window.innerWidth / window.innerHeight;
  const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);

  // Definir el render
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  camera.position.z = 25;
  camera.position.y = 1;

  const geometry = new THREE.BoxGeometry(10, 10, 10);
  const groundMaterial = new THREE.MeshPhongMaterial({
    color: 0xffffff
  });

  const mesh = new THREE.Mesh(geometry, groundMaterial);
  const pointLight = new THREE.PointLight(0xdfebff);
  pointLight.position.y = 30;
  pointLight.position.z = 20;

  scene.background = new THREE.Color(0xeeeeee);
  scene.add(mesh);
  scene.add(pointLight);

  function loop() {
    requestAnimationFrame(loop);
    mesh.rotation.y += 0.01;
    mesh.rotation.z += 0.02;
    renderer.render(scene, camera);
  }

  loop();
})();
