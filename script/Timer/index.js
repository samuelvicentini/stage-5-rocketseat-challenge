import * as elements from './elements.js'
import * as actions from './actions.js'
import state from '../state.js'

elements.minutesTimer.innerText = String(state.minutes).padStart(2, '0')

elements.controlTimer.addEventListener('click', (event) => {
  const action = event.target.dataset.action
  if (typeof actions[action] != 'function') {
    return
  }
  actions[action]()
})