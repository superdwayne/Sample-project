import React, { useRef, useEffect } from 'react'
import { useGLTF, OrbitControls, PointerLockControls } from '@react-three/drei'
import { useFrame } from 'react-three-fiber'
import * as THREE from "three";
import Grid from "./grid";
import getMouseDegrees from './Hooks/utils';

function moveJoint(mouse, joint, degreeLimit = 40) {
  let degrees = getMouseDegrees(mouse.x, mouse.y, degreeLimit)
  joint.rotation.xD = THREE.MathUtils.lerp(joint.rotation.xD || 0, degrees.y, 0.1)
  joint.rotation.yD = THREE.MathUtils.lerp(joint.rotation.yD || 0, degrees.x, 0.1)
  joint.rotation.x = THREE.Math.degToRad(joint.rotation.xD)
  joint.rotation.y = THREE.Math.degToRad(joint.rotation.yD)
}


export default function Model({ ...props }) {


  useFrame((state, delta) => {
    //const mouse = { x: size.width / 2 + (state.mouse.x * size.width) / 2, y: size.height / 2 + (-state.mouse.y * size.height) / 2 }
    console.log("hh")
    // moveJoint(mouse, nodes.mixamorigNeck)
    // moveJoint(mouse, nodes.mixamorigSpine)
  })

// const {movementX, movementY } = useMouse()

const leftEye = useRef()
const group = useRef()
const { nodes, materials } = useGLTF('../dpm-head.glb')


useEffect(() => {
    group.current.scale.x = 9.5
    group.current.scale.y = 9.5
    group.current.scale.z = 9.5
     },[]); 
    //  console.log("eye X" , leftEye.current.rotation.x = movementX)
    //  console.log("eye Y" , leftEye.current.rotation.y = movementY)

   //  console.log(movementX, movementY)

  
    //  let radians = Math.atan2(movementX, movementY)
    //  let degrees = radians * (180 / Math.PI) * -1 + 180;

   
  return (
    <>
      
      {/* <Grid size={10} /> */}
      <OrbitControls />
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        position={[0, -2.11, 0.52]}
        scale={1.47}
      />
      
      <mesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={nodes.EyeLeft.material}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        position={[0, -2.11, 0.52]}
        scale={1.47}
        ref={leftEye} 
      />
      <mesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={nodes.EyeRight.material}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        position={[0, -2.11, 0.52]}
        scale={1.47}
      />
      <mesh
        name="Wolf3D_Beard"
        geometry={nodes.Wolf3D_Beard.geometry}
        material={materials.Wolf3D_Beard}
        morphTargetDictionary={nodes.Wolf3D_Beard.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Beard.morphTargetInfluences}
        position={[0, -2.11, 0.52]}
        scale={1.47}
      
      />
      <mesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        position={[0, -2.11, 0.52]}
        scale={1.47}
      />
      <mesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        position={[0, -2.11, 0.52]}
        scale={1.47}
      />
    </group>

  
      </>
  )
}

