/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import TemplateItem from './templateItem';

describe('<TemplateItem />', () => {
  let mockFn;
  const template = {
    title: 'hello world'
  };

  beforeEach(() => {
    mockFn = jest.fn();
  });

  it('onPress returns item', () => {
    const { getByText } = render(<TemplateItem item={template} onTemplateSelected={mockFn} />);

    fireEvent.press(getByText(template.title));
    
    expect(mockFn).toBeCalledWith(template);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<TemplateItem item={template} onTemplateSelected={mockFn} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});