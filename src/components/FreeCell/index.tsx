import React from 'react'
import styled from 'styled-components'
import { Placeholder } from '../Placeholder'
import { Droppable } from 'react-beautiful-dnd'
import { useSelector } from 'react-redux'
import { getFreeCell } from '../../features/game/selectors'
import { RootState } from '../../features/store'
import { Card } from '../Card'

const FreeCellWrapper = styled.div`
  border: 1px solid grey;
  margin: 2rem;
`

type Props = {
  index: 0 | 1 | 2 | 3
}

export const FreeCell = ({ index }: Props) => {
  const card = useSelector((state: RootState) => getFreeCell(state, index))
  return (
    <Droppable droppableId={`e${index}`}>
      {(provided) => (
        <FreeCellWrapper {...provided.droppableProps} ref={provided.innerRef}>
          {card ? <Card card={card} index={0} /> : <Placeholder>FREE CELL</Placeholder>}
          {provided.placeholder}
        </FreeCellWrapper>
      )}
    </Droppable>
  )
}
