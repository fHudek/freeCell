import React from 'react'
import styled from 'styled-components'
import { Suit } from '../../types'
import { isCardRed, isSmallerByOne, hasSameSuit as hasCorrectSuit, isAce } from '../../utils/game'
import { ColoredPlaceholder } from '../Placeholder'
import { Droppable } from 'react-beautiful-dnd'
import { useSelector } from 'react-redux'
import { getFoundation, getDraggedCard } from '../../features/game/selectors'
import { RootState } from '../../features/store'
import { Card } from '../Card'
import _ from 'lodash'
import { theme } from '../../constants/theme'

const FoundationWrapper = styled.div<{ isDisabled: boolean }>`
  border: 1px solid grey;
  display: flex;
  position: relative;
  flex-direction: column;
  min-width: ${theme.sizes.cardX};
  min-height: ${theme.sizes.cardY};
  margin: 2rem;
  box-shadow: ${({ isDisabled }) => (isDisabled ? '0' : theme.enabledDroppableShadow)};
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
  const draggedCard = useSelector(getDraggedCard)
  const lastCard = cards[cards.length - 1]
  const isDisabled = !(
    !!draggedCard &&
    hasCorrectSuit(draggedCard, suit) &&
    ((!lastCard && isAce(draggedCard)) || (!!lastCard && isSmallerByOne(lastCard, draggedCard)))
  )
  return (
    <Droppable droppableId={`f${suit}`} isDropDisabled={isDisabled}>
      {(provided) => (
        <FoundationWrapper {...provided.droppableProps} ref={provided.innerRef} isDisabled={isDisabled}>
          {cards.length > 0 ? (
            <>
              {_.map(cards, (card, index) => (
                <CardStyled key={card.id} card={card} index={index} />
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
