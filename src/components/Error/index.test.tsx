import React from 'react';
import { render } from '@testing-library/react';
import ErrorComponent from './index';

describe('Test suits for ErrorComponent', () => {
  test('should renders', () => {
    const { getByText } = render(<ErrorComponent />);

    const errorElement = getByText(/Uppps! Something went wrong./i);
    expect(errorElement).toBeInTheDocument();
  });
});
