import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {BrowserRouter} from 'react-router-dom'
import SeasonsList from './index';

const mockedAssetsSingle = [
  {
    season: '2005',
    DriverStandings: [
      {
        Driver: {
          driverId: 2,
          url: 'http://testdomain.com/driver',
          givenName: 'Test',
          familyName: 'Driver',
        },
        Constructors: [{
          url: 'http://testdomain.com/constructor',
          name: 'Test Constructor'
        }],
        points: 2,
        wins: 3
      }
    ]
  }
]
const mockedAssetsDuo = [
  {
    season: '2005',
    DriverStandings: [
      {
        Driver: {
          driverId: 2,
          url: 'http://testdomain.com/driver',
          givenName: 'Test',
          familyName: 'Driver',
        },
        Constructors: [{
          url: 'http://testdomain.com/constructor',
          name: 'Test Constructor'
        }],
        points: 2,
        wins: 3
      }
    ]
  }, {
    season: '2006',
    DriverStandings: [
      {
        Driver: {
          driverId: 3,
          url: 'http://testdomain.com/driver',
          givenName: 'Test',
          familyName: 'Driver #2',
        },
        Constructors: [{
          url: 'http://testdomain.com/constructor',
          name: 'Test Constructor #2'
        }],
        points: 3,
        wins: 4
      }
    ]
  }
]

describe('Test suits for SeasonsList', () => {
  test('should render table elements', async () => {
    render(
        <SeasonsList assets={[]} />
      );

    expect(await screen.getByRole('table')).toBeInTheDocument();
    expect(await screen.getByRole('columnheader', { name: 'Season' })).toBeInTheDocument();
    expect(await screen.getByRole('columnheader', { name: 'Driver' })).toBeInTheDocument();
    expect(await screen.getByRole('columnheader', { name: 'Car' })).toBeInTheDocument();
    expect(await screen.getByRole('columnheader', { name: 'PTS' })).toBeInTheDocument();
    expect(await screen.getByRole('columnheader', { name: 'Wins' })).toBeInTheDocument();
    expect(screen.getAllByRole('columnheader')).toHaveLength(5);
  });

  test('should render table content (1 season)', async () => {
    render(
      <BrowserRouter>
        <SeasonsList assets={mockedAssetsSingle} />
      </BrowserRouter>
    );

    expect(await screen.getByRole('table')).toBeInTheDocument();

    expect(screen.getAllByRole('link')).toHaveLength(3);
    expect(screen.getAllByRole('cell')).toHaveLength(5);
    expect(screen.getAllByRole('columnheader')).toHaveLength(5);
  });

  test('should render table content (2 seasons)', async () => {
    render(
      <BrowserRouter>
        <SeasonsList assets={mockedAssetsDuo} />
      </BrowserRouter>
    );

    expect(await screen.getByRole('table')).toBeInTheDocument();

    expect(screen.getAllByRole('link')).toHaveLength(6);
    expect(screen.getAllByRole('cell')).toHaveLength(10);
    expect(screen.getAllByRole('columnheader')).toHaveLength(5);
  });
});
