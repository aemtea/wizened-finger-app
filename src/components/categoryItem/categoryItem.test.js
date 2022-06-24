/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import { render, fireEvent } from '@testing-library/react-native';
 import renderer from 'react-test-renderer';
 import CategoryItem from '../../components/categoryItem/categoryItem';
 
 describe('<CategoryItem />', () => {
   let mockFn;
   const category = {
     id: 0,
     title: 'hello world'
   };
 
   beforeEach(() => {
     mockFn = jest.fn();
   });
 
   it('onPress returns item', () => {
     const { getByText } = render(<CategoryItem item={category} onCategorySelected={mockFn} />);
 
     fireEvent.press(getByText(category.title));
     
     expect(mockFn).toBeCalledWith(category);
   });
 
   it('renders correctly', () => {
     const tree = renderer.create(<CategoryItem item={category} onCategorySelected={mockFn} />).toJSON();
     expect(tree).toMatchSnapshot();
   });
 });