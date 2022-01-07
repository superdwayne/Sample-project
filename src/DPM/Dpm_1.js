import React, { useRef,useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {

  useEffect(() => {
    actions.STAND.play()
  })
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('../dpm_move3.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[2.83, -0.12, -0.37]}>
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
      <group name="Armature001" position={[0.41, -0.05, 0.02]}>
        <group position={[-0.5, 1.02, 0.05]} rotation={[0.06, 0, -0.01]}>
          <group position={[0, 0.1, 0]} rotation={[-0.14, 0, 0]}>
            <group position={[0, 0.13, 0]} rotation={[-0.06, 0.01, 0.01]}>
              <group position={[0, 0.12, 0]} rotation={[0.09, 0.01, 0.01]}>
                <group position={[0, 0.16, 0]} rotation={[0.64, 0.03, -0.06]}>
                  <group position={[0, 0.12, 0]} rotation={[-0.51, -0.1, 0.05]}>
                    <group position={[0, 0.23, 0.04]} rotation={[-0.01, 0, 0]} />
                    <group position={[0.03, 0.09, 0.08]} rotation={[-0.01, 0, 0]} />
                    <group position={[-0.03, 0.09, 0.08]} rotation={[-0.01, 0, 0]} />
                  </group>
                </group>
                <group position={[0.05, 0.14, -0.01]} rotation={[1.6, 0.09, -1.56]}>
                  <group position={[0, 0.12, 0]} rotation={[1.49, 0.69, -0.17]}>
                    <group position={[0, 0.29, 0]} rotation={[0, -0.01, 0.44]}>
                      <group position={[0, 0.25, 0]} rotation={[-0.13, 0.03, -0.05]}>
                        <group position={[-0.03, 0.03, 0.01]} rotation={[0.12, 0.12, 0.57]}>
                          <group position={[0, 0.04, 0]} rotation={[0.06, -0.34, -0.27]}>
                            <group position={[0, 0.03, 0]} rotation={[0, -0.05, 0]}>
                              <group position={[0, 0.04, 0]} rotation={[0.03, 0.1, -0.02]} />
                            </group>
                          </group>
                        </group>
                        <group position={[-0.04, 0.1, -0.01]} rotation={[0.33, -0.22, 0.06]}>
                          <group position={[0, 0.04, 0]} rotation={[0.52, 0, 0.05]}>
                            <group position={[0, 0.03, 0]} rotation={[0, -0.15, 0]}>
                              <group position={[0, 0.03, 0]} rotation={[0.09, 0.11, -0.02]} />
                            </group>
                          </group>
                        </group>
                        <group position={[-0.01, 0.1, 0]} rotation={[0.49, -0.21, 0.13]}>
                          <group position={[0, 0.05, 0]} rotation={[0.34, -0.01, 0.06]}>
                            <group position={[0, 0.04, 0]} rotation={[0, -0.05, 0]}>
                              <group position={[0, 0.03, 0]} rotation={[0.05, 0.04, 0]} />
                            </group>
                          </group>
                        </group>
                        <group position={[0.02, 0.1, 0]} rotation={[0.45, -0.21, 0.18]}>
                          <group position={[0, 0.04, 0]} rotation={[0.57, 0, 0.11]}>
                            <group position={[0, 0.04, 0]} rotation={[0, -0.01, 0]}>
                              <group position={[0, 0.03, 0]} rotation={[0.01, -0.01, 0.04]} />
                            </group>
                          </group>
                        </group>
                        <group position={[0.04, 0.09, 0.01]} rotation={[0.34, -0.13, 0.17]}>
                          <group position={[0, 0.03, 0]} rotation={[0.91, -0.36, 0.16]}>
                            <group position={[0, 0.02, 0]} rotation={[0, -0.02, 0]}>
                              <group position={[0, 0.03, 0]} rotation={[0.28, 0.2, -0.05]} />
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
                <group position={[-0.05, 0.14, -0.01]} rotation={[1.62, -0.1, 1.48]}>
                  <group position={[0, 0.12, 0]} rotation={[1.42, -0.67, 0.14]}>
                    <group position={[0, 0.29, 0]} rotation={[-0.01, 0.12, -0.47]}>
                      <group position={[0, 0.25, 0]} rotation={[0.01, -0.21, 0.19]}>
                        <group position={[0.03, 0.03, 0.01]} rotation={[0.19, 0.25, -0.66]}>
                          <group position={[0, 0.04, 0]} rotation={[0.07, 0.24, 0.31]}>
                            <group position={[0, 0.03, 0]} rotation={[0, 0.05, 0]}>
                              <group position={[0, 0.04, 0]} rotation={[0.03, -0.1, 0.02]} />
                            </group>
                          </group>
                        </group>
                        <group position={[0.04, 0.1, -0.01]} rotation={[0.38, 0.26, -0.23]}>
                          <group position={[0, 0.04, 0]} rotation={[0.3, 0.01, -0.02]}>
                            <group position={[0, 0.03, 0]} rotation={[0, 0.15, 0]}>
                              <group position={[0, 0.03, 0]} rotation={[0.09, -0.11, 0.02]} />
                            </group>
                          </group>
                        </group>
                        <group position={[0.01, 0.1, 0]} rotation={[0.28, 0.18, -0.2]}>
                          <group position={[0, 0.05, 0]} rotation={[0.54, 0, -0.08]}>
                            <group position={[0, 0.04, 0]} rotation={[0, 0.05, 0]}>
                              <group position={[0, 0.03, 0]} rotation={[0.05, -0.04, 0]} />
                            </group>
                          </group>
                        </group>
                        <group position={[-0.02, 0.1, 0]} rotation={[0.38, 0.32, -0.21]}>
                          <group position={[0, 0.04, 0]} rotation={[0.69, -0.02, -0.14]}>
                            <group position={[0, 0.04, 0]} rotation={[0, 0.01, 0]}>
                              <group position={[0, 0.03, 0]} rotation={[0.01, 0.01, -0.04]} />
                            </group>
                          </group>
                        </group>
                        <group position={[-0.04, 0.09, 0.01]} rotation={[0.44, 0.09, -0.31]}>
                          <group position={[0, 0.03, 0]} rotation={[0.65, 0.38, -0.15]}>
                            <group position={[0, 0.02, 0]} rotation={[0, 0.02, 0]}>
                              <group position={[0, 0.03, 0]} rotation={[0.28, -0.2, 0.05]} />
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
          <group position={[0.1, 0.01, 0]} rotation={[-0.12, -0.12, -3.06]}>
            <group position={[0, 0.46, 0]} rotation={[-0.26, 0, -0.01]}>
              <group position={[0, 0.44, 0]} rotation={[1.16, -0.12, 0.18]}>
                <group position={[0, 0.15, 0]} rotation={[0.55, -0.07, 0.06]}>
                  <group position={[0, 0.1, 0]} rotation={[-0.55, 1.54, 0.58]} />
                </group>
              </group>
            </group>
          </group>
          <group position={[-0.1, 0.01, 0]} rotation={[-0.22, -0.24, 3.06]}>
            <group position={[0, 0.46, 0]} rotation={[-0.3, 0, 0.01]}>
              <group position={[0, 0.44, 0]} rotation={[1.11, -0.02, -0.02]}>
                <group position={[0, 0.15, 0]} rotation={[0.55, 0.08, -0.06]}>
                  <group position={[0, 0.1, 0]} rotation={[-0.55, -1.54, -0.58]} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
      <group name="2nd_avatar" position={[2.83, -0.12, -0.37]}>
        <primitive object={nodes.Hips_1} />
        <skinnedMesh
          geometry={nodes.EyeLeft002.geometry}
          material={nodes.EyeLeft002.material}
          skeleton={nodes.EyeLeft002.skeleton}
        />
        <skinnedMesh
          geometry={nodes.EyeRight002.geometry}
          material={nodes.EyeRight002.material}
          skeleton={nodes.EyeRight002.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Body002.geometry}
          material={materials['Wolf3D_Body.004']}
          skeleton={nodes.Wolf3D_Body002.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Hair001.geometry}
          material={materials.Wolf3D_Hair}
          skeleton={nodes.Wolf3D_Hair001.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Bottom002.geometry}
          material={materials['Wolf3D_Outfit_Bottom.002']}
          skeleton={nodes.Wolf3D_Outfit_Bottom002.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Footwear002.geometry}
          material={materials['Wolf3D_Outfit_Footwear.002']}
          skeleton={nodes.Wolf3D_Outfit_Footwear002.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top002.geometry}
          material={materials['Wolf3D_Outfit_Top.002']}
          skeleton={nodes.Wolf3D_Outfit_Top002.skeleton}
        />
        <skinnedMesh
          name="Wolf3D_Beard001"
          geometry={nodes.Wolf3D_Beard001.geometry}
          material={materials.Wolf3D_Beard}
          skeleton={nodes.Wolf3D_Beard001.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Beard001.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Beard001.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Head002"
          geometry={nodes.Wolf3D_Head002.geometry}
          material={materials['Wolf3D_Skin.002']}
          skeleton={nodes.Wolf3D_Head002.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head002.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head002.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Teeth002"
          geometry={nodes.Wolf3D_Teeth002.geometry}
          material={materials['Wolf3D_Teeth.004']}
          skeleton={nodes.Wolf3D_Teeth002.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth002.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth002.morphTargetInfluences}
        />
      </group>
    </group>
  )
}

useGLTF.preload('../dpm_move3.glb')
