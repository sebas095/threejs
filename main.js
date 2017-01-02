(function () {
  // Escena => Donde se colocan los objetos
  // Cámara => Lo que se ve de la escena
  // Render => Construir los gráficos

  // Definimos la escena
  let scene = new THREE.Scene();

  // Definimos la cámara
  const aspectRatio = window.innerWidth / window.innerHeight;
  let camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);

  // Definir el render
  let renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  function loop() {
    requestAnimationFrame(loop);
    renderer.render(scene, camera);
  }

  loop();
})();
