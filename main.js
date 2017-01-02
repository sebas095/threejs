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

  camera.position.z = 3;
  camera.position.y = 1;

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const groundMaterial = new THREE.MeshPhongMaterial({
    color: 0xffffff
  });

  const mesh = new THREE.Mesh(geometry, groundMaterial);
  const pointLight = new THREE.PointLight(0xdfebff);
  const ambientLight = new THREE.AmbientLight(0x404040);
  pointLight.position.y = 30;

  scene.add(mesh);
  scene.add(ambientLight);
  scene.add(pointLight);

  function loop() {
    requestAnimationFrame(loop);
    renderer.render(scene, camera);
  }

  loop();
})();
