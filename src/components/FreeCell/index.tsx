import React from 'react'
import styled from 'styled-components'
import { Placeholder } from '../Placeholder'

const FreeCellWrapper = styled.div`
  border: 1px solid grey;
  margin: 2rem;
`

type Props = {
  index: 0 | 1 | 2 | 3
}

export const FreeCell = ({ index }: Props) => {
  const card = null
  return <FreeCellWrapper>{card ? <div>TODO add card</div> : <Placeholder>FREE CELL</Placeholder>}</FreeCellWrapper>
}
