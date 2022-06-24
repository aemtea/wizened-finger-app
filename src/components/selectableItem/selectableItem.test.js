/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import { render, fireEvent } from '@testing-library/react-native';
 import renderer from 'react-test-renderer';
 import SelectableItem from './selectableItem';
 
 describe('<SelectableItem />', () => {
   let mockFn;
   const data = {
     id: 0,
     title: 'hello world'
   };
 
   beforeEach(() => {
     mockFn = jest.fn();
   });
 
   it('onPress returns item', () => {
     const { getByText } = render(<SelectableItem item={data} onItemSelected={mockFn} />);
 
     fireEvent.press(getByText(data.title));
     
     expect(mockFn).toBeCalledWith(data);
   });
 
   it('renders correctly', () => {
     const tree = renderer.create(<SelectableItem item={data} onItemSelected={mockFn} />).toJSON();
     expect(tree).toMatchSnapshot();
   });
 });