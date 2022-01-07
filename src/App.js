import React, {useRef, useEffect,  Suspense } from "react";
import { VRCanvas, RayGrab,  Hands } from '@react-three/xr'
import {
  useFrame,
  useThree,
  extend
} from '@react-three/fiber'
import DPM from './DPM/Dpm'
import DPM2 from './DPM/Dpm_1'
import DPMX from './DPM/DPM-X'
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
      enableZoom={true}
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

// const Video = () => {
//   const [playing, setPlaying] = useState(false);

//   const [video] = useState(() => {
//     const vid = document.createElement("video");
//     vid.src = "https://cdn-static.farfetch-contents.com/Content/UP/EXPERIENCE/Playground/FARFETCH.mp4";
//     vid.crossOrigin = "Anonymous";
//     vid.loop = false;
//     vid.autoplay = false;
//     vid.playsInline = true;
//     vid.controls = true;
//     return vid;
//   });

//   const myMesh = useRef()

//   useInteraction(myMesh, 'onSelect', () => video.play() )

//   useEffect(() => {
//     console.log("Inside Video 1");
//     if (playing)
//       video.play()
//     else
//       video.pause()

//   }, [video, playing]);



//   useEffect(() => {
//     return () => {
//       console.log("cleaned up");
//     };
//   }, []);



//   return (
//     <group>
      
//       <mesh ref={myMesh} position={[0.7, 0.7, 0]} scale={[1, 1, 1]} onPointerEnter={(e) => setPlaying(true)} onPointerLeave={(e) => setPlaying(false)}>

//         <boxBufferGeometry />
//         <meshBasicMaterial>
//           <videoTexture attach="map" args={[video]} />
//         </meshBasicMaterial>
//       </mesh>
      
//     </group>
//   );
// }



  export default function App() {
  return (
    <>
    <div className="App">
   
      <VRCanvas style={{backgroundColor: "#ffffff" , display: "block" , height: "100vh", width: "100vw"}}>
   
     <ambientLight />
        <spotLight intensity={10}  />
      <Hands />
      
        <Suspense fallback={null}>
          <RayGrab>
            <DPM position={[-1, 0.5, 0]}  />
            <DPM2 position={[ 1.4, 0.5, 0]} />
            <DPMX position={[ 0, 0.5, -2]} />
          </RayGrab>
      </Suspense>

        
        <pointLight position={[10, 10, 10]} />
        <FakeSphereControls />
        <FakeSphere />
        
      </VRCanvas>

    </div>
    </>
  );
}





