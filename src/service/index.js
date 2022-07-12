import { ApolloClient, InMemoryCache } from "@apollo/client"

const apiSecret = process.env.MY_API_SECRET
const client = new ApolloClient(
  {
    uri: apiSecret,
    cache: new InMemoryCache(),
  }
)

export default client;