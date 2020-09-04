import React from 'react';
import { render, screen, act, cleanup } from '@testing-library/react';

import { MockedProvider } from '@apollo/client/testing';
import {GET_DRIVER_STANDINGS} from "../../gql/queries/driverStandings";
import Home from './index';
import {BrowserRouter} from "react-router-dom";

const mocks = [
  {
    request: {
      query: GET_DRIVER_STANDINGS,
      variables: {
        offset: 55,
        limit: 11
      }
    },
    result: {
      data: {
        driverStandings: {
          MRData: {
            StandingsTable: {
              StandingsLists: [{
                season: 1983,
                DriverStandings: [{
                  wins: 1,
                  points: 12,
                  Driver: {
                    familyName: 'test',
                    givenName: 'driver',
                    url: 'https://'
                  },
                  Constructors: [{
                    name: 'Car',
                    url: 'https://'
                  }]
                }]
              }]
            }
          }
        },
      }
    }
  },
  {
    request: {
      query: GET_DRIVER_STANDINGS
    },
    error: new Error("Something went wrong")
  }
];

describe('Test suits for Home', () => {
  afterEach(cleanup);

  test('should render with loading state', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </MockedProvider>
    );

    await expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  test('should render with final state', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </MockedProvider>
    )

    // wait for content
    await act(() => new Promise(resolve => setTimeout(resolve, 0)));

    // take a snapshot of the rendered content (error or data)
    expect(await screen.getByRole('table')).toBeInTheDocument();

    expect(screen.getAllByRole('link')).toHaveLength(3);
    expect(screen.getAllByRole('cell')).toHaveLength(5);
    expect(screen.getAllByRole('columnheader')).toHaveLength(5);
  });
});
