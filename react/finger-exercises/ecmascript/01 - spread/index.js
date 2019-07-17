import { isArray } from './utils';

export function min(...args) {
  if (args.length === 0) {
    return undefined;
  }
  if (args.length > 1) {
    return Math.min(...args);
  }
  if (isArray(args[0])) {
    return Math.min(...args[0]);
  }

  return Math.min(args);
}

export function copy(args) {
  return (isArray(args) ? [...args.slice()] : { ...args });
}

export function reverseMerge(args, args2) {
  const mergeArray = [...args2, ...args];
  return mergeArray;
}

export function filterAttribs(args) {
  const { a, b, ...rest } = args;
  return rest;
}

