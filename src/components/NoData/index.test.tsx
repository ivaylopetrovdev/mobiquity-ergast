import React from 'react';
import { render } from '@testing-library/react';
import NoData from './index';

describe('Test suits for NoData', () => {
  test('should renders', () => {
    const { getByText } = render(<NoData />);

    const noDataElement = getByText(/No Data to be shown./i);
    expect(noDataElement).toBeInTheDocument();
  });
});
