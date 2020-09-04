import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import {BrowserRouter} from 'react-router-dom';
import {GET_DRIVER_STANDINGS} from "../../gql/queries/driverStandings";
import {GET_DRIVER_STANDINGS_SEASON, RACES_BY_SEASON} from "../../gql/queries/racesBySeason";
import App from './index';
import userEvent from "@testing-library/user-event";

const mocks = [
  {
    request: {
      query: GET_DRIVER_STANDINGS,
      variables: { offset: 55, limit: 11 }
    },
    result: {
      data: {}
    }
  },
  {
    request: {
      query: GET_DRIVER_STANDINGS,
      variables: { offset: 44, limit: 11 }
    },
    error: new Error("Something went wrong")
  },
  {
    request: {
      query: GET_DRIVER_STANDINGS_SEASON,
      variables: { season: 2005 }
    },
    result: {
      data: {}
    }
  },
  {
    request: {
      query: GET_DRIVER_STANDINGS_SEASON,
      variables: { season: 2004 }
    },
    error: new Error("Something went wrong")
  },
  {
    request: {
      query: RACES_BY_SEASON,
      variables: { season: 2005 }
    },
    result: {
      data: {}
    }
  },
  {
    request: {
      query: RACES_BY_SEASON,
      variables: { season: 2004 }
    },
    error: new Error("Something went wrong")
  }
]

describe('Test suits for App', () => {
  afterEach(cleanup);

  test('should renders', () => {
    render(
      <MockedProvider mocks={mocks}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MockedProvider>
    );

  });

  test('should trigger theme switch', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MockedProvider>
    );
    await userEvent.click(screen.getByRole('checkbox'));

    await expect(screen.getByRole('checkbox')).toBeTruthy();

    await userEvent.click(screen.getByRole('checkbox'));
  });
});
