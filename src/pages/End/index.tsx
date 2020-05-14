import React from 'react'
import styled from 'styled-components'
import * as route from '../../routes'
import { useDispatch } from 'react-redux'
import { GameActions } from '../../features/game/actions'
import { LinkButton } from '../../components/Link'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const EndPage = () => {
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <h1>Congratulations!!! You have have won!</h1>
      <LinkButton
        onClick={() => {
          dispatch(GameActions.dealCards())
        }}
        to={route.PLAY}
      >
        Play again!
      </LinkButton>
    </Wrapper>
  )
}
