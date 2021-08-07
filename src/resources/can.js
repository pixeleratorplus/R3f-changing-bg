import React from 'react'
import { Canvas } from 'react-three-fiber'
import { deg } from './helpers'
import Scene from './help'

const Can = () => (
  <div class="main">
    <Canvas invalidateFrameloop camera={{ fov: 90, position: [0, 0, 1800], rotation: [0, deg(-20), deg(180)], near: 0.1, far: 20000 }}>
      <ambientLight intensity={0.5} />
      <spotLight intensity={0.5} position={[300, 300, 4000]} />
      <Scene />
    </Canvas>
  </div>
)
export default Can
