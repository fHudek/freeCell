import React from 'react'
import styled from 'styled-components'
import * as route from '../../routes'
import { useDispatch } from 'react-redux'
import { GameActions } from '../../features/game/actions'
import { LinkButton, SecondaryLinkButton } from '../../components/Link'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const WelcomePage = () => {
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <h1>Welcome to awesome FreeCell game.</h1>
      <LinkButton
        onClick={() => {
          dispatch(GameActions.dealCards())
        }}
        to={route.PLAY}
      >
        Start game!
      </LinkButton>
      <SecondaryLinkButton
        onClick={() => {
          dispatch(GameActions.dealCards(true))
        }}
        to={route.PLAY}
      >
        Start easy test game.
      </SecondaryLinkButton>
    </Wrapper>
  )
}
