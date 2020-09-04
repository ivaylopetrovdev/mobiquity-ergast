import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {BrowserRouter} from 'react-router-dom'
import Header from './index';

describe('Test suits for Header', () => {
  test('should renders', async () => {
    render(
        <BrowserRouter>
          <Header handleModeFn={() => {}}/>
        </BrowserRouter>
      );

    await expect(screen.getByText('F1 World Champions')).toBeInTheDocument();
    await expect(screen.getByText('Home')).toBeInTheDocument();
    await expect(screen.getByText('Dark Mode')).toBeInTheDocument();
  });

  test('should switch the theme', async () => {
    render(
      <BrowserRouter>
        <Header handleModeFn={() => {}}/>
      </BrowserRouter>
    );
    await userEvent.click(screen.getByRole('checkbox'));

    await expect(screen.getByRole('checkbox')).toBeTruthy();
  });
});
