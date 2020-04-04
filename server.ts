import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema/schema';

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true // enable GraphiQL
  })
);

app.listen(3000, () => {
  // tslint:disable-next-line: no-console
  console.log('Server is now running on localhost:3000/graphql');
});
