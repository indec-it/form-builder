import castArray from '../castArray';

describe('castArray', () => {
  let values;

  describe('when the provided values are an array', () => {
    beforeEach(() => {
      values = [1];
    });

    it('should return the same array', () => {
      expect(castArray(values)).toEqual([1]);
    });
  });

  describe('when the provided values are not an array', () => {
    beforeEach(() => {
      values = 1;
    });

    it('should return the provided values as an array', () => {
      expect(castArray(values)).toEqual([1]);
    });
  });
});
