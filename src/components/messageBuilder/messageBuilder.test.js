import { render, fireEvent } from '@testing-library/react-native';
import MessageBuilder from './messageBuilder';
import { formatMessage } from '../../helpers/messageHelpers';
import templates from '../../data/templates';
import categories from '../../data/categories';
import words from '../../data/words';

describe('<MessageBuilder />', () => {
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
  });

  describe('Template Selector', () => {
    it('displays selected template', () => {
      const { getAllByText, getByText, queryByText } = render(<MessageBuilder onMessageBuilt={mockFn} />);

      fireEvent.press(getAllByText('Add')[0]);
      fireEvent.press(getByText(templates[0].title));

      expect(queryByText(templates[0].title)).toBeTruthy();
    });

    it('does not display unselected template', () => {
      const { getAllByText, getByText, queryByText } = render(<MessageBuilder onMessageBuilt={mockFn} />);

      fireEvent.press(getAllByText('Add')[0]);
      fireEvent.press(getByText(templates[0].title));

      expect(queryByText(templates[1].title)).toBeNull();
    });
  });

  describe('Word Selector', () => {
    it('displays word for appropriate category', () => {
      const { getAllByText, getByText, queryByText } = render(<MessageBuilder onMessageBuilt={mockFn} />);

      fireEvent.press(getAllByText('Add')[1]);
      fireEvent.press(getByText(categories[1].title));

      var adsf = words.filter(w => w.category == categories[1].title);
      expect(queryByText(adsf[0].title)).toBeTruthy();
    });

    it('displays selected word', () => {
      const { getAllByText, getByText, queryByText } = render(<MessageBuilder onMessageBuilt={mockFn} />);

      fireEvent.press(getAllByText('Add')[1]);
      fireEvent.press(getByText(categories[0].title));
      fireEvent.press(getByText(words[0].title));

      expect(queryByText(categories[0].title)).toBeNull();
      expect(queryByText(words[0].title)).toBeTruthy();
      expect(queryByText(words[1].title)).toBeNull();
    });

    it('does not display unselected word', () => {
      var expectedMessage = 'enemy ahead';
      const { getAllByText, getByText, queryByText } = render(<MessageBuilder onMessageBuilt={mockFn} />);

      const addButtons = getAllByText('Add');
      fireEvent.press(addButtons[0]);
      fireEvent.press(getByText(templates[0].title));

      fireEvent.press(addButtons[1]);
      fireEvent.press(getByText(categories[0].title));
      fireEvent.press(getByText(words[0].title));

      expect(queryByText(expectedMessage)).toBeTruthy();
    });
  });

  describe('Finish Button', () => {
    it('returns built message', () => {
      const message = {
        content: {
          template: templates[0],
          word: words[0]
        }
      };
      const formattedMessage = formatMessage(message.content.template, message.content.word);
      const { getAllByText, getByText } = render(<MessageBuilder onMessageBuilt={mockFn} />);

      const addButtons = getAllByText('Add');
      fireEvent.press(addButtons[0]);
      fireEvent.press(getByText(templates[0].title));

      fireEvent.press(addButtons[1]);
      fireEvent.press(getByText(categories[0].title));
      fireEvent.press(getByText(words[0].title));

      fireEvent.press(getByText('Finish'));

      expect(mockFn).toBeCalledWith(formattedMessage);
    });
  });
});