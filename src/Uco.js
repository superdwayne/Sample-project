

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/uco.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature003" position={[1.23, -0.05, -0.26]} scale={[1.05, 0.91, 0.91]}>
          <group name="Hips_2" position={[0, 1.04, 0.04]} rotation={[-0.06, 0, 0]}>
            <group name="Spine_2" position={[0, 0.1, 0]} rotation={[-0.03, 0, 0]}>
              <group name="Spine1_2" position={[0, 0.09, 0]} rotation={[-0.07, 0, 0]}>
                <group name="Spine2_2" position={[0, 0.12, 0]} rotation={[0.13, 0, 0]}>
                  <group name="Neck_2" position={[0, 0.12, 0]} rotation={[0.28, 0, 0]}>
                    <group name="Head_2" position={[0, 0.09, 0]} rotation={[-0.11, 0, 0]}>
                      <group name="HeadTop_End_2" position={[0, 0.18, 0]} rotation={[-0.15, 0, 0]} />
                      <group name="LeftEye_2" position={[0.03, 0.08, 0.07]} rotation={[-0.14, 0, 0]} />
                      <group name="RightEye_2" position={[-0.03, 0.08, 0.07]} rotation={[-0.14, 0, 0]} />
                    </group>
                  </group>
                  <group name="LeftShoulder_2" position={[0.06, 0.1, -0.01]} rotation={[1.52, -0.15, -1.75]}>
                    <group name="LeftArm_2" position={[0, 0.07, 0]} rotation={[0.79, 0.16, 0.02]}>
                      <group name="LeftForeArm_2" position={[0, 0.27, 0]} rotation={[0.03, -0.01, 0.48]}>
                        <group name="LeftHand_2" position={[0, 0.26, 0]} rotation={[0.02, -0.24, -0.08]}>
                          <group name="LeftHandThumb1_2" position={[-0.02, 0.01, 0.02]} rotation={[0.33, 0.14, 0.74]}>
                            <group name="LeftHandThumb2_2" position={[0, 0.03, 0]} rotation={[0.06, -0.05, -0.44]}>
                              <group name="LeftHandThumb3_2" position={[0, 0.03, 0]} rotation={[0.13, 0, -0.13]}>
                                <group name="LeftHandThumb4_2" position={[0, 0.03, 0]} rotation={[-0.07, 0.06, 0.09]} />
                              </group>
                            </group>
                          </group>
                          <group name="LeftHandIndex1_2" position={[-0.02, 0.09, 0.01]} rotation={[0.21, -0.01, 0.15]}>
                            <group name="LeftHandIndex2_2" position={[0, 0.03, 0]} rotation={[0.36, 0.06, -0.06]}>
                              <group name="LeftHandIndex3_2" position={[0, 0.03, 0]} rotation={[0.27, -0.1, -0.05]}>
                                <group name="LeftHandIndex4_2" position={[0, 0.03, 0]} rotation={[-0.13, 0.09, -0.06]} />
                              </group>
                            </group>
                          </group>
                          <group name="LeftHandMiddle1_2" position={[0, 0.08, 0.01]} rotation={[0.21, -0.01, -0.05]}>
                            <group name="LeftHandMiddle2_2" position={[0, 0.04, 0]} rotation={[0.3, 0.06, 0.07]}>
                              <group name="LeftHandMiddle3_2" position={[0, 0.03, 0]} rotation={[0.29, -0.01, 0.02]}>
                                <group name="LeftHandMiddle4_2" position={[0, 0.02, 0]} rotation={[-0.16, 0.01, -0.05]} />
                              </group>
                            </group>
                          </group>
                          <group name="LeftHandRing1_2" position={[0.02, 0.09, 0.01]} rotation={[0.28, 0.02, -0.17]}>
                            <group name="LeftHandRing2_2" position={[0, 0.03, 0]} rotation={[0.35, 0.05, 0.06]}>
                              <group name="LeftHandRing3_2" position={[0, 0.03, 0]} rotation={[0.06, -0.03, -0.04]}>
                                <group name="LeftHandRing4_2" position={[0, 0.02, 0]} rotation={[-0.03, 0.01, 0.04]} />
                              </group>
                            </group>
                          </group>
                          <group name="LeftHandPinky1_2" position={[0.03, 0.08, 0.01]} rotation={[0.4, -0.03, -0.39]}>
                            <group name="LeftHandPinky2_2" position={[0, 0.03, 0]} rotation={[0.17, 0.08, 0.14]}>
                              <group name="LeftHandPinky3_2" position={[0, 0.02, 0]} rotation={[0.2, -0.07, -0.02]}>
                                <group name="LeftHandPinky4_2" position={[0, 0.01, 0]} rotation={[-0.08, 0.04, 0.02]} />
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group name="RightShoulder_2" position={[-0.06, 0.1, -0.01]} rotation={[1.52, 0.15, 1.75]}>
                    <group name="RightArm_2" position={[0, 0.07, 0]} rotation={[0.79, -0.16, -0.02]}>
                      <group name="RightForeArm_2" position={[0, 0.27, 0]} rotation={[0.03, 0.01, -0.48]}>
                        <group name="RightHand_2" position={[0, 0.26, 0]} rotation={[0.02, 0.24, 0.08]}>
                          <group name="RightHandThumb1_2" position={[0.02, 0.01, 0.02]} rotation={[0.33, -0.14, -0.74]}>
                            <group name="RightHandThumb2_2" position={[0, 0.03, 0]} rotation={[0.06, 0.05, 0.44]}>
                              <group name="RightHandThumb3_2" position={[0, 0.03, 0]} rotation={[0.13, 0, 0.13]}>
                                <group name="RightHandThumb4_2" position={[0, 0.03, 0]} rotation={[-0.07, -0.06, -0.09]} />
                              </group>
                            </group>
                          </group>
                          <group name="RightHandIndex1_2" position={[0.02, 0.09, 0.01]} rotation={[0.21, 0.01, -0.15]}>
                            <group name="RightHandIndex2_2" position={[0, 0.03, 0]} rotation={[0.36, -0.06, 0.06]}>
                              <group name="RightHandIndex3_2" position={[0, 0.03, 0]} rotation={[0.27, 0.1, 0.05]}>
                                <group name="RightHandIndex4_2" position={[0, 0.03, 0]} rotation={[-0.13, -0.09, 0.06]} />
                              </group>
                            </group>
                          </group>
                          <group name="RightHandMiddle1_2" position={[0, 0.08, 0.01]} rotation={[0.21, 0.01, 0.05]}>
                            <group name="RightHandMiddle2_2" position={[0, 0.04, 0]} rotation={[0.3, -0.06, -0.07]}>
                              <group name="RightHandMiddle3_2" position={[0, 0.03, 0]} rotation={[0.29, 0.01, -0.02]}>
                                <group name="RightHandMiddle4_2" position={[0, 0.02, 0]} rotation={[-0.16, -0.01, 0.05]} />
                              </group>
                            </group>
                          </group>
                          <group name="RightHandRing1_2" position={[-0.02, 0.09, 0.01]} rotation={[0.28, -0.02, 0.17]}>
                            <group name="RightHandRing2_2" position={[0, 0.03, 0]} rotation={[0.35, -0.05, -0.06]}>
                              <group name="RightHandRing3_2" position={[0, 0.03, 0]} rotation={[0.06, 0.03, 0.04]}>
                                <group name="RightHandRing4_2" position={[0, 0.02, 0]} rotation={[-0.03, -0.01, -0.04]} />
                              </group>
                            </group>
                          </group>
                          <group name="RightHandPinky1_2" position={[-0.03, 0.08, 0.01]} rotation={[0.4, 0.03, 0.39]}>
                            <group name="RightHandPinky2_2" position={[0, 0.03, 0]} rotation={[0.17, -0.08, -0.14]}>
                              <group name="RightHandPinky3_2" position={[0, 0.02, 0]} rotation={[0.2, 0.07, 0.02]}>
                                <group name="RightHandPinky4_2" position={[0, 0.01, 0]} rotation={[-0.08, -0.04, -0.02]} />
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
            <group name="LeftUpLeg_2" position={[0.1, -0.02, 0]} rotation={[0.11, 0, -3.07]}>
              <group name="LeftLeg_2" position={[0, 0.45, 0]} rotation={[-0.08, 0, 0]}>
                <group name="LeftFoot_2" position={[0, 0.45, 0]} rotation={[1.04, -0.06, -0.04]}>
                  <group name="LeftToeBase_2" position={[0, 0.16, 0]} rotation={[0.67, 0, 0.06]}>
                    <group name="LeftToe_End_2" position={[0, 0.08, 0]} rotation={[1.66, 1.51, -1.67]} />
                  </group>
                </group>
              </group>
            </group>
            <group name="RightUpLeg_2" position={[-0.1, -0.02, 0]} rotation={[0.11, 0, 3.07]}>
              <group name="RightLeg_2" position={[0, 0.45, 0]} rotation={[-0.08, 0, 0]}>
                <group name="RightFoot_2" position={[0, 0.45, 0]} rotation={[1.04, 0.06, 0.04]}>
                  <group name="RightToeBase_2" position={[0, 0.16, 0]} rotation={[0.67, 0, -0.06]}>
                    <group name="RightToe_End_2" position={[0, 0.08, 0]} rotation={[1.67, -1.51, 1.68]} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="Armature001" position={[-0.02, -0.03, -0.13]}>
          <primitive object={nodes.Hips} />
          <skinnedMesh name="Wolf3D_Body" geometry={nodes.Wolf3D_Body.geometry} material={materials.He} skeleton={nodes.Wolf3D_Body.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Bottom" geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials['Wolf3D_Outfit_Bottom.004']} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Top009" geometry={nodes.Wolf3D_Outfit_Top009.geometry} material={materials['Wolf3D_Outfit_Top.002']} skeleton={nodes.Wolf3D_Outfit_Top009.skeleton} />
        </group>
        <group name="Sketchfab_model015" position={[0.18, 1.03, -0.75]} rotation={[-Math.PI / 2, 0, -2.58]} scale={0}>
          <group name="eb49abe8c5944e858b8f43f63a79ca5ffbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="RootNode002">
              <group name="Ophidia_GG_backpack" position={[-12.81, -42.56, 46.94]}>
                <group name="bag" position={[-12.81, 16.87, 8.42]}>
                  <group name="bag_Mat1_0054" position={[310.93, 135.37, 83.78]} rotation={[0, -0.39, 0]} scale={0.52}>
                    <mesh name="bag_Mat1_0054_1" geometry={nodes.bag_Mat1_0054_1.geometry} material={materials['Mat.002']} />
                    <mesh name="bag_Mat1_0054_2" geometry={nodes.bag_Mat1_0054_2.geometry} material={materials['Head.012']} />
                    <mesh name="bag_Mat1_0054_3" geometry={nodes.bag_Mat1_0054_3.geometry} material={materials['Head.013']} />
                    <mesh name="bag_Mat1_0054_4" geometry={nodes.bag_Mat1_0054_4.geometry} material={materials['metal.001']} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model010" position={[0.2, -0.11, -0.72]} rotation={[-Math.PI / 2, 0, 0]} scale={0.17}>
          <group name="2b009d59d9cf477ba21221be5bf285b3fbx010" rotation={[Math.PI / 2, 0, 0]}>
            <group name="RootNode1009" />
          </group>
        </group>
        <group name="Armature002" position={[-0.02, 0, -0.13]}>
          <group name="Hips_3" position={[-0.13, 0.95, -0.43]} rotation={[-0.07, -0.08, -0.06]}>
            <group name="Spine_3" position={[0, 0.09, 0]} rotation={[-0.01, 0.01, 0.04]}>
              <group name="Spine1_3" position={[0, 0.08, 0]} rotation={[-0.03, 0.02, 0.07]}>
                <group name="Spine2_3" position={[0, 0.11, 0]} rotation={[0.17, 0.03, 0.07]}>
                  <group name="Neck_3" position={[0, 0.11, 0]} rotation={[0.1, 0, -0.01]}>
                    <group name="Head_3" position={[0, 0.08, 0]} rotation={[-0.03, 0, -0.11]}>
                      <group name="HeadTop_End_3" position={[0, 0.16, 0]} rotation={[-0.15, 0, 0]} />
                      <group name="LeftEye_3" position={[0.04, 0.07, 0.07]} rotation={[-0.14, 0, 0]} />
                      <group name="RightEye_3" position={[-0.04, 0.07, 0.07]} rotation={[-0.14, 0, 0]} />
                    </group>
                  </group>
                  <group name="LeftShoulder_3" position={[0.07, 0.1, -0.01]} rotation={[1.55, -0.14, -1.62]}>
                    <group name="LeftArm_3" position={[0, 0.07, 0]} rotation={[1.37, 0.52, -0.03]}>
                      <group name="LeftForeArm_3" position={[0, 0.26, 0]} rotation={[-0.28, -0.01, 0.19]}>
                        <group name="LeftHand_3" position={[0, 0.24, 0]} rotation={[-0.29, -0.46, 0.05]}>
                          <group name="LeftHandThumb1_3" position={[-0.02, 0.01, 0.02]} rotation={[0.64, 0.18, 0.41]}>
                            <group name="LeftHandThumb2_3" position={[0, 0.03, 0]} rotation={[-0.04, -0.02, -0.31]}>
                              <group name="LeftHandThumb3_3" position={[0, 0.03, 0]} rotation={[0.03, 0.02, 0.04]}>
                                <group name="LeftHandThumb4_3" position={[0, 0.03, 0]} rotation={[-0.06, 0.06, 0.08]} />
                              </group>
                            </group>
                          </group>
                          <group name="LeftHandIndex1_3" position={[-0.02, 0.08, 0.01]} rotation={[0.28, -0.13, -0.12]}>
                            <group name="LeftHandIndex2_3" position={[0, 0.03, 0]} rotation={[0.4, 0.06, -0.06]}>
                              <group name="LeftHandIndex3_3" position={[0, 0.03, 0]} rotation={[0.04, -0.1, 0]}>
                                <group name="LeftHandIndex4_3" position={[0, 0.02, 0]} rotation={[0.02, 0.08, -0.07]} />
                              </group>
                            </group>
                          </group>
                          <group name="LeftHandMiddle1_3" position={[0, 0.08, 0.01]} rotation={[0.3, -0.03, -0.09]}>
                            <group name="LeftHandMiddle2_3" position={[0, 0.04, 0]} rotation={[0.2, 0.05, 0.03]}>
                              <group name="LeftHandMiddle3_3" position={[0, 0.03, 0]} rotation={[0.07, -0.02, 0]}>
                                <group name="LeftHandMiddle4_3" position={[0, 0.02, 0]} rotation={[-0.07, 0.01, -0.05]} />
                              </group>
                            </group>
                          </group>
                          <group name="LeftHandRing1_3" position={[0.01, 0.08, 0.01]} rotation={[0.53, 0.03, -0.13]}>
                            <group name="LeftHandRing2_3" position={[0, 0.03, 0]} rotation={[0.17, 0.04, 0.04]}>
                              <group name="LeftHandRing3_3" position={[0, 0.03, 0]} rotation={[0.04, -0.02, -0.01]}>
                                <group name="LeftHandRing4_3" position={[0, 0.02, 0]} rotation={[-0.17, 0, 0.03]} />
                              </group>
                            </group>
                          </group>
                          <group name="LeftHandPinky1_3" position={[0.03, 0.07, 0.01]} rotation={[0.68, 0.05, -0.23]}>
                            <group name="LeftHandPinky2_3" position={[0, 0.03, 0]} rotation={[0.21, 0.08, 0.12]}>
                              <group name="LeftHandPinky3_3" position={[0, 0.02, 0]} rotation={[0.04, -0.07, -0.02]}>
                                <group name="LeftHandPinky4_3" position={[0, 0.01, 0]} rotation={[-0.12, 0.04, 0.03]} />
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group name="RightShoulder_3" position={[-0.07, 0.1, -0.01]} rotation={[1.55, 0.04, 1.65]}>
                    <group name="RightArm_3" position={[0, 0.07, 0]} rotation={[1.46, -0.61, 0.17]}>
                      <group name="RightForeArm_3" position={[0, 0.26, 0]} rotation={[-0.28, 0.01, -0.22]}>
                        <group name="RightHand_3" position={[0, 0.24, 0]} rotation={[-0.64, 0.59, 0.2]}>
                          <group name="RightHandThumb1_3" position={[0.02, 0.01, 0.02]} rotation={[0.6, -0.09, -0.37]}>
                            <group name="RightHandThumb2_3" position={[0, 0.03, 0]} rotation={[0, 0.04, 0.37]}>
                              <group name="RightHandThumb3_3" position={[0, 0.03, 0]} rotation={[0.03, -0.02, -0.04]}>
                                <group name="RightHandThumb4_3" position={[0, 0.03, 0]} rotation={[-0.07, -0.06, -0.08]} />
                              </group>
                            </group>
                          </group>
                          <group name="RightHandIndex1_3" position={[0.02, 0.08, 0.01]} rotation={[0.29, 0.13, 0.06]}>
                            <group name="RightHandIndex2_3" position={[0, 0.03, 0]} rotation={[0.26, -0.06, 0.05]}>
                              <group name="RightHandIndex3_3" position={[0, 0.03, 0]} rotation={[0.03, 0.1, 0]}>
                                <group name="RightHandIndex4_3" position={[0, 0.02, 0]} rotation={[0.03, -0.08, 0.07]} />
                              </group>
                            </group>
                          </group>
                          <group name="RightHandMiddle1_3" position={[0, 0.08, 0.01]} rotation={[0.36, 0.02, 0.09]}>
                            <group name="RightHandMiddle2_3" position={[0, 0.04, 0]} rotation={[0.2, -0.04, -0.03]}>
                              <group name="RightHandMiddle3_3" position={[0, 0.03, 0]} rotation={[0.07, 0.02, 0]}>
                                <group name="RightHandMiddle4_3" position={[0, 0.02, 0]} rotation={[-0.07, -0.01, 0.05]} />
                              </group>
                            </group>
                          </group>
                          <group name="RightHandRing1_3" position={[-0.01, 0.08, 0.01]} rotation={[0.55, 0.01, 0.09]}>
                            <group name="RightHandRing2_3" position={[0, 0.03, 0]} rotation={[0.15, -0.03, -0.05]}>
                              <group name="RightHandRing3_3" position={[0, 0.03, 0]} rotation={[0.04, 0.02, 0.01]}>
                                <group name="RightHandRing4_3" position={[0, 0.02, 0]} rotation={[-0.17, 0, -0.04]} />
                              </group>
                            </group>
                          </group>
                          <group name="RightHandPinky1_3" position={[-0.03, 0.07, 0.01]} rotation={[0.57, 0, 0.13]}>
                            <group name="RightHandPinky2_3" position={[0, 0.03, 0]} rotation={[0.13, -0.06, -0.15]}>
                              <group name="RightHandPinky3_3" position={[0, 0.02, 0]} rotation={[0.04, 0.07, 0.02]}>
                                <group name="RightHandPinky4_3" position={[0, 0.01, 0]} rotation={[-0.12, -0.04, -0.03]} />
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
            <group name="LeftUpLeg_3" position={[0.1, -0.02, 0]} rotation={[-0.21, 0.02, -2.93]}>
              <group name="LeftLeg_3" position={[0, 0.41, 0]} rotation={[-0.33, 0.01, -0.01]}>
                <group name="LeftFoot_3" position={[0, 0.41, 0]} rotation={[0.96, -0.3, 0.27]}>
                  <group name="LeftToeBase_3" position={[0, 0.14, 0]} rotation={[0.68, -0.05, 0.16]}>
                    <group name="LeftToe_End_3" position={[0, 0.08, 0]} rotation={[1.68, 1.5, -1.69]} />
                  </group>
                  <mesh name="Left002" geometry={nodes.Left002.geometry} material={materials['air_jordan1_Off_White_NIKElambert2.001']} position={[0.08, 0.18, -0.09]} rotation={[2.23, 0.01, -3.1]} scale={-0.01} />
                </group>
              </group>
            </group>
            <group name="RightUpLeg_3" position={[-0.1, -0.02, 0]} rotation={[0.04, -0.13, -3.01]}>
              <group name="RightLeg_3" position={[0, 0.41, 0]} rotation={[-0.21, 0, 0.02]}>
                <group name="RightFoot_3" position={[0, 0.41, 0]} rotation={[1.09, 0.08, -0.3]}>
                  <group name="RightToeBase_3" position={[0, 0.14, 0]} rotation={[0.71, 0.02, -0.07]}>
                    <group name="RightToe_End_3" position={[0, 0.08, 0]} rotation={[1.68, -1.5, 1.69]} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="Armature" position={[-0.17, -0.05, -0.42]}>
          <group name="Hips_1" position={[0.05, 0.95, -0.01]} rotation={[-0.07, -0.08, -0.06]}>
            <group name="Spine_1" position={[0, 0.09, 0]} rotation={[-0.01, 0.01, 0.04]}>
              <group name="Spine1_1" position={[0, 0.08, 0]} rotation={[-0.03, 0.02, 0.07]}>
                <group name="Spine2_1" position={[0, 0.11, 0]} rotation={[0.17, 0.03, 0.07]}>
                  <group name="Neck_1" position={[0, 0.11, 0]} rotation={[0.1, 0, -0.01]}>
                    <group name="Head_1" position={[0, 0.08, 0]} rotation={[-0.03, 0, -0.11]}>
                      <group name="HeadTop_End_1" position={[0, 0.16, 0]} rotation={[-0.15, 0, 0]} />
                      <group name="LeftEye_1" position={[0.04, 0.07, 0.07]} rotation={[-0.14, 0, 0]} />
                      <group name="RightEye_1" position={[-0.04, 0.07, 0.07]} rotation={[-0.14, 0, 0]} />
                    </group>
                  </group>
                  <group name="LeftShoulder_1" position={[0.07, 0.1, -0.01]} rotation={[1.55, -0.14, -1.62]}>
                    <group name="LeftArm_1" position={[0, 0.07, 0]} rotation={[1.37, 0.52, -0.03]}>
                      <group name="LeftForeArm_1" position={[0, 0.26, 0]} rotation={[-0.28, -0.01, 0.19]}>
                        <group name="LeftHand_1" position={[0, 0.24, 0]} rotation={[-0.29, -0.46, 0.05]}>
                          <group name="LeftHandThumb1_1" position={[-0.02, 0.01, 0.02]} rotation={[0.64, 0.18, 0.41]}>
                            <group name="LeftHandThumb2_1" position={[0, 0.03, 0]} rotation={[-0.04, -0.02, -0.31]}>
                              <group name="LeftHandThumb3_1" position={[0, 0.03, 0]} rotation={[0.03, 0.02, 0.04]}>
                                <group name="LeftHandThumb4_1" position={[0, 0.03, 0]} rotation={[-0.06, 0.06, 0.08]} />
                              </group>
                            </group>
                          </group>
                          <group name="LeftHandIndex1_1" position={[-0.02, 0.08, 0.01]} rotation={[0.28, -0.13, -0.12]}>
                            <group name="LeftHandIndex2_1" position={[0, 0.03, 0]} rotation={[0.4, 0.06, -0.06]}>
                              <group name="LeftHandIndex3_1" position={[0, 0.03, 0]} rotation={[0.04, -0.1, 0]}>
                                <group name="LeftHandIndex4_1" position={[0, 0.02, 0]} rotation={[0.02, 0.08, -0.07]} />
                              </group>
                            </group>
                          </group>
                          <group name="LeftHandMiddle1_1" position={[0, 0.08, 0.01]} rotation={[0.3, -0.03, -0.09]}>
                            <group name="LeftHandMiddle2_1" position={[0, 0.04, 0]} rotation={[0.2, 0.05, 0.03]}>
                              <group name="LeftHandMiddle3_1" position={[0, 0.03, 0]} rotation={[0.07, -0.02, 0]}>
                                <group name="LeftHandMiddle4_1" position={[0, 0.02, 0]} rotation={[-0.07, 0.01, -0.05]} />
                              </group>
                            </group>
                          </group>
                          <group name="LeftHandRing1_1" position={[0.01, 0.08, 0.01]} rotation={[0.53, 0.03, -0.13]}>
                            <group name="LeftHandRing2_1" position={[0, 0.03, 0]} rotation={[0.17, 0.04, 0.04]}>
                              <group name="LeftHandRing3_1" position={[0, 0.03, 0]} rotation={[0.04, -0.02, -0.01]}>
                                <group name="LeftHandRing4_1" position={[0, 0.02, 0]} rotation={[-0.17, 0, 0.03]} />
                              </group>
                            </group>
                          </group>
                          <group name="LeftHandPinky1_1" position={[0.03, 0.07, 0.01]} rotation={[0.68, 0.05, -0.23]}>
                            <group name="LeftHandPinky2_1" position={[0, 0.03, 0]} rotation={[0.21, 0.08, 0.12]}>
                              <group name="LeftHandPinky3_1" position={[0, 0.02, 0]} rotation={[0.04, -0.07, -0.02]}>
                                <group name="LeftHandPinky4_1" position={[0, 0.01, 0]} rotation={[-0.12, 0.04, 0.03]} />
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group name="RightShoulder_1" position={[-0.07, 0.1, -0.01]} rotation={[1.55, 0.04, 1.65]}>
                    <group name="RightArm_1" position={[0, 0.07, 0]} rotation={[1.46, -0.61, 0.17]}>
                      <group name="RightForeArm_1" position={[0, 0.26, 0]} rotation={[-0.28, 0.01, -0.22]}>
                        <group name="RightHand_1" position={[0, 0.24, 0]} rotation={[-0.64, 0.59, 0.2]}>
                          <group name="RightHandThumb1_1" position={[0.02, 0.01, 0.02]} rotation={[0.6, -0.09, -0.37]}>
                            <group name="RightHandThumb2_1" position={[0, 0.03, 0]} rotation={[0, 0.04, 0.37]}>
                              <group name="RightHandThumb3_1" position={[0, 0.03, 0]} rotation={[0.03, -0.02, -0.04]}>
                                <group name="RightHandThumb4_1" position={[0, 0.03, 0]} rotation={[-0.07, -0.06, -0.08]} />
                              </group>
                            </group>
                          </group>
                          <group name="RightHandIndex1_1" position={[0.02, 0.08, 0.01]} rotation={[0.29, 0.13, 0.06]}>
                            <group name="RightHandIndex2_1" position={[0, 0.03, 0]} rotation={[0.26, -0.06, 0.05]}>
                              <group name="RightHandIndex3_1" position={[0, 0.03, 0]} rotation={[0.03, 0.1, 0]}>
                                <group name="RightHandIndex4_1" position={[0, 0.02, 0]} rotation={[0.03, -0.08, 0.07]} />
                              </group>
                            </group>
                          </group>
                          <group name="RightHandMiddle1_1" position={[0, 0.08, 0.01]} rotation={[0.36, 0.02, 0.09]}>
                            <group name="RightHandMiddle2_1" position={[0, 0.04, 0]} rotation={[0.2, -0.04, -0.03]}>
                              <group name="RightHandMiddle3_1" position={[0, 0.03, 0]} rotation={[0.07, 0.02, 0]}>
                                <group name="RightHandMiddle4_1" position={[0, 0.02, 0]} rotation={[-0.07, -0.01, 0.05]} />
                              </group>
                            </group>
                          </group>
                          <group name="RightHandRing1_1" position={[-0.01, 0.08, 0.01]} rotation={[0.55, 0.01, 0.09]}>
                            <group name="RightHandRing2_1" position={[0, 0.03, 0]} rotation={[0.15, -0.03, -0.05]}>
                              <group name="RightHandRing3_1" position={[0, 0.03, 0]} rotation={[0.04, 0.02, 0.01]}>
                                <group name="RightHandRing4_1" position={[0, 0.02, 0]} rotation={[-0.17, 0, -0.04]} />
                              </group>
                            </group>
                          </group>
                          <group name="RightHandPinky1_1" position={[-0.03, 0.07, 0.01]} rotation={[0.57, 0, 0.13]}>
                            <group name="RightHandPinky2_1" position={[0, 0.03, 0]} rotation={[0.13, -0.06, -0.15]}>
                              <group name="RightHandPinky3_1" position={[0, 0.02, 0]} rotation={[0.04, 0.07, 0.02]}>
                                <group name="RightHandPinky4_1" position={[0, 0.01, 0]} rotation={[-0.12, -0.04, -0.03]} />
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
            <group name="LeftUpLeg_1" position={[0.1, -0.02, 0]} rotation={[-0.21, 0.02, -2.93]}>
              <group name="LeftLeg_1" position={[0, 0.41, 0]} rotation={[-0.33, 0.01, -0.01]}>
                <group name="LeftFoot_1" position={[0, 0.41, 0]} rotation={[0.96, -0.3, 0.27]}>
                  <group name="LeftToeBase_1" position={[0, 0.14, 0]} rotation={[0.68, -0.05, 0.16]}>
                    <group name="LeftToe_End_1" position={[0, 0.08, 0]} rotation={[1.68, 1.5, -1.69]} />
                  </group>
                </group>
              </group>
            </group>
            <group name="RightUpLeg_1" position={[-0.1, -0.02, 0]} rotation={[0.04, -0.13, -3.01]}>
              <group name="RightLeg_1" position={[0, 0.41, 0]} rotation={[-0.21, 0, 0.02]}>
                <group name="RightFoot_1" position={[0, 0.41, 0]} rotation={[1.09, 0.08, -0.3]}>
                  <group name="RightToeBase_1" position={[0, 0.14, 0]} rotation={[0.71, 0.02, -0.07]}>
                    <group name="RightToe_End_1" position={[0, 0.08, 0]} rotation={[1.68, -1.5, 1.69]} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
        <mesh name="polySurface2_air_jordan1_Off_White_NIKElambert2_0005" geometry={nodes.polySurface2_air_jordan1_Off_White_NIKElambert2_0005.geometry} material={materials['air_jordan1_Off_White_NIKElambert2.002']} position={[-0.13, -0.05, -0.48]} rotation={[0, -0.31, 0.07]} scale={0.01} />
        <mesh name="AnimeStyle_Female_Base_Body_0092" geometry={nodes.AnimeStyle_Female_Base_Body_0092.geometry} material={materials['Material.030']} position={[-0.18, 0.08, -0.61]} rotation={[0, 0, -0.01]} scale={0.15} />
        <mesh name="AnimeStyle_Female_Base_Body_0093" geometry={nodes.AnimeStyle_Female_Base_Body_0093.geometry} material={materials['Material.029']} position={[-0.16, 0.08, -0.61]} scale={0.15} />
        <mesh name="Hair009" geometry={nodes.Hair009.geometry} material={materials['Material.032']} position={[-0.16, 0.11, -0.59]} rotation={[-Math.PI / 2, 0, 0]} scale={0.83} />
        <mesh name="AnimeStyle_Female_Base_Body_0095" geometry={nodes.AnimeStyle_Female_Base_Body_0095.geometry} material={materials['Base.007']} position={[-0.16, 0.08, -0.61]} scale={0.15} />
        <mesh name="AnimeStyle_Female_Base_Body_0096" geometry={nodes.AnimeStyle_Female_Base_Body_0096.geometry} material={materials['F00_000_00_EyeHighlight_00_EYE.006']} position={[-0.16, 0.08, -0.61]} scale={0.15} />
        <mesh name="AnimeStyle_Female_Base_Body_0097" geometry={nodes.AnimeStyle_Female_Base_Body_0097.geometry} material={materials['Material.031']} position={[-0.16, 0.08, -0.61]} scale={0.15} />
        <mesh name="AnimeStyle_Female_Base_Body_0098" geometry={nodes.AnimeStyle_Female_Base_Body_0098.geometry} material={materials['Base.007']} position={[-0.16, 0.08, -0.61]} scale={0.15} />
        <mesh name="AnimeStyle_Female_Base_Body_0099" geometry={nodes.AnimeStyle_Female_Base_Body_0099.geometry} material={materials['F00_000_00_EyeHighlight_00_EYE.006']} position={[-0.16, 0.08, -0.61]} scale={0.15} />
        <mesh name="AnimeStyle_Female_Base_Body_0100" geometry={nodes.AnimeStyle_Female_Base_Body_0100.geometry} material={materials['Material.028']} position={[-0.16, 0.09, -0.61]} scale={0.15} />
        <mesh name="Face006" geometry={nodes.Face006.geometry} material={materials.He} position={[-0.16, 0.05, -0.62]} scale={0.16} />
        <mesh name="Face009" geometry={nodes.Face009.geometry} material={materials.He} position={[-0.16, 0.05, -0.62]} scale={0.16} />
        <mesh name="Face011" geometry={nodes.Face011.geometry} material={materials['material_8.007']} position={[-0.16, 0.05, -0.62]} scale={0.16} />
      </group>
    </group>
  )
}

useGLTF.preload('/uco.gltf')
