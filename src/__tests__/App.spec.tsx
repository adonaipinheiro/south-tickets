import React from 'react';
import { render } from '@testing-library/react';

import App from '../App';

describe('Application', () => {
  it('Should be able to render the Applicaiton', () => {
    const app = render(<App />);
    expect(app).toBeTruthy();
  })
})
