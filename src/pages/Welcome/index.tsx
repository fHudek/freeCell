import React, { useCallback } from 'react'
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

  const onClick = useCallback(() => {
    dispatch(GameActions.dealCards())
  }, [dispatch])

  const onClickEasy = useCallback(() => {
    dispatch(GameActions.dealCards('e'))
  }, [dispatch])

  const onClickPreloaded = useCallback(() => {
    dispatch(GameActions.dealCards('f'))
  }, [dispatch])

  return (
    <Wrapper>
      <h1>Welcome to awesome FreeCell game.</h1>
      <LinkButton onClick={onClick} to={route.PLAY}>
        Start game!
      </LinkButton>
      <SecondaryLinkButton onClick={onClickEasy} to={route.PLAY}>
        Start easy test game
      </SecondaryLinkButton>
      <SecondaryLinkButton onClick={onClickPreloaded} to={route.PLAY}>
        Start game with preloaded shuffle
      </SecondaryLinkButton>
    </Wrapper>
  )
}
