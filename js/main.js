(function () {
  // Escena => Donde se colocan los objetos
  // Cámara => Lo que se ve de la escena
  // Render => Construir los gráficos

  // Definimos la escena
  const scene = new THREE.Scene();
  let mesh = null;

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
  const groundMaterial = new THREE.MeshPhongMaterial({
    color: 0x222222
  });

  const plane = new THREE.Mesh(planeGeometry, groundMaterial);
  plane.receiveShadow = true;


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
  pointLight.position.y = 60;
  pointLight.position.z = 20;
  pointLight.castShadow = true;

  const helper = new THREE.CameraHelper(pointLight.shadow.camera);

  scene.background = new THREE.Color(0xeeeeee);
  scene.add(helper);
  scene.add(plane);
  scene.add(pointLight);

  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  // Configurando sombras
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.soft = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;

  function loop() {
    requestAnimationFrame(loop);
    mesh.rotation.y += 0.01;
    mesh.rotation.z += 0.02;
    renderer.render(scene, camera);
  }

  loop();
})();
