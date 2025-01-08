import dateNormalizer from './dateNormalizer';

describe('dateNormalizer', () => {
  it('should format the date correctly', () => {
    const inputDate = '2023-10-05T00:00:00Z';
    const expectedOutput = 'October 5, 2023';
    expect(dateNormalizer(inputDate)).toBe(expectedOutput);
  });

  it('should handle invalid date input', () => {
    const inputDate = 'invalid-date';
    const expectedOutput = 'Invalid Date';
    expect(dateNormalizer(inputDate)).toBe(expectedOutput);
  });
});
