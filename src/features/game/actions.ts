export const ADD = 'game/ADD'
export const DEAL_CARDS = 'game/DEAL_CARDS'

export const GameActions = {
  dealCards: () => {
    return { type: DEAL_CARDS }
  }
}
