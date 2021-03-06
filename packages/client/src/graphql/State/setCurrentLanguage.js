import gql from "graphql-tag";

export default gql`
  mutation setCurrentLanguage($index: String!, $value: String!) {
    setCurrentLanguage(index: $index, value: $value) @client {
      currentLanguage
    }
  }
`;
