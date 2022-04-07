import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function ModelZZ({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('https://cdn-static.farfetch-contents.com/Content/UP/EXPERIENCE/Metaverse/DPM-X-Nike.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null} position={[0, 0.23, 0.24]} rotation={[0, 0, 0]} scale={1}>
      <group>
        <group >
          <group>
            <mesh geometry={nodes.Object_2.geometry} material={materials['StingrayPBS1SG.001']} position={[0, -0.60, 0]} scale={1} />
          </group>
        </group>
        <group>
          <group>
            <mesh geometry={nodes.Object_2001.geometry} material={materials['StingrayPBS1SG.001']} position={[22.5, 15.63, -6.69]} rotation={[0.13, -0.01, -2.92]} scale={1} />
          </group>
        </group>
        <group>
          <primitive object={nodes.Hips}  />
          <skinnedMesh geometry={nodes.Wolf3D_Facewear001.geometry} material={materials.Wolf3D_Facewear} skeleton={nodes.Wolf3D_Facewear001.skeleton} />
          <skinnedMesh geometry={nodes.Wolf3D_Glasses001.geometry} material={materials['Wolf3D_Glasses.002']} skeleton={nodes.Wolf3D_Glasses001.skeleton} />
          <skinnedMesh geometry={nodes.Wolf3D_Hair001.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair001.skeleton} />
          <skinnedMesh geometry={nodes.Wolf3D_Outfit_Bottom001.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom001.skeleton} />
          <skinnedMesh geometry={nodes.Wolf3D_Outfit_Top001.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top001.skeleton} />
          <skinnedMesh name="EyeLeft001" geometry={nodes.EyeLeft001.geometry} material={materials['Wolf3D_Eye.002']} skeleton={nodes.EyeLeft001.skeleton} morphTargetDictionary={nodes.EyeLeft001.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft001.morphTargetInfluences} />
          <skinnedMesh name="EyeRight001" geometry={nodes.EyeRight001.geometry} material={materials['Wolf3D_Eye.002']} skeleton={nodes.EyeRight001.skeleton} morphTargetDictionary={nodes.EyeRight001.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight001.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Head001" geometry={nodes.Wolf3D_Head001.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head001.skeleton} morphTargetDictionary={nodes.Wolf3D_Head001.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head001.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Teeth001" geometry={nodes.Wolf3D_Teeth001.geometry} material={materials['Wolf3D_Teeth.002']} skeleton={nodes.Wolf3D_Teeth001.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth001.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth001.morphTargetInfluences} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('https://cdn-static.farfetch-contents.com/Content/UP/EXPERIENCE/Metaverse/DPM-X-Nike.glb')
