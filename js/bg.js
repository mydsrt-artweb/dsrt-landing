import * as THREE from 'three';

export function initBackground() {
  const canvas = document.getElementById('bg');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha:true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
  const material = new THREE.MeshStandardMaterial({ color: 0x6366f1, wireframe:true });
  const torusKnot = new THREE.Mesh(geometry, material);
  scene.add(torusKnot);

  const light = new THREE.PointLight(0xffffff, 1);
  light.position.set(20,20,20);
  scene.add(light);

  camera.position.z = 50;

  function animate() {
    requestAnimationFrame(animate);
    torusKnot.rotation.x += 0.003;
    torusKnot.rotation.y += 0.003;
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}
