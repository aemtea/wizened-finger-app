import { render, fireEvent } from "@testing-library/react-native";
import AddMessage from './addMessage';
import { formatMessage } from '../../helpers/messageHelpers';
import templates from '../../data/templates';
import words from '../../data/words'

jest.mock('../messageBuilder/messageBuilder');

describe('<AddMessage />', () => {
  it('returns built message', () => {
    const mockFn = jest.fn();
    const formattedMessage = formatMessage(templates[0], words[0]);

    const { getByText } = render(<AddMessage onMessageAdded={mockFn} />);

    fireEvent.press(getByText('+'));
    fireEvent.press(getByText('Bob'));

    expect(mockFn).toBeCalledWith(formattedMessage);
  });
});