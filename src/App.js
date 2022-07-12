 import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from, } from '@apollo/client';
 import {onError} from 'apollo-link-error'
// import Form from './Components/Forms/Form';
import GetUsers from './Components/GetUsers';
import Head from './Components/Head/Head'


const errorLink = onError(({graphQLErrors, networkError}) => {

  if (graphQLErrors) {
    graphQLErrors.map(({message, location, path}) => {
      alert(`Graphql error ${message}`);
    });
  }
});
 const link = from([
  errorLink,
  new HttpLink({uri: 'http://localhost:4949/graphql'})
 ])

 const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
 });
 
function App() {  
  return (
    <ApolloProvider client={client}>
    {""}
      <Head />
      {/* <Form /> */}
      <GetUsers />
    </ApolloProvider>
  );
}
export default App;


