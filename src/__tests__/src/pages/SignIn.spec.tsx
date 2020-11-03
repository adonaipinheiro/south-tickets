import React from 'react';
import { render } from '@testing-library/react';

import SignIn from '../../../pages/public/SignIn';

const mockSelector = jest.fn();
const mockDispatch = jest.fn();

jest.mock('react-redux', () => {
  return {
    useSelector: () => mockSelector,
    useDispatch: () => mockDispatch,
  };
});

describe('Pages - SignIn', () => {
  it('Should be able to render SignIn', () => {
    const app = render(<SignIn />);
    expect(app).toBeTruthy();
  });
});
