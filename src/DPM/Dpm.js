import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

import { useXR, useXREvent } from '@react-three/xr'

export default function Model({ ...props }) {

  const { player } = useXR()
 
  console.log(player)
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/dpm_move2.glb')
  const { actions } = useAnimations(animations, group)

  useXREvent(
    "squeeze",
    (e) => {
      console.log(e.controller.hand.rotation.x)
      player.rotation.y += 1000
    },
  )

  useXREvent(
    "select",
    (e) => {
      actions.MOVE.play()
    },
  )


  // useXRFrame((time, xrFrame) => {
  //   actions.MOVE.play()
  //   } , [])
  
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Armature001" >
        <primitive object={nodes.Hips} />
        <skinnedMesh
          geometry={nodes.Wolf3D_Body001.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body001.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Facewear001.geometry}
          material={materials.Wolf3D_Facewear}
          skeleton={nodes.Wolf3D_Facewear001.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Headwear001.geometry}
          material={materials.Wolf3D_Headwear}
          skeleton={nodes.Wolf3D_Headwear001.skeleton}
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
          material={materials['Wolf3D_Teeth.001']}
          skeleton={nodes.Wolf3D_Teeth001.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth001.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth001.morphTargetInfluences}
        />
      </group>
    </group>
  )
}



useGLTF.preload('../dpm_move2.glb')
