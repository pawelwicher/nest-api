import _ from 'underscore';
import { as, best, butLast, cat, construct, existy, finder, interpose, isIndexed, mapcat, plucker, project, rename, restrict, truthy } from './lib';

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

  it('project should return proper result', () => {
    const table = [
      { id: 1, name: 'abc', value: 42 },
      { id: 2, name: 'abd', value: 43 },
      { id: 3, name: 'abe', value: 44 }
    ];
    const expected = [
      { id: 1, value: 42 },
      { id: 2, value: 43 },
      { id: 3, value: 44 }
    ];
    expect(project(table, ['id', 'value'])).toEqual(expected);
  });

  it('rename should return proper result', () => {
    expect(rename({ a: 1, b: 2}, { 'a': 'foo'})).toEqual({ foo: 1, b: 2 });
  });

  it('as should return proper result', () => {
    const table = [
      { id: 1, name: 'abc', value: 42 },
      { id: 2, name: 'abd', value: 43 },
      { id: 3, name: 'abe', value: 44 }
    ];
    const expected = [
      { num: 1, name: 'abc', val: 42 },
      { num: 2, name: 'abd', val: 43 },
      { num: 3, name: 'abe', val: 44 }
    ];
    expect(as(table, {id: 'num', value: 'val'})).toEqual(expected);
  });

  it('restrict should return proper result', () => {
    const table = [
      { id: 1, name: 'abc', value: 42 },
      { id: 2, name: 'abd', value: 43 },
      { id: 3, name: 'abe', value: 44 }
    ];
    const expected = [
      { id: 2, name: 'abd', value: 43 },
      { id: 3, name: 'abe', value: 44 }
    ];
    expect(restrict(table, x => x.id > 1)).toEqual(expected);
  });

  it('project, as and restrict should return proper result', () => {
    const table = [
      { id: 1, name: 'abc', value: 42 },
      { id: 2, name: 'abd', value: 43 },
      { id: 3, name: 'abe', value: 44 }
    ];
    const expected = [
      { id: 2, code: 'abd' },
      { id: 3, code: 'abe' }
    ];
    const actual = restrict(
      project(
        as(table, { name: 'code'}),
        ['id', 'code']
      ),
      x => x.id > 1
    );
    expect(actual).toEqual(expected);
  });

  it('plucker should return proper result', () => {
    const pluckFoo = plucker('foo');
    expect(pluckFoo(null)).toEqual(null);
    expect(pluckFoo({ foo: 1, bar: 2})).toEqual(1);
  });

  it('finder should return proper result', () => {
    expect(finder(_.identity, Math.max, [1, 2, 3])).toEqual(3);
    const table = [
      { id: 1, name: 'abc', value: 42 },
      { id: 2, name: 'abd', value: 43 },
      { id: 3, name: 'abe', value: 44 }
    ];
    expect(finder(plucker('id'), Math.max, table)).toEqual({ id: 3, name: 'abe', value: 44 });
  });

  it('best should return proper result', () => {
    expect(best((x, y) => x > y, [1, 2, 3])).toEqual(3);
  });

});