import { render, fireEvent } from "@testing-library/react-native";
import ConversationScreen from "./conversation";
import templates from '../../data/templates';
import words from '../../data/words';

jest.mock('../../components/messageBuilder/messageBuilder');

describe('<ConversationScreen />', () => {
  it('adds built message', () => {
    const { getByText, queryByText } = render(<ConversationScreen />);

    fireEvent.press(getByText('+'));
    fireEvent.press(getByText('Bob'));

    var addedMessage = templates[0].title.split("****").join(words[0].title);
    expect(queryByText(addedMessage)).toBeTruthy();
  });
});