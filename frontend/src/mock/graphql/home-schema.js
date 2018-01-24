import gql from 'graphql-tag';

const querys = gql`
  {
    books {
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
