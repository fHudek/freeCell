import { RootState } from '../store'
import { Suit } from '../../types'

export const getCascade = (state: RootState, index: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7) => state.game.cascades[index]

export const getFreeCell = (state: RootState, index: number) => state.game.freeCells[index]

export const getFoundation = (state: RootState, key: Suit) => state.game.foundation[key]

export const getDraggedCard = (state: RootState) => state.game.draggedCard
