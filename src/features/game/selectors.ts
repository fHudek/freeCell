import { RootState } from '../store'

export const getCascade = (state: RootState, index: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7) => state.game.cascades[index]
