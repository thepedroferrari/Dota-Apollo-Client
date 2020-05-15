import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache
} from '@apollo/client';

import App from './App';
import Theme from './components/Styles/Theme';
import GlobalStyles from './components/Styles/GlobalStyles';
import { ResetStyles } from './components/Styles/ResetStyles';


const GRAPHQL_SERVER = process.env.REACT_APP_GRAPHQL_ENDPOINT || 'http://localhost:4001/graphql';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: GRAPHQL_SERVER
  })
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <ResetStyles />
      <GlobalStyles />
      <Theme>
        <App />
      </Theme>
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

