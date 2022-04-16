import React, { useRef, Suspense, useEffect, useState  } from 'react'
import { useGLTF, OrbitControls, useAnimations, Text, Billboard  } from '@react-three/drei'
import { useCamera } from '@react-three/drei'

import * as THREE from "three";
import Grid from "./grid";
import Brain from './Brain/Brain'

// import DPMCT from './DPMCT/DPM-CT'

import getMouseDegrees from './Hooks/utils';

import {Canvas, useFrame, useThree } from '@react-three/fiber'


import { ARCanvas } from '@react-three/xr'

import './App.css';

let dis = 20

function moveJoint(mouse, joint, degreeLimit = 40) {
  let degrees = getMouseDegrees(mouse.x, mouse.y, degreeLimit)
  joint.rotation.xD = THREE.MathUtils.lerp(joint.rotation.xD || 0, degrees.y, 0.1)
  joint.rotation.yD = THREE.MathUtils.lerp(joint.rotation.yD || 0, degrees.x, 0.1)
  joint.rotation.x = THREE.Math.degToRad(joint.rotation.xD)
  joint.rotation.y = THREE.Math.degToRad(joint.rotation.yD)
}

//  function DPMCT({mouse, ...props }) {

//     const controls = useRef();
// const { camera, gl: { domElement } } = useThree();

//   useEffect(() => {

//     actions.DPMCT.play()
//     group.current.position.x = 0;
//     group.current.position.y = -;
//     group.current.position.z = -18;

//      });
//   const group = useRef()
//   const { nodes, materials, animations } = useGLTF('/DPM-CT.gltf')
//   const { actions } = useAnimations(animations, group)
//   return (
//     <>
 
//     <group ref={group} {...props} dispose={null}>
//       <group>
//         <group  position={[0, 0, 0]}>
//           <primitive object={nodes.Hips} />
//           <skinnedMesh geometry={nodes.Wolf3D_Hair001.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair001.skeleton} />
//           <skinnedMesh geometry={nodes.Wolf3D_Outfit_Bottom001.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom001.skeleton} />
//           <skinnedMesh geometry={nodes.Wolf3D_Outfit_Footwear001.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear001.skeleton} />
//           <skinnedMesh geometry={nodes.Wolf3D_Outfit_Top001.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top001.skeleton} />
//           <skinnedMesh name="EyeLeft001" geometry={nodes.EyeLeft001.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft001.skeleton} morphTargetDictionary={nodes.EyeLeft001.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft001.morphTargetInfluences} />
//           <skinnedMesh name="EyeRight001" geometry={nodes.EyeRight001.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight001.skeleton} morphTargetDictionary={nodes.EyeRight001.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight001.morphTargetInfluences} />
//           <skinnedMesh name="Wolf3D_Beard001" geometry={nodes.Wolf3D_Beard001.geometry} material={materials.Wolf3D_Beard} skeleton={nodes.Wolf3D_Beard001.skeleton} morphTargetDictionary={nodes.Wolf3D_Beard001.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Beard001.morphTargetInfluences} />
//           <skinnedMesh name="Wolf3D_Head001" geometry={nodes.Wolf3D_Head001.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head001.skeleton} morphTargetDictionary={nodes.Wolf3D_Head001.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head001.morphTargetInfluences} />
//           <skinnedMesh name="Wolf3D_Teeth001" geometry={nodes.Wolf3D_Teeth001.geometry} material={materials['Wolf3D_Teeth.001']} skeleton={nodes.Wolf3D_Teeth001.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth001.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth001.morphTargetInfluences} />
//         </group>
//       </group>
//     </group>
//     <OrbitControls
//         ref={controls}
//          args={[camera, domElement]}
//          enableZoom={true}
//          position={[10, 4, 300]}
//          maxPolarAngle={3}
//          rotateSpeed={0.5}
//          maxDistance = {5}
//          enableRotate={true}
//          enablePan={true} 
//          zoomSpeed={0.5}
//          enableDamping={false}
//          snap={true}
//          maxZoom={5}
        
//        />
//     </>
//   )
// }

useGLTF.preload('/DPM-CT.gltf')


