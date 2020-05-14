import React from 'react'
import styled from 'styled-components'
import { Suit } from '../../types'
import { isCardRed } from '../../utils/game'
import { ColoredPlaceholder } from '../Placeholder'
import { Droppable } from 'react-beautiful-dnd'
import { useSelector } from 'react-redux'
import { getFoundation } from '../../features/game/selectors'
import { RootState } from '../../features/store'
import { Card } from '../Card'
import _ from 'lodash'
import { theme } from '../../constants/theme'

const FoundationWrapper = styled.div`
  border: 1px solid grey;
  display: flex;
  position: relative;
  flex-direction: column;
  min-width: ${theme.sizes.cardX};
  min-height: ${theme.sizes.cardY};
  margin: 2rem;
`

const CardStyled = styled(Card)`
  position: absolute;
  top: 0;
  left: 0;
`

type Props = {
  suit: Suit
}

export const Foundation = ({ suit }: Props) => {
  const cards = useSelector((state: RootState) => getFoundation(state, suit))
  return (
    <Droppable droppableId={`f${suit}`}>
      {(provided) => (
        <FoundationWrapper {...provided.droppableProps} ref={provided.innerRef}>
          {cards.length > 0 ? (
            <>
              {_.map(cards, (card, index) => (
                <CardStyled card={card} index={index} />
              ))}
            </>
          ) : (
            <ColoredPlaceholder isRed={isCardRed(suit)}>{suit}</ColoredPlaceholder>
          )}
          {provided.placeholder}
        </FoundationWrapper>
      )}
    </Droppable>
  )
}
