export const SEND = 'SEND'

export function send(value) {
  return {
    type: SEND,
    value
  }
}
