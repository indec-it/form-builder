const isString = value => typeof value === 'string';
const isObject = value => typeof value === 'object'
&& value !== null
&& !Array.isArray(value);

const operations = {
  eq: (a, b) => {
    if (isObject(a)) {
      return Object.values(a).some(value => value === b);
    }
    return a === b;
  },
  ne: (a, b) => a !== b,
  gt: (a, b) => (isString(a) ? a.length > b : a > b),
  gte: (a, b) => (isString(a) ? a.length >= b : a >= b),
  lt: (a, b) => (isString(a) ? a.length < b : a < b),
  lte: (a, b) => (isString(a) ? a.length <= b : a <= b),
  in: (a, b) => a.includes(b),
  nin: (a, b) => !a.includes(b)
};

export default operations;
