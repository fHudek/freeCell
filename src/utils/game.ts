import { DECK } from '../constants/deck'
import _ from 'lodash'
import { Card, Suit } from '../types'

const shuffle = (cards: Card[]) => {
  var currentIndex = cards.length,
    temporaryValue,
    randomIndex
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    temporaryValue = cards[currentIndex]
    cards[currentIndex] = cards[randomIndex]
    cards[randomIndex] = temporaryValue
  }
  return cards
}

export const dealCards = (): Card[][] => {
  const shuffledDeck = shuffle(_.values(DECK))
  return [
    _.slice(shuffledDeck, 0, 7),
    _.slice(shuffledDeck, 7, 14),
    _.slice(shuffledDeck, 14, 21),
    _.slice(shuffledDeck, 21, 28),
    _.slice(shuffledDeck, 28, 34),
    _.slice(shuffledDeck, 34, 40),
    _.slice(shuffledDeck, 40, 46),
    _.slice(shuffledDeck, 46)
  ]
}

export const isCardRed = (suit: Suit) => {
  return suit === 'H' || suit === 'D'
}

export const canBeMoveToCascade = (lastCard: Card) => {
  return true
}

export const isFreeCellEmpty = () => {
  return true
}

export const canBeMovedToFoundation = () => {
  return true
}

export const getCardIntValue = () => {}

const ValueToInt = {
  A: 0,
  '2': 1,
  '3': 2,
  '4': 3,
  '5': 4,
  '6': 5,
  '7': 6,
  '8': 7,
  '9': 8,
  '10': 9,
  J: 10,
  Q: 11,
  K: 12
}

export const isSmallerByOne = (cardA: Card, cardB: Card) => {
  return ValueToInt[cardA.value] - ValueToInt[cardB.value] === -1
}

export const hasSameSuit = (card: Card, suit: Suit) => {
  return card.suit === suit
}

export const isAce = (card: Card) => {
  return card.value === 'A'
}

export const hasOppositeColor = (cardA: Card, cardB: Card) => {
  if (cardA.suit === 'D' || cardA.suit === 'H') {
    return cardB.suit === 'C' || cardB.suit === 'P'
  } else {
    return cardB.suit === 'D' || cardB.suit === 'H'
  }
}
