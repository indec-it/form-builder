import getLastId from '../getLastId';

describe('getLastId', () => {
  let values;

  describe('when `values` is not defined', () => {
    beforeEach(() => {
      values = undefined;
    });

    it('should return `undefined`', () => {
      expect(getLastId(values)).toBeUndefined();
    });
  });

  describe('when `values` is an empty array', () => {
    beforeEach(() => {
      values = [];
    });

    it('should return `undefined`', () => {
      expect(getLastId(values)).toBeUndefined();
    });
  });

  describe('when `values` is not an empty array', () => {
    beforeEach(() => {
      values = [{id: 3}, {id: 1}, {id: 2}];
    });

    it('should return the greatest value', () => {
      expect(getLastId(values)).toBe(3);
    });
  });
});
