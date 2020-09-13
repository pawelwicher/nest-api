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

export function cat(...args) {
  const head = _.first(arguments);
  if (existy(head)) {
    return head.concat.apply(head, _.rest(arguments));
  } else {
    return [];
  }
}