import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import {BrowserRouter} from 'react-router-dom';
import {driverStandings} from "../../gql/queries/driverStandings";
import {driverStandingsForSeason, racesBySeason} from "../../gql/queries/racesBySeason";
import App from './index';

const mocks = [
  {
    request: {
      query: driverStandings,
      variables: { first: 4 }
    },
    result: {
      data: {
        dog: {
          name: "Douglas"
        }
      }
    }
  },
  {
    request: {
      query: driverStandings,
      variables: { first: 8}
    },
    error: new Error("Something went wrong")
  },
  {
    request: {
      query: driverStandingsForSeason,
      variables: { first: 4 }
    },
    result: {
      data: {
        dog: {
          name: "Douglas"
        }
      }
    }
  },
  {
    request: {
      query: driverStandingsForSeason,
      variables: { first: 8}
    },
    error: new Error("Something went wrong")
  },
  {
    request: {
      query: racesBySeason,
      variables: { first: 4 }
    },
    result: {
      data: {
        dog: {
          name: "Douglas"
        }
      }
    }
  },
  {
    request: {
      query: racesBySeason,
      variables: { first: 8}
    },
    error: new Error("Something went wrong")
  }
]

describe('Test suits for App', () => {
  test('should renders', () => {
    render(
      <MockedProvider mocks={mocks}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MockedProvider>
    );

  });
});
