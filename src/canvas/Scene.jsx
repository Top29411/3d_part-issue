import { extend, useThree } from "react-three-fiber";
import React, { Suspense, useEffect } from "react";
import Bunny from "./components/Bunny";
import { OrbitControls } from "@react-three/drei";
import Floor from "./components/Floor";
import * as THREE from "three";
import Wolf from "./components/Wolf";
import Girl from "./components/Girl";
import TV from "./components/TV";
import Iphone from "./components/Iphone";

// extend({ OrbitControls });

export const Scene = ({ newMaterialOpt }) => {
  const {
    scene,
    camera,
    gl: { domElement, shadowMap}
  } = useThree();

  // Scene configuration;
  useEffect(() => {
    const directionalLight = scene.children[1];
    scene.background = new THREE.Color(0xf1f1f1);
    camera.fov = 170;
    camera.position.x = 1
    directionalLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
    shadowMap.enabled = true;
      console.log(scene);
  }, []);

  return (
    <>
        <OrbitControls
            enableDamping={false}
            camera={camera}
            domElement={domElement}
        />
        <hemisphereLight
        skycolor={new THREE.Color(0xffffff)}
        groundColor={new THREE.Color(0xffffff)}
        intensity={0.80}
        position={[0, 50, 0]}
      />
      <directionalLight
        color={new THREE.Color(0xffffff)}
        intensity={0.80}
        position={[-8, 12, 8]}
        castShadow
      />
      <Suspense fallback={null}>
          <Bunny newMaterialOpt={newMaterialOpt} />
          <Wolf/>
          <Girl/>
          <TV/>
          <Iphone/>
        <Floor />
      </Suspense>
    </>
  );
};
