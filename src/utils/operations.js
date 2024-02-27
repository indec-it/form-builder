import {isEqual, isBefore, isAfter} from 'date-fns';

import questionTypes from '@/constants/questionTypes';

import isObject from './isObject';

const isString = value => typeof value === 'string';

const dateNotEquals = (a, b) => !isEqual(a, b);

const dateOperators = {
  lt: isBefore,
  gt: isAfter,
  eq: isEqual,
  ne: dateNotEquals
};

const validateDateRange = (dates, endDate, operator) => {
  let isValid = false;
  const secondDate = endDate ? new Date(endDate) : '';
  isValid = Object.values(dates).some(date => {
    if (!date && !secondDate) {
      return true;
    }
    return dateOperators[operator](new Date(date), secondDate);
  });
  return {isValid};
};

const operations = {
  eq: (a, b, questionType) => {
    if (isObject(a)) {
      if (questionType === questionTypes.DATE) {
        const {isValid} = validateDateRange(a, b, 'eq');
        return isValid;
      }
      return Object.values(a).some(value => value === b);
    }
    return a === b;
  },
  ne: (a, b, questionType) => {
    if (isObject(a)) {
      if (questionType === questionTypes.DATE) {
        const {isValid} = validateDateRange(a, b, 'ne');
        return isValid;
      }
      return Object.values(a).some(value => value === b);
    }
    return a !== b;
  },
  gt: (a, b, questionType) => {
    if (isObject(a)) {
      if (questionType === questionTypes.DATE) {
        const {isValid} = validateDateRange(a, b, 'gt');
        return isValid;
      }
      return Object.values(a).some(value => value === b);
    }
    return isString(a) ? a.length > b : a > b;
  },
  gte: (a, b) => (isString(a) ? a.length >= b : a >= b),
  lt: (a, b, questionType) => {
    if (isObject(a)) {
      if (questionType === questionTypes.DATE) {
        const {isValid} = validateDateRange(a, b, 'lt');
        return isValid;
      }
      return Object.values(a).some(value => value === b);
    }
    return isString(a) ? a.length < b : a < b;
  },
  lte: (a, b) => (isString(a) ? a.length <= b : a <= b),
  in: (a, b) => a.includes(b),
  nin: (a, b) => !a.includes(b)
};

export default operations;
