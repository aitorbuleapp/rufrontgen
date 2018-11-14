import * as React from "react";
import { graphql, ChildMutateProps } from "react-apollo";
import gql from "graphql-tag";
import { RegisterMutation, RegisterMutationVariables } from "../../schemaTypes";
import { normalizeErros } from "../../utils/normalizeErrors";
import { NormalizedErrorMap } from "../../types/NormalizedErrorMap";

interface Props {
  children: (
    data: {
      submit: (
        values: RegisterMutationVariables
      ) => Promise<NormalizedErrorMap | null>;
    }
  ) => JSX.Element | null;
}

class C extends React.PureComponent<
  ChildMutateProps<Props, RegisterMutation, RegisterMutationVariables>
> {
  submit = async (values: RegisterMutationVariables) => {
    console.log(values);
    const {
      data: { register }
    } = await this.props.mutate({
      variables: values
    });
    console.log("response: ", register);

    if (register) {
      return normalizeErros(register);
    }
    return null;
  };

  render() {
    return this.props.children({ submit: this.submit });
  }
}

const registerMutation = gql`
  mutation RegisterMutation(
    $email: String!
    $password: String!
    $name: String!
    $lastname: String!
  ) {
    register(
      email: $email
      password: $password
      name: $name
      lastname: $lastname
    ) {
      path
      message
    }
  }
`;

export const RegisterController = graphql<
  Props,
  RegisterMutation,
  RegisterMutationVariables
>(registerMutation)(C) as any;
