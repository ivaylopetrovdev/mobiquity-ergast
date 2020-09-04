import React from 'react';
import {Link as RouterLink} from "react-router-dom";
import {Grid, Link, Paper, TableContainer, TableHead} from '@material-ui/core';

import { StyledTable } from "../StyledComponents/StyledTable";
import { StyledTableBody } from "../StyledComponents/StyledTableBody";
import { StyledTableRow } from "../StyledComponents/StyledTableRow";
import { StyledTableCell } from "../StyledComponents/StyledTableCell";

/**
 * @description SeasonsList component visualise the table list of all desired seasons by showing:
 * - season's year - a link to the detailed page
 * - season's driver champion's name - link to a Wiki page
 * - season's driver champion's car - link to a Wiki page
 * - season's driver champion's winning points
 * - season's driver champion's winning races count
 */
export default function SeasonsList({assets}: any): JSX.Element {
  return (
    <Grid item xs={12}>
      <TableContainer component={Paper}>
        <StyledTable aria-label="simple table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Season</StyledTableCell>
              <StyledTableCell>Driver</StyledTableCell>
              <StyledTableCell>Car</StyledTableCell>
              <StyledTableCell>PTS</StyledTableCell>
              <StyledTableCell>Wins</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <StyledTableBody>
            {
              assets.map(({season, DriverStandings: seasonData}: any) => (
                <StyledTableRow key={season}>
                  <StyledTableCell className={'seasons'}>
                    <Link to={`/${season}/races`} component={RouterLink}>
                      <strong>{season}</strong>
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell className={'seasons'}>
                    <Link href={seasonData[0].Driver.url} target="_blank">
                      {`${seasonData[0].Driver.givenName} ${seasonData[0].Driver.familyName}`}
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell align="center" className={'seasons'}>
                    <Link href={seasonData[0].Constructors[0].url} target="_blank">
                      {`${seasonData[0].Constructors[0].name}`}
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell className={'seasons'}><strong>{seasonData[0].points}</strong></StyledTableCell>
                  <StyledTableCell className={'seasons'}><strong>{seasonData[0].wins}</strong></StyledTableCell>
                </StyledTableRow>
              ))
            }
          </StyledTableBody>
        </StyledTable>
      </TableContainer>
    </Grid>
  )
}
