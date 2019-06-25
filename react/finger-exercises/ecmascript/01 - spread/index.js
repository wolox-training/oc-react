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
  if (isArray(args)) {
    const copyArr = args.slice();
    return copyArr;
  }

  const copyObj = Object.assign({}, args);

  return copyObj;
}

export function reverseMerge(args, args2) {
  const mergeArr = [...args2, ...args];
  return mergeArr;
}

export function filterAttribs(args) {
  const { a, b, ...rest } = args;
  return rest;
}

