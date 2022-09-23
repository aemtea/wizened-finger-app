import { act, render, fireEvent } from '@testing-library/react-native';
import { io } from 'socket.io-client';
import ConversationScreen from './conversation';
import conversations from '../../data/conversations';
jest.mock('../../components/messageBuilder/messageBuilder');
jest.mock('socket.io-client');

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

  it('displays socket message', () => {
    const socket = io(null);
    const expectedMessage = 'my test msg';
    const message = {
      conversationId: conversations[0].id,
      senderId: 0,
      content: expectedMessage
    }
    const { queryByText } = render(<ConversationScreen route={route} />);

    act(() => {
      socket.emit(`messageReceived:${message.conversationId}`, message);
    });

    expect(queryByText(expectedMessage)).toBeTruthy();
  });
});