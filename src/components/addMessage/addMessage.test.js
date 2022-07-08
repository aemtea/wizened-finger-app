import { render, fireEvent } from "@testing-library/react-native";
import AddMessage from './addMessage';
import templates from '../../data/templates';
import words from '../../data/words'

jest.mock('../messageBuilder/messageBuilder');

describe('<AddMessage />', () => {
  it('returns built message', () => {
    const mockFn = jest.fn();
    const message = {
      template: templates[0],
      word: words[0]
    };

    const { getByText } = render(<AddMessage onMessageAdded={mockFn} />);

    fireEvent.press(getByText('+'));
    fireEvent.press(getByText('Bob'));

    expect(mockFn).toBeCalledWith(message);
  });
});