import React, { useRef, useEffect, Suspense } from 'react'
import { useGLTF, OrbitControls, PointerLockControls } from '@react-three/drei'
import * as THREE from "three";
import Grid from "./grid";
import getMouseDegrees from './Hooks/utils';

import {Canvas, useFrame, useThree } from '@react-three/fiber'

import './App.css';


function moveJoint(mouse, joint, degreeLimit = 40) {
  let degrees = getMouseDegrees(mouse.x, mouse.y, degreeLimit)
  joint.rotation.xD = THREE.MathUtils.lerp(joint.rotation.xD || 0, degrees.y, 0.1)
  joint.rotation.yD = THREE.MathUtils.lerp(joint.rotation.yD || 0, degrees.x, 0.1)
  joint.rotation.x = THREE.Math.degToRad(joint.rotation.xD)
  joint.rotation.y = THREE.Math.degToRad(joint.rotation.yD)
 
}


function Model({mouse, ...props }) {
 
  const group = useRef()
  const { nodes, materials } = useGLTF('https://cdn-static.farfetch-contents.com/Content/UP/EXPERIENCE/Metaverse/DPM-X-Move.glb')
  console.log(nodes)
  const { size } = useThree()
  useFrame((state, delta) => {
    
   const mouse = { x: size.width / 2 + (state.mouse.x * size.width) / 2, y: size.height / 2 + (-state.mouse.y * size.height) / 2 }
    
    moveJoint(mouse, nodes.Head )
  })
 
  return (
    <>
c
<OrbitControls />
      
<group scale={[4,4,4]} ref={group} {...props} dispose={null}>

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
      {/* <primitive position={[-0,1.5,-0.1]}  object={nodes.Head}  /> */}
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
useGLTF.preload('https://cdn-static.farfetch-contents.com/Content/UP/EXPERIENCE/Metaverse/DPM-X.glb')


  export default function App() {
    const mouse = useRef({ x: 0, y: 0 })
  return (

      <Canvas 
   style={{backgroundColor: "white" , display: "block" , height: "100vh", width: "100vw"}}>
        
          <ambientLight />
          
          <pointLight position={[10, 10, 10]} />
         
          <Suspense fallback={null} >
           
            <Model mouse={mouse} position={[ 0, -3.6, -4]} scale={[4, 4, 4]} />
              
          </Suspense>

      </Canvas>

  );
}





