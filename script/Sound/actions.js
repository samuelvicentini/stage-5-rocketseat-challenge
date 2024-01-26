import * as elements from './elements.js'
import state from '../state.js'
import * as sound from './sound.js'


export function soundForest() {
  state.isRunningSoundForest = elements.buttonSoundForest.classList.toggle('sound-on')
  if (state.isRunningSoundForest) {
    sound.forest.play()
    return
  }
  sound.forest.pause()
}


export function soundRain() {
  state.isRunningSoundForest = elements.buttonSoundRain.classList.toggle('sound-on')
  if (state.isRunningSoundForest) {
    sound.rain.play()
    return
  }
  sound.rain.pause()
}

export function soundCoffeeShop() {
  state.isRunningSoundForest = elements.buttonSoundCoffeeShop.classList.toggle('sound-on')
  if (state.isRunningSoundForest) {
    sound.coffeeShop.play()
    return
  }
  sound.coffeeShop.pause()
}

export function soundBonfire() {
  state.isRunningSoundForest = elements.buttonSoundBonfire.classList.toggle('sound-on')
  if (state.isRunningSoundForest) {
    sound.fireplace.play()
    return
  }
  sound.fireplace.pause()
}