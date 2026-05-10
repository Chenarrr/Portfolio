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

        const renderer = new THREE.WebGLRenderer({
            canvas,
            alpha: true,
            antialias: false,
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        renderer.setSize(W, H, false);
        renderer.setClearColor(0x000000, 0);

        // --- Particles ---
        const COUNT = 340;
        const positions = new Float32Array(COUNT * 3);
        const colors = new Float32Array(COUNT * 3);
        const amber = new THREE.Color('#C9A84C');
        const soft = new THREE.Color('#8A8A8A');

        for (let i = 0; i < COUNT; i++) {
            positions[i * 3]     = (Math.random() - 0.5) * 40;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 26;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

            const c = Math.random() < 0.32 ? amber : soft;
            colors[i * 3]     = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;
        }

        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const mat = new THREE.PointsMaterial({
            size: 0.07,
            vertexColors: true,
            transparent: true,
            opacity: 0.65,
            sizeAttenuation: true,
        });

        const points = new THREE.Points(geo, mat);
        scene.add(points);

        // --- Faint wireframe icosahedron ---
        const icoGeo = new THREE.IcosahedronGeometry(4.5, 1);
        const icoMat = new THREE.MeshBasicMaterial({
            color: '#C9A84C',
            wireframe: true,
            transparent: true,
            opacity: 0.14,
        });
        const ico = new THREE.Mesh(icoGeo, icoMat);
        ico.position.set(6, 0, -2);
        scene.add(ico);

        // Second faint icosahedron behind text area
        const ico2Geo = new THREE.IcosahedronGeometry(3.2, 1);
        const ico2Mat = new THREE.MeshBasicMaterial({
            color: '#C9A84C',
            wireframe: true,
            transparent: true,
            opacity: 0.05,
        });
        const ico2 = new THREE.Mesh(ico2Geo, ico2Mat);
        ico2.position.set(-5, 1, -4);
        scene.add(ico2);

        // --- Mouse parallax ---
        let mx = 0, my = 0;
        const onMouse = (e) => {
            mx = (e.clientX / window.innerWidth - 0.5) * 2;
            my = (e.clientY / window.innerHeight - 0.5) * 2;
        };
        window.addEventListener('mousemove', onMouse);

        // --- Resize ---
        const onResize = () => {
            W = canvas.clientWidth;
            H = canvas.clientHeight;
            camera.aspect = W / H;
            camera.updateProjectionMatrix();
            renderer.setSize(W, H, false);
        };
        window.addEventListener('resize', onResize);

        // --- Animation ---
        let rafId;
        const t0 = performance.now();

        const animate = () => {
            rafId = requestAnimationFrame(animate);
            const t = (performance.now() - t0) * 0.001;

            points.rotation.y = t * 0.025;
            points.rotation.x = t * 0.012;

            ico.rotation.y = t * 0.07;
            ico.rotation.x = t * 0.04;
            ico2.rotation.y = -t * 0.05;
            ico2.rotation.z = t * 0.03;

            camera.position.x += (mx * 1.2 - camera.position.x) * 0.028;
            camera.position.y += (-my * 0.7 - camera.position.y) * 0.028;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
        };
        animate();

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener('mousemove', onMouse);
            window.removeEventListener('resize', onResize);
            geo.dispose();
            mat.dispose();
            icoGeo.dispose();
            icoMat.dispose();
            ico2Geo.dispose();
            ico2Mat.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                display: 'block',
            }}
        />
    );
};

export default HeroCanvas;
