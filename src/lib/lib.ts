import { check } from 'prettier';
import _ from 'underscore';

export function existy(x) {
  return x != null;
}

export function truthy(x) {
  return x !== false && existy(x);
}

export function isIndexed(x) {
  return _.isArray(x) || _.isString(x);
}

export function cat(...args: any[]) {
  const head = _.first(args);
  if (existy(head)) {
    return head.concat(... _.rest(args));
  } else {
    return [];
  }
}

export function construct(head, tail) {
  return cat([head], _.toArray(tail));
}

export function mapcat(fun, coll) {
  return cat(... _.map(coll, fun));
}

export function butLast(coll) {
  return _.toArray(coll).slice(0, -1);
}

export function interpose(inter, coll) {
  return butLast(mapcat(x => construct(x, [inter]), coll));
}

export function project(table, keys) {
  return _.map(table, x => _.pick(x, keys))
}

export function rename(obj, newNames) {
  return _.reduce(newNames, (o, nu, old) => {
    if (_.has(obj, old)) {
      o[nu] = obj[old];
    }
    return o;
  },
  _.omit(obj, _.keys(newNames)));
}

export function as(table, newNames) {
  return _.map(table, x => rename(x, newNames));
}

export function restrict(table, pred) {
  return _.reduce(table, (newTable, obj) => {
    if (truthy(pred(obj))) {
      return newTable
    } else {
      return _.without(newTable, obj);
    }
  },
  table);
}

export function plucker(field) {
  return function(obj) {
    return obj && obj[field];
  }
}

export function finder(valueFun, bestFun, coll) {
  return _.reduce(coll, (best, current) => {
    const bestValue = valueFun(best);
    const currentValue = valueFun(current);
    return bestValue === bestFun(bestValue, currentValue) ? best : current;
  });
}

export function best(fun, coll) {
  return _.reduce(coll, (x, y) => fun(x, y) ? x : y);
}

export function always(value) {
  return function() {
    return value;
  }
}

export function repeatedly(times, fun) {
  return _.map(_.range(times), fun);
}

export function iterateUntil(fun, check, init) {
  const ret = [];
  let result = fun(init);

  while (check(result)) {
    ret.push(result);
    result = fun(result);
  }

  return ret;
}