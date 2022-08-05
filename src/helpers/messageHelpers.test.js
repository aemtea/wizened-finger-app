import { formatMessage } from './messageHelpers';
import templates from '../data/templates';
import words from '../data/words';

describe('Format Message', () => {
  it('returns expected output', () => {
    const expectedMessage = 'enemy ahead';

    var actualMessage = formatMessage(templates[0], words[[0]]);

    expect(actualMessage).toBe(expectedMessage);
  });
});