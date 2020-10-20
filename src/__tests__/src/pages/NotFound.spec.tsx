import React from 'react';
import { render } from '@testing-library/react';

import NotFound from '../../../pages/NotFound';

describe('Pages - NotFound', () => {
  it('Should be able to render NotFound', () => {
    const app = render(<NotFound />);
    expect(app).toBeTruthy();
  })
})
