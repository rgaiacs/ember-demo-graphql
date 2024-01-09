import Route from '@ember/routing/route';

import { queryManager } from "ember-apollo-client";

import gql from "graphql-tag";

const query = gql`
  query humans {
    humans {
      name
    }
  }
`;

export default class IndexRoute extends Route {
  @queryManager apollo;

  model() {
    return this.apollo.query({ query }).then(
      (data) => {
        console.log(data);
        return data;
      }
    );
  }
}
