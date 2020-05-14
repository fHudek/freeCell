import styled from 'styled-components'
import { theme } from '../../constants/theme'

export const Placeholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${theme.sizes.cardX};
  height: ${theme.sizes.cardY};
  font-size: 1rem;
  color: darkgray;
  user-select: none;
`

export const ColoredPlaceholder = styled(Placeholder)<{ isRed: boolean }>`
  font-size: 2rem;
  color: ${({ isRed }) => (isRed ? 'red' : 'black')};
`
