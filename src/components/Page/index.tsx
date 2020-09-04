import React from 'react';
import {LinearProgress} from '@material-ui/core';

import NoData from "../NoData";
import ErrorComponent from "../Error";

/**
 * @description TS's props for component's received props
 */
type PageProps = {
  loading: boolean;
  errorParam?: any;
  noData: boolean;
  children?: any
};

/**
 * @description Page component is responsible for:
 * - Showing a loading bar, while data is received
 * - if there is NO available data, to show component (NoData) that provides a warning message to the user
 * - if there is available data, to visualize is with provided component
 */
export default function Page({loading, noData, children, errorParam}: PageProps): JSX.Element {
  if (loading) {
    return (<LinearProgress style={{width: '100%'}} />);
  }

  if (noData) {
    return (<NoData />);
  }

  if (errorParam) {
    return (<ErrorComponent />);
  }
  return (
    <>
      {children}
    </>
  )
};
