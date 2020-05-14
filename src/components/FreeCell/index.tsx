import React from 'react'
import styled from 'styled-components'
import { Placeholder } from '../Placeholder'
import { Droppable } from 'react-beautiful-dnd'
import { useSelector } from 'react-redux'
import { getFreeCell, getDraggedCard } from '../../features/game/selectors'
import { RootState } from '../../features/store'
import { Card } from '../Card'
import { theme } from '../../constants/theme'

const FreeCellWrapper = styled.div<{ isDisabled: boolean }>`
  border: 1px solid grey;
  margin: 2rem;
  box-shadow: ${({ isDisabled }) => (isDisabled ? '0' : theme.enabledDroppableShadow)};
`

type Props = {
  index: 0 | 1 | 2 | 3
}

export const FreeCell = ({ index }: Props) => {
  const card = useSelector((state: RootState) => getFreeCell(state, index))
  const draggedCard = useSelector(getDraggedCard)
  const isDisabled = !draggedCard || !!card
  return (
    <Droppable droppableId={`e${index}`} isDropDisabled={isDisabled}>
      {(provided) => (
        <FreeCellWrapper {...provided.droppableProps} ref={provided.innerRef} isDisabled={isDisabled}>
          {card ? <Card card={card} index={0} /> : <Placeholder>FREE CELL</Placeholder>}
          {provided.placeholder}
        </FreeCellWrapper>
      )}
    </Droppable>
  )
}
