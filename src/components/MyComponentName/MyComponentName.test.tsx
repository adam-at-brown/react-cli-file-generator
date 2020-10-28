import React from 'react';
import { render } from '@testing-library/react';

import MyComponentName from './MyComponentName';

describe('MyComponentName Component', () => {
  it("MyComponentName passes a11y tests", async () => {
    const { container } = render(<MyComponentName />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('it should match the snapshot', () => {
    const { asFragment } = render(<MyComponentName />);
    expect(asFragment()).toMatchSnapshot();
  });
});
