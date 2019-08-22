import pow from '.';

describe('01 - matchers', () => {
  it('pow returns the power based on two numeric arguments', () => {
    expect(pow(2, 3)).toBe(8);
  });
  it('pow returns undefined if there is no arguments', () => {
    expect(pow()).toBe(undefined);
  });
  it('pow returns undefined if there is just one argument', () => {
    expect(pow(1)).toBe(undefined);
  });
  it('pow returns an array of power results if array of pairs are sent as arguments', () => {
    expect(pow([2, 3], [3, 2])).toEqual([8, 9]);
  });
  it('pow returns undefined in the right position of the result array if pair is not as expected', () => {
    expect(pow([2, 3], [1])).toEqual([8, undefined]);
  });
});
