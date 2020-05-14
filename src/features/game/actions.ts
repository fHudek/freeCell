export const DEAL_CARDS = 'game/DEAL_CARDS'
export const MOVE_CARD = 'game/MOVE_CARD'
export const CARD_CLICK = 'game/CARD_CLICK'
export const SET_DRAGGED_CARD = 'game/SET_DRAGGED_CARD'

export const GameActions = {
  dealCards: (type?: 'f' | 'r' | 'e') => {
    return { type: DEAL_CARDS, payload: type }
  },
  moveCard: (result: any) => {
    return { type: MOVE_CARD, payload: result }
  },
  cardClick: (cardId: string, cascadeIndex?: number) => {
    return { type: CARD_CLICK, payload: { cardId, cascadeIndex } }
  },
  setDraggedCard: (result: any) => {
    return { type: SET_DRAGGED_CARD, payload: result }
  }
}
