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

  it('displays item', () => {
    const { queryByText } = render(<ItemSelector data={data} onItemSelected={mockFn} />);

    expect(queryByText(data[0].title)).toBeTruthy();
  });

  it('returns selected title on press', () => {
    const { getByText } = render(<ItemSelector data={data} onItemSelected={mockFn} />);

    fireEvent.press(getByText(data[1].title));

    expect(mockFn).toHaveBeenCalledWith(data[1]);
  });
});