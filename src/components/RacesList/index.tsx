import React from "react";
import moment from "moment";
import ReactCountryFlag from "react-country-flag";
import {Grid, Link, Paper, TableContainer, TableHead} from "@material-ui/core";

import { StyledTable } from "../StyledComponents/StyledTable";
import { StyledTableBody } from "../StyledComponents/StyledTableBody";
import { StyledTableRow } from "../StyledComponents/StyledTableRow";
import { StyledTableCell } from "../StyledComponents/StyledTableCell";

const lookup = require('country-data').lookup;

/**
 * @description RacesList component visualise the table list of all season's races by showing:
 * - grand prix's name - link to a Wiki page; grand prix's location details (flag, country, city)
 * - grand prix's date
 * - grand prix's winner's name - link to a Wiki page
 * - grand prix's winner's car - link to a Wiki page
 * - grand prix's total laps
 * - grand prix's total time + fastest lap and average speed
 * - if a season's champion won the grand prix - the GP row is marked in golden color
 */
export default function RacesList({assets, seasonChampionID}: any): JSX.Element {
  return (
    <Grid item xs={12}>
      <TableContainer component={Paper}>
        <StyledTable aria-label="simple table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Grand Prix</StyledTableCell>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Winner</StyledTableCell>
              <StyledTableCell>Car</StyledTableCell>
              <StyledTableCell>Laps</StyledTableCell>
              <StyledTableCell>Time</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <StyledTableBody>
            {
              assets.map((row: any) => (
                <StyledTableRow key={row.raceName} selected={seasonChampionID === row.Results[0].Driver.driverId}>
                  <StyledTableCell className={'races'}>
                    <Link href={row.url} target="_blank">
                      <strong>{row.raceName}</strong>
                    </Link>
                    <br />
                    <ReactCountryFlag countryCode={
                      lookup.countries({name: row.Circuit.Location.country})[0] ?
                        lookup.countries({name: row.Circuit.Location.country})[0].alpha2 :
                        row.Circuit.Location.country === 'USA' ? 'US' : 'GB'} svg />
                    &nbsp;
                    {`${row.Circuit.Location.country}, ${row.Circuit.Location.locality}`}
                  </StyledTableCell>
                  <StyledTableCell className={'races'}>{moment(row.date).format("DD MMM YYYY")}</StyledTableCell>
                  <StyledTableCell className={'races'}>
                    <Link href={row.Results[0].Driver.url} target="_blank">
                      {`${row.Results[0].Driver.givenName} ${row.Results[0].Driver.familyName}`}
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell className={'races'}>
                    <Link href={row.Results[0].Constructor.url} target="_blank">
                      {`${row.Results[0].Constructor.name}`}
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell className={'races'}>
                    <strong>{row.Results[0].laps}</strong>
                  </StyledTableCell>
                  <StyledTableCell className={'races'}>
                    <strong>{row.Results[0].Time.time}</strong>
                    <br />
                    {`Fastest Lap: ${row.Results[0].FastestLap.Time.time}`}
                    <br />
                    {`Speed: ${row.Results[0].FastestLap.AverageSpeed.speed}${row.Results[0].FastestLap.AverageSpeed.units}`}
                  </StyledTableCell>
                </StyledTableRow>
              ))
            }
          </StyledTableBody>
        </StyledTable>
      </TableContainer>
    </Grid>
  )
}
