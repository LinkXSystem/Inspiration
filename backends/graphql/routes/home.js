const express = require('express');
const router = express.Router();

const graphql = require('apollo-server-express');
const schema = require('../src/components/graphql/schemas/home-schema');

router.use(
  '/',
  graphql.graphqlExpress({
    schema
  })
);

module.exports = router;
