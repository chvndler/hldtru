import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/model.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={nodes.Curve.material}
        rotation={[1.5712, -0.0005, -0.8164]}
        scale={[10.7396, 10.7396, 10.7396]}
      />
    </group>
  )
}

useGLTF.preload('/model.gltf')
