import React from 'react';
import {useQuery} from '@apollo/client';

import {GET_DRIVER_STANDINGS_SEASON, RACES_BY_SEASON} from "../../gql/queries/racesBySeason";
import {RacesData, DriverStandingsData, RacesVars} from "../../utils/interfaces";
import RacesList from "../../components/RacesList";
import Page from "../../components/Page";

/**
 * @description Races container contains:
 * - GraphQL calls for getting all races' details for the season and getting the season's champion
 * - Visualizing the results in a table list
 */
export default function Races({match}: any): JSX.Element {
  const season = (match && match.params.season) || 2005;
  const {loading, data, error} = useQuery<RacesData, RacesVars>(RACES_BY_SEASON, {
    variables: {
      season
    },
  });

  const {loading: loadingChampion, data: dataChampion} = useQuery<DriverStandingsData, RacesVars>(GET_DRIVER_STANDINGS_SEASON, {
    variables: {
      season
    },
  });

  const racesToRender = (data && data.races.MRData.RaceTable.Races) || [];
  const seasonChampionID = dataChampion && dataChampion.driverStandings.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.driverId

  return (
    <Page loading={loading || loadingChampion} noData={!racesToRender} errorParam={error}>
      <div className={'paddingTop'}>{`${season} RACE RESULTS`}</div>
      <RacesList assets={racesToRender} seasonChampionID={seasonChampionID} />
    </Page>
  )
};
