import "./wdyr";
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { createGlobalStyle } from "styled-components";
import { ApolloClient, ApolloProvider, NormalizedCacheObject, InMemoryCache } from "@apollo/client";
import "react-hot-loader";
import { hot } from "react-hot-loader/root";
import { ModalProvider } from "react-modal-hook";

import { App } from "~src/App";
import "~src/i18n/index";

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.REACT_APP_SERVER_URL as string,
});

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
const HotApp = hot(App);

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ModalProvider>
        <GlobalStyle />
        <HotApp />
      </ModalProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
