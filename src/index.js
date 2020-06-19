import ReactDOM from 'react-dom'
import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, setDefaultCamera, useThree, extend } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const pivots = [];

extend({ OrbitControls })
const Controls = (props) => {
  const { gl, camera } = useThree()
  const ref = useRef()
  useFrame(() => ref.current.update())
  return <orbitControls ref={ref} args={[camera, gl.domElement]} {...props} />
}

function Sphere(props) {
  const pivot = pivots[0]
  const mesh = useRef()
  const [hovered, setHover] = useState(false)
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  return (
    <mesh
      attach={pivot}
      {...props}
      ref={mesh}
      castShadow
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <sphereGeometry attach="geometry" args={[props.radius, 100, 100]} />
      <meshStandardMaterial
        attach="material"
        color={props.color}
        transparent
        roughness={0.1}
        metalness={0.1} />
    </mesh>
  )
}

pivots.push(<Sphere position={[0, 10, 0]} />);

ReactDOM.render(
  <Canvas
    camera={{ position: [0, 0, 10] }}
  >
    <Controls
      enablePan={true}
      enableZoom={true}
      enableDamping
      dampingFactor={0.5}
      rotateSpeed={1}
    />
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Sphere 
      postion={[0, 0 , 0]} 
      color={'yellow'}
      radius={2}
    />
    <Sphere 
      position={[5, 0.5, 0 ]}
      color={'firebrick'}
      radius={1}
     />
    <Sphere 
      position={[10, 0.5, 0 ]}
      color={'purple'}
      radius={1}
     />
    <Sphere 
      position={[15, 0.5, 0 ]}
      color={'teal'}
      radius={1}
     />
  </Canvas>,
  document.getElementById('root')
);

