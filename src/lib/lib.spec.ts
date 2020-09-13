import { cat, existy, isIndexed, truthy } from './lib';

describe('Lib', () => {

  it('existy should return proper result', () => {
    expect(existy(0)).toBeTruthy();
    expect(existy(1)).toBeTruthy();
    expect(existy({})).toBeTruthy();
    expect(existy([])).toBeTruthy();
    expect(existy(false)).toBeTruthy();
    expect(existy(undefined)).toBeFalsy();
  });

  it('truthy should return proper result', () => {
    expect(truthy(0)).toBeTruthy();
    expect(truthy(1)).toBeTruthy();
    expect(truthy({})).toBeTruthy();
    expect(truthy([])).toBeTruthy();
    expect(truthy(false)).toBeFalsy();
    expect(truthy(undefined)).toBeFalsy();
  });

  it('truthy should return proper result', () => {
    expect(isIndexed([])).toBeTruthy();
    expect(isIndexed('abc')).toBeTruthy();
    expect(isIndexed(1)).toBeFalsy();
  });

  it('cat should return proper result', () => {
    expect(cat([1, 2, 3], [4, 5], [6, 7, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

});