import React from 'react';
import { render, screen, act, cleanup } from '@testing-library/react';

import { MockedProvider } from '@apollo/client/testing';
import {RACES_BY_SEASON, GET_DRIVER_STANDINGS_SEASON} from "../../gql/queries/racesBySeason";
import Races from './index';
import {BrowserRouter} from "react-router-dom";
import Home from "../Home";

const mocks = [
  {
    request: {
      query: GET_DRIVER_STANDINGS_SEASON,
      variables: {
        season: 2005
      }
    },
    result: {
      data: {
        driverStandings: {
          MRData: {
            StandingsTable: {
              StandingsLists: [{
                DriverStandings: [{
                  Driver: {
                    driverId: 1
                  }
                }]
              }]
            }
          }
        }
      }
    }
  },
  {
    request: {
      query: GET_DRIVER_STANDINGS_SEASON
    },
    error: new Error("Something went wrong")
  },
  {
    request: {
      query: RACES_BY_SEASON,
      variables: {
        season: 2005
      }
    },
    result: {
      data: {
        races: {
          MRData: {
            RaceTable: {
              Races: [{
                date: '2005-03-06',
                raceName: 'Test Race Name',
                url: 'https://',
                Circuit: {
                  Location: {
                    country: 'Bulgaria',
                    locality: 'Sofia'
                  }
                },
                Results: [{
                  Constructor: {
                    name: 'Car',
                    url: 'https://'
                  },
                  Driver: {
                    familyName: 'test',
                    givenName: 'driver',
                    url: 'https://',
                    driverId: 1
                  },
                  FastestLap: {
                    AverageSpeed: {
                      speed: '13',
                      units: 'km/h'
                    },
                    Time: {
                      time: '1:32.923'
                    }
                  },
                  Time: {
                    time:  '1:32:32.923'
                  },
                  laps: 56
                }]
              }]
            }
          }
        }
      }
    }
  },
  {
    request: {
      query: RACES_BY_SEASON
    },
    error: new Error("Something went wrong")
  }
];

describe('Test suits for Races', () => {
  afterEach(cleanup);

  test('should render with loading state', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <BrowserRouter>
          <Races match={{params: {season: 2005}}} />
        </BrowserRouter>
      </MockedProvider>
    );

    await expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  test('should render with loading state (no match param, default season: 2005)', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <BrowserRouter>
          <Races />
        </BrowserRouter>
      </MockedProvider>
    );

    await expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  test('should render with final state', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <BrowserRouter>
          <Races match={{params: {season: 2005}}} />
        </BrowserRouter>
      </MockedProvider>
    )

    // wait for content
    await act(() => new Promise(resolve => setTimeout(resolve, 0)));

    // take a snapshot of the rendered content (error or data)
    expect(await screen.getByRole('table')).toBeInTheDocument();

    expect(screen.getAllByRole('link')).toHaveLength(3);
    expect(screen.getAllByRole('cell')).toHaveLength(6);
    expect(screen.getAllByRole('columnheader')).toHaveLength(6);
  });
});
