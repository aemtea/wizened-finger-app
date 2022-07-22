import { render } from '@testing-library/react-native';
import Conversations from './conversations';
import users from '../../data/users';
import conversations from '../../data/conversations';

describe('<Conversations />', () => {
  it('displays all conversations', () => {
    const { queryByText } = render(<Conversations conversation={conversations[0]} />);

    expect(queryByText(users[1].username)).toBeTruthy();
  });
});