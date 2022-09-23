import messageManager from './messageManager';
import { io } from 'socket.io-client';
import conversations from '../data/conversations';
jest.mock('socket.io-client');

describe('messageManager', () => {
  it('sends message', () => {
    const socket = io(null);
    let actualMessage = null;
    const messageSent = (sentMessage) => {
      actualMessage = sentMessage;
    };
    const expectedMessage = {
      conversationId: conversations[0].id,
      senderId: 0,
      content: 'my test msg'
    }
    socket.on('messageSent', messageSent);

    messageManager.sendMessage(expectedMessage);

    expect(actualMessage).toEqual(expectedMessage);
  });
});