import React from 'react';
import { render } from '@testing-library/react';

import MyComponentName from './MyComponentName';

describe('MyComponentName Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<MyComponentName />);
    expect(asFragment()).toMatchSnapshot();
  });
});
