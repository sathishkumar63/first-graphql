import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema/schema';

// setting up the port number and express app
const port = 3000;
const app = express();

// Setup the nodejs GraphQL server
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true // enable GraphiQL
  })
);

app.listen(port, () => {
  // tslint:disable-next-line: no-console
  console.log(`Server is now running on localhost:${port}/graphql`);
});
