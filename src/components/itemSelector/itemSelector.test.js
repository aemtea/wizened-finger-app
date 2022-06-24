import { render, fireEvent } from '@testing-library/react-native';
import ItemSelector from './itemSelector';

const data = [
  { id: 0, title: 'fist item' },
  { id: 1, title: 'second item' }
];

describe('<ItemSelector />', () => {
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
  });

  it('displays words', () => {
    const { queryByText } = render(<ItemSelector data={data} onItemSelected={mockFn} />);

    expect(queryByText(data[0].title)).toBeTruthy();
  });

  it('returns selected word on press', () => {
    const { getByText } = render(<ItemSelector data={data} onItemSelected={mockFn} />);

    fireEvent.press(getByText(data[1].title));

    expect(mockFn).toHaveBeenCalledWith(data[1]);
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