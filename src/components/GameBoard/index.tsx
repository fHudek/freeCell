import React from 'react'
import styled from 'styled-components'
import { FreeCell } from '../FreeCell'
import { Foundation } from '../Foundation'
import { Cascade } from '../Cascade'

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

export const GameBoard = () => {
  return (
    <GameBoardWrapper>
      <GameBoardInnerWrapper>
        <FreeCell index={0} />
        <FreeCell index={1} />
        <FreeCell index={2} />
        <LastFreeCell index={3} />
        <Foundation suit="H" />
        <Foundation suit="C" />
        <Foundation suit="D" />
        <Foundation suit="S" />
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
  )
}
