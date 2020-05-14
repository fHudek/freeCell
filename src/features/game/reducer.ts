import { Reducer, AnyAction } from 'redux'
import * as actions from './actions'
import { Card, FreeCell } from '../../types'
import { dealCards } from '../../utils/game'

export type GameState = {
  freeCells: [FreeCell, FreeCell, FreeCell, FreeCell]
  foundation: {
    c: Card[]
    d: Card[]
    h: Card[]
    s: Card[]
  }
  cascades: [Card[], Card[], Card[], Card[], Card[], Card[], Card[], Card[]]
}

export const initState: GameState = {
  freeCells: [null, null, null, null],
  foundation: {
    c: [],
    d: [],
    h: [],
    s: []
  },
  cascades: dealCards()
  // cascades: [[], [], [], [], [], [], [], []]
}

export const gameReducer: Reducer<GameState, AnyAction> = (state = initState, action) => {
  switch (action.type) {
    case actions.DEAL_CARDS: {
      return {
        ...state,
        cascades: dealCards()
      }
    }
    default:
      return state
  }
}
