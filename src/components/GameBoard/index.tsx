import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { FreeCell } from '../FreeCell'
import { Foundation } from '../Foundation'
import { Cascade } from '../Cascade'
import { DragDropContext } from 'react-beautiful-dnd'
import { RootState } from '../../features/store'
import { Dispatch } from 'redux'
import { GameActions } from '../../features/game/actions'
import { connect, useSelector } from 'react-redux'
import { getFoundationsInArray } from '../../features/game/selectors'
import * as routes from '../../routes'
import { Redirect } from 'react-router-dom'
import { Card } from '../../types'
import { hasWon } from '../../utils/game'

const GameBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const GameBoardInnerWrapper = styled.div`
  display: flex;
`

const LastFreeCell = styled(FreeCell)`
  margin-right: 10rem;
`

type Props = {
  foundations: Card[][]
  moveCard: (result: any) => void
  setDraggedCard: (result: any) => void
}

export class GameBoardComponent extends PureComponent<Props> {
  onDragStart = (result: any) => {
    const { setDraggedCard } = this.props
    setDraggedCard(result)
  }

  onDragEnd = (result: any) => {
    const { moveCard } = this.props
    moveCard(result)
  }

  render() {
    const { foundations } = this.props
    if (hasWon(foundations)) {
      return <Redirect to={routes.END} />
    } else {
      return (
        <DragDropContext onDragEnd={this.onDragEnd} onDragStart={this.onDragStart}>
          <GameBoardWrapper>
            <GameBoardInnerWrapper>
              <FreeCell index={0} />
              <FreeCell index={1} />
              <FreeCell index={2} />
              <LastFreeCell index={3} />
              <Foundation suit="H" />
              <Foundation suit="C" />
              <Foundation suit="D" />
              <Foundation suit="P" />
            </GameBoardInnerWrapper>
            <GameBoardInnerWrapper>
              <Cascade index={0} />
              <Cascade index={1} />
              <Cascade index={2} />
              <Cascade index={3} />
              <Cascade index={4} />
              <Cascade index={5} />
              <Cascade index={6} />
              <Cascade index={7} />
            </GameBoardInnerWrapper>
          </GameBoardWrapper>
        </DragDropContext>
      )
    }
  }
}

const mapStateToProps = (state: RootState) => ({
  foundations: getFoundationsInArray(state)
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  moveCard: (result: any) => dispatch(GameActions.moveCard(result)),
  setDraggedCard: (result: any) => dispatch(GameActions.setDraggedCard(result))
})

export const GameBoard = connect(mapStateToProps, mapDispatchToProps)(GameBoardComponent)
