import * as elements from './elements.js'
import * as actions from './actions.js'

elements.controlSound.addEventListener('click', event => {
  const sound = event.target.dataset.sound
  if (typeof actions[sound] != 'function') {
    return
  }
  actions[sound]()
})