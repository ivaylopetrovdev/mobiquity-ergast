import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import { MockedProvider } from '@apollo/client/testing';
import {racesBySeason, driverStandingsForSeason} from "../../gql/queries/racesBySeason";
import Races from './index';

const mocks = [
  {
    request: {
      query: driverStandingsForSeason,
      variables: {
        season: 2005
      }
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
      query: driverStandingsForSeason
    },
    error: new Error("Something went wrong")
  },
  {
    request: {
      query: racesBySeason,
      variables: {
        season: 2005
      }
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
      query: racesBySeason
    },
    error: new Error("Something went wrong")
  }
];

describe('Test suits for Races', () => {
  test('should render', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Races match={{params: {season: 2005}}} />
      </MockedProvider>
    );

    // await waitFor(() => expect(screen.getByRole('')).toBeInTheDocument())
  });

  test('should render #2', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Races />
      </MockedProvider>
    );

    // await waitFor(() => expect(screen.getByRole('')).toBeInTheDocument())
  });
});
