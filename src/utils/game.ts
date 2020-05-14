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
