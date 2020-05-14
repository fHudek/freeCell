import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as route from '../../routes'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LinkButton = styled(Link)`
  background-color: #50c878;
  padding: 3rem;
  border-radius: 1rem;
  text-decoration: none;
`

export const WelcomePage = () => {
  return (
    <Wrapper>
      <h1>Welcome to awesome FreeCell game.</h1>
      <LinkButton to={route.PLAY}>Start game!</LinkButton>
    </Wrapper>
  )
}
