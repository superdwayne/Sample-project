import React, { useRef, Suspense, useEffect, useState  } from 'react'
import { useGLTF, OrbitControls, useAnimations, Text, Billboard  } from '@react-three/drei'
import { useCamera } from '@react-three/drei'

import * as THREE from "three";
// import Grid from "./grid";
import Brain from './Brain/Brain'

import DPMNIKE from './Nike/DPM-X-Nike'

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

function Model({mouse, ...props }) {

const { camera, gl: { domElement } } = useThree();

  useEffect(() => {

    actions.CHILL.play()
    group.current.position.x = 0;
    group.current.position.y = -1.7;
    group.current.position.z = 0;

     });
 
  const group = useRef()
  const controls = useRef();

  //const distance = controls.current.getDistance()

  
  const { nodes, materials, animations } = useGLTF('https://cdn-static.farfetch-contents.com/Content/UP/EXPERIENCE/Metaverse/DPM-X-Move.glb')
  
  const { actions } = useAnimations(animations, group)


  const { size } = useThree()

   
// By setting the state outside the useFrame I am able to call it inside.
  const [rotate, setRotate] = useState(true);
  const [PolarAngle , setPolarAngle] = useState(2)

  useFrame((state, delta) => {
   
   const distance = controls.current.getDistance()
   let Camera = state.camera.type

  //console.log('Camera change' , Camera = 'OrthographicCamera' )


  if (distance > 1 ) {
    //console.log("Too far")
    setRotate(true)
    
    
  }else {
  //  console.log("Too close")
    setRotate(true)
    setPolarAngle(3)
    
  }


    controls.current.update()

   const mouse = { x: size.width / 2 + (state.mouse.x * size.width) / 2, y: size.height / 2 + (-state.mouse.y * size.height) / 2 }
    moveJoint(mouse, nodes.Head )
  })

  console.log(controls)
  

  return (
    <>

<OrbitControls
        ref={controls}
        args={[camera, domElement]}
        enableZoom={true}
        position={[10, 4, 300]}
        maxPolarAngle={PolarAngle}
        rotateSpeed={0.5}
        maxDistance = {20}
        enableRotate={rotate}
        enablePan={true} 
        zoomSpeed={0.5}
        enableDamping={true}
        snap={true}
        maxZoom={5}
        
      />
      
<group ref={group} {...props} dispose={null}>

      <group position={[-1.68, 0.02, 0.07]}>
        <group position={[0, 1.02, 0.01]} rotation={[0.03, 0, 0]}>
          <group position={[0, 0.1, 0]} rotation={[-0.14, 0, 0]}>
            <group position={[0, 0.13, 0]} rotation={[-0.06, 0, 0]}>
              <group position={[0, 0.12, 0]} rotation={[0.09, 0, 0]}>
                <group position={[0, 0.16, 0]} rotation={[0.41, 0, 0]}>
                  <group position={[0, 0.12, 0]} rotation={[-0.33, 0, 0]} />
                </group>
                <group position={[0.05, 0.14, -0.01]} rotation={[1.56, -0.04, -1.58]}>
                  <group position={[0, 0.12, 0]} rotation={[1, 0.02, -0.14]}>
                    <group position={[0, 0.29, 0]} rotation={[-0.11, 0.02, 0.45]}>
                      <group position={[0, 0.25, 0]} rotation={[0.09, 0.08, -0.04]}>
                        <group position={[-0.03, 0.03, 0.01]} rotation={[0.32, 0.12, 0.85]}>
                          <group position={[0, 0.04, 0]} rotation={[0.06, -0.17, -0.5]}>
                            <group position={[0, 0.03, 0]} rotation={[0.02, -0.05, -0.17]} />
                          </group>
                        </group>
                        <group position={[-0.04, 0.1, -0.01]} rotation={[0.19, -0.09, 0.15]}>
                          <group position={[0, 0.04, 0]} rotation={[0.19, -0.01, 0.05]}>
                            <group position={[0, 0.03, 0]} rotation={[0.17, -0.15, -0.03]} />
                          </group>
                        </group>
                        <group position={[-0.01, 0.1, 0]} rotation={[0.08, -0.13, 0.04]}>
                          <group position={[0, 0.05, 0]} rotation={[0.26, -0.01, 0.09]}>
                            <group position={[0, 0.04, 0]} rotation={[0.4, -0.06, -0.08]} />
                          </group>
                        </group>
                        <group position={[0.02, 0.1, 0]} rotation={[0.12, -0.12, -0.11]}>
                          <group position={[0, 0.04, 0]} rotation={[0.38, -0.01, 0.1]}>
                            <group position={[0, 0.04, 0]} rotation={[0.08, -0.01, 0]} />
                          </group>
                        </group>
                        <group position={[0.04, 0.09, 0.01]} rotation={[0.18, -0.17, -0.3]}>
                          <group position={[0, 0.03, 0]} rotation={[0.29, -0.4, 0.18]}>
                            <group position={[0, 0.02, 0]} rotation={[0.25, -0.02, 0.03]} />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
                <group position={[-0.05, 0.14, -0.01]} rotation={[1.56, 0.04, 1.58]}>
                  <group position={[0, 0.12, 0]} rotation={[1, -0.02, 0.14]}>
                    <group position={[0, 0.29, 0]} rotation={[-0.11, -0.02, -0.45]}>
                      <group position={[0, 0.25, 0]} rotation={[0.09, -0.08, 0.04]}>
                        <group position={[0.03, 0.03, 0.01]} rotation={[0.32, -0.12, -0.85]}>
                          <group position={[0, 0.04, 0]} rotation={[0.06, 0.17, 0.5]}>
                            <group position={[0, 0.03, 0]} rotation={[0.02, 0.05, 0.17]} />
                          </group>
                        </group>
                        <group position={[0.04, 0.1, -0.01]} rotation={[0.19, 0.09, -0.15]}>
                          <group position={[0, 0.04, 0]} rotation={[0.19, 0.01, -0.05]}>
                            <group position={[0, 0.03, 0]} rotation={[0.17, 0.15, 0.03]} />
                          </group>
                        </group>
                        <group position={[0.01, 0.1, 0]} rotation={[0.08, 0.13, -0.04]}>
                          <group position={[0, 0.05, 0]} rotation={[0.26, 0.01, -0.09]}>
                            <group position={[0, 0.04, 0]} rotation={[0.4, 0.06, 0.08]} />
                          </group>
                        </group>
                        <group position={[-0.02, 0.1, 0]} rotation={[0.12, 0.12, 0.11]}>
                          <group position={[0, 0.04, 0]} rotation={[0.38, 0.01, -0.1]}>
                            <group position={[0, 0.04, 0]} rotation={[0.08, 0.01, 0]} />
                          </group>
                        </group>
                        <group position={[-0.04, 0.09, 0.01]} rotation={[0.18, 0.17, 0.3]}>
                          <group position={[0, 0.03, 0]} rotation={[0.29, 0.4, -0.18]}>
                            <group position={[0, 0.02, 0]} rotation={[0.25, 0.02, -0.03]} />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
          <group position={[0.1, 0.01, 0]} rotation={[-0.02, 0, -3.08]}>
            <group position={[0, 0.46, 0]} rotation={[-0.08, 0, -0.01]}>
              <group position={[0, 0.44, 0]} rotation={[1.06, 0.03, -0.01]}>
                <group position={[0, 0.15, 0]} rotation={[0.55, -0.07, 0.06]} />
              </group>
            </group>
          </group>
          <group position={[-0.1, 0.01, 0]} rotation={[-0.02, 0, 3.08]}>
            <group position={[0, 0.46, 0]} rotation={[-0.08, 0, 0.01]}>
              <group position={[0, 0.44, 0]} rotation={[1.06, -0.03, 0.01]}>
                <group position={[0, 0.15, 0]} rotation={[0.55, 0.07, -0.06]} />
              </group>
            </group>
          </group>
        </group>
      </group>
      <primitive object={nodes["Hips"]}  />
      <skinnedMesh
        geometry={nodes.Wolf3D_Facewear001.geometry}
        material={materials.Wolf3D_Facewear}
        skeleton={nodes.Wolf3D_Facewear001.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Glasses001.geometry}
        material={materials['Wolf3D_Glasses.002']}
        skeleton={nodes.Wolf3D_Glasses001.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair001.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair001.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom001.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom001.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear001.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear001.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top001.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top001.skeleton}
      />
      <skinnedMesh
        name="EyeLeft001"
        geometry={nodes.EyeLeft001.geometry}
        material={nodes.EyeLeft001.material}
        skeleton={nodes.EyeLeft001.skeleton}
        morphTargetDictionary={nodes.EyeLeft001.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft001.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight001"
        geometry={nodes.EyeRight001.geometry}
        material={nodes.EyeRight001.material}
        skeleton={nodes.EyeRight001.skeleton}
        morphTargetDictionary={nodes.EyeRight001.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight001.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head001"
        geometry={nodes.Wolf3D_Head001.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head001.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head001.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head001.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth001"
        geometry={nodes.Wolf3D_Teeth001.geometry}
        material={materials['Wolf3D_Teeth.002']}
        skeleton={nodes.Wolf3D_Teeth001.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth001.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth001.morphTargetInfluences}
      />
    </group>
    </>
  )
}
useGLTF.preload('https://cdn-static.farfetch-contents.com/Content/UP/EXPERIENCE/Metaverse/DPM-X-Move.glb')


const Video = () => {
   const [playing, setPlaying] = useState(false);
   const { camera, gl: { domElement } } = useThree();
   const controls = useRef();
 
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = "https://cdn-static.farfetch-contents.com/Content/UP/EXPERIENCE/Playground/Fullreel.mp4";
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
      
      <mesh ref={myMesh}  position={[0, -0.000, 0.02]} scale={[0.06, 0.04, 0.06]} onClick={(e) => setPlaying(true)} onPointerEnter={(e) => setPlaying(true)} onPointerLeave={(e) => setPlaying(false)}>
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


 function DPMXGUCCI({ ...props }) {

  useEffect(() => {

    actions.DPMBOSS.play()

     });
     const { camera, gl: { domElement } } = useThree();
  const group = useRef()

  const controls = useRef();
  const { nodes, materials, animations } = useGLTF('https://cdn-static.farfetch-contents.com/Content/UP/EXPERIENCE/Metaverse/DPMXoffwhite.glb')
  const { actions } = useAnimations(animations, group)
  return (

<>

<OrbitControls
        ref={controls}
        args={[camera, domElement]}
        enableZoom={true}
        position={[10, 4, 300]}
  
        rotateSpeed={0.5}
        maxDistance = {20}
        enableRotate={true}
        enablePan={true} 
        zoomSpeed={0.5}
        enableDamping={true}
        snap={true}
        maxZoom={5}
        
      />

    
    <group ref={group} {...props} dispose={null}>
      <group>
        <group position={[-0.11, -0.90, -3.15]}>
          <primitive object={nodes.Hips} />
          <skinnedMesh geometry={nodes['FREE_|_Gucci_Backpack_-_Minecraft001'].geometry} material={materials.Element} skeleton={nodes['FREE_|_Gucci_Backpack_-_Minecraft001'].skeleton} />
          <skinnedMesh geometry={nodes['OFF-WHITE_Monalisa_Black_T-Shirt001'].geometry} material={materials.male_casualsuit06} skeleton={nodes['OFF-WHITE_Monalisa_Black_T-Shirt001'].skeleton} />
          <skinnedMesh geometry={nodes.Wolf3D_Body001.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body001.skeleton} />
          <skinnedMesh geometry={nodes.Wolf3D_Glasses001.geometry} material={materials.Wolf3D_Glasses} skeleton={nodes.Wolf3D_Glasses001.skeleton} />
          <skinnedMesh geometry={nodes.Wolf3D_Hair001.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair001.skeleton} />
          <skinnedMesh geometry={nodes.Wolf3D_Outfit_Bottom001.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom001.skeleton} />
          <skinnedMesh geometry={nodes.Wolf3D_Outfit_Footwear001.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear001.skeleton} />
          <skinnedMesh name="EyeLeft001" geometry={nodes.EyeLeft001.geometry} material={materials['Wolf3D_Eye.001']} skeleton={nodes.EyeLeft001.skeleton} morphTargetDictionary={nodes.EyeLeft001.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft001.morphTargetInfluences} />
          <skinnedMesh name="EyeRight001" geometry={nodes.EyeRight001.geometry} material={materials['Wolf3D_Eye.001']} skeleton={nodes.EyeRight001.skeleton} morphTargetDictionary={nodes.EyeRight001.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight001.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Beard001" geometry={nodes.Wolf3D_Beard001.geometry} material={materials.Wolf3D_Beard} skeleton={nodes.Wolf3D_Beard001.skeleton} morphTargetDictionary={nodes.Wolf3D_Beard001.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Beard001.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Head001" geometry={nodes.Wolf3D_Head001.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head001.skeleton} morphTargetDictionary={nodes.Wolf3D_Head001.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head001.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Teeth001" geometry={nodes.Wolf3D_Teeth001.geometry} material={materials['Wolf3D_Teeth.001']} skeleton={nodes.Wolf3D_Teeth001.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth001.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth001.morphTargetInfluences} />
        </group>
      </group>
    </group>

    </>
  )
}


  export default function App() {

 const mouse = useRef({ x: 0, y: 0 })
  return (
    
    <>
 
      <Canvas  camera={{ position: [0, 0, 2.75], fov: 50 }}
      pixelRatio={[1, 2]}
   style={{backgroundColor: "white" , display: "block" , height: "100vh", width: "100vw"}}>
        {/* <Grid />
             */}

            

           
  
    
          <ambientLight />
          
          <pointLight position={[10, 10, 10]} />
         
          <Suspense fallback={null} >
           
          {/* <Video/> */}
            {/* <Brain /> */}
            {/* <Model mouse={mouse}  scale={[9,9,9]} /> */}
             <DPMXGUCCI  scale={[1,1,1]}/>
          </Suspense>

      </Canvas>
      </>

  );
}