function Model({mouse, ...props }) {

const { camera, gl: { domElement } } = useThree();

  useEffect(() => {

    actions.DPMCT.play()
    group.current.position.x = -0.09;
    group.current.position.y = -3.2;
    group.current.position.z = 1;

     });
 
  const group = useRef()
  const controls = useRef();

  //const distance = controls.current.getDistance()

  
  const { nodes, materials, animations } = useGLTF('/DPM-CT.gltf')
  
  const { actions } = useAnimations(animations, group)


  const { size } = useThree()

   
// By setting the state outside the useFrame I am able to call it inside.
  const [rotate, setRotate] = useState(true);
  const [PolarAngle , setPolarAngle] = useState(2)

  useFrame((state, delta) => {
   
   const distance = controls.current.getDistance()
   let Camera = state.camera.type

  console.log(distance )


  if (distance > 1 ) {
    //console.log("Too far")
    setRotate(false)
    
    
  }else {
  //  console.log("Too close")
    setRotate(true)
    setPolarAngle(2)
    
  }


    controls.current.update()

   const mouse = { x: size.width / 2 + (state.mouse.x * size.width) / 2, y: size.height / 2 + (-state.mouse.y * size.height) / 2 }
    moveJoint(mouse, nodes.Head )
  })

  console.log(controls)
  

  return (
    <>
{/* <Grid /> */}
            
<OrbitControls
        ref={controls}
        args={[camera, domElement]}
        enableZoom={true}
        position={[10, 4, 300]}
        maxPolarAngle={PolarAngle}
        rotateSpeed={0.5}
        maxDistance = {5}
        enableRotate={rotate}
        enablePan={true} 
        zoomSpeed={0.5}
        enableDamping={false}
        snap={true}
        maxZoom={4}
        
      />
      
      <group ref={group} {...props} dispose={null}>
      <group>
        <group position={[0.26, -0.99, -0.10]}>
          <primitive object={nodes.Hips} />
          <group position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={5}>
          <skinnedMesh geometry={nodes.Wolf3D_Hair001.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair001.skeleton} />
          <skinnedMesh geometry={nodes.Wolf3D_Outfit_Bottom001.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom001.skeleton} />
          <skinnedMesh geometry={nodes.Wolf3D_Outfit_Footwear001.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear001.skeleton} />
          <skinnedMesh geometry={nodes.Wolf3D_Outfit_Top001.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top001.skeleton} />
          <skinnedMesh name="EyeLeft001" geometry={nodes.EyeLeft001.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft001.skeleton} morphTargetDictionary={nodes.EyeLeft001.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft001.morphTargetInfluences} />
          <skinnedMesh name="EyeRight001" geometry={nodes.EyeRight001.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight001.skeleton} morphTargetDictionary={nodes.EyeRight001.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight001.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Beard001" geometry={nodes.Wolf3D_Beard001.geometry} material={materials.Wolf3D_Beard} skeleton={nodes.Wolf3D_Beard001.skeleton} morphTargetDictionary={nodes.Wolf3D_Beard001.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Beard001.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Head001" geometry={nodes.Wolf3D_Head001.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head001.skeleton} morphTargetDictionary={nodes.Wolf3D_Head001.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head001.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Teeth001" geometry={nodes.Wolf3D_Teeth001.geometry} material={materials['Wolf3D_Teeth.001']} skeleton={nodes.Wolf3D_Teeth001.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth001.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth001.morphTargetInfluences} />
          </group>
        </group>
      </group>
    </group>
    </>
  )
}
useGLTF.preload('/DPM-CT.gltf')


const Video = () => {
   const [playing, setPlaying] = useState(false);
   const { camera, gl: { domElement } } = useThree();
   const controls = useRef();
 
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = "https://cdn-static.farfetch-contents.com/Content/UP/EXPERIENCE/Playground/CTM.mov";
    vid.crossOrigin = "Anonymous";
    vid.loop = false;
    vid.autoplay = false;
    vid.playsInline = true;
    vid.controls = true;
    return vid;
  });





  const myMesh = useRef()
 
  useEffect(() => {
    console.log("Inside Video 1");
    if (playing)
      video.play()
    else
      video.pause()
  }, [video, playing]);
  useEffect(() => {
    return () => {
      console.log("cleaned up");
    };
  }, []);

  // useFrame(() => {
  //   myMesh.current.rotation.y += 0.01;
  // });

  return (

    <>


<Billboard
  follow={true}
  lockX={false}
  lockY={false}
  lockZ={false} // Lock the rotation on the z axis (default=false)
>
  <group>
      
      <mesh ref={myMesh}  rotation={[0, 0, -1.58]} position={[0, 0, -0.06]} scale={[0.05, 0.04, 0.05]} onClick={(e) => setPlaying(true)}  onHover ={(e) => setPlaying(true)} onMouseEnter={(e) => setPlaying(true)} onPointerLeave={(e) => setPlaying(false)}>
        <planeBufferGeometry />
        <meshBasicMaterial>
          <videoTexture attach="map" args={[video]} />
        </meshBasicMaterial>  
      </mesh>

      
    </group>
</Billboard>
    

    {/* <OrbitControls
        ref={controls}
        args={[camera, domElement]}
        enableZoom={true}
        position={[10, 4, 300]}

        rotateSpeed={0.5}
        maxDistance = {2}
        enableRotate={true}
        enablePan={true} 
        zoomSpeed={0.5}
        enableDamping={true}
        snap={true}
        maxZoom={5}
        
      /> */}

    </>
  );
}

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
      
        <Text
        scale={[2, 2, 2]}
        color="black" // default
        anchorX="right" // default
        anchorY="middle" // default
      >
       Psst, this way  
      </Text>
      </mesh>

      
      
    </group>
  );
}





  export default function App() {

 const mouse = useRef({ x: 0, y: 0 })
  return (
    
    <>
 
      <Canvas  camera={{ position: [0, 0, 2.75], fov: dis }}
      pixelRatio={[1, 2]}
   style={{backgroundColor: "white" , display: "block" , height: "100vh", width: "100vw"}}>
        {/* <Grid />
             */}

            

           
  
    
          <ambientLight />
          
          <pointLight position={[10, 10, 10]} />
         
          <Suspense fallback={null} >
           
          <Video/>
            <Brain />
            <Model mouse={mouse}  scale={[2,2,2]} />
            
             {/* <DPMCT mouse={mouse} scale={[9,9,9]}/>  */}
          </Suspense>

      </Canvas>
      </>

  );
}





