import getSelectedOptionLabel from '../getSelectedOptionLabel';

describe('getSelectedOptionLabel', () => {
  const options = [{value: 1, label: 'Option 1'}, {value: 2, label: 'Option 2'}];
  let selectedOption;

  describe('when `selectedOption` does not match with an option`s id', () => {
    beforeEach(() => {
      selectedOption = 3;
    });

    it('should return `Sin respuesta.`', () => {
      expect(getSelectedOptionLabel(options, selectedOption)).toBe('Sin respuesta.');
    });
  });

  describe('when `selectedOption` matches with an option`s id', () => {
    beforeEach(() => {
      selectedOption = 1;
    });

    it('should return the label selected', () => {
      expect(getSelectedOptionLabel(options, selectedOption)).toBe('Option 1');
    });
  });
});
