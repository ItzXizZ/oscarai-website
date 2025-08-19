// Three.js Scene Setup for 3D Model
class OscarAI3D {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.model = null;
        this.controls = null;
        this.animationId = null;
        this.trashItems = [];
        this.customColors = {
            binColor: 0x333333,
            accentColor: 0x22c55e,
            glowIntensity: 0.3
        };
        
        this.init();
        this.setupLighting();
        this.animate();
        this.setupInteractions();
        this.setupCustomization();
        this.setupTrashInteraction();
    }

    init() {
        const container = document.getElementById('three-container');
        if (!container) return;

        // Scene setup
        this.scene = new THREE.Scene();
        this.scene.background = null; // Transparent background

        // Camera setup
        this.camera = new THREE.PerspectiveCamera(
            75,
            container.clientWidth / container.clientHeight,
            0.1,
            1000
        );
        this.camera.position.set(0, 0, 5);

        // Renderer setup
        this.renderer = new THREE.WebGLRenderer({ 
            antialias: true, 
            alpha: true 
        });
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        container.appendChild(this.renderer.domElement);

        // Controls setup
        if (typeof THREE.OrbitControls !== 'undefined') {
            this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
            this.controls.enableDamping = true;
            this.controls.dampingFactor = 0.05;
            this.controls.autoRotate = true;
            this.controls.autoRotateSpeed = 2;
        }

        // Load 3D model (placeholder - replace with actual model)
        this.createPlaceholderModel();

        // Handle window resize
        window.addEventListener('resize', () => this.handleResize());
    }

    setupLighting() {
        // Ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        this.scene.add(ambientLight);

        // Directional light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(10, 10, 5);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 2048;
        directionalLight.shadow.mapSize.height = 2048;
        this.scene.add(directionalLight);

        // Point light for glow effect
        const pointLight = new THREE.PointLight(0x22c55e, 1, 100);
        pointLight.position.set(0, 0, 10);
        this.scene.add(pointLight);

        // Spotlight for dramatic effect
        const spotLight = new THREE.SpotLight(0x22c55e, 0.5, 100, Math.PI * 0.1, 0.25, 1);
        spotLight.position.set(0, 10, 0);
        spotLight.target.position.set(0, 0, 0);
        this.scene.add(spotLight);
        this.scene.add(spotLight.target);
    }

    createPlaceholderModel() {
        // Create a placeholder trash bin model
        const group = new THREE.Group();

        // Main cylinder (trash bin body)
        const cylinderGeometry = new THREE.CylinderGeometry(1.2, 1, 2.5, 32);
        const cylinderMaterial = new THREE.MeshPhongMaterial({
            color: this.customColors.binColor,
            shininess: 100,
            transparent: true,
            opacity: 0.9,
            emissive: new THREE.Color(this.customColors.accentColor),
            emissiveIntensity: this.customColors.glowIntensity * 0.1
        });
        const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
        cylinder.castShadow = true;
        cylinder.receiveShadow = true;
        cylinder.name = 'binBody';
        group.add(cylinder);

        // Lid
        const lidGeometry = new THREE.CylinderGeometry(1.3, 1.3, 0.2, 32);
        const lidMaterial = new THREE.MeshPhongMaterial({
            color: this.customColors.accentColor,
            shininess: 100,
            emissive: new THREE.Color(this.customColors.accentColor),
            emissiveIntensity: this.customColors.glowIntensity
        });
        const lid = new THREE.Mesh(lidGeometry, lidMaterial);
        lid.position.y = 1.35;
        lid.castShadow = true;
        lid.name = 'binLid';
        group.add(lid);

        // Handle
        const handleGeometry = new THREE.TorusGeometry(0.3, 0.05, 8, 16);
        const handleMaterial = new THREE.MeshPhongMaterial({
            color: 0x22c55e,
            shininess: 100
        });
        const handle = new THREE.Mesh(handleGeometry, handleMaterial);
        handle.position.set(0, 1.35, 0);
        handle.rotation.x = Math.PI / 2;
        group.add(handle);

        // AI indicator light
        const indicatorGeometry = new THREE.SphereGeometry(0.1, 16, 16);
        const indicatorMaterial = new THREE.MeshBasicMaterial({
            color: 0x22c55e,
            emissive: 0x22c55e,
            emissiveIntensity: 0.5
        });
        const indicator = new THREE.Mesh(indicatorGeometry, indicatorMaterial);
        indicator.position.set(0.8, 0.5, 0.8);
        group.add(indicator);

        // Add glow effect around the model
        const glowGeometry = new THREE.SphereGeometry(2, 32, 32);
        const glowMaterial = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                color: { value: new THREE.Color(0x22c55e) }
            },
            vertexShader: `
                varying vec3 vNormal;
                void main() {
                    vNormal = normalize(normalMatrix * normal);
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform float time;
                uniform vec3 color;
                varying vec3 vNormal;
                void main() {
                    float intensity = pow(0.7 - dot(vNormal, vec3(0, 0, 1.0)), 2.0);
                    float pulse = sin(time * 2.0) * 0.5 + 0.5;
                    gl_FragColor = vec4(color, intensity * 0.3 * pulse);
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        group.add(glow);

        this.model = group;
        this.scene.add(group);

        // Store references for animation
        this.lid = lid;
        this.indicator = indicator;
        this.glow = glow;
    }

    loadOBJModel(objUrl, mtlUrl = null) {
        // This function will load the actual OBJ model
        // Replace the placeholder when you have the real model file
        const objLoader = new THREE.OBJLoader();
        
        if (mtlUrl) {
            // Load materials first if available
            const mtlLoader = new THREE.MTLLoader();
            mtlLoader.load(
                mtlUrl,
                (materials) => {
                    materials.preload();
                    objLoader.setMaterials(materials);
                    this.loadOBJGeometry(objLoader, objUrl);
                },
                (progress) => {
                    console.log('Loading materials progress:', progress);
                },
                (error) => {
                    console.error('Error loading materials:', error);
                    // Load without materials
                    this.loadOBJGeometry(objLoader, objUrl);
                }
            );
        } else {
            // Load without materials
            this.loadOBJGeometry(objLoader, objUrl);
        }
    }

    loadOBJGeometry(loader, url) {
        loader.load(
            url,
            (object) => {
                // Remove placeholder model
                if (this.model) {
                    this.scene.remove(this.model);
                }
                
                this.model = object;
                this.model.scale.set(0.5, 0.5, 0.5); // OBJ models are often larger
                this.model.position.set(0, -1, 0);
                
                // Enable shadows and add materials
                this.model.traverse((child) => {
                    if (child.isMesh) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                        
                        // Add default material if none exists
                        if (!child.material) {
                            child.material = new THREE.MeshPhongMaterial({
                                color: 0x333333,
                                shininess: 100
                            });
                        }
                        
                        // Add glow effect to materials
                        if (child.material.color) {
                            child.material.emissive = new THREE.Color(0x22c55e);
                            child.material.emissiveIntensity = 0.1;
                        }
                    }
                });
                
                this.scene.add(this.model);
                console.log('OBJ model loaded successfully');
            },
            (progress) => {
                console.log('Loading OBJ progress:', progress);
            },
            (error) => {
                console.error('Error loading OBJ model:', error);
                console.log('Keeping placeholder model');
            }
        );
    }

    animate() {
        this.animationId = requestAnimationFrame(() => this.animate());

        const time = Date.now() * 0.001;

        // Animate the model
        if (this.model) {
            this.model.rotation.y += 0.005;
        }

        // Animate lid (breathing effect)
        if (this.lid) {
            this.lid.position.y = 1.35 + Math.sin(time * 2) * 0.05;
        }

        // Animate indicator light
        if (this.indicator) {
            this.indicator.material.emissiveIntensity = 0.5 + Math.sin(time * 4) * 0.3;
        }

        // Animate glow shader
        if (this.glow && this.glow.material.uniforms) {
            this.glow.material.uniforms.time.value = time;
        }

        // Update controls
        if (this.controls) {
            this.controls.update();
        }

        this.renderer.render(this.scene, this.camera);
    }

    setupInteractions() {
        const container = document.getElementById('three-container');
        if (!container) return;

        // Mouse interaction effects
        container.addEventListener('mouseenter', () => {
            if (this.controls) {
                this.controls.autoRotateSpeed = 5;
            }
        });

        container.addEventListener('mouseleave', () => {
            if (this.controls) {
                this.controls.autoRotateSpeed = 2;
            }
        });

        // Click interaction
        container.addEventListener('click', () => {
            this.playInteractionAnimation();
        });
    }

    playInteractionAnimation() {
        // Animate lid opening
        if (this.lid) {
            const startY = this.lid.position.y;
            const targetY = startY + 0.5;
            const duration = 1000;
            const startTime = Date.now();

            const animateLid = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic

                this.lid.position.y = startY + (targetY - startY) * easeProgress;

                if (progress < 0.5) {
                    requestAnimationFrame(animateLid);
                } else {
                    // Close the lid
                    const closeStartTime = Date.now();
                    const closeLid = () => {
                        const closeElapsed = Date.now() - closeStartTime;
                        const closeProgress = Math.min(closeElapsed / duration, 1);
                        const closeEaseProgress = 1 - Math.pow(1 - closeProgress, 3);

                        this.lid.position.y = targetY - (targetY - startY) * closeEaseProgress;

                        if (closeProgress < 1) {
                            requestAnimationFrame(closeLid);
                        }
                    };
                    setTimeout(closeLid, 500);
                }
            };

            animateLid();
        }
    }

    handleResize() {
        const container = document.getElementById('three-container');
        if (!container) return;

        const width = container.clientWidth;
        const height = container.clientHeight;

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    }

    setupCustomization() {
        // Color customization controls
        const binColorInput = document.getElementById('bin-color');
        const accentColorInput = document.getElementById('accent-color');
        const glowIntensityInput = document.getElementById('glow-intensity');

        if (binColorInput) {
            binColorInput.addEventListener('change', (e) => {
                this.customColors.binColor = parseInt(e.target.value.replace('#', '0x'));
                this.updateModelColors();
            });
        }

        if (accentColorInput) {
            accentColorInput.addEventListener('change', (e) => {
                this.customColors.accentColor = parseInt(e.target.value.replace('#', '0x'));
                this.updateModelColors();
            });
        }

        if (glowIntensityInput) {
            glowIntensityInput.addEventListener('input', (e) => {
                this.customColors.glowIntensity = parseFloat(e.target.value);
                this.updateModelColors();
            });
        }

        // Demo buttons
        const demoSortingBtn = document.getElementById('demo-sorting');
        const resetSceneBtn = document.getElementById('reset-scene');

        if (demoSortingBtn) {
            demoSortingBtn.addEventListener('click', () => {
                this.playDemoSorting();
            });
        }

        if (resetSceneBtn) {
            resetSceneBtn.addEventListener('click', () => {
                this.resetScene();
            });
        }
    }

    updateModelColors() {
        if (!this.model) return;

        this.model.traverse((child) => {
            if (child.isMesh) {
                if (child.name === 'binBody') {
                    child.material.color.setHex(this.customColors.binColor);
                    child.material.emissive.setHex(this.customColors.accentColor);
                    child.material.emissiveIntensity = this.customColors.glowIntensity * 0.1;
                } else if (child.name === 'binLid') {
                    child.material.color.setHex(this.customColors.accentColor);
                    child.material.emissive.setHex(this.customColors.accentColor);
                    child.material.emissiveIntensity = this.customColors.glowIntensity;
                }
            }
        });

        // Update glow shader
        if (this.glow && this.glow.material.uniforms) {
            this.glow.material.uniforms.color.value.setHex(this.customColors.accentColor);
        }
    }

    setupTrashInteraction() {
        const trashItems = document.querySelectorAll('.trash-item');
        const container = document.getElementById('three-container');
        
        if (!container) return;

        trashItems.forEach(item => {
            item.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', e.target.dataset.type);
                e.dataTransfer.effectAllowed = 'move';
            });
        });

        container.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
        });

        container.addEventListener('drop', (e) => {
            e.preventDefault();
            const trashType = e.dataTransfer.getData('text/plain');
            this.addTrashToScene(trashType, e.clientX, e.clientY);
        });

        // Also handle click to add trash
        container.addEventListener('click', (e) => {
            if (e.target === container || e.target === this.renderer.domElement) {
                this.addRandomTrash(e.clientX, e.clientY);
            }
        });
    }

    addTrashToScene(trashType, screenX, screenY) {
        const trashGeometry = this.getTrashGeometry(trashType);
        const trashMaterial = new THREE.MeshPhongMaterial({
            color: this.getTrashColor(trashType),
            shininess: 50,
            transparent: true,
            opacity: 0.9
        });

        const trashMesh = new THREE.Mesh(trashGeometry, trashMaterial);
        
        // Convert screen coordinates to 3D world coordinates
        const rect = this.renderer.domElement.getBoundingClientRect();
        const x = ((screenX - rect.left) / rect.width) * 2 - 1;
        const y = -((screenY - rect.top) / rect.height) * 2 + 1;

        const vector = new THREE.Vector3(x, y, 0.5);
        vector.unproject(this.camera);
        
        const dir = vector.sub(this.camera.position).normalize();
        const distance = -this.camera.position.z / dir.z;
        const pos = this.camera.position.clone().add(dir.multiplyScalar(distance));

        trashMesh.position.copy(pos);
        trashMesh.position.y += 3; // Start above the bin
        trashMesh.castShadow = true;
        trashMesh.userData = { type: trashType, falling: true };

        this.scene.add(trashMesh);
        this.trashItems.push(trashMesh);

        // Animate falling into bin
        this.animateTrashFall(trashMesh);
    }

    getTrashGeometry(type) {
        switch (type) {
            case 'plastic':
                return new THREE.CylinderGeometry(0.1, 0.15, 0.3, 8);
            case 'paper':
                return new THREE.BoxGeometry(0.2, 0.01, 0.3);
            case 'organic':
                return new THREE.SphereGeometry(0.1, 8, 8);
            case 'metal':
                return new THREE.CylinderGeometry(0.12, 0.12, 0.2, 16);
            case 'glass':
                return new THREE.CylinderGeometry(0.08, 0.12, 0.35, 8);
            default:
                return new THREE.BoxGeometry(0.15, 0.15, 0.15);
        }
    }

    getTrashColor(type) {
        switch (type) {
            case 'plastic': return 0x3b82f6; // Blue
            case 'paper': return 0xf59e0b;   // Yellow
            case 'organic': return 0x10b981; // Green
            case 'metal': return 0x6b7280;   // Gray
            case 'glass': return 0x06b6d4;   // Cyan
            default: return 0x8b5cf6;        // Purple
        }
    }

    animateTrashFall(trashMesh) {
        const startY = trashMesh.position.y;
        const targetY = 0; // Inside the bin
        const duration = 1000;
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease-in gravity effect
            const easeProgress = 1 - Math.pow(1 - progress, 2);
            
            trashMesh.position.y = startY - (startY - targetY) * easeProgress;
            trashMesh.rotation.x += 0.1;
            trashMesh.rotation.z += 0.05;

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                trashMesh.userData.falling = false;
                this.playAISortingAnimation(trashMesh);
            }
        };

        animate();
    }

    playAISortingAnimation(trashMesh) {
        // AI scanning effect
        const scanRing = new THREE.RingGeometry(0.5, 0.6, 32);
        const scanMaterial = new THREE.MeshBasicMaterial({
            color: this.customColors.accentColor,
            transparent: true,
            opacity: 0.8,
            side: THREE.DoubleSide
        });
        const scan = new THREE.Mesh(scanRing, scanMaterial);
        scan.position.copy(trashMesh.position);
        scan.rotation.x = -Math.PI / 2;
        this.scene.add(scan);

        // Animate scan
        let scanSize = 0.5;
        const scanAnimation = () => {
            scanSize += 0.05;
            scan.scale.set(scanSize, scanSize, 1);
            scan.material.opacity = Math.max(0, 0.8 - scanSize * 0.3);

            if (scanSize < 3) {
                requestAnimationFrame(scanAnimation);
            } else {
                this.scene.remove(scan);
                this.sortTrashItem(trashMesh);
            }
        };
        scanAnimation();
    }

    sortTrashItem(trashMesh) {
        // Create sorting effect - item glows and disappears
        const originalColor = trashMesh.material.color.clone();
        const glowColor = new THREE.Color(this.customColors.accentColor);
        
        let glowProgress = 0;
        const glowAnimation = () => {
            glowProgress += 0.05;
            trashMesh.material.color.lerpColors(originalColor, glowColor, Math.sin(glowProgress * 4) * 0.5 + 0.5);
            trashMesh.material.emissive.setHex(this.customColors.accentColor);
            trashMesh.material.emissiveIntensity = Math.sin(glowProgress * 6) * 0.5 + 0.3;

            if (glowProgress < 2) {
                requestAnimationFrame(glowAnimation);
            } else {
                // Remove the trash item
                this.scene.remove(trashMesh);
                this.trashItems = this.trashItems.filter(item => item !== trashMesh);
                
                // Show success message
                this.showSortingSuccess(trashMesh.userData.type);
            }
        };
        glowAnimation();
    }

    showSortingSuccess(trashType) {
        // Create floating text
        const messages = {
            plastic: 'Plastic Recycled! ♻️',
            paper: 'Paper Sorted! 📄',
            organic: 'Composted! 🌱',
            metal: 'Metal Recycled! 🔧',
            glass: 'Glass Sorted! ✨'
        };

        console.log(messages[trashType] || 'Item Sorted! ✅');
        
        // You could add DOM element for visual feedback here
        this.createFloatingMessage(messages[trashType] || 'Item Sorted! ✅');
    }

    createFloatingMessage(message) {
        const messageEl = document.createElement('div');
        messageEl.textContent = message;
        messageEl.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #22c55e, #16a34a);
            color: white;
            padding: 1rem 2rem;
            border-radius: 25px;
            font-weight: bold;
            font-size: 1.2rem;
            z-index: 1000;
            animation: fadeInOut 2s ease-out forwards;
            box-shadow: 0 10px 30px rgba(34, 197, 94, 0.3);
        `;

        document.body.appendChild(messageEl);

        setTimeout(() => {
            messageEl.remove();
        }, 2000);
    }

    addRandomTrash(screenX, screenY) {
        const trashTypes = ['plastic', 'paper', 'organic', 'metal', 'glass'];
        const randomType = trashTypes[Math.floor(Math.random() * trashTypes.length)];
        this.addTrashToScene(randomType, screenX, screenY);
    }

    playDemoSorting() {
        const trashTypes = ['plastic', 'paper', 'organic', 'metal', 'glass'];
        const container = document.getElementById('three-container');
        const rect = container.getBoundingClientRect();

        trashTypes.forEach((type, index) => {
            setTimeout(() => {
                const x = rect.left + rect.width * (0.2 + index * 0.15);
                const y = rect.top + rect.height * 0.3;
                this.addTrashToScene(type, x, y);
            }, index * 500);
        });
    }

    resetScene() {
        // Remove all trash items
        this.trashItems.forEach(item => {
            this.scene.remove(item);
        });
        this.trashItems = [];

        // Reset bin animation
        if (this.lid) {
            this.lid.position.y = 1.35;
            this.lid.rotation.set(0, 0, 0);
        }

        this.createFloatingMessage('Scene Reset! 🔄');
    }

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        
        if (this.renderer) {
            this.renderer.dispose();
        }
        
        window.removeEventListener('resize', this.handleResize);
    }
}

