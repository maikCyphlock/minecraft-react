import { useStore } from '../hooks/useStore'
import { useState, useEffect } from 'react'
import { useKeyboard } from '../hooks/useKeybord'
import * as images from '../images/images'

export const TextureSelector = () => {
  const [visible, setVisible] = useState(true)
  const [texture, setTexture] = useStore(state => [state?.texture, state?.setTexture])

  const {
    dirt,
    wood,
    log,
    grass,
    glass
  } = useKeyboard()

  useEffect(() => {
    const visibility = setTimeout(() => {
      setVisible(false)
    }, 2000)
    setVisible(true)

    return () => {
      clearTimeout(visibility)
    }
  }, [texture])

  useEffect(() => {
    const options = {
      dirt,
      wood,
      log,
      grass,
      glass
    }

    const selectedTexture = Object
      .entries(options)
      .find(([texture, isEnabled]) => isEnabled)
    if (selectedTexture) {
      const [textureName] = selectedTexture
      setTexture(textureName)
    }
  }, [dirt, wood, log, grass, glass])

  return (
    <div className={`texture-selector-bar ${visible ? '' : 'hidden'}`}>
      {
        Object.entries(images).map(([imgKey, img]) => {
          return (
            <img className={texture === imgKey.replace('Image', '') ? 'selected' : ''} key={imgKey} src={img} alt={imgKey} />
          )
        })
    }
    </div>
  )
}
