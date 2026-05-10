import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const WireframeShape = ({ width = 280, height = 280 }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
        camera.position.set(0, 0, 5);

        const renderer = new THREE.WebGLRenderer({
            canvas,
            alpha: true,
            antialias: true,
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(width, height, false);
        renderer.setClearColor(0x000000, 0);

        // Outer icosahedron — wireframe amber
        const outerGeo = new THREE.IcosahedronGeometry(1.7, 1);
        const outerMat = new THREE.MeshBasicMaterial({
            color: '#C9A84C',
            wireframe: true,
            transparent: true,
            opacity: 0.35,
        });
        const outer = new THREE.Mesh(outerGeo, outerMat);
        scene.add(outer);

        // Inner — solid dark with slight amber tint
        const innerGeo = new THREE.IcosahedronGeometry(1.1, 1);
        const innerMat = new THREE.MeshBasicMaterial({
            color: '#1A1508',
            wireframe: false,
            transparent: true,
            opacity: 0.9,
        });
        const inner = new THREE.Mesh(innerGeo, innerMat);
        scene.add(inner);

        // Tiny particles orbiting
        const pCount = 60;
        const pPos = new Float32Array(pCount * 3);
        for (let i = 0; i < pCount; i++) {
            const phi = Math.acos(2 * Math.random() - 1);
            const theta = Math.random() * Math.PI * 2;
            const r = 1.9 + Math.random() * 0.8;
            pPos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
            pPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            pPos[i * 3 + 2] = r * Math.cos(phi);
        }
        const pGeo = new THREE.BufferGeometry();
        pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
        const pMat = new THREE.PointsMaterial({
            color: '#C9A84C',
            size: 0.025,
            transparent: true,
            opacity: 0.6,
        });
        const particles = new THREE.Points(pGeo, pMat);
        scene.add(particles);

        let rafId;
        const t0 = performance.now();
        const animate = () => {
            rafId = requestAnimationFrame(animate);
            const t = (performance.now() - t0) * 0.001;
            outer.rotation.y = t * 0.28;
            outer.rotation.x = t * 0.16;
            inner.rotation.y = -t * 0.18;
            inner.rotation.z = t * 0.1;
            particles.rotation.y = t * 0.12;
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            cancelAnimationFrame(rafId);
            outerGeo.dispose(); outerMat.dispose();
            innerGeo.dispose(); innerMat.dispose();
            pGeo.dispose(); pMat.dispose();
            renderer.dispose();
        };
    }, [width, height]);

    return (
        <canvas
            ref={canvasRef}
            width={width}
            height={height}
            style={{ display: 'block', width, height }}
        />
    );
};

export default WireframeShape;
