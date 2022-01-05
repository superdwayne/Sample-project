import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { VRCanvas } from '@react-three/xr'
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
  export default function App() {
  return (
    <>
    <div className="App">

      <VRCanvas style={{backgroundColor: "#ffffff" , display: "block" , height: "100vh", width: "100vw"}}>
        <ambientLight />
        <spotLight intensity={10}  />
        <pointLight position={[10, 10, 10]} />
        <Box />
      </VRCanvas>

    </div>
    </>
  );
}


