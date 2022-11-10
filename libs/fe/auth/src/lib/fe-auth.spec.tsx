import { render } from '@testing-library/react';

import FeAuth from './fe-auth';

describe('FeAuth', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeAuth />);
    expect(baseElement).toBeTruthy();
  });
});
