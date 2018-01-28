import gql from 'graphql-tag';

const querys = gql`
  query {
    books(number: 3) {
      source
      name
      author
      img
      description
      icons
    }
  }
`;

// const modify = gql``;

export default { querys };
