import { render } from '@testing-library/react-native';
import renderer, { act } from 'react-test-renderer';
import { io } from 'socket.io-client';
import ConversationPreview from './conversationPreview';
import conversations from '../../data/conversations'
jest.mock('socket.io-client');

describe('<ConversationPreview />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ConversationPreview conversation={conversations[0]}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it ('displays socket mesage', () => {
    const socket = io(null);
    const expectedContent = 'my test msg';
    const message = {
      conversationId: 0,
      senderId: 0,
      content: expectedContent
    }
    const { queryByText } = render(<ConversationPreview conversation={conversations[0]}/>);
    
    act(() => {
      socket.emit(`messageReceived:${message.conversationId}`, message);
    });

    expect(queryByText(expectedContent)).toBeTruthy();
  });
});