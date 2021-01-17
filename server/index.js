import {ApolloServer} from 'apollo-server'

import typeDefs from './schema'
import resolvers  from './resolvers'
import db from './mongo/db'

const server = new ApolloServer({
  typeDefs, 
  resolvers,
  context: ({req}) => {
    const {authorization: token} = req.headers

    return {db, token}
  },
})

server.listen(4000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
})