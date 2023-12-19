import {isEqual, isBefore, isAfter} from 'date-fns';

import questionTypes from '@/constants/questionTypes';

const isString = value => typeof value === 'string';
const isObject = value => typeof value === 'object' && value !== null && !Array.isArray(value);

const operations = {
  eq: (a, b, questionType) => {
    if (questionType === questionTypes.DATE) {
      const firstDate = new Date(a);
      const secondDate = new Date(b);
      return isEqual(firstDate, secondDate);
    }
    if (isObject(a)) {
      return Object.values(a).some(value => value === b);
    }
    return a === b;
  },
  ne: (a, b, questionType) => {
    if (questionType === questionTypes.DATE) {
      const firstDate = new Date(a);
      const secondDate = new Date(b);
      return !isEqual(firstDate, secondDate);
    }
    return a !== b;
  },
  gt: (a, b, questionType) => {
    if (questionType === questionTypes.DATE) {
      const firstDate = new Date(a);
      const secondDate = new Date(b);
      return isAfter(firstDate, secondDate);
    }
    return isString(a) ? a.length > b : a > b;
  },
  gte: (a, b) => (isString(a) ? a.length >= b : a >= b),
  lt: (a, b, questionType) => {
    if (questionType === questionTypes.DATE) {
      const firstDate = new Date(a);
      const secondDate = new Date(b);
      return isBefore(firstDate, secondDate);
    }
    return isString(a) ? a.length < b : a < b;
  },
  lte: (a, b) => (isString(a) ? a.length <= b : a <= b),
  in: (a, b) => a.includes(b),
  nin: (a, b) => !a.includes(b)
};

export default operations;
