import { render } from '@testing-library/react-native';
import Message from './message';
import messages from '../../data/messages'

describe('<Message />', () => {
  it('displays message', () => {
    const expectedMessage = messages[0].content;
    const { queryByText } = render(<Message message={messages[0]} />)

    expect(queryByText(expectedMessage)).toBeTruthy();
  });
});