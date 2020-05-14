import { ContainerId } from '../../types'

export const DEAL_CARDS = 'game/DEAL_CARDS'
export const MOVE_CARD = 'game/MOVE_CARD'

export const GameActions = {
  dealCards: () => {
    return { type: DEAL_CARDS }
  },
  moveCard: (result: any) => {
    return { type: MOVE_CARD, payload: result }
  }
}