// Additional animations and interactions
class PageAnimations {
    constructor() {
        this.init();
        this.setupScrollAnimations();
        this.setupParticleEffects();
    }

    init() {
        // Add dynamic particles to floating particles container
        this.createFloatingParticles();
        
        // Setup intersection observer for scroll animations
        this.setupIntersectionObserver();
    }

    createFloatingParticles() {
        const containers = document.querySelectorAll('.floating-particles');
        
        containers.forEach(container => {
            for (let i = 0; i < 10; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.cssText = `
                    position: absolute;
                    width: ${Math.random() * 4 + 2}px;
                    height: ${Math.random() * 4 + 2}px;
                    background: #22c55e;
                    border-radius: 50%;
                    opacity: ${Math.random() * 0.5 + 0.3};
                    animation: float ${Math.random() * 3 + 2}s ease-in-out infinite;
                    animation-delay: ${Math.random() * 2}s;
                    top: ${Math.random() * 100}%;
                    left: ${Math.random() * 100}%;
                    pointer-events: none;
                `;
                container.appendChild(particle);
            }
        });
    }

    setupIntersectionObserver() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, options);

        // Observe elements for scroll animations
        document.querySelectorAll('.feature-card, .phone-mockup, .section-title').forEach(el => {
            observer.observe(el);
        });
    }

    setupScrollAnimations() {
        // Parallax effect for background shapes
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.shape');
            
            parallaxElements.forEach((element, index) => {
                const speed = (index + 1) * 0.1;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }

    setupParticleEffects() {
        // Mouse trail effect
        let mouseTrail = [];
        
        document.addEventListener('mousemove', (e) => {
            mouseTrail.push({
                x: e.clientX,
                y: e.clientY,
                time: Date.now()
            });
            
            // Keep only recent trail points
            mouseTrail = mouseTrail.filter(point => Date.now() - point.time < 1000);
            
            // Create trail particle occasionally
            if (Math.random() < 0.1) {
                this.createTrailParticle(e.clientX, e.clientY);
            }
        });
    }

    createTrailParticle(x, y) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 4px;
            height: 4px;
            background: #22c55e;
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            animation: fadeOut 1s ease-out forwards;
        `;
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
}

// TikTok-style interactions
class TikTokInteractions {
    constructor() {
        this.setupLikeButton();
        this.setupVideoPlayback();
        this.setupShareEffects();
    }

    setupLikeButton() {
        const likeButton = document.querySelector('.sidebar-item:first-child');
        if (!likeButton) return;

        likeButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.triggerLikeAnimation(likeButton);
        });
    }

    triggerLikeAnimation(button) {
        const icon = button.querySelector('.sidebar-icon');
        const count = button.querySelector('.sidebar-count');
        
        // Heart animation
        icon.style.animation = 'none';
        setTimeout(() => {
            icon.style.animation = 'bounce 0.6s ease-out';
        }, 10);
        
        // Count animation
        const currentCount = parseInt(count.textContent.replace('K', '')) * 1000;
        const newCount = currentCount + 1;
        const displayCount = newCount > 1000 ? (newCount / 1000).toFixed(1) + 'K' : newCount;
        
        count.textContent = displayCount;
        count.style.animation = 'pulse 0.3s ease-out';
        
        // Create floating hearts
        this.createFloatingHearts(button);
    }

    createFloatingHearts(button) {
        const rect = button.getBoundingClientRect();
        
        for (let i = 0; i < 5; i++) {
            const heart = document.createElement('div');
            heart.textContent = '❤️';
            heart.style.cssText = `
                position: fixed;
                left: ${rect.left + Math.random() * 40}px;
                top: ${rect.top}px;
                font-size: ${Math.random() * 10 + 15}px;
                pointer-events: none;
                z-index: 1000;
                animation: floatUp 2s ease-out forwards;
                animation-delay: ${i * 0.1}s;
            `;
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 2000);
        }
    }

    setupVideoPlayback() {
        const videoPlaceholder = document.querySelector('.video-placeholder');
        if (!videoPlaceholder) return;

        videoPlaceholder.addEventListener('click', () => {
            this.simulateVideoInteraction();
        });
    }

    simulateVideoInteraction() {
        const wasteItems = document.querySelectorAll('.waste-item');
        
        wasteItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.transform = 'scale(1.2) rotate(360deg)';
                item.style.transition = 'transform 0.5s ease-out';
                
                setTimeout(() => {
                    item.style.transform = 'scale(1) rotate(0deg)';
                }, 500);
            }, index * 200);
        });
    }

    setupShareEffects() {
        const shareButton = document.querySelector('.sidebar-item:nth-child(3)');
        if (!shareButton) return;

        shareButton.addEventListener('click', () => {
            this.triggerShareAnimation();
        });
    }

    triggerShareAnimation() {
        // Create share ripple effect
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: rgba(34, 197, 94, 0.3);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            animation: rippleExpand 1s ease-out forwards;
            pointer-events: none;
            z-index: 1000;
        `;
        
        document.body.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 1000);
    }
}

