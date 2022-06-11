import { render, fireEvent } from '@testing-library/react-native';
import MessageBuilder from '../../components/messageBuilder/messageBuilder';

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
  });

  describe('Okay Button', () => {
    it('closes <MessageBuilder />', () => {
      const { getByText } = render(<MessageBuilder onMessageBuilt={mockFn} />);

      fireEvent.press(getByText('Okay'));

      expect(mockFn).toHaveBeenCalled();
    });
  });
});