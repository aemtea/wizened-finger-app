/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import renderer from 'react-test-renderer';
 
 import TestView from '../App';
 
 describe('<App />', () => {
     it('renders correctly', () => {
         const tree = renderer.create(<TestView />).toJSON();
         expect(tree).toMatchSnapshot();
     });
 });