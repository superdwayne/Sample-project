import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('./lens.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-0.00, -0.02, -0.00]} rotation={[Math.PI / 2, 0, 0]} scale={0.0001}>
          <group rotation={[-1.57, 0, 0]} scale={[4.5, 48.86, 48.86]}>
            <mesh geometry={nodes.Lens.geometry} material={materials.material} position={[-4.88, 1.38, 0.67]} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./lens.glb')
