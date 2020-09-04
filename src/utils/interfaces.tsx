/**
 * @description TypeScript interfaces
 */
export interface DriverStandingsData {
  driverStandings: {
    MRData: {
      StandingsTable: {
        StandingsLists: DriverStandings[]
      }
    }
  };
}

export interface RacesData {
  races: {
    MRData: {
      RaceTable: {
        Races: DriverStandings[]
      }
    }
  };
}

export interface DriverStandings {
  __typename: "DriverStandings";
  season: string;
  DriverStandings: ChampionData[]
}

export interface ChampionData {
  __typename: "ChampionData";
  wins: number;
  points: number;
  Driver: Driver
  Constructors: Constructor
}

export interface Driver {
  __typename: "Driver";
  familyName: string;
  givenName: string;
  url: string;
  driverId?: string;
}

interface Constructor {
  __typename: "Constructor";
  name: string;
  url: string;
}

export interface SeasonsVars {
  limit: number;
  offset: number;
}

export interface RacesVars {
  season: number;
}
