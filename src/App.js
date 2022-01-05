import React, { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { VRCanvas, DefaultXRControllers, RayGrab } from '@react-three/xr'
import './App.css';


function Box(props) {
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
     <mesh {...props} ref={mesh}  scale={[1,1,1]}>
        <boxGeometry args={[3, 3, 3]}   />
        <meshStandardMaterial wireframe={true}  color={"black"}  />
     </mesh>
  );
}

const FakeSphere = () => {
  const [playing, setPlaying] = useState(false);
  const [playing2, setPlaying2] = useState(false);

  const [video2] = useState(() => {
    const vid2 = document.createElement("video");
    vid2.src = "https://cdn-static.farfetch-contents.com/Content/UP/EXPERIENCE/Playground/FARFETCH_1.mp4";
    vid2.crossOrigin = "Anonymous";
    vid2.loop = false;
    vid2.autoplay = false;
    vid2.playsInline = true;
    vid2.controls = true;
    return vid2;
  });

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
    console.log("Inside Video 2");
    if (playing2)
      video2.play()
    else
      video2.pause()

  }, [playing2, video2]);

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
      <mesh scale={[4, 4, 4]} position={[0, 0.5, 0]} >
        <sphereBufferGeometry args={[0.7, 30, 30]} attach="geometry" />
        <meshStandardMaterial attach="material" transparent={true} wireframe={true} color={"#000"} />
      </mesh>
      <mesh ref={myMesh} position={[0.7, 0.7, 0.7]} scale={[2, 2, 2]} onPointerEnter={(e) => setPlaying(true)} onPointerLeave={(e) => setPlaying(false)}>

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
        <RayGrab>
          <FakeSphere />
        </RayGrab>
    
       
      </VRCanvas>

    </div>
    </>
  );
}


