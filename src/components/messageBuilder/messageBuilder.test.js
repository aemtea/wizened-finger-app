import { render, fireEvent } from '@testing-library/react-native';
import MessageBuilder from './messageBuilder';
import templates from '../../data/templates';
import categories from '../../data/categories';
import words from '../../data/words';

describe('<MessageBuilder />', () => {
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
  });

  describe('Message Preview', () => {
    it('displays selected template', () => {
      const { getAllByText, getByText, queryByText } = render(<MessageBuilder onMessageBuilt={mockFn} />);

      fireEvent.press(getAllByText('Add')[0]);
      fireEvent.press(getByText(templates[0].title));

      expect(queryByText(templates[0].title)).toBeTruthy();
      expect(queryByText(templates[1].title)).toBeNull();
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

    it('displays selected full message', () => {
      const { getAllByText, getByText, queryByText } = render(<MessageBuilder onMessageBuilt={mockFn} />);

      const addButtons = getAllByText('Add');
      fireEvent.press(addButtons[0]);
      fireEvent.press(getByText(templates[0].title));

      fireEvent.press(addButtons[1]);
      fireEvent.press(getByText(categories[0].title));
      fireEvent.press(getByText(words[0].title));

      var builtMessage = templates[0].title.split("****").join(words[0].title);
      expect(queryByText(builtMessage)).toBeTruthy();
    });
  });

  describe('Finish Button', () => {
    it('returns built message', () => {
      const message = {
        template: templates[0],
        word: words[0]
      };
      const { getAllByText, getByText } = render(<MessageBuilder onMessageBuilt={mockFn} />);

      const addButtons = getAllByText('Add');
      fireEvent.press(addButtons[0]);
      fireEvent.press(getByText(templates[0].title));

      fireEvent.press(addButtons[1]);
      fireEvent.press(getByText(categories[0].title));
      fireEvent.press(getByText(words[0].title));

      fireEvent.press(getByText('Finish'));

      expect(mockFn).toBeCalledWith(message);
    });
  });
});