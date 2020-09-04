import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom'
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {RestLink} from 'apollo-link-rest';

import App from "./containers/App";
import "./assets/styles/index.css";

/**
 * Set `RestLink` with REST API base endpoint
 */
const restLink = new RestLink({
  uri: 'http://ergast.com/api/f1',
  credentials: 'same-origin'
});

/**
 * Setup Apollo client to use configured RestLink and cache to store responses for reducing network calls
 */
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: restLink
});

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
