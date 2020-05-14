export type Suit = 'C' | 'D' | 'H' | 'P'

export type Value = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A'

export type Card = {
  id: string
  suit: Suit
  value: Value
}

export type FreeCell = Card | null

export type ContainerId =
  | 'c0'
  | 'c1'
  | 'c2'
  | 'c3'
  | 'c4'
  | 'c5'
  | 'c6'
  | 'c7'
  | 'e0'
  | 'e1'
  | 'e2'
  | 'e3'
  | 'fC'
  | 'fD'
  | 'fH'
  | 'fS'
