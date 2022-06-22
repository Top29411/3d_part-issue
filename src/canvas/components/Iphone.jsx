import {useLoader} from "react-three-fiber";
import {FBXLoader} from "three/examples/jsm/loaders/FBXLoader";
import React, {useRef} from "react";

const Iphone = ({ }) => {
    const theModel = useLoader(FBXLoader, "/iphone.fbx");
    const modelRef = useRef(theModel);
        console.log('12',theModel)
    return (
        <mesh
            ref={modelRef}
            geometry={theModel?.children[5].geometry}
            material={theModel?.children[5].material}
            rotation={[Math.PI /2,0,0]}
            position={[5,2,0]}
        >
        </mesh>
    );
};

export default Iphone;