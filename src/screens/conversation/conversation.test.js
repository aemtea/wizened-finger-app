import { render, fireEvent } from '@testing-library/react-native';
import ConversationScreen from './conversation';
import conversations from '../../data/conversations'

jest.mock('../../components/messageBuilder/messageBuilder');

const route = { 
  params: {
    conversation: conversations[0]
  }
}

describe('<ConversationScreen />', () => {
  it('displays messages', () => {
    const expectedMessage = 'enemy ahead';
    const { queryByText } = render(<ConversationScreen route={route} />);

    expect(queryByText(expectedMessage)).toBeTruthy();
  });

  it('adds built message', () => {
    const expectedMessage = 'enemy ahead';
    const { getByText, queryAllByText } = render(<ConversationScreen route={route} />);

    fireEvent.press(getByText('+'));
    fireEvent.press(getByText('Bob'));

    //TODO assert different message
    expect(queryAllByText(expectedMessage).length).toBe(2);
  });
});