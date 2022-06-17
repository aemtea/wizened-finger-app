/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import { render, fireEvent } from '@testing-library/react-native';
 import renderer from 'react-test-renderer';
 import WordItem from '../../components/wordItem/wordItem';
 
 describe('<WordItem />', () => {
   let mockFn;
   const word = {
     id: 0,
     category: 'my word',
     title: 'hello world'
   };
 
   beforeEach(() => {
     mockFn = jest.fn();
   });
 
   it('onPress returns item', () => {
     const { getByText } = render(<WordItem item={word} onWordSelected={mockFn} />);
 
     fireEvent.press(getByText(word.title));
     
     expect(mockFn).toBeCalledWith(word);
   });
 
  //  it('renders correctly', () => {
  //    const tree = renderer.create(<WordItem item={word} onWordSelected={mockFn} />).toJSON();
  //    expect(tree).toMatchSnapshot();
  //  });
 });