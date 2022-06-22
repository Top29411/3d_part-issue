import React, {useMemo} from "react";

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { TextureLoader } from "three/src/loaders/TextureLoader";
import {useLoader} from "react-three-fiber";
import { useRef, useEffect } from "react";

const Girl = () => {
    const materials = useLoader(MTLLoader, "girl/girl OBJ.mtl")
    const theModel = useLoader(OBJLoader, "girl/girl OBJ.obj", (loader) => {
        materials.preload()
        console.log(materials)
        loader.setMaterials(materials)
    });
    const modelRef = useRef(theModel);

    useEffect(() => {
        if (theModel) {
            console.log("1", theModel);
            console.log("1", materials);
            // console.log("11", theModel?.children[0].geometry);
            console.log("2", modelRef.current);

            modelRef.current.traverse(function (child) {
                if (child.isMesh) child.geometry.computeVertexNormals();
            });
        }
    }, [theModel]);


    return (
        <primitive
          ref={modelRef}
          object={theModel}
          scale={[1, 1, 1]}
          position={[0, -1, 0]}
        />
    );
};

export default Girl;