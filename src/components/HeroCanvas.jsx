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

        // Dreamy particle field — warm amber + warm cream, soft size attenuation
        const COUNT = 380;
        const positions = new Float32Array(COUNT * 3);
        const colors = new Float32Array(COUNT * 3);
        const amber = new THREE.Color('#C9A84C');
        const cream = new THREE.Color('#8A8170');

        for (let i = 0; i < COUNT; i++) {
            positions[i * 3]     = (Math.random() - 0.5) * 44;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 28;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 22;
            const c = Math.random() < 0.30 ? amber : cream;
            colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
        }

        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const mat = new THREE.PointsMaterial({
            size: 0.07,
            vertexColors: true,
            transparent: true,
            opacity: 0.55,
            sizeAttenuation: true,
        });
        const points = new THREE.Points(geo, mat);
        scene.add(points);

        // Single dreamy icosahedron — exact starting place the user loved
        const isWide = window.innerWidth >= 1024;
        const icoOpacity = isWide ? 0.11 : 0.08;
        const icoBaseX = isWide ? 10 : 5;
        const icoBaseY = 4;
        const icoBaseZ = -20;

        const icoGeo = new THREE.IcosahedronGeometry(11, 1);
        const icoMat = new THREE.MeshBasicMaterial({
            color: '#B5AC8A',
            wireframe: true,
            transparent: true,
            opacity: icoOpacity,
        });
        const ico = new THREE.Mesh(icoGeo, icoMat);
        ico.position.set(icoBaseX, icoBaseY, icoBaseZ);
        scene.add(ico);

        // Mouse tracking
        let mx = 0, my = 0;
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

        // Smooth lerp state — camera + mouse-driven rotation offsets
        let camTx = 0, camTy = 0;
        let rotOffsetY = 0, rotOffsetX = 0;

        const animate = () => {
            rafId = requestAnimationFrame(animate);
            const t = (performance.now() - t0) * 0.001;

            // Particles — slow meditative drift
            points.rotation.y = t * 0.018;
            points.rotation.x = t * 0.008;

            // Ico — auto-rotation continues + mouse-driven rotation OFFSET
            //   mouse moves right → ico rotates so right side faces you, etc.
            const targetRotY = mx * 0.7;
            const targetRotX = my * 0.45;
            rotOffsetY += (targetRotY - rotOffsetY) * 0.025;
            rotOffsetX += (targetRotX - rotOffsetX) * 0.025;

            ico.rotation.y = t * 0.06 + rotOffsetY;
            ico.rotation.x = t * 0.028 + rotOffsetX;

            // Gentle breath scale
            const breath = 1 + Math.sin(t * 0.4) * 0.025;
            ico.scale.set(breath, breath, breath);

            // Idle floating — ico stays near base, sine drift for "alive" feel
            ico.position.x = icoBaseX + Math.sin(t * 0.18) * 0.3;
            ico.position.y = icoBaseY + Math.cos(t * 0.23) * 0.25;

            // Subtle camera parallax — adds depth
            camTx += (mx * 0.8 - camTx) * 0.05;
            camTy += (-my * 0.5 - camTy) * 0.05;
            camera.position.x = camTx;
            camera.position.y = camTy;
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
