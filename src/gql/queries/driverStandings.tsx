import { gql } from '@apollo/client';

/**
 * @description GraphQL query for receiving all driver standings for desired period provided by variables
 * Benefit of this approach is that the UI is receiving ONLY needed data
 */
export const GET_DRIVER_STANDINGS = gql`
  query GetDriverStandings($limit: Int!, $offset: Int!) {
    driverStandings(limit: $limit, offset: $offset) @rest(type: "MRData", path: "/driverStandings/1.json?offset={args.offset}&limit={args.limit}") {
      MRData @type(name: "StandingsTable") {
        StandingsTable @type(name: "StandingsLists") {
          StandingsLists @type(name: "DriverStandings") {
            season
            DriverStandings @type(name: "ChampionData") {
              wins
              points
              Driver @type(name: "Driver") {
                familyName
                givenName
                url
              }
              Constructors @type(name: "Constructor") {
                name
                url
              }
            }
          }
        }
      }
    }
  }
`;
