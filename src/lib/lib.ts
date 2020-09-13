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
    return head.concat.apply(head, _.rest(args));
  } else {
    return [];
  }
}

export function construct(head, tail) {
  return cat([head], _.toArray(tail));
}

export function mapcat(fun, coll) {
  return cat.apply(null, _.map(coll, fun));
}

export function butLast(coll) {
  return _.toArray(coll).slice(0, -1);
}

export function interpose(inter, coll) {
  return butLast(mapcat(x => construct(x, [inter]), coll));
}