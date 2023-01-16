import { render } from '@testing-library/react';

import MuiCustomTheme from './mui-custom-theme';

describe('MuiCustomTheme', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MuiCustomTheme />);
    expect(baseElement).toBeTruthy();
  });
});
