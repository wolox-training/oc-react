import { shape, string, number } from 'prop-types';

export const booksPropType = shape({
  name: string,
  summary: string,
  quantity: number
});
