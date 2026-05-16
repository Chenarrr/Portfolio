import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HeroCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        let W = canvas.clientWidth;
        let H = canvas.clientHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 200);
        camera.position.set(0, 0, 18);

        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        renderer.setSize(W, H, false);
        renderer.setClearColor(0x000000, 0);

        // Particles
        const COUNT = 420;
        const positions = new Float32Array(COUNT * 3);
        const colors = new Float32Array(COUNT * 3);
        const amber = new THREE.Color('#C9A84C');
        const soft = new THREE.Color('#5A5A6A');

        for (let i = 0; i < COUNT; i++) {
            positions[i * 3]     = (Math.random() - 0.5) * 44;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 28;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 22;
            const c = Math.random() < 0.28 ? amber : soft;
            colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
        }

        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const mat = new THREE.PointsMaterial({ size: 0.07, vertexColors: true, transparent: true, opacity: 0.65, sizeAttenuation: true });
        const points = new THREE.Points(geo, mat);
        scene.add(points);

        // Responsive ico placement — right side on desktop, less dominant on mobile
        const isWide = window.innerWidth >= 1024;
        const icoOpacity = isWide ? 0.20 : 0.10;
        const icoX = isWide ? 5 : 6;

        // Main icosahedron
        const icoGeo = new THREE.IcosahedronGeometry(2.6, 1);
        const icoMat = new THREE.MeshBasicMaterial({ color: '#C9A84C', wireframe: true, transparent: true, opacity: icoOpacity });
        const ico = new THREE.Mesh(icoGeo, icoMat);
        ico.position.set(icoX, 1, -1);
        scene.add(ico);

        // Second icosahedron — accent
        const ico2Geo = new THREE.IcosahedronGeometry(2.0, 1);
        const ico2Mat = new THREE.MeshBasicMaterial({ color: '#C9A84C', wireframe: true, transparent: true, opacity: 0.10 });
        const ico2 = new THREE.Mesh(ico2Geo, ico2Mat);
        ico2.position.set(-8, -3, -2);
        scene.add(ico2);

        // Mouse parallax
        let mx = 0, my = 0;
        let tx = 0, ty = 0;
        const onMouse = (e) => {
            mx = (e.clientX / window.innerWidth - 0.5) * 2;
            my = (e.clientY / window.innerHeight - 0.5) * 2;
        };
        window.addEventListener('mousemove', onMouse);

        const onResize = () => {
            W = canvas.clientWidth; H = canvas.clientHeight;
            camera.aspect = W / H;
            camera.updateProjectionMatrix();
            renderer.setSize(W, H, false);
        };
        window.addEventListener('resize', onResize);

        let rafId;
        const t0 = performance.now();

        const animate = () => {
            rafId = requestAnimationFrame(animate);
            const t = (performance.now() - t0) * 0.001;

            points.rotation.y = t * 0.022;
            points.rotation.x = t * 0.01;

            ico.rotation.y = t * 0.08;
            ico.rotation.x = t * 0.045;
            ico2.rotation.y = -t * 0.055;
            ico2.rotation.z = t * 0.03;

            // Snappy lerp — feel the mouse
            tx += (mx * 2.2 - tx) * 0.08;
            ty += (-my * 1.3 - ty) * 0.07;
            camera.position.x = tx;
            camera.position.y = ty;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
        };
        animate();

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener('mousemove', onMouse);
            window.removeEventListener('resize', onResize);
            geo.dispose(); mat.dispose();
            icoGeo.dispose(); icoMat.dispose();
            ico2Geo.dispose(); ico2Mat.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0, display: 'block' }}
        />
    );
};

export default HeroCanvas;
