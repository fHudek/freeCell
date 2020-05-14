import React from 'react'
import styled from 'styled-components'
import { Suit } from '../../types'
import { isCardRed } from '../../utils/game'
import { ColoredPlaceholder } from '../Placeholder'

const FoundationWrapper = styled.div`
  border: 1px solid grey;
  display: flex;
  margin: 2rem;
`

type Props = {
  suit: Suit
}

export const Foundation = ({ suit }: Props) => {
  const cards = []
  return (
    <FoundationWrapper>
      {cards.length > 0 ? (
        <div>TODO add top card</div>
      ) : (
        <ColoredPlaceholder isRed={isCardRed(suit)}>{suit}</ColoredPlaceholder>
      )}
    </FoundationWrapper>
  )
}
