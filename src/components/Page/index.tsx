import React from 'react';
import {LinearProgress} from '@material-ui/core';

import NoData from "../NoData";

/**
 * @description TS's props for component's received props
 */
type PageProps = {
  loading: boolean;
  noData: boolean;
  children?: any
};

/**
 * @description Page component is responsible for:
 * - Showing a loading bar, while data is received
 * - if there is NO available data, to show component (NoData) that provides a warning message to the user
 * - if there is available data, to visualize is with provided component
 */
export default function Page({loading, noData, children}: PageProps): JSX.Element {
  return (
    <>
      {loading ? (
        <LinearProgress style={{width: '100%'}}/>
        ) : noData ? (
          <NoData/>
          ) : (
            <>
              {children}
            </>
          )
      }
    </>
  )
};
