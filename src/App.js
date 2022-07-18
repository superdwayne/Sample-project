import React, { useRef, Suspense, useEffect, useState  } from 'react'
import { useGLTF, OrbitControls, useAnimations, Text, Billboard  } from '@react-three/drei'
import Tooltip from "react-simple-tooltip"
import { useProgress, Html } from "@react-three/drei"

import * as THREE from "three";
import Grid from "./grid";
import Brain from './Brain/Brain'
import Creative from './Untitled'



import getMouseDegrees from './Hooks/utils';

import {Canvas, useFrame, useThree } from '@react-three/fiber'

import UCO from './Uco3'



import './App.css';

let dis = 100


function DPM_WEB({ ...props }) {

  const { camera, gl: { domElement } } = useThree();
  useEffect(() => {

    actions.DPMCHILL.play()
  
     });

  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./web.gltf')
  const { actions } = useAnimations(animations, group)

  const { size } = useThree()
  const controls = useRef();

  useFrame((state, delta) => {
   

  // controls.current.update()
 
    const mouse = { x: size.width / 2 + (state.mouse.x * size.width) / 2, y: size.height / 2 + (-state.mouse.y * size.height) / 2 }
     moveJoint(mouse, nodes.Head )
   })

  return (
    <>
      <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature004" position={[0.91, -2.34, 0.44]} rotation={[0, 1.21, 0]} scale={3.05}>
          <group name="Hips_1" position={[0, 1.86, 0.01]} rotation={[0.1, -1.23, 0.09]}>
            <group name="Spine_1" position={[0, 0.1, 0]} rotation={[-0.14, 0, 0]}>
              <group name="Spine1_1" position={[0, 0.13, 0]} rotation={[-0.06, 0, 0]}>
                <group name="Spine2_1" position={[0, 0.12, 0]} rotation={[0.09, 0, 0]}>
                  <group name="Neck_1" position={[0, 0.16, 0]} rotation={[0.41, 0, 0]}>
                    <group name="Head_1" position={[0, 0.12, 0]} rotation={[-0.33, 0, 0]}>
                      <group name="HeadTop_End_1" position={[0, 0.23, 0.04]} rotation={[-0.01, 0, 0]}>
                        <group name="HeadTop_End_end_1" position={[0, 0.12, 0]} />
                      </group>
                      <group name="LeftEye_1" position={[0.03, 0.09, 0.08]} rotation={[-0.01, 0, 0]}>
                        <group name="LeftEye_end_1" position={[0, 0.12, 0]} />
                      </group>
                      <group name="RightEye_1" position={[-0.03, 0.09, 0.08]} rotation={[-0.01, 0, 0]}>
                        <group name="RightEye_end_1" position={[0, 0.12, 0]} />
                      </group>
                    </group>
                  </group>
                  <group name="LeftShoulder_1" position={[0.05, 0.14, -0.01]} rotation={[1.56, -0.04, -1.58]}>
                    <group name="LeftArm_1" position={[0, 0.12, 0]} rotation={[1, 0.02, -0.14]}>
                      <group name="LeftForeArm_1" position={[0, 0.29, 0]} rotation={[-0.11, 0.02, 0.45]}>
                        <group name="LeftHand_1" position={[0, 0.25, 0]} rotation={[0.09, 0.08, -0.04]}>
                          <group name="LeftHandThumb1_1" position={[-0.03, 0.03, 0.01]} rotation={[0.32, 0.12, 0.85]}>
                            <group name="LeftHandThumb2_1" position={[0, 0.04, 0]} rotation={[0.06, -0.17, -0.5]}>
                              <group name="LeftHandThumb3_1" position={[0, 0.03, 0]} rotation={[0.02, -0.05, -0.17]}>
                                <group name="LeftHandThumb4_1" position={[0, 0.04, 0]} rotation={[0.03, 0.1, -0.02]}>
                                  <group name="LeftHandThumb4_end_1" position={[0, 0.04, 0]} />
                                </group>
                              </group>
                            </group>
                          </group>
                          <group name="LeftHandIndex1_1" position={[-0.04, 0.1, -0.01]} rotation={[0.19, -0.09, 0.15]}>
                            <group name="LeftHandIndex2_1" position={[0, 0.04, 0]} rotation={[0.19, -0.01, 0.05]}>
                              <group name="LeftHandIndex3_1" position={[0, 0.03, 0]} rotation={[0.17, -0.15, -0.03]}>
                                <group name="LeftHandIndex4_1" position={[0, 0.03, 0]} rotation={[0.09, 0.11, -0.02]}>
                                  <group name="LeftHandIndex4_end_1" position={[0, 0.03, 0]} />
                                </group>
                              </group>
                            </group>
                          </group>
                          <group name="LeftHandMiddle1_1" position={[-0.01, 0.1, 0]} rotation={[0.08, -0.13, 0.04]}>
                            <group name="LeftHandMiddle2_1" position={[0, 0.05, 0]} rotation={[0.26, -0.01, 0.09]}>
                              <group name="LeftHandMiddle3_1" position={[0, 0.04, 0]} rotation={[0.4, -0.06, -0.08]}>
                                <group name="LeftHandMiddle4_1" position={[0, 0.03, 0]} rotation={[0.05, 0.04, 0]}>
                                  <group name="LeftHandMiddle4_end_1" position={[0, 0.03, 0]} />
                                </group>
                              </group>
                            </group>
                          </group>
                          <group name="LeftHandRing1_1" position={[0.02, 0.1, 0]} rotation={[0.12, -0.12, -0.11]}>
                            <group name="LeftHandRing2_1" position={[0, 0.04, 0]} rotation={[0.38, -0.01, 0.1]}>
                              <group name="LeftHandRing3_1" position={[0, 0.04, 0]} rotation={[0.08, -0.01, 0]}>
                                <group name="LeftHandRing4_1" position={[0, 0.03, 0]} rotation={[0.01, -0.01, 0.04]}>
                                  <group name="LeftHandRing4_end_1" position={[0, 0.03, 0]} />
                                </group>
                              </group>
                            </group>
                          </group>
                          <group name="LeftHandPinky1_1" position={[0.04, 0.09, 0.01]} rotation={[0.18, -0.17, -0.3]}>
                            <group name="LeftHandPinky2_1" position={[0, 0.03, 0]} rotation={[0.29, -0.4, 0.18]}>
                              <group name="LeftHandPinky3_1" position={[0, 0.02, 0]} rotation={[0.25, -0.02, 0.03]}>
                                <group name="LeftHandPinky4_1" position={[0, 0.03, 0]} rotation={[0.28, 0.2, -0.05]}>
                                  <group name="LeftHandPinky4_end_1" position={[0, 0.03, 0]} />
                                </group>
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group name="RightShoulder_1" position={[-0.05, 0.14, -0.01]} rotation={[1.56, 0.04, 1.58]}>
                    <group name="RightArm_1" position={[0, 0.12, 0]} rotation={[1, -0.02, 0.14]}>
                      <group name="RightForeArm_1" position={[0, 0.29, 0]} rotation={[-0.11, -0.02, -0.45]}>
                        <group name="RightHand_1" position={[0, 0.25, 0]} rotation={[0.09, -0.08, 0.04]}>
                          <group name="RightHandThumb1_1" position={[0.03, 0.03, 0.01]} rotation={[0.32, -0.12, -0.85]}>
                            <group name="RightHandThumb2_1" position={[0, 0.04, 0]} rotation={[0.06, 0.17, 0.5]}>
                              <group name="RightHandThumb3_1" position={[0, 0.03, 0]} rotation={[0.02, 0.05, 0.17]}>
                                <group name="RightHandThumb4_1" position={[0, 0.04, 0]} rotation={[0.03, -0.1, 0.02]}>
                                  <group name="RightHandThumb4_end_1" position={[0, 0.04, 0]} />
                                </group>
                              </group>
                            </group>
                          </group>
                          <group name="RightHandIndex1_1" position={[0.04, 0.1, -0.01]} rotation={[0.19, 0.09, -0.15]}>
                            <group name="RightHandIndex2_1" position={[0, 0.04, 0]} rotation={[0.19, 0.01, -0.05]}>
                              <group name="RightHandIndex3_1" position={[0, 0.03, 0]} rotation={[0.17, 0.15, 0.03]}>
                                <group name="RightHandIndex4_1" position={[0, 0.03, 0]} rotation={[0.09, -0.11, 0.02]}>
                                  <group name="RightHandIndex4_end_1" position={[0, 0.03, 0]} />
                                </group>
                              </group>
                            </group>
                          </group>
                          <group name="RightHandMiddle1_1" position={[0.01, 0.1, 0]} rotation={[0.08, 0.13, -0.04]}>
                            <group name="RightHandMiddle2_1" position={[0, 0.05, 0]} rotation={[0.26, 0.01, -0.09]}>
                              <group name="RightHandMiddle3_1" position={[0, 0.04, 0]} rotation={[0.4, 0.06, 0.08]}>
                                <group name="RightHandMiddle4_1" position={[0, 0.03, 0]} rotation={[0.05, -0.04, 0]}>
                                  <group name="RightHandMiddle4_end_1" position={[0, 0.03, 0]} />
                                </group>
                              </group>
                            </group>
                          </group>
                          <group name="RightHandRing1_1" position={[-0.02, 0.1, 0]} rotation={[0.12, 0.12, 0.11]}>
                            <group name="RightHandRing2_1" position={[0, 0.04, 0]} rotation={[0.38, 0.01, -0.1]}>
                              <group name="RightHandRing3_1" position={[0, 0.04, 0]} rotation={[0.08, 0.01, 0]}>
                                <group name="RightHandRing4_1" position={[0, 0.03, 0]} rotation={[0.01, 0.01, -0.04]}>
                                  <group name="RightHandRing4_end_1" position={[0, 0.03, 0]} />
                                </group>
                              </group>
                            </group>
                          </group>
                          <group name="RightHandPinky1_1" position={[-0.04, 0.09, 0.01]} rotation={[0.18, 0.17, 0.3]}>
                            <group name="RightHandPinky2_1" position={[0, 0.03, 0]} rotation={[0.29, 0.4, -0.18]}>
                              <group name="RightHandPinky3_1" position={[0, 0.02, 0]} rotation={[0.25, 0.02, -0.03]}>
                                <group name="RightHandPinky4_1" position={[0, 0.03, 0]} rotation={[0.28, -0.2, 0.05]}>
                                  <group name="RightHandPinky4_end_1" position={[0, 0.03, 0]} />
                                </group>
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="LeftUpLeg_1" position={[0.1, 0.01, 0]} rotation={[-0.02, 0, -3.08]}>
              <group name="LeftLeg_1" position={[0, 0.46, 0]} rotation={[-0.08, 0, -0.01]}>
                <group name="LeftFoot_1" position={[0, 0.44, 0]} rotation={[1.06, 0.03, -0.01]}>
                  <group name="LeftToeBase_1" position={[0, 0.15, 0]} rotation={[0.55, -0.07, 0.06]}>
                    <group name="LeftToe_End_1" position={[0, 0.1, 0]} rotation={[-0.55, 1.54, 0.58]}>
                      <group name="LeftToe_End_end_1" position={[0, 0.1, 0]} />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="RightUpLeg_1" position={[-0.1, 0.01, 0]} rotation={[-0.02, 0, 3.08]}>
              <group name="RightLeg_1" position={[0, 0.46, 0]} rotation={[-0.08, 0, 0.01]}>
                <group name="RightFoot_1" position={[0, 0.44, 0]} rotation={[1.06, -0.03, 0.01]}>
                  <group name="RightToeBase_1" position={[0, 0.15, 0]} rotation={[0.55, 0.07, -0.06]}>
                    <group name="RightToe_End_1" position={[0, 0.1, 0]} rotation={[-0.55, -1.54, -0.58]}>
                      <group name="RightToe_End_end_1" position={[0, 0.1, 0]} />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="Armature" position={[-0.07, -2.42, -0.11]} rotation={[0, 1.21, 0]} scale={3.05}>
          <primitive object={nodes.Hips} />
          <skinnedMesh frustumCulled={false} name="Wolf3D_Body" geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body.skeleton} />
          <skinnedMesh frustumCulled={false} name="Wolf3D_Hair" geometry={nodes.Wolf3D_Hair.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair.skeleton} />
          <skinnedMesh frustumCulled={false} name="Wolf3D_Outfit_Bottom" geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials['Material.003']} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
          <skinnedMesh frustumCulled={false} name="Wolf3D_Outfit_Top" geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials['Material.002']} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
          <skinnedMesh frustumCulled={false} name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials['Wolf3D_Eye.003']} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
          <skinnedMesh frustumCulled={false} name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials['Wolf3D_Eye.003']} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
          <skinnedMesh frustumCulled={false} name="Wolf3D_Beard" geometry={nodes.Wolf3D_Beard.geometry} material={materials['Wolf3D_Beard.003']} skeleton={nodes.Wolf3D_Beard.skeleton} morphTargetDictionary={nodes.Wolf3D_Beard.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Beard.morphTargetInfluences} />
          <skinnedMesh frustumCulled={false} name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
          <skinnedMesh frustumCulled={false} name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />
        </group>
      </group>
    </group>
      <OrbitControls
        ref={controls}
        args={[camera, domElement]}
        enableZoom={true}
        position={[10, 4, 300]}
        maxPolarAngle={2}
        rotateSpeed={0.5}
        maxDistance = {15}
        enableRotate={true}
        enablePan={true} 
        zoomSpeed={0.5}
        enableDamping={false}
        snap={true}
        maxZoom={4}
        
      />
    </>
  

    
  )
}



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
        maxDistance = {15}
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
          <skinnedMesh frustumCulled={false} geometry={nodes.Wolf3D_Hair001.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair001.skeleton} />
          <skinnedMesh frustumCulled={false} geometry={nodes.Wolf3D_Outfit_Bottom001.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom001.skeleton} />
          <skinnedMesh frustumCulled={false} geometry={nodes.Wolf3D_Outfit_Footwear001.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear001.skeleton} />
          <skinnedMesh frustumCulled={false} geometry={nodes.Wolf3D_Outfit_Top001.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top001.skeleton} />
          <skinnedMesh frustumCulled={false} name="EyeLeft001" geometry={nodes.EyeLeft001.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft001.skeleton} morphTargetDictionary={nodes.EyeLeft001.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft001.morphTargetInfluences} />
          <skinnedMesh frustumCulled={false} name="EyeRight001" geometry={nodes.EyeRight001.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight001.skeleton} morphTargetDictionary={nodes.EyeRight001.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight001.morphTargetInfluences} />
          <skinnedMesh frustumCulled={false} name="Wolf3D_Beard001" geometry={nodes.Wolf3D_Beard001.geometry} material={materials.Wolf3D_Beard} skeleton={nodes.Wolf3D_Beard001.skeleton} morphTargetDictionary={nodes.Wolf3D_Beard001.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Beard001.morphTargetInfluences} />
          <skinnedMesh frustumCulled={false} name="Wolf3D_Head001" geometry={nodes.Wolf3D_Head001.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head001.skeleton} morphTargetDictionary={nodes.Wolf3D_Head001.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head001.morphTargetInfluences} />
          <skinnedMesh frustumCulled={false} name="Wolf3D_Teeth001" geometry={nodes.Wolf3D_Teeth001.geometry} material={materials['Wolf3D_Teeth.001']} skeleton={nodes.Wolf3D_Teeth001.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth001.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth001.morphTargetInfluences} />
          </group>
        </group>
      </group>
    </group>
    </>
  )
}
useGLTF.preload('/DPM-CT.gltf')


function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress()
  console.log(progress + 'Progress loaded')
  
  return (
    <>
  
  <Html fullscreen >

   <section className='intro'>          
      <h1>This experience is will challange what's possible and impossible! Prepare yourself and your mouse</h1>  
      <h1>{Math.ceil(progress)}% </h1>
     </section>
 
     </Html>
  </>
  )
}



  export default function App() {

 const mouse = useRef({ x: 0, y: 0 })
  return (
    
    <>
 
      <Canvas  camera={{ position: [0, 0, 2.75], fov: dis }}
      pixelRatio={[1, 2]}
   style={{backgroundColor: "white" , display: "block" , height: "100vh", width: "100vw"}}>
        {/* <Grid /> */}
            

          {/* <ambientLight /> */}
          
          <pointLight position={[0, 0, 10]} />
         
          <Suspense fallback={<Loader />} >
          
          <Creative scale={[0.8,0.8,0.8]}/>
            <Brain />
            {/* <Model mouse={mouse}  scale={[2,2,2]} /> */}
           
              <DPM_WEB mouse={mouse}  scale={[0.8,0.8,0.8]}  position={[-0.08,-4.2,-0]} rotation={[0,0.4,0]} />
          
          </Suspense>
         

      </Canvas>
      </>

  );
}





