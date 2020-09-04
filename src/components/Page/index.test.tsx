import React from 'react';
import { render, screen } from '@testing-library/react';
import Page from './index';

describe('Test suits for Page', () => {
  test('should render the content', async () => {
    render(
        <Page loading={false} noData={false}>
          <div>Test Content</div>
        </Page>
      );

    await expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  test('should render the loading bar', async () => {
    render(
      <Page loading={true} noData={false}>
        <div>Test Content</div>
      </Page>
    );

    await expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  test('should render the no data message', async () => {
    const { getByText } = render(
      <Page loading={false} noData={true}>
        <div>Test Content</div>
      </Page>
    );

    const noDataElement = getByText(/No Data to be shown./i);
    expect(noDataElement).toBeInTheDocument();
  });

  test('should render the error message', async () => {
    const { getByText } = render(
      <Page loading={false} noData={false} errorParam={true}>
        <div>Test Content</div>
      </Page>
    );

    const noDataElement = getByText(/Uppps! Something went wrong./i);
    expect(noDataElement).toBeInTheDocument();
  });
});
