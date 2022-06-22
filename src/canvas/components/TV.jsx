import React, {useMemo} from "react";

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import {useLoader} from "react-three-fiber";
import { useRef, useEffect } from "react";

const TV = () => {
    const materials = useLoader(MTLLoader, "tv/TV.mtl")
    const theModel = useLoader(OBJLoader, "tv/TV.obj", (loader) => {
        materials.preload()
        console.log(materials)
        loader.setMaterials(materials)
    });
    const modelRef = useRef(theModel);

    return (
        <primitive
          ref={modelRef}
          object={theModel}
          scale={[1, 1, 1]}
          position={[0, -1, 4]}
          receiveShadow
        />
    );
};

export default TV;