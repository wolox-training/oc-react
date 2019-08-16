import React from 'react';
import { createSelector } from 'reselect';

const getCards = (state) => state.hearthstone.cards;

export const cardSelector = createSelector(
  getCards,
  cards => cards.filter(card => card.mana < 4)
);
