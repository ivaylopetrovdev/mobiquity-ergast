import React from 'react';
import {useQuery} from '@apollo/client';

import {driverStandingsForSeason, racesBySeason} from "../../gql/queries/racesBySeason";
import {RacesData, DriverStandingsData, RacesVars} from "../../utils/interfaces";
import RacesList from "../../components/RacesList";
import Page from "../../components/Page";

/**
 * @description Races container contains:
 * - GraphQL calls for getting all races' details for the season and getting the season's champion
 * - Visualizing the results in a table list
 */
export default function Races({match}: any): JSX.Element {
  const season = (match && match.params.season) || '';
  const {loading, data} = useQuery<RacesData, RacesVars>(racesBySeason, {
    variables: {
      season
    },
  });

  const {loading: loadingChampion, data: dataChampion} = useQuery<DriverStandingsData, RacesVars>(driverStandingsForSeason, {
    variables: {
      season
    },
  });

  const racesToRender = (data && data.races.MRData.RaceTable.Races) || [];
  const seasonChampionID = dataChampion && dataChampion.driverStandings.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.driverId

  return (
    <Page loading={loading || loadingChampion} noData={!racesToRender}>
      <div className={'paddingTop'}>{`${season} RACE RESULTS`}</div>
      <RacesList assets={racesToRender} seasonChampionID={seasonChampionID} />
    </Page>
  )
};
