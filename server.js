const express = require('express');
const expressGraphQl = require('express-graphql');
const app = express();
const schema = require('./schema/schema');

app.use(
  '/graphql',
  expressGraphQl({
    schema,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
