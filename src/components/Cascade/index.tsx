import React from 'react'
import styled from 'styled-components'
import { Placeholder } from '../Placeholder'
import { useSelector } from 'react-redux'
import { RootState } from '../../features/store'
import { getCascade } from '../../features/game/selectors'
import { Card } from '../Card'
import _ from 'lodash'

const CascadeWrapper = styled.div`
  margin: 2rem;
`

type Props = {
  index: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
}

export const Cascade = ({ index }: Props) => {
  const cards = useSelector((state: RootState) => getCascade(state, index))
  //TODO remove i as key
  return (
    <CascadeWrapper>
      {cards.length > 0 ? (
        <>
          {_.map(cards, (card, i) => (
            <Card key={i} card={card}></Card>
          ))}
        </>
      ) : (
        <Placeholder>CASCADE</Placeholder>
      )}
    </CascadeWrapper>
  )
}
