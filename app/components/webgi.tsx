"use client"

import { useEffect } from 'react';
import {
  ViewerApp, AssetManagerPlugin, GBufferPlugin, ProgressivePlugin,
  TonemapPlugin, SSRPlugin, SSAOPlugin, BloomPlugin, GammaCorrectionPlugin, 
  MeshBasicMaterial2, AssetImporter,
  mobileAndTabletCheck
} from 'webgi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { PerspectiveCamera, Color } from 'three';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const WebgiPage = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenis.stop();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    let needsUpdate = true; // Initialize needsUpdate here

    async function setupViewer() {
      const viewer = new ViewerApp({
        canvas: document.getElementById('webgi-canvas') as HTMLCanvasElement,
      });

      const isMobile = mobileAndTabletCheck();
      const manager = await viewer.addPlugin(AssetManagerPlugin);
      const camera = viewer.scene.activeCamera;
      const position = camera.position;
      const target = camera.target;
      const exitButton = document.querySelector('.button--exit') as HTMLElement;
      const customizerInterface = document.querySelector('.customizer--container') as HTMLElement;

      await viewer.addPlugin(GBufferPlugin);
      await viewer.addPlugin(new ProgressivePlugin(1));
      const tonemapPlugin = new TonemapPlugin(true);
      await viewer.addPlugin(tonemapPlugin);
      await viewer.addPlugin(GammaCorrectionPlugin);
      await viewer.addPlugin(SSRPlugin);
      await viewer.addPlugin(SSAOPlugin);
      await viewer.addPlugin(BloomPlugin);

      const importer = manager.importer as AssetImporter;

      importer.addEventListener("onProgress", (ev) => {
        const progressRatio = (ev.loaded / ev.total);
        document.querySelector('.progress')?.setAttribute('style', `transform: scaleX(${progressRatio})`);
      });

      importer.addEventListener("onLoad", () => {
        gsap.to('.loader', {
          x: '100%', duration: 0, ease: 'power4.inOut', delay: 0, onComplete: () => {
            document.body.style.overflowY = 'auto';
            lenis.start();
          }
        });
      });

      viewer.renderer.refreshPipeline();

      await manager.addFromPath("/assets/drill3.glb");
      const drillMaterial = manager.materials!.findMaterialsByName('Drill_01')[0] as MeshBasicMaterial2;

      tonemapPlugin.config!.clipBackground = true;
      viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });

      if (isMobile) {
        position.set(-3.5, -1.1, 5.5);
        target.set(-0.8, 1.55, -0.7);
        if (camera instanceof PerspectiveCamera) {
          camera.fov = 40;
          camera.updateProjectionMatrix();
        }
      }

      onUpdate();

      window.scrollTo(0, 5);

      

      function setupScrollanimation() {
        const tl = gsap.timeline();
      
        tl
          .to(position, {
            x: isMobile ? -6.0 : 1.56, 
            y: isMobile ? 5.5 : -2.26, 
            z: isMobile ? -3.3 : -3.85,
            scrollTrigger: {
              trigger: ".second",
              start: "top bottom",
              end: "top top", 
              scrub: true,
              immediateRender: false
            },
            onUpdate
          })
          .to(".section--one--container", {
            xPercent: '-150', 
            opacity: 0,
            scrollTrigger: {
              trigger: ".second",
              start: "top bottom",
              end: "top 80%", 
              scrub: 1,
              immediateRender: false
            }
          })
          .to(target, {
            x: isMobile ? -1.1 : -1.37, 
            y: isMobile ? 1.0 : 1.99, 
            z: isMobile ? -0.1 : -0.37,
            scrollTrigger: {
              trigger: ".second",
              start: "top bottom",
              end: "top top", 
              scrub: true,
              immediateRender: false
            }
          })
          .to(position, {
            x: isMobile ? -6.0 : 1.56, 
            y: isMobile ? 5.5 : 0, 
            z: isMobile ? -3.3 : -3.85,
            scrollTrigger: {
              trigger: ".second",
              start: "top top",
              end: "top+=1000px", // Change this to the desired pixel value from the top
              scrub: true, // Smoothly transition to the final state
              immediateRender: false
            }
          })
          .to(target, {
            x: isMobile ? -1.1 : -1.37, 
            y: isMobile ? 1.0 : 1.99, 
            z: isMobile ? -0.1 : 1,
            scrollTrigger: {
              trigger: ".second",
              start: "top top",
              end: "top+=1000px", // Change this to the desired pixel value from the top
              scrub: true, // Smoothly transition to the final state
              immediateRender: false
            }
          })
          .to("#webgi-canvas", {
            opacity: 0,
            scale: 1.5, // Zoom in effect
            scrollTrigger: {
              trigger: ".second",
              start: "top-=100px", // Adjust this to the desired start of the fade out
              end: "top+=600px", // Adjust this to the desired end of the fade out and zoom in
              scrub: true,
              immediateRender: false
            }
          });
      }
      
      

      
      

      setupScrollanimation();

      function onUpdate() {
        needsUpdate = true;
        viewer.setDirty();
      }

      viewer.addEventListener('preFrame', () => {
        if (needsUpdate) {
          camera.positionTargetUpdated(true);
          needsUpdate = false;
        }
      });

      document.querySelector('.button--hero')?.addEventListener('click', () => {
        const element = document.querySelector('.second');
        window.scrollTo({ top: element?.getBoundingClientRect().top, left: 0, behavior: 'smooth' });
      });

      document.querySelectorAll('.button--footer')?.forEach(item => {
        item.addEventListener('click', () => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        });
      });

      const sections = document.querySelector('.container') as HTMLElement;
      const mainContainer = document.getElementById('webgi-canvas-container') as HTMLElement;
      document.querySelector('.button--customize')?.addEventListener('click', () => {
        sections.style.display = "none";
        mainContainer.style.pointerEvents = "all";
        document.body.style.cursor = "grab";
        lenis.stop();

        gsap.to(position, { x: -2.6, y: 0.2, z: -9.6, duration: 2, ease: "power3.inOut", onUpdate });
        gsap.to(target, { x: -0.15, y: 1.18, z: 0.12, duration: 2, ease: "power3.inOut", onUpdate, onComplete: enableControlers });
      });

      function enableControlers() {
        exitButton.style.display = "block";
        customizerInterface.style.display = "block";
        viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: true });
      }

      exitButton.addEventListener('click', () => {
        gsap.to(position, { x: -3.4, y: 9.6, z: 1.71, duration: 1, ease: "power3.inOut", onUpdate });
        gsap.to(target, { x: -1.5, y: 2.13, z: -0.4, duration: 1, ease: "power3.inOut", onUpdate });

        viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });
        sections.style.display = "contents";
        mainContainer.style.pointerEvents = "none";
        document.body.style.cursor = "default";
        exitButton.style.display = "none";
        customizerInterface.style.display = "none";
        lenis.start();
      });

      document.querySelector('.button--colors.black')?.addEventListener('click', () => {
        changeColor(new Color(0x383830).convertSRGBToLinear());
      });

      document.querySelector('.button--colors.red')?.addEventListener('click', () => {
        changeColor(new Color(0xfe2d2d).convertSRGBToLinear());
      });

      document.querySelector('.button--colors.yellow')?.addEventListener('click', () => {
        changeColor(new Color(0xffffff).convertSRGBToLinear());
      });

      function changeColor(_colorToBeChanged: Color) {
        drillMaterial.color = _colorToBeChanged;
        viewer.scene.setDirty();
      }
    }

    setupViewer();
  }, []);

  return (
    <div className="container">
      <canvas id="webgi-canvas">Helloo</canvas>
      {/* Add any additional HTML elements or components here */}
    </div>
  );
};

export default WebgiPage;
