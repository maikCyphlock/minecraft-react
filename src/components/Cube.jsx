import { useBox } from '@react-three/cannon'
import { useState } from 'react'
import { useStore } from '../hooks/useStore'
import * as textures from '../images/texture'
export const Cube = ({ id, position, texture }) => {
  const [IsHovered, setIsHovered] = useState()
  const [removeCube] = useStore(state => [state.removeCube])
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
        if (e.altKey) {
          removeCube(id)
        }
      }}
    >
      <boxBufferGeometry attach='geometry' />
      <meshStandardMaterial color={IsHovered ? 'grey' : 'white'} transparent map={activeTexture} attach='material' />
    </mesh>
  )
}
