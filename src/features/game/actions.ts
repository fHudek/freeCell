export const DEAL_CARDS = 'game/DEAL_CARDS'
export const MOVE_CARD = 'game/MOVE_CARD'
export const SET_DRAGGED_CARD = 'game/SET_DRAGGED_CARD'

export const GameActions = {
  dealCards: (isTest?: boolean) => {
    return { type: DEAL_CARDS, payload: isTest }
  },
  moveCard: (result: any) => {
    return { type: MOVE_CARD, payload: result }
  },
  setDraggedCard: (result: any) => {
    return { type: SET_DRAGGED_CARD, payload: result }
  }
}
