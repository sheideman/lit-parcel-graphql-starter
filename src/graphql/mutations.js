import {gql} from "apollo-boost";

const MUTATE_NETWORK_STATUS = gql`
  mutation updateNetworkStatus($isConnected: Boolean) {
    updateNetworkStatus(isConnected: $isConnected) @client
  }
`;
const LOGOUT_MUTATION = gql`
mutation{
  logout{
    id
    email
  }
}
`;
const LOGIN_MUTATION = gql`
mutation login($email:String, $password:String){
  login(email:$email, password:$password){
    id
    email
  }
}`;
export {MUTATE_NETWORK_STATUS,LOGOUT_MUTATION,LOGIN_MUTATION}