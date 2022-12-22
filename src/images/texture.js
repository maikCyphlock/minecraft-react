import { grassImage, dirtImage, logImage, glassImage, woodImage } from './images'

import { TextureLoader, RepeatWrapping, NearestFilter } from 'three'

const groundTexture = new TextureLoader().load(grassImage)
const grassTexture = new TextureLoader().load(grassImage)
const dirtTexture = new TextureLoader().load(dirtImage)
const logTexture = new TextureLoader().load(logImage)
const glassTexture = new TextureLoader().load(glassImage)
const woodTexture = new TextureLoader().load(woodImage)

const AllTextures = [groundTexture, grassTexture, dirtTexture, logTexture, glassTexture, woodTexture]

AllTextures.map((texture) => {
  texture.wrapS = RepeatWrapping
  texture.wrapT = RepeatWrapping
  texture.magFilter = NearestFilter

  return texture
})

export { groundTexture, grassTexture, dirtTexture, logTexture, glassTexture, woodTexture }
