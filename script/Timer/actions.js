import state from '../state.js'
import * as timer from './timer.js'


export function playTimer() {
  state.isRunning = true
  timer.countDownTimer()
}

export function stopTimer() {
  state.isRunning = false
  timer.stopCountDownTimer()
}

export function addFiveMinutes() {
  timer.addFiveMinutesCurrent()
  playTimer()
}

export function removeFiveMinutes() {
  timer.removeFiveMinutesCurrent()
  playTimer()
}