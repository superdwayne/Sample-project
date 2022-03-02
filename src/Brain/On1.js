import { useFrame,  } from '@react-three/fiber'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/on1.glb')
 
  // useFrame(() => {

  //   group.current.rotation.x += 0.01  
  //   group.current.rotation.y += 0.01
  //   group.current.rotation.z += 0.01

  //     })
    

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0.02, 0, 0.01]} scale={0.01}>
          <mesh geometry={nodes.Sphere006_0.geometry} material={materials['Planet_MAT.006']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/on1.glb')
