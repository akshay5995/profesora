/* tslint:disable */

import { ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client';
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { hasuraConfig } from '../../utils/config';

const httpLink = (headers: any) =>
  new HttpLink({
    uri: hasuraConfig.gqlEndpoint,
    headers: headers,
  });

const wsLink = (headers: any) =>
  new WebSocketLink({
    uri: hasuraConfig.wssEndpoint,
    options: {
      reconnect: true,
      connectionParams: {
        headers: headers,
      },
    },
  });

const linkFunc = (headers: any) =>
  split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink(headers),
    httpLink(headers)
  );

interface Options {
  token: String | undefined;
}

const clientWithAuth = ({ token }: Options) => {
  const AuthHeaders = { Authorization: `Bearer ${token}` };
  const Anonymous = {};

  const headers = !!token ? AuthHeaders : Anonymous;

  const link = linkFunc(headers);

  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
};

export default clientWithAuth;
