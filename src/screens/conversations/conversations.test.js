import { render } from '@testing-library/react-native';
import ConversationsScreen from './conversations';
import users from '../../data/users';
import conversations from '../../data/conversations';

describe('<ConversationsScreen />', () => {
  it('displays all conversations', () => {
    const { queryByText } = render(<ConversationsScreen conversation={conversations[0]} />);

    expect(queryByText(users[1].username)).toBeTruthy();
  });
});