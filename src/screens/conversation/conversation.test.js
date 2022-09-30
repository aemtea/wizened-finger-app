import { act, render, fireEvent } from '@testing-library/react-native';
import { io } from 'socket.io-client';
import ConversationScreen from './conversation';
import conversations from '../../data/conversations';
jest.mock('../../components/messageBuilder/messageBuilder');
jest.mock('socket.io-client');

describe('<ConversationScreen />', () => {
  const route = {
    params: {
      conversation: conversations[0]
    }
  };
  let socket;

  beforeEach(() => {
    socket = io(null);
  });

  it('displays messages', () => {
    const expectedMessage = 'enemy ahead';
    const { queryByText } = render(<ConversationScreen route={route} />);

    expect(queryByText(expectedMessage)).toBeTruthy();
  });

  it('adds built message', () => {
    const mockFn = jest.fn();
    const expectedMessage = 'enemy ahead';
    const { getByText, queryAllByText } = render(<ConversationScreen route={route} />);
    socket.on('messageSent', mockFn);

    fireEvent.press(getByText('+'));
    fireEvent.press(getByText('Bob'));

    //TODO assert different message
    expect(queryAllByText(expectedMessage).length).toBe(2);
    expect(mockFn).toBeCalled();
  });

  it('displays socket message', () => {
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