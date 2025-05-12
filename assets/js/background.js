// Enhanced Cybersecurity 3D Spheres Background
document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('vanta-background');
  if (!container) return;

  // Scene setup
  const scene = new THREE.Scene();

  // Camera setup
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 30;

  // Renderer setup
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x030303, 1);
  container.appendChild(renderer.domElement);

  // Create spheres group
  const spheresGroup = new THREE.Group();
  scene.add(spheresGroup);

  // Create binary text particles
  const binaryGroup = new THREE.Group();
  scene.add(binaryGroup);

  // Create a canvas for binary text
  function createBinaryParticle() {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const context = canvas.getContext('2d');
    context.fillStyle = '#00ff00';
    context.font = '16px monospace';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(Math.random() > 0.5 ? '1' : '0', 32, 32);

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      opacity: Math.random() * 0.5 + 0.1
    });

    const sprite = new THREE.Sprite(material);
    sprite.scale.set(2, 2, 1);
    sprite.position.set(
      (Math.random() - 0.5) * 80,
      (Math.random() - 0.5) * 80,
      (Math.random() - 0.5) * 80
    );

    // Add random movement data
    sprite.userData = {
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.05,
        (Math.random() - 0.5) * 0.05,
        (Math.random() - 0.5) * 0.05
      ),
      lifespan: Math.random() * 200 + 100,
      age: 0
    };

    return sprite;
  }

  // Add binary particles
  for (let i = 0; i < 50; i++) {
    binaryGroup.add(createBinaryParticle());
  }

  // Create spheres
  const sphereCount = 60;
  const sphereGeometry = new THREE.SphereGeometry(0.5, 16, 16);

  for (let i = 0; i < sphereCount; i++) {
    const material = new THREE.MeshBasicMaterial({
      color: Math.random() < 0.7 ? 0x00ff00 : 0xff0000,
      wireframe: true
    });

    const sphere = new THREE.Mesh(sphereGeometry, material);

    // Random position
    sphere.position.x = (Math.random() - 0.5) * 60;
    sphere.position.y = (Math.random() - 0.5) * 60;
    sphere.position.z = (Math.random() - 0.5) * 60;

    // Store random rotation values
    sphere.userData.rotationSpeed = {
      x: (Math.random() - 0.5) * 0.01,
      y: (Math.random() - 0.5) * 0.01
    };

    spheresGroup.add(sphere);
  }

  // Add connecting lines
  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x00ff00,
    transparent: true,
    opacity: 0.3
  });

  function createConnections() {
    // Remove old lines
    spheresGroup.children.forEach(child => {
      if (child.isLine) spheresGroup.remove(child);
    });

    // Create new connections
    const spheres = spheresGroup.children.filter(child => child.isMesh);

    for (let i = 0; i < spheres.length; i++) {
      for (let j = i + 1; j < spheres.length; j++) {
        const distance = spheres[i].position.distanceTo(spheres[j].position);

        if (distance < 12) {
          const geometry = new THREE.BufferGeometry().setFromPoints([
            spheres[i].position,
            spheres[j].position
          ]);
          const line = new THREE.Line(geometry, lineMaterial);
          line.isLine = true;
          spheresGroup.add(line);
        }
      }
    }
  }

  // Update binary particles
  function updateBinaryParticles() {
    binaryGroup.children.forEach(particle => {
      // Update position based on velocity
      particle.position.add(particle.userData.velocity);

      // Update age
      particle.userData.age++;

      // If particle is too old, replace it
      if (particle.userData.age > particle.userData.lifespan) {
        binaryGroup.remove(particle);
        binaryGroup.add(createBinaryParticle());
      }
    });
  }

  // Animation
  function animate() {
    requestAnimationFrame(animate);

    // Rotate spheres
    spheresGroup.children.forEach(child => {
      if (child.isMesh) {
        child.rotation.x += child.userData.rotationSpeed.x;
        child.rotation.y += child.userData.rotationSpeed.y;
      }
    });

    // Update binary particles
    updateBinaryParticles();

    // Slowly rotate entire group
    spheresGroup.rotation.y += 0.001;

    // Update connections every 30 frames
    if (Math.floor(Math.random() * 30) === 0) {
      createConnections();
    }

    renderer.render(scene, camera);
  }

  // Handle window resize
  window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Start animation
  createConnections();
  animate();
});