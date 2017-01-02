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

  camera.position.z = 80;
  camera.position.y = 2;

  const planeGeometry = new THREE.PlaneGeometry(200, 900);
  planeGeometry.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI / 2));
  // const geometry = new THREE.BoxGeometry(10, 10, 10);
  const groundMaterial = new THREE.MeshPhongMaterial({
    color: 0x222222
  });
  const plane = new THREE.Mesh(planeGeometry, groundMaterial);

  let mesh;
  const loader = new THREE.TextureLoader();
  loader.load('img/texture.jpg', function(texture) {
    // SphereGeometry (esferas) => radio,segmentos ancho,segmentos alto,
    const geometry = new THREE.SphereGeometry(20, 100, 100);
    const material = new THREE.MeshBasicMaterial({map: texture});

    // Map nos permite definir una textura
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.y = 25;
    mesh.castShadow = true;

    scene.add(mesh);
  });

  const pointLight = new THREE.PointLight(0xdfebff);
  pointLight.position.y = 30;
  pointLight.position.z = 20;

  // scene.background = new THREE.Color(0xeeeeee);
  // scene.add(mesh);
  scene.add(plane);
  scene.add(pointLight);

  const controls = new THREE.OrbitControls(camera, renderer.domElement);

  function loop() {
    requestAnimationFrame(loop);
    mesh.rotation.y += 0.01;
    mesh.rotation.z += 0.02;
    renderer.render(scene, camera);
  }

  loop();
})();
