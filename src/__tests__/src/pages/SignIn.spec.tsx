import React from 'react';
import { render } from '@testing-library/react';

import SignIn from '../../../pages/SignIn';

describe('Pages - SignIn', () => {
  it('Should be able to render SignIn', () => {
    const app = render(<SignIn />);
    expect(app).toBeTruthy();
  });
});
