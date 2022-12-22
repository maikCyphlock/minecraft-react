import { usePlane } from '@react-three/cannon'
import { useStore } from '../hooks/useStore'
import { groundTexture } from '../images/texture'
function ground () {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0]
  }))
  const [addCube] = useStore(state => [state.addCube])

  const handleClickGround = event => {
    event.stopPropagation()
    const [x, y, z] = Object.values(event.point).map(n => Math.ceil(n))
    addCube(x, y, z)
  }

  groundTexture.repeat.set(100, 100)
  return (
    <mesh ref={ref} onClick={handleClickGround}>
      <planeGeometry attach='geometry' args={[100, 100]} />

      <meshStandardMaterial map={groundTexture} />
    </mesh>
  )
}

export default ground
