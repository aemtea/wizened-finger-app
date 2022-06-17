import { render, fireEvent } from '@testing-library/react-native';
import WordSelector from './wordSelector';
import words from '../../data/words';

describe('<WordSelector />', () => {
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
  });

  it('displays words', () => {
    const { queryByText } = render(<WordSelector onWordSelected={mockFn} />);

    expect(queryByText(words[0].title)).toBeTruthy();
  });

  it('returns selected word on press', () => {
    const { getByText } = render(<WordSelector onWordSelected={mockFn} />);

    fireEvent.press(getByText(words[1].title));

    expect(mockFn).toHaveBeenCalledWith(words[1]);
  });

  // describe('Message Preview', () => {
  //   it('displays selected template', () => {
  //     const { getAllByText, getByText, queryByText } = render(<MessageBuilder onMessageBuilt={mockFn} />);

  //     fireEvent.press(getAllByText('Add')[0]);
  //     fireEvent.press(getByText('**** ahead'));

  //     expect(queryByText('**** ahead')).toBeTruthy();
  //     expect(queryByText('No **** ahead')).toBeNull();
  //   });

  //   it('displays selected word', () => {
  //     const { getAllByText, getByText, queryByText } = render(<MessageBuilder onMessageBuilt={mockFn} />);

  //     fireEvent.press(getAllByText('Add')[1]);
  //     fireEvent.press(getByText('enemy'));

  //     expect(queryByText('enemy')).toBeTruthy();
  //     expect(queryByText('weak foe')).toBeNull();
  //   });
  // });

  // describe('Okay Button', () => {
  //   it('closes <MessageBuilder />', () => {
  //     const { getByText } = render(<MessageBuilder onMessageBuilt={mockFn} />);

  //     fireEvent.press(getByText('Okay'));

  //     expect(mockFn).toHaveBeenCalled();
  //   });
  // });
});