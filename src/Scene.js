import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./scene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="82bb1db02f9e4a1289d271600274e503fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Sphere001" position={[-518.06, 328.14, 32295.09]} rotation={[-Math.PI / 2, 0, 0]} scale={0}>
                  <mesh name="Sphere001_01_-_Default_0" geometry={nodes['Sphere001_01_-_Default_0'].geometry} material={materials['01_-_Default']} />
                </group>
                <group name="Group001" position={[-981.27, 606.86, 31021.46]} rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="TextPlus002" position={[48889.05, 0, 48889.04]} rotation={[0, -Math.PI / 4, 0]} scale={[1000, 1624.98, 1000]}>
                    <group name="Object_8" position={[-0.06, 12.73, -4.77]} rotation={[Math.PI / 2, 0, 0]}>
                      <mesh name="TextPlus002_Material_#25_0" geometry={nodes['TextPlus002_Material_#25_0'].geometry} material={materials.Material_25} />
                    </group>
                  </group>
                  <group name="TextPlus003" position={[0.01, 0, 69139.55]} rotation={[0, -1.57, 0]} scale={[1000, 1624.98, 1000]}>
                    <group name="Object_11" position={[-0.06, 12.73, -4.77]} rotation={[Math.PI / 2, 0, 0]}>
                      <mesh name="TextPlus003_Material_#25_0" geometry={nodes['TextPlus003_Material_#25_0'].geometry} material={materials.Material_25} />
                    </group>
                  </group>
                  <group name="TextPlus004" position={[-48889.04, 0, 48889.04]} rotation={[-Math.PI, -Math.PI / 4, -Math.PI]} scale={[1000, 1624.98, 1000]}>
                    <group name="Object_14" position={[-0.06, 12.73, -4.77]} rotation={[Math.PI / 2, 0, 0]}>
                      <mesh name="TextPlus004_Material_#25_0" geometry={nodes['TextPlus004_Material_#25_0'].geometry} material={materials.Material_25} />
                    </group>
                  </group>
                  <group name="TextPlus005" position={[-69139.55, 0, 0.01]} rotation={[-Math.PI, 0, -Math.PI]} scale={[1000, 1624.98, 1000]}>
                    <group name="Object_17" position={[-0.06, 12.73, -4.77]} rotation={[Math.PI / 2, 0, 0]}>
                      <mesh name="TextPlus005_Material_#25_0" geometry={nodes['TextPlus005_Material_#25_0'].geometry} material={materials.Material_25} />
                    </group>
                  </group>
                  <group name="TextPlus008" position={[48889.02, 0, -48889.07]} rotation={[0, Math.PI / 4, 0]} scale={[1000, 1624.98, 1000]}>
                    <group name="Object_20" position={[-0.06, 12.73, -4.77]} rotation={[Math.PI / 2, 0, 0]}>
                      <mesh name="TextPlus008_Material_#25_0" geometry={nodes['TextPlus008_Material_#25_0'].geometry} material={materials.Material_25} />
                    </group>
                  </group>
                  <group name="TextPlus007" position={[-0.03, 0, -69139.55]} rotation={[0, 1.57, 0]} scale={[1000, 1624.98, 1000]}>
                    <group name="Object_23" position={[-0.06, 12.73, -4.77]} rotation={[Math.PI / 2, 0, 0]}>
                      <mesh name="TextPlus007_Material_#25_0" geometry={nodes['TextPlus007_Material_#25_0'].geometry} material={materials.Material_25} />
                    </group>
                  </group>
                  <group name="TextPlus006" position={[-48889.05, 0, -48889.03]} rotation={[-Math.PI, Math.PI / 4, -Math.PI]} scale={[1000, 1624.98, 1000]}>
                    <group name="Object_26" position={[-0.06, 12.73, -4.77]} rotation={[Math.PI / 2, 0, 0]}>
                      <mesh name="TextPlus006_Material_#25_0" geometry={nodes['TextPlus006_Material_#25_0'].geometry} material={materials.Material_25} />
                    </group>
                  </group>
                  <group name="TextPlus001" position={[69139.55, 0, 0]} scale={[1000, 1624.98, 1000]}>
                    <group name="Object_29" position={[-0.06, 12.73, -4.77]} rotation={[Math.PI / 2, 0, 0]}>
                      <mesh name="TextPlus001_Material_#25_0" geometry={nodes['TextPlus001_Material_#25_0'].geometry} material={materials.Material_25} />
                    </group>
                  </group>
                </group>
                <group name="background" position={[-518.05, 328.14, -122660.22]} scale={[1.33, 1.33, 1.46]}>
                  <group name="Object_32" position={[0, 0, -9747.56]}>
                    <mesh name="background_Material_#26_0" geometry={nodes['background_Material_#26_0'].geometry} material={materials.Material_26} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./scene.gltf')