// Video handling
function setupVideoFallback() {
    const videos = document.querySelectorAll('.demo-video');
    
    videos.forEach(video => {
        const placeholder = video.parentElement.querySelector('.video-placeholder');
        
        video.addEventListener('loadeddata', () => {
            // Video loaded successfully
            if (placeholder) {
                placeholder.classList.remove('show');
            }
        });
        
        video.addEventListener('error', () => {
            // Video failed to load, show placeholder
            if (placeholder) {
                placeholder.classList.add('show');
            }
        });
        
        // Check if video is already loaded
        if (video.readyState >= 2) {
            if (placeholder) {
                placeholder.classList.remove('show');
            }
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize 3D scene
    const oscar3D = new OscarAI3D();
    
    // Initialize page animations
    const pageAnimations = new PageAnimations();
    
    // Initialize TikTok interactions
    const tiktokInteractions = new TikTokInteractions();
    
    // Setup video fallback
    setupVideoFallback();
    
    // Add custom CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeOut {
            from { opacity: 1; transform: scale(1); }
            to { opacity: 0; transform: scale(0); }
        }
        
        @keyframes floatUp {
            from { 
                opacity: 1; 
                transform: translateY(0px) scale(1); 
            }
            to { 
                opacity: 0; 
                transform: translateY(-100px) scale(0.5); 
            }
        }
        
        @keyframes rippleExpand {
            from { 
                width: 0; 
                height: 0; 
                opacity: 0.8; 
            }
            to { 
                width: 1000px; 
                height: 1000px; 
                opacity: 0; 
            }
        }
        
        .animate-in {
            animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .particle {
            will-change: transform;
        }
    `;
    document.head.appendChild(style);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add loading animation
    const loader = document.createElement('div');
    loader.innerHTML = `
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: white;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeOut 1s ease-out 2s forwards;
        ">
            <div style="
                text-align: center;
                color: #22c55e;
                font-size: 2rem;
                font-weight: bold;
            ">
                <div style="animation: bounce 1s infinite;">🤖</div>
                <div>Oscar AI Loading...</div>
            </div>
        </div>
    `;
    document.body.appendChild(loader);
    
    setTimeout(() => {
        loader.remove();
    }, 3000);
});

        // Export for potential model loading
window.OscarAI3D = OscarAI3D;

// Example usage for loading your OBJ model:
// const oscar3D = new OscarAI3D();
// oscar3D.loadOBJModel('oscar-ai-model.obj', 'oscar-ai-model.mtl'); // with materials
// OR
// oscar3D.loadOBJModel('oscar-ai-model.obj'); // without materials
