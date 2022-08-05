/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import renderer from 'react-test-renderer'; 
 import App from './app';
 
 jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

 describe('<App />', () => {
     it('renders correctly', () => {
         const tree = renderer.create(<App />).toJSON();
         expect(tree).toMatchSnapshot();
     });
 });