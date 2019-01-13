import { Store } from "reactive-state";
import ApolloClient from "apollo-boost"
const client = new ApolloClient({
  uri: `http://localhost:8000/graphql`
});

console.log(client);
const initialState = {
  count: 0,
  apollo:client,

};

export const store = Store.create(initialState);
store.watch().subscribe(state => console.log("STATE CHANGED: ", state));