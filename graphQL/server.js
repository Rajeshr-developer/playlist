const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');
const app = express();

app.use(cors());

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}))

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`)
})