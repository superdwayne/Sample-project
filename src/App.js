import React, {useRef, useEffect, Suspense, useState } from "react";
import { VRCanvas, RayGrab , Hands,  } from '@react-three/xr'
import { Html } from "@react-three/drei"

import {
  useFrame,
  useThree,
  extend
} from '@react-three/fiber'
import DPM from './DPM/Dpm'
import DPMX from './DPM/DPM-X'
import DPMZ from './DPM/DPMZ'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import './App.css';

extend({ OrbitControls });


const Focal = () => {
  const focal = useRef()
  useFrame(({ camera, gl }) => {
    const cam = gl.xr.isPresenting ? gl.xr.getCamera(camera) : camera;
    focal.current.add(cam);
  })

  
  return (
  <group>

      <mesh ref={focal} scale={[10, 10, 30  ]} position={[0, 1, -450]} >
        <boxBufferGeometry computeVertexNormals={200} args={[1, 0.5, 0.1]} attach="geometry" />
        <meshStandardMaterial attach="material" transparent={true} wireframe={true} color={"#000"} />
      </mesh>
    </group>
  )
}


const World = () => {
  
  return (
  <group>

      <mesh scale={[180, 180, 30  ]} position={[0, 1, -450]} >
        <boxBufferGeometry computeVertexNormals={200} args={[1, 0.5, 30]} attach="geometry" />
        <meshStandardMaterial attach="material" transparent={true} wireframe={true} color={"#000"} />
      </mesh>
    </group>
  )
}

const Plane = () => {
  return (
    <group>

      <mesh scale={[180, 180, 10]} position={[0, 0.5, 0]} >
        <planeBufferGeometry computeVertexNormals={200} args={[1, 300, 3000]} attach="geometry" />
        <meshStandardMaterial attach="material" transparent={true} wireframe={true} color={"#000"} />
          <Html distanceFactor={10}>
              <div class="content">
                <h6>Dwayne</h6>
              </div>
          </Html>
      </mesh>

    </group>
  );

}

const FakeSphereControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  
  // Ref to the controls, so that we can update them on every frame using useFrame

  const controls = useRef();


  // useEffect(() => {
  //   window.onscroll = () => {
  //     console.log('Distance' , controls.current.getDistance() )
  //   console.log('Zoom speed', controls.current.zoomSpeed)
  //   }
  // })
  
  useFrame(() => {
    console.log('Distance' , controls.current.getDistance() )
    console.log('Zoom speed', controls.current.zoomSpeed)
  }, )

  useFrame((state) => controls.current.update());
  
  return (
    <>

      <orbitControls
        ref={controls}
        args={[camera, domElement]}
        enableZoom={true}
        position={[10, 4, 300]}
        minPolarAngle={0}
        enableRotate={true}
        enablePan={false} 
        zoomSpeed={0.5}
        enableDamping={true}
        
      />
    </>
  );
  
};

const FakeSphere = () => {

 
  
   useEffect(() => {
    return () => {
      console.log("cleaned up");
    };
  }, []);


  return (
    <group>
      <mesh scale={[4, 4, 4]} position={[0, 0.5, -40]} >
        <sphereBufferGeometry args={[0.7, 30, 30]} attach="geometry" />
        <meshStandardMaterial attach="material" transparent={true} wireframe={true} color={"#000"} />
      </mesh>
      
    </group>
  );
}


  export default function App() {

  return (
    <>
    <div className="App">

      <VRCanvas gl2={true} fov={150} camera={{ position: [0, 0, 2000], near: 0.1, far: 2000,  }} style={{backgroundColor: "#ffffff" , display: "block" , height: "100vh", width: "100vw"}}>
        
          <Focal />

          <FakeSphereControls />
            
          <FakeSphere />

          <Plane />
          <World />

        <ambientLight />
          
            <pointLight position={[10, 10, 10]} />
          <Hands />
          
            <Suspense fallback={null}>
                <RayGrab>
                    <DPM rotation={[0,0,0]} position={[-1.8, 0.5, -450]} />
                </RayGrab>
            
                <RayGrab>
                  <DPMZ rotation={[0,-3,0]} position={[ 1.8, 0.5, -36]} />
                </RayGrab>
              
                <RayGrab>
                  <DPMX position={[ 0, 0.5, -1]} />
                </RayGrab>
              
          </Suspense>

      </VRCanvas>


    </div>
    </>
  );
}





