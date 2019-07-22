import { shape, string, number } from 'prop-types';

export const booksSelectedPropType = shape({
  name: string,
  summary: string,
  quantity: number
});

export const booksPropType = shape({
  name: shape,
  summary: string
});
