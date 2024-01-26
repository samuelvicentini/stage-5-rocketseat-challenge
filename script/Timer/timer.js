import state from '../state.js'
import * as elements from './elements.js'

export function countDownTimer() {
  clearTimeout(state.setTimeoutId)

  let minutes = Number(elements.minutesTimer.textContent)
  let seconds = Number(elements.secondsTimer.textContent)

  seconds--

  if (seconds < 0) {
    seconds = 59
    minutes--
  }

  if (minutes < 0) {
    stopCountDownTimer()
    return
  }

  updateDisplay(minutes, seconds)
  state.setTimeoutId = setTimeout(() => countDownTimer(), 1000)
}

export function stopCountDownTimer() {
  clearTimeout(state.setTimeoutId)
  updateDisplay(state.minutes, state.seconds)
}

function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  elements.minutesTimer.innerText = String(minutes).padStart(2, '0')
  elements.secondsTimer.innerText = String(seconds).padStart(2, '0')
}

export function addFiveMinutesCurrent() {
  const minutesCurrent = Number(elements.minutesTimer.innerText) + 1
  const secondsCurrent = 0
  state.isRunning = false
  stopCountDownTimer()
  if (minutesCurrent > 55) {
    return
  }
  state.minutes = minutesCurrent + 5
  state.seconds = secondsCurrent
  updateDisplay()
}

export function removeFiveMinutesCurrent() {
  const minutesCurrent = Number(elements.minutesTimer.innerText) + 1
  const secondsCurrent = 0
  state.isRunning = false
  stopCountDownTimer()
  if (minutesCurrent < 5) {
    return
  }
  state.minutes = minutesCurrent - 5
  state.seconds = secondsCurrent
  updateDisplay()
}