import React, { useCallback } from 'react'
import styled from 'styled-components'
import * as route from '../../routes'
import { useDispatch, useSelector } from 'react-redux'
import { GameActions } from '../../features/game/actions'
import { LinkButton, DownloadLinkButton } from '../../components/Link'
import { getNumberOfSteps } from '../../features/game/selectors'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const EndPage = () => {
  const dispatch = useDispatch()
  const numberOfSteps = useSelector(getNumberOfSteps)
  var obj = { numberOfSteps: numberOfSteps }
  var data = 'text/json;charset=utf-8,' + JSON.stringify(obj)

  const onClick = useCallback(() => {
    dispatch(GameActions.dealCards())
  }, [dispatch])

  return (
    <Wrapper>
      <h1>{`Congratulations!!! You have have won in ${numberOfSteps} steps!`}</h1>
      <LinkButton onClick={onClick} to={route.PLAY}>
        Play again!
      </LinkButton>
      <DownloadLinkButton href={`data: ${data}`} download="data.json">
        Download score in JSON
      </DownloadLinkButton>
    </Wrapper>
  )
}
