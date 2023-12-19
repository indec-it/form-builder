import questionTypes from '@/constants/questionTypes';

import operations from '../operations';

describe('operations', () => {
  describe('equals', () => {
    describe('when `a` is string or number', () => {
      it('should return `true` if `a` is equals to `b`', () => {
        expect(operations.eq('test', 'test')).toBe(true);
      });

      it('should return `false` if `a` is not equals to `b`', () => {
        expect(operations.eq(1, 2)).toBe(false);
      });
    });

    describe('when `a` is an object', () => {
      it('should return `true` if some properties of `a` are equal to `b`', () => {
        expect(operations.eq({a: 'test', b: 'test'}, 'test')).toBe(true);
      });

      it('should return `false` if some properties of `a` are not equal to `b`', () => {
        expect(operations.eq({a: 'test', b: 'test'}, '')).toBe(false);
      });
    });

    describe('when `questionType` is date', () => {
      it('should return `true` if `a` is equal to `b`', () => {
        expect(operations.eq('2023-09-01T16:54:00.000Z', '2023-09-01T16:54:00.000Z', questionTypes.DATE)).toBe(true);
      });

      it('should return `false` if `a` is not equal to `b`', () => {
        expect(operations.eq('2023-09-01T16:53:00.000Z', '2023-09-01T16:54:00.000Z', questionTypes.DATE)).toBe(false);
      });
    });
  });

  describe('not equals', () => {
    it('should return `false` if `a` is equals to `b`', () => {
      expect(operations.ne(1, 1)).toBe(false);
    });

    it('should return `true` if `a` is not equals to `b`', () => {
      expect(operations.ne(1, 2)).toBe(true);
    });

    describe('when `questionType` is date', () => {
      it('should return `false` if `a` is equal to `b`', () => {
        expect(operations.ne('2023-09-01T16:54:00.000Z', '2023-09-01T16:54:00.000Z', questionTypes.DATE)).toBe(false);
      });

      it('should return `true` if `a` is not equal to `b`', () => {
        expect(operations.ne('2023-09-01T16:53:00.000Z', '2023-09-01T16:54:00.000Z', questionTypes.DATE)).toBe(true);
      });
    });
  });

  describe('greater than', () => {
    it('should return `true` if `a` is greater than `b`', () => {
      expect(operations.gt(2, 1)).toBe(true);
    });

    it('should return `false` if `a` is not greater than `b`', () => {
      expect(operations.gt('test', 10)).toBe(false);
    });
  });

  describe('greater than or equal to', () => {
    it('should return `true` if `a` is greater than or equal to `b`', () => {
      expect(operations.gte(2, 2)).toBe(true);
    });

    it('should return `false` if `a` is not greater than or equal to `b`', () => {
      expect(operations.gte('test', 10)).toBe(false);
    });
  });

  describe('less than', () => {
    it('should return `true` if `a` is less than `b`', () => {
      expect(operations.lt(2, 3)).toBe(true);
    });

    it('should return `false` if `a` is not less than `b`', () => {
      expect(operations.lt('test', 3)).toBe(false);
    });

    describe('when `questionType` is date', () => {
      it('should return `true` if `a` is before than `b`', () => {
        expect(operations.lt('2023-09-01T16:54:00.000Z', '2023-09-01T16:55:00.000Z', questionTypes.DATE)).toBe(true);
      });

      it('should return `false` if `a` is not before than `b`', () => {
        expect(operations.lt('2023-09-01T16:55:00.000Z', '2023-09-01T16:54:00.000Z', questionTypes.DATE)).toBe(false);
      });
    });
  });

  describe('less than or equal to', () => {
    it('should return `true` if `a` is less than or equal to `b`', () => {
      expect(operations.lte(3, 3)).toBe(true);
    });

    it('should return `false` if `a` is not less than `b`', () => {
      expect(operations.lte('test', 3)).toBe(false);
    });
  });

  describe('includes', () => {
    it('should return `true` if `a` includes `b`', () => {
      expect(operations.in([1, 2, 3], 2)).toBe(true);
    });

    it('should return `false` if `a` does not include `b`', () => {
      expect(operations.in([1, 2, 3], 4)).toBe(false);
    });
  });

  describe('not includes', () => {
    it('should return `true` if `a` does not include `b`', () => {
      expect(operations.nin([1, 2, 3], 4)).toBe(true);
    });

    it('should return `false` if `a` includes `b`', () => {
      expect(operations.nin([1, 2, 3], 3)).toBe(false);
    });
  });
});
