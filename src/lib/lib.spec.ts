import _ from 'underscore';
import { butLast, cat, construct, existy, interpose, isIndexed, mapcat, truthy } from './lib';

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

  it('construct should return proper result', () => {
    expect(construct(42, [1, 2, 3])).toEqual([42, 1, 2, 3]);
  });

  it('mapcat should return proper result', () => {
    expect(mapcat(x => construct(x, [',']), [1, 2, 3])).toEqual([1, ',', 2, ',', 3, ',']);
  });

  it('butLast should return proper result', () => {
    expect(butLast([1, 2, 3])).toEqual([1, 2]);
  });

  it('interpose should return proper result', () => {
    expect(interpose(',', [1, 2, 3])).toEqual([1, ',', 2, ',', 3]);
  });

});