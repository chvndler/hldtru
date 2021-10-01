import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'


export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/h.gltf')
	const [matcap] = useTexture(["/normals"]);

  return (
    <group ref={group} {...props} dispose={null}>
		<group name="Scene">
      <mesh
		  	name="Curve"
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        rotation={[1.5712, -0.0005, -0.8164]}
        scale={[10, 10, 10]}
				userData={{ name: 'Curve' }}
				material={materials['Galvanized Steel']}
      >
			<meshStandardMaterial color="hotpink" />
			 </mesh>
			 </group>
    </group>
  )
}

useGLTF.preload('/h.gltf')
