// component.tsx
exports.component = name => `import React from 'react';
import styled from "styled-components";

export interface I${name}Props {}

const ${name} = ({}: I${name}Props) => {
  return <Container>Hello, I am a ${name} component.</Container>;
};

export default ${name};

const Container = styled.div\`
  width: 100%;
  color: rebeccapurple;
\`;
`;

// component.stories.jsx
exports.story = name => `import React from 'react';

import ${name} from './${name}.tsx';

export default {
  title: '${name}',
  component: ${name},
};

export const Default = () => <${name} />;
`;

// component.test.tsx
exports.test = name => `import React from 'react';
import { render } from '@testing-library/react';

import ${name} from './${name}';

describe('${name} Component', () => {
  it("${name} passes a11y tests", async () => {
    const { container } = render(<${name} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('it should match the snapshot', () => {
    const { asFragment } = render(<${name} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
`;

// index.ts
exports.barrel = name => `import ${name} from './${name}';

export default ${name};
`;
