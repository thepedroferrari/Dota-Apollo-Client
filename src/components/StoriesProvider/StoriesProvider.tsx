import React from 'react';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache
} from '@apollo/client';

import Theme from '../Styles/Theme';
import GlobalStyles from '../Styles/GlobalStyles';
import { ResetStyles } from '../Styles/ResetStyles';

import { BrowserRouter as Router } from 'react-router-dom';

const GRAPHQL_SERVER = process.env.REACT_APP_GRAPHQL_ENDPOINT || 'http://localhost:4001/graphql';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: GRAPHQL_SERVER
  })
});

const StoriesProvider = ({ children }: { children: React.ReactNode; }) => {
  return (
    <ApolloProvider client={client}>
      <React.StrictMode>
        <ResetStyles />
        <GlobalStyles />
        <Theme>
          <Router>
            {children}
          </Router>
        </Theme>
      </React.StrictMode>
    </ApolloProvider>
  );
};

export default StoriesProvider;




