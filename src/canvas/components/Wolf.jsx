import React from "react";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import {useLoader} from "react-three-fiber";
import { useRef, useEffect } from "react";

const Wolf = ({ }) => {
    const theModel = useLoader(FBXLoader, "/wolf/model.fbx");
    const [colorMap,normalMap,roughnessMap, metalnessMap] = useLoader(TextureLoader, [
        "/wolf/color.png",
        "/wolf/normal.png",
        "/wolf/roughness.png",
        "/wolf/metalic.png",
    ]);
    const modelRef = useRef(null);

    return (
        <group rotation={[0,0,0]}>
            <mesh
                ref={modelRef}
                geometry={theModel?.children[0].geometry}
                scale={[0.001, 0.001, 0.001]}
                rotation={[Math.PI / 2,0,0]}
            >
                <meshPhongMaterial
                    map={colorMap}
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

export default Wolf;