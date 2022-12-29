import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import Ground from './components/Ground'
import Fpv from './components/Fpv'
import { Player } from './components/Player'
import { Cubes } from './components/Cubes'
import { Menu } from './components/menu'
import { TextureSelector } from './components/TextureSelect'
export default function App () {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[10, 10, 20]} />
        <ambientLight intensity={0.5} />

        <Physics>
          <Cubes />
          <Player />
          <Ground />
          <Fpv />
        </Physics>
      </Canvas>

      <div className='pointer'>+</div>
      <TextureSelector />
      <Menu />
    </>
  )
}
