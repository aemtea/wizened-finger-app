import messageManager from './messageManager';
import { io } from 'socket.io-client';
import conversations from '../data/conversations';
jest.mock('socket.io-client');

describe('messageManager', () => {
  let socket;
  let mockFn;
  const expectedMessage = {
    conversationId: conversations[0].id,
    senderId: 0,
    content: 'my test msg'
  };

  beforeEach(() => {
    socket = io(null);
    mockFn = jest.fn()
  });

  it('sends message', () => {
    socket.on('messageSent', mockFn);

    messageManager.sendMessage(expectedMessage);

    expect(mockFn).toBeCalledWith(expectedMessage);
  });

  it('receives message', () => {
    messageManager.onMessageReceived(expectedMessage.conversationId, mockFn);

    socket.emit(`messageReceived:${expectedMessage.conversationId}`, expectedMessage);
    
    expect(mockFn).toBeCalledWith(expectedMessage);
  });
});