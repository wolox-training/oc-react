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
    let copyArr = args.slice();
    return copyArr;
  }

  let copyObj = Object.assign({},args);

  return copyObj;
}

export function reverseMerge(args, args2) {
  let mergeArr = [...args2, ...args];
  return mergeArr;
}
