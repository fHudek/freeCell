import React, { useCallback } from 'react'
import { Card as CardType } from '../../types'
import styled from 'styled-components'
import { isCardRed } from '../../utils/game'
import { theme } from '../../constants/theme'
import { Draggable } from 'react-beautiful-dnd'
import { useDispatch } from 'react-redux'
import { GameActions } from '../../features/game/actions'

const CardWrapper = styled.div`
  border: 1px solid grey;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${theme.sizes.cardX};
  height: ${theme.sizes.cardY};
  min-width: ${theme.sizes.cardX};
  min-height: ${theme.sizes.cardY};
  font-size: 2rem;
  user-select: none;
  background-color: white;
`

const CardLabel = styled.span<{ isRed: boolean }>`
  color: ${({ isRed }) => (isRed ? 'red' : 'black')};
`

type Props = {
  card: CardType
  index: number
  cascadeIndex?: number
  isDragDisabled?: boolean
  className?: string
}

export const Card = ({ card, index, isDragDisabled = false, className = '', cascadeIndex }: Props) => {
  const dispatch = useDispatch()

  const onClick = useCallback(() => {
    if (!isDragDisabled) dispatch(GameActions.cardClick(card.id, cascadeIndex))
  }, [card.id, cascadeIndex, dispatch, isDragDisabled])

  return (
    <Draggable draggableId={card.id} index={index} isDragDisabled={isDragDisabled}>
      {(provided) => (
        <CardWrapper onClick={onClick} className={className} {...provided.draggableProps} {...provided.dragHandleProps}>
          <CardLabel ref={provided.innerRef} isRed={isCardRed(card.suit)}>{`${card.suit} ${card.value}`}</CardLabel>
        </CardWrapper>
      )}
    </Draggable>
  )
}
