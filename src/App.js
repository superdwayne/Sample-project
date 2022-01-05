import React, {useEffect, useState } from "react";
import { VRCanvas, DefaultXRControllers, RayGrab } from '@react-three/xr'

import './App.css';


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

  const myMesh = React.useRef()
  // useFrame(() => {// myMesh.current.rotation.y += 0.01})


  return (
    <group>
      
      <mesh ref={myMesh} position={[0.7, 0.7, 0]} scale={[2, 2, 2]} onPointerEnter={(e) => setPlaying(true)} onPointerLeave={(e) => setPlaying(false)}>

        <boxBufferGeometry />
        <meshBasicMaterial>
          <videoTexture attach="map" args={[video]} />
        </meshBasicMaterial>
      </mesh>
      
    </group>
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

        <FakeSphere />
        <RayGrab>
          <Video />
        </RayGrab>
    
       
      </VRCanvas>

    </div>
    </>
  );
}


