export type Suit = 'C' | 'D' | 'H' | 'S'

export type Value = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A'

export type Card = {
  suit: Suit
  value: Value
}

export type FreeCell = Card | null
