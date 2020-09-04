import React from 'react';
import { render, screen } from '@testing-library/react';

import { MockedProvider } from '@apollo/client/testing';
import {driverStandings} from "../../gql/queries/driverStandings";
import Home from './index';

const mocks = [
  {
    request: {
      query: driverStandings,
      variables: {
        offset: 55,
        limit: 11
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
      query: driverStandings
    },
    error: new Error("Something went wrong")
  }
];

describe('Test suits for Home', () => {
  test('should render with loading state', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Home />
      </MockedProvider>
    );

    await expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
