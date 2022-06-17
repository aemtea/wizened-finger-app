import { render, fireEvent } from '@testing-library/react-native';
import MessageBuilder from './messageBuilder';
import words from '../../data/words';

describe('<MessageBuilder />', () => {
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
  });

  describe('Message Preview', () => {
    it('displays selected template', () => {
      const { getAllByText, getByText, queryByText } = render(<MessageBuilder onMessageBuilt={mockFn} />);

      fireEvent.press(getAllByText('Add')[0]);
      fireEvent.press(getByText('**** ahead'));

      expect(queryByText('**** ahead')).toBeTruthy();
      expect(queryByText('No **** ahead')).toBeNull();
    });

    it('displays selected word', () => {
      const { getAllByText, getByText, queryByText } = render(<MessageBuilder onMessageBuilt={mockFn} />);

      fireEvent.press(getAllByText('Add')[1]);
      fireEvent.press(getByText(words[0].title));

      expect(queryByText(words[0].title)).toBeTruthy();
      expect(queryByText(words[1].title)).toBeNull();
    });
  });

  describe('Okay Button', () => {
    it('closes <MessageBuilder />', () => {
      const { getByText } = render(<MessageBuilder onMessageBuilt={mockFn} />);

      fireEvent.press(getByText('Okay'));

      expect(mockFn).toHaveBeenCalled();
    });
  });
});