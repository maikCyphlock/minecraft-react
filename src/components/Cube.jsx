import { useBox } from '@react-three/cannon'
import { useState } from 'react'
import { useStore } from '../hooks/useStore'
import * as textures from '../images/texture'
export const Cube = ({ id, position, texture }) => {
  const [isHovered, setIsHovered] = useState()
  const [removeCube, addCube] = useStore((state) => [state.removeCube, state.addCube])
  const [ref] = useBox(() => ({
    type: 'Static',
    position
  }))
  const activeTexture = textures[texture + 'Texture']

  return (
    <mesh
      ref={ref}
      onPointerMove={(e) => {
        e.stopPropagation()
        setIsHovered(true)
      }}
      onPointerOut={(e) => {
        e.stopPropagation()
        setIsHovered(false)
      }}
      onClick={(e) => {
        e.stopPropagation()
        const clickedFace = Math.floor(e.faceIndex / 2)
        const [x, y, z] = ref.current.position
        console.log(clickedFace)
        if (e.altKey) {
          return removeCube(id)
        } if (clickedFace === 0) {
          addCube(x + 1, y, z)
        }
        if (clickedFace === 1) {
          addCube(x - 1, y, z)
        }
        if (clickedFace === 2) {
          addCube(x, y + 1, z)
        }
        if (clickedFace === 3) {
          addCube(x, y - 1, z)
        }
        if (clickedFace === 4) {
          addCube(x, y, z + 1)
        }
        if (clickedFace === 5) {
          addCube(x, y, z - 1)
        }
      }}
    >
      <boxGeometry attach='geometry' />
      <meshStandardMaterial
        color={isHovered ? 'grey' : 'white'}
        map={activeTexture}
        alphaMap={texture === 'glass' ? activeTexture : ''}
        transparent
        opacity={1}
        attach='material'
      />
    </mesh>
  )
}
