import React from 'react'
import { Card as CardType } from '../../types'
import styled from 'styled-components'
import { isCardRed } from '../../utils/game'
import { theme } from '../../constants/theme'

const CardWrapper = styled.div`
  border: 1px solid grey;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${theme.sizes.cardX};
  height: ${theme.sizes.cardY};
  font-size: 2rem;
  user-select: none;
`

const CardLabel = styled.span<{ isRed: boolean }>`
  color: ${({ isRed }) => (isRed ? 'red' : 'black')};
`

type Props = {
  card: CardType
}

export const Card = ({ card }: Props) => {
  return (
    <CardWrapper>
      <CardLabel isRed={isCardRed(card.suit)}>{`${card.suit} ${card.value}`}</CardLabel>
    </CardWrapper>
  )
}
