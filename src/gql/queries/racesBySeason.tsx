import { gql } from '@apollo/client';

/**
 * @description GraphQL query for receiving all season's races, winners and some additional information
 * Benefit of this approach is that the UI is receiving ONLY needed data
 */
export const racesBySeason = gql`
  query RACES_BY_SEASON {
    races(season: $season) @rest(type: "MRData", path: "/{args.season}/results/1.json") {
      MRData @type(name: "RaceTable") {
        RaceTable @type(name: "Races") {
          Races @type(name: "RaceData") {
            date
            raceName
            url

            Circuit @type(name: "CircuitData") {
                Location {
                  country
                  locality
                }
            }

            Results @type(name: "ResultsData") {
              Constructor @type(name: "Constructor") {
                name
                nationality
                url
              }
              Driver @type(name: "Driver") {
                familyName
                givenName
                nationality
                url
                driverId
              }
              FastestLap @type(name: "Lap") {
                AverageSpeed @type(name: "AverageSpeed") {
                  speed
                  units
                }
                Time @type(name: "Time") {
                  time
                }
              }

              Time @type(name: "Time") {
                time
              }

              laps
            }
          }
        }
      }
    }
  }
`;

/**
 * @description GraphQL query for receiving driver's ID for desired season
 * This is used for highlighting the season's champion for ever race he had won
 */
export const driverStandingsForSeason = gql`
   query GET_DRIVER_STANDINGS_SEASON {
     driverStandings(season: $season) @rest(type: "MRData", path: "/{args.season}/driverStandings/1.json") {
       MRData @type(name: "StandingsTable") {
         StandingsTable @type(name: "StandingsLists") {
           StandingsLists @type(name: "DriverStandings") {
             DriverStandings @type(name: "ChampionData") {
               Driver @type(name: "Driver") {
                 driverId
               }
             }
           }
         }
      }
    }
  }
`;
