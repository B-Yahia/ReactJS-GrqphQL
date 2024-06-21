import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
} from "@apollo/client";

const httpLink = new HttpLink({ uri: "http://domain3.com" });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default function AppWithProvider({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
