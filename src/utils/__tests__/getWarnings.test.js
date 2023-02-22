import * as Yup from 'yup';

import getWarnings from '../getWarnings';

describe('getWarnings', () => {
  let schema;
  let values;

  describe('when the provided schema is not defined', () => {
    beforeEach(() => {
      schema = null;
    });

    it('should return an empty object', () => {
      expect(getWarnings(schema, values)).toEqual({});
    });
  });

  describe('when the schema has not warnings', () => {
    beforeEach(() => {
      schema = Yup.object({S1P1: Yup.string().required('Must complete the field')});
      values = {S1P1: 'This is a test'};
    });

    it('should return an empty object', () => {
      expect(getWarnings(schema, values)).toEqual({});
    });
  });

  describe('when the schema has warnings', () => {
    beforeEach(() => {
      schema = Yup.object({S1P1: Yup.string().required('Must complete the field')});
      values = {S1P1: ''};
    });

    it('should return an object with warnings', () => {
      expect(getWarnings(schema, values)).toEqual({S1P1: 'Must complete the field'});
    });
  });
});
