import ReactDOM from 'react-dom'
import React, { useEffect, useRef, useState, useMemo } from 'react'
import { Canvas, useFrame, setDefaultCamera, useThree, extend, useLoader } from 'react-three-fiber'
import { TextureLoader, MeshStandardMaterial } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })
const Controls = (props) => {
  const { gl, camera } = useThree()
  const ref = useRef()
  useFrame(() => ref.current.update())
  return <orbitControls ref={ref} args={[camera, gl.domElement]} {...props} />
}

function Sphere(props) {
  const mesh = useRef()
  const [hovered, setHover] = useState(false)
  useFrame(() => (mesh.current.rotation.y += 0.01))
  return (
    <mesh
      {...props}
      ref={mesh}
      castShadow
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
      scale={hovered ? [1.25, 1.25, 1.25] : [1, 1, 1]}
    >
      <sphereGeometry attach="geometry" args={[props.radius, 100, 100]} />
      <meshStandardMaterial
        map={props.material}
        attach="material"
        color={props.color}
        transparent
        roughness={0.1}
        metalness={0.1} />
    </mesh>
  )
}

function Torus(props) {
  const mesh = useRef()
  const [hovered, setHover] = useState(false)
  setTimeout(() => { mesh.current.rotation.x = 90 }, 1000)
  useFrame(() => (mesh.current.rotation.y += 0.01))
  return (
    <mesh
      {...props}
      ref={mesh}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
      scale={hovered ? [1.25, 1.25, 1.25] : [1, 1, 1]}
    >
      <torusGeometry attach="geometry" args={[3, props.width, 3.5, 64]} />
      <meshStandardMaterial
        map={props.material}
        attach="material"
        color={props.color}
        doubleSided={true} />
    </mesh>
  )
}

function Sun() {
  const sunTexture = useMemo(() => new TextureLoader().load('sun.jpg'), []);
  return (
    <Sphere 
      postion={[0, 0, 0]} 
      radius={3}
      material={sunTexture}
    />
  )
}

function Mercury() {
  const mercuryTexture = useMemo(() => new TextureLoader().load('mercury.jpeg'), []);
  const ref = useRef()
  useFrame(({ clock }) => (ref.current.rotation.y = clock.getElapsedTime()* 0.3))
  return (
    <group ref={ref}>
      <Sphere 
        position={[5, 0.5, 0 ]}
        material={mercuryTexture}
        radius={1}
      />
     </group>
  )
}

function Venus() {
  const venusTexture = useMemo(() => new TextureLoader().load('venus.jpg'), []);
  const ref = useRef()
  useFrame(({ clock }) => (ref.current.rotation.y = clock.getElapsedTime()* 0.2))
  return (
    <group ref={ref}>
      <Sphere 
        position={[10, 0.5, 0 ]}
        material={venusTexture}
        radius={1}
      />
    </group>
  )
}

function Earth() {
  const earthTexture = useMemo(() => new TextureLoader().load('earth.png'), []);
  const ref = useRef()
  useFrame(({ clock }) => (ref.current.rotation.y = clock.getElapsedTime()* 0.3))
  return (
    <group ref={ref}>
      <Sphere 
        position={[15, 0.5, 0 ]}
        material={earthTexture}
        radius={1}
      />
      <Sphere 
        position={[16.5, 1, 0.5 ]}
        color={"gray"}
        radius={.5}
      />
    </group>
    )
  }

function Mars() {
  const marsTexture = useMemo(() => new TextureLoader().load('mars.jpeg'), []);
  const ref = useRef()
  useFrame(({ clock }) => (ref.current.rotation.y = clock.getElapsedTime()* 0.4))
  return (
    <group ref={ref}>
      <Sphere 
      position={[20, 0.5, 0 ]}
      material={marsTexture}
      radius={1}
     />
    </group>
    )
  }

function Jupiter() {
  const jupiterTexture = useMemo(() => new TextureLoader().load('jupiter.jpg'), []);
  const ref = useRef()
  useFrame(({ clock }) => (ref.current.rotation.y = clock.getElapsedTime()* 0.1))
  return (
    <group ref={ref}>
      <Sphere 
          position={[25, 0.5, 0 ]}
          material={jupiterTexture}
          radius={2}
        />
        <Torus
          position={[25, 0.5, 0 ]}
          material={jupiterTexture}
          width={0.2}
        />
    </group>
  )
}
function Saturn() {
  const saturnTexture = useMemo(() => new TextureLoader().load('saturn.jpg'), []);
  const ref = useRef()
  useFrame(({ clock }) => (ref.current.rotation.y = clock.getElapsedTime()* 0.15))
  return (
    <group ref={ref}>
      <Sphere 
          position={[30, 0.5, 0 ]}
          material={saturnTexture}
          radius={2.5}
        />
        <Torus
          position={[30, 0.5, 0 ]}
          material={saturnTexture}
          width={0.45}
        />
    </group>
  )
}

function Uranus() {
  const uranusTexture = useMemo(() => new TextureLoader().load('uranus.jpg'), []);
  const ref = useRef()
  useFrame(({ clock }) => (ref.current.rotation.y = clock.getElapsedTime()* 0.3))
  return (
    <group ref={ref}>
      <Sphere 
      position={[35, 0.5, 0 ]}
      material={uranusTexture}
      radius={1.75}
     />
    </group>
    )
  }

function Neptune() {
  const neptuneTexture = useMemo(() => new TextureLoader().load('neptune.jpg'), []);
  const ref = useRef()
  useFrame(({ clock }) => (ref.current.rotation.y = clock.getElapsedTime()* 0.35))
  return (
    <group ref={ref}>
      <Sphere 
      position={[40, 0.5, 0 ]}
      material={neptuneTexture}
      radius={2.1}
      />
    </group>
    )
  }

ReactDOM.render(
  <Canvas camera={{ position: [0, 0, 35] }} >
    <Controls
      enablePan={true}
      enableZoom={true}
      enableDamping
      dampingFactor={0.5}
      rotateSpeed={1}
    />
    <ambientLight />
    <pointLight position={[0, 0, 0]} />
    <Sun />
    <Mercury />
    <Venus />
    <Earth />
    <Mars />
    <Jupiter />
    <Saturn />
    <Uranus />
    <Neptune />
  </Canvas>,
  document.getElementById('root')
);

