import React from 'react'
import styled from 'styled-components'
import { Placeholder } from '../Placeholder'
import { useSelector } from 'react-redux'
import { RootState } from '../../features/store'
import { getCascade, getDraggedCard } from '../../features/game/selectors'
import { Card } from '../Card'
import _ from 'lodash'
import { Droppable } from 'react-beautiful-dnd'
import { theme } from '../../constants/theme'
import { isSmallerByOne, hasOppositeColor } from '../../utils/game'

const CascadeWrapper = styled.div<{ isDisabled: boolean }>`
  margin: 2rem;
  box-shadow: ${({ isDisabled }) => (isDisabled ? '0' : theme.enabledDroppableShadow)};
`

type Props = {
  index: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
}

export const Cascade = ({ index }: Props) => {
  const cards = useSelector((state: RootState) => getCascade(state, index))
  const draggedCard = useSelector(getDraggedCard)
  const lastCard = cards[cards.length - 1]
  const isDisabled = !(
    !!draggedCard &&
    (_.isNil(lastCard) ||
      (_.isNil(lastCard) && isSmallerByOne(draggedCard, lastCard) && hasOppositeColor(draggedCard, lastCard)))
  )
  return (
    <Droppable droppableId={`c${index}`} isDropDisabled={isDisabled}>
      {(provided) => (
        <CascadeWrapper {...provided.droppableProps} ref={provided.innerRef} isDisabled={isDisabled}>
          {cards.length > 0 ? (
            <>
              {_.map(cards, (card, i) => (
                <Card
                  cascadeIndex={index}
                  key={card.id}
                  card={card}
                  index={i}
                  isDragDisabled={cards.length - 1 > i}
                ></Card>
              ))}
            </>
          ) : (
            <Placeholder>CASCADE</Placeholder>
          )}
          {provided.placeholder}
        </CascadeWrapper>
      )}
    </Droppable>
  )
}
