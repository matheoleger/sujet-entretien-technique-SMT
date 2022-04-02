import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import * as Express from 'express';
import { buildSchema } from 'type-graphql';

import { MotoResolver } from './resolvers/motoResolver';

async function main() {
    const schema = await buildSchema({
      resolvers: [MotoResolver],
      emitSchemaFile: true,
    })
  
    const app = Express.default()
  
    const server = new ApolloServer({
      schema,
    })
  
    // server.applyMiddleware({ app })
  
    server.start().then(res => {
        server.applyMiddleware({ app });
        app.listen({ port: 4000 }, () =>
            console.log('Now browse to http://localhost:4000' + server.graphqlPath)
        )
    })
}

main();