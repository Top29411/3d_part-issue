import React from "react";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import {useLoader, useThree} from "react-three-fiber";
import { useRef, useEffect } from "react";

const Bunny = ({ newMaterialOpt }) => {
  const {
    camera,
  } = useThree();

  const theModel = useLoader(FBXLoader, "/bunny/model.fbx");
  const [colorMap,normalMap,roughnessMap, metalnessMap] = useLoader(TextureLoader, [
      "/bunny/color.png",
    "/bunny/normal.png",
    "/bunny/roughness.png",
    "/bunny/metalic.png",
  ]);
  const modelRef = useRef(null);

  // useEffect(() => {
  //   if (theModel) {
  //     console.log("1", theModel);
  //     console.log("11", theModel?.children[0].geometry);
  //     console.log("2", modelRef.current);
  //   }
  // }, [theModel]);

  return (
    // <primitive
    //   ref={modelRef}
    //   object={theModel}
    //   scale={[0.1, 0.1, 0.1]}
    //   rotation={[0, Math.PI, 0]}
    //   position={[0, -1, 0]}
    //   receiveShadow
    //   castShadow
    // />
      <group rotation={[0,0,0]}>
        <mesh
            ref={modelRef}
            geometry={theModel?.children[0].geometry}
            // material={theModel?.children[0].material}
            scale={[0.1, 0.1, 0.1]}
            rotation={[0, 2.5, 0]}
            position={[-5, 0, -1]}
        >
          <meshPhongMaterial
              map={theModel?.children[0].material.map}
              normalMap={normalMap}
              roughnessMap={roughnessMap}
              metalnessMap={metalnessMap}
              attachArray="material"
              // alphaMap={theModel?.children[0].material.alphaMap}
              metalness={1}
              roughness={1}
          />
        </mesh>
        <mesh position={[0, 0, -1]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color='#BADA55' />
        </mesh>
      </group>
  );
};

export default Bunny;
