import React from 'react';
import {useQuery} from '@apollo/client';

import {driverStandings} from "../../gql/queries/driverStandings";
import {DriverStandingsData, SeasonsVars} from "../../utils/interfaces";
import SeasonsList from "../../components/SeasonsList";
import Page from "../../components/Page";

/**
 * @description Home container contains:
 * - GraphQL call for getting all driver standings for desired period (2005-2015)
 * - Visualizing the results in a table list
 */
export default function Home(): JSX.Element {
  const {loading, data} = useQuery<DriverStandingsData, SeasonsVars>(driverStandings, {
    variables: {
      offset: 55,
      limit: 11
    }
  });

  const dataToRender = data && data.driverStandings.MRData.StandingsTable.StandingsLists;

  return (
    <Page loading={loading} noData={!dataToRender}>
      <SeasonsList assets={dataToRender}/>
    </Page>
  )
};
