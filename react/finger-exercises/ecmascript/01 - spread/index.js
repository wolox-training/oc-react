import { isArray } from './utils';

export function min(...args) {
  if (args.length > 1) {
    return Math.min(...args);
  }
  if (isArray(args[0])) {
    return Math.min(...args[0]);
  }

  return Math.min(args);
}

export function copy() {
}
