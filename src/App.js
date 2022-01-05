import React, {useRef, useEffect, useState } from "react";
import { VRCanvas, DefaultXRControllers, RayGrab } from '@react-three/xr'
import {
  useFrame,
  useThree,
  extend
} from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import './App.css';

extend({ OrbitControls });


const FakeSphereControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={false}
      position={[1, 1, 1]}
      maxAzimuthAngle={Math.PI / 4}
      maxPolarAngle={Math.PI}
      minAzimuthAngle={-Math.PI / 4}
      minPolarAngle={0}
    />
  );
};

const FakeSphere = () => {

   useEffect(() => {
    return () => {
      console.log("cleaned up");
    };
  }, []);


  return (
    <group>
      <mesh scale={[4, 4, 4]} position={[0, 0.5, 0]} >
        <sphereBufferGeometry args={[0.7, 30, 30]} attach="geometry" />
        <meshStandardMaterial attach="material" transparent={true} wireframe={true} color={"#000"} />
      </mesh>
      
    </group>
  );
}

const Video = () => {
  const [playing, setPlaying] = useState(false);

  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = "https://cdn-static.farfetch-contents.com/Content/UP/EXPERIENCE/Playground/FARFETCH.mp4";
    vid.crossOrigin = "Anonymous";
    vid.loop = false;
    vid.autoplay = false;
    vid.playsInline = true;
    vid.controls = true;
    return vid;
  });

  useEffect(() => {
    console.log("Inside Video 1");
    if (playing)
      video.play()
    else
      video.pause()

  }, [video, playing]);



  useEffect(() => {
    return () => {
      console.log("cleaned up");
    };
  }, []);

  const myMesh = useRef()
  // useFrame(() => {// myMesh.current.rotation.y += 0.01})


  return (
    <group>
      
      <mesh ref={myMesh} position={[0.7, 0.7, 0]} scale={[1, 1, 1]} onPointerEnter={(e) => setPlaying(true)} onPointerLeave={(e) => setPlaying(false)}>

        <boxBufferGeometry />
        <meshBasicMaterial>
          <videoTexture attach="map" args={[video]} />
        </meshBasicMaterial>
      </mesh>
      
    </group>
  );
}

function Box2(props) {
  const mesh = useRef();
  return (
     <mesh {...props} ref={mesh} position={[1,1,-1]} scale={[0.5,0.5,0.5]}>
        <boxGeometry args={[3, 3, 3]}   />
        <meshStandardMaterial wireframe={false}  color={"grey"}  />
     </mesh>
  );
}

  export default function App() {
  return (
    <>
    <div className="App">

      <VRCanvas style={{backgroundColor: "#ffffff" , display: "block" , height: "100vh", width: "100vw"}}>
      <DefaultXRControllers />
        <ambientLight />
        <spotLight intensity={10}  />
        <pointLight position={[10, 10, 10]} />
        <FakeSphereControls />
        <FakeSphere />
        <RayGrab>
          <Video />
          <Box2 />
        </RayGrab>
    
       
      </VRCanvas>

    </div>
    </>
  );
}





