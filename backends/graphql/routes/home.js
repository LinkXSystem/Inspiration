const express = require('express');
const router = express.Router();

const { graphqlExpress } = require('apollo-server-express');
const schema = require('../src/components/graphql/schemas/home-schema');

router.post(
  '/',
  graphqlExpress({
    schema
  })
);

module.exports = router;
