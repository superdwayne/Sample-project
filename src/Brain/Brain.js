import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'



export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/brain.glb')


  return (
    <>    
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0, 0.01]} rotation={[-1.53, 0, 0]} scale={[0.01, 0.01, 0.01]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={10}>
            <mesh geometry={nodes.Icosphere__0.geometry} material={materials['Scene_-_Root.001']} />
          </group>
        </group>
      </group>
    </group>
    </>

  )
}

useGLTF.preload('/brain.glb')
