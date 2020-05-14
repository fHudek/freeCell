import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LinkButton = styled(Link)`
  background-color: #50c878;
  padding: 3rem;
  margin: 2rem;
  border-radius: 1rem;
  text-decoration: none;
  color: black;
`

export const SecondaryLinkButton = styled(Link)`
  border: 1px solid grey;
  padding: 2rem;
  margin: 1rem;
  border-radius: 1rem;
  text-decoration: none;
  color: black;
`

export const DownloadLinkButton = styled.a`
  border: 1px solid grey;
  padding: 2rem;
  margin: 1rem;
  border-radius: 1rem;
  text-decoration: none;
`
