import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RacesList from './index';

const mockedAssetsSingle = [
  {
    url: 'http://testdomain.com',
    raceName: 'Test Race #1',
    date: '2020-02-02',
    Circuit: {
      Location: {
        country: 'Bulgaria',
        locality: 'Sofia'
      }
    },
    Results: [
      {
        Driver: {
          driverId: 2,
          url: 'http://testdomain.com/driver',
          givenName: 'Test',
          familyName: 'Driver',
        },
        Constructor: {
          url: 'http://testdomain.com/constructor',
          name: 'Test Constructor'
        },
        laps: 2,
        Time: {
          time: '1:24:17.336'
        },
        FastestLap: {
          Time: {
            time: '1:25.994'
          },
          AverageSpeed: {
            speed: 20,
            units: 'km/h'
          }
        }
      }
    ]
  }
]
const mockedAssetsDuo = [
  {
    url: 'http://testdomain.com',
    raceName: 'Test Race #1',
    date: '2020-02-02',
    Circuit: {
      Location: {
        country: 'Bulgaria',
        locality: 'Sofia'
      }
    },
    Results: [
      {
        Driver: {
          driverId: 2,
          url: 'http://testdomain.com/driver',
          givenName: 'Test',
          familyName: 'Driver',
        },
        Constructor: {
          url: 'http://testdomain.com/constructor',
          name: 'Test Constructor'
        },
        laps: 2,
        Time: {
          time: '1:24:17.336'
        },
        FastestLap: {
          Time: {
            time: '1:25.994'
          },
          AverageSpeed: {
            speed: 20,
            units: 'km/h'
          }
        }
      }
    ]
  }, {
    url: 'http://testdomain.com',
    raceName: 'Test Race #2',
    date: '2020-03-03',
    Circuit: {
      Location: {
        country: 'USA',
        locality: 'Indianapolis'
      }
    },
    Results: [
      {
        Driver: {
          driverId: 2,
          url: 'http://testdomain.com/driver',
          givenName: 'Test',
          familyName: 'Driver',
        },
        Constructor: {
          url: 'http://testdomain.com/constructor',
          name: 'Test Constructor'
        },
        laps: 2,
        Time: {
          time: '1:24:17.336'
        },
        FastestLap: {
          Time: {
            time: '1:25.994'
          },
          AverageSpeed: {
            speed: 20,
            units: 'km/h'
          }
        }
      }
    ]
  }
]
const mockedAssetsDuo2 = [
  {
    url: 'http://testdomain.com',
    raceName: 'Test Race #1',
    date: '2020-02-02',
    Circuit: {
      Location: {
        country: 'Bulgaria',
        locality: 'Sofia'
      }
    },
    Results: [
      {
        Driver: {
          driverId: 2,
          url: 'http://testdomain.com/driver',
          givenName: 'Test',
          familyName: 'Driver',
        },
        Constructor: {
          url: 'http://testdomain.com/constructor',
          name: 'Test Constructor'
        },
        laps: 2,
        Time: {
          time: '1:24:17.336'
        },
        FastestLap: {
          Time: {
            time: '1:25.994'
          },
          AverageSpeed: {
            speed: 20,
            units: 'km/h'
          }
        }
      }
    ]
  }, {
    url: 'http://testdomain.com',
    raceName: 'Test Race #2',
    date: '2020-03-03',
    Circuit: {
      Location: {
        country: 'UK',
        locality: 'Silverstone'
      }
    },
    Results: [
      {
        Driver: {
          driverId: 2,
          url: 'http://testdomain.com/driver',
          givenName: 'Test',
          familyName: 'Driver',
        },
        Constructor: {
          url: 'http://testdomain.com/constructor',
          name: 'Test Constructor'
        },
        laps: 2,
        Time: {
          time: '1:24:17.336'
        },
        FastestLap: {
          Time: {
            time: '1:25.994'
          },
          AverageSpeed: {
            speed: 20,
            units: 'km/h'
          }
        }
      }
    ]
  }
]

describe('Test suits for RacesList', () => {
  test('should render table elements', async () => {
    render(
        <RacesList assets={[]} seasonChampionID={1} />
      );

    expect(await screen.getByRole('table')).toBeInTheDocument();
    expect(await screen.getByRole('columnheader', { name: 'Grand Prix' })).toBeInTheDocument();
    expect(await screen.getByRole('columnheader', { name: 'Date' })).toBeInTheDocument();
    expect(await screen.getByRole('columnheader', { name: 'Winner' })).toBeInTheDocument();
    expect(await screen.getByRole('columnheader', { name: 'Car' })).toBeInTheDocument();
    expect(await screen.getByRole('columnheader', { name: 'Laps' })).toBeInTheDocument();
    expect(await screen.getByRole('columnheader', { name: 'Time' })).toBeInTheDocument();
    expect(screen.getAllByRole('columnheader')).toHaveLength(6);
  });

  test('should render table content (1 Player)', async () => {
    render(
      <RacesList assets={mockedAssetsSingle} seasonChampionID={1} />
    );

    expect(await screen.getByRole('table')).toBeInTheDocument();

    expect(screen.getAllByRole('img')).toHaveLength(1);
    expect(screen.getAllByRole('link')).toHaveLength(3);
    expect(screen.getAllByRole('cell')).toHaveLength(6);
    expect(screen.getAllByRole('columnheader')).toHaveLength(6);
  });

  test('should render table content (2 Players, USA case)', async () => {
    render(
      <RacesList assets={mockedAssetsDuo} seasonChampionID={1} />
    );

    expect(await screen.getByRole('table')).toBeInTheDocument();

    expect(screen.getAllByRole('img')).toHaveLength(2);
    expect(screen.getAllByRole('link')).toHaveLength(6);
    expect(screen.getAllByRole('cell')).toHaveLength(12);
    expect(screen.getAllByRole('columnheader')).toHaveLength(6);
  });

  test('should render table content (2 Players, UK case)', async () => {
    render(
      <RacesList assets={mockedAssetsDuo2} seasonChampionID={1} />
    );

    expect(await screen.getByRole('table')).toBeInTheDocument();

    expect(screen.getAllByRole('img')).toHaveLength(2);
    expect(screen.getAllByRole('link')).toHaveLength(6);
    expect(screen.getAllByRole('cell')).toHaveLength(12);
    expect(screen.getAllByRole('columnheader')).toHaveLength(6);
  });

  test('should render table content (1 Player, champion/selected case)', async () => {
    render(
      <RacesList assets={mockedAssetsSingle} seasonChampionID={2} />
    );

    expect(await screen.getByRole('table')).toBeInTheDocument();
    const record = screen.getAllByRole('row')[1];
    expect(record.hasAttribute('class'));
    expect(record.className).toContain('Mui-selected');

    expect(screen.getAllByRole('img')).toHaveLength(1);
    expect(screen.getAllByRole('link')).toHaveLength(3);
    expect(screen.getAllByRole('cell')).toHaveLength(6);
    expect(screen.getAllByRole('columnheader')).toHaveLength(6);
  });
});
