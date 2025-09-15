// app/page.js
'use client';
import { useEffect } from 'react';
import * as THREE from 'three';
import Link from 'next/link';

export default function Landing() {
  useEffect(() => {
    const canvas = document.getElementById('bg');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    const material = new THREE.MeshStandardMaterial({ color: 0x6366f1, wireframe: true });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(20, 20, 20);
    scene.add(pointLight);

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
  }, []);

  return (
    <div className="relative min-h-screen">
      <canvas id="bg" className="fixed top-0 left-0 w-full h-full z-[-1]"></canvas>

      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">DSRT</h1>
        <p className="text-xl md:text-2xl mb-8">Digital Smart Revise Technology</p>
        <p className="text-gray-300 max-w-3xl text-center text-lg md:text-xl leading-relaxed mb-8">
          DSRT is a cutting-edge digital platform designed to revolutionize learning, revision, and workflow optimization.
        </p>
        <Link href="#features">
          <a className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full shadow-lg transition">Get Started</a>
        </Link>
      </section>
    </div>
  )
    }
