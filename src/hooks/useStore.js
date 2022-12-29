import create from 'zustand'
import { nanoid } from 'nanoid'

const getLocalStorage = (key) => JSON.parse(globalThis.localStorage.getItem(key))
const setLocalStorage = (key, value) => globalThis.localStorage.setItem(key, JSON.stringify(value))

console.log(getLocalStorage('cubes'))

export const useStore = create(set => ({
  texture: 'dirt',
  cubes: getLocalStorage('cubes') || [],
  addCube: (x, y, z) => {
    set(state => ({
      cubes: [...state.cubes, {
        id: nanoid(),
        position: [x, y, z],
        texture: state.texture
      }]
    }

    ))
  },
  removeCube: (id) => {
    set(state => ({
      cubes: state.cubes.filter(cube => cube.id !== id)
    }))
  },
  setTexture: (texture) => {
    set(() => ({ texture }))
  },
  saveWorld: () => {
    set((state) => {
      setLocalStorage('cubes', state.cubes)
      return state
    })
  },
  resetWorld: () => {
    set(() => ({
      cubes: []
    }))
  }
}))
