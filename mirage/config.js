import { createServer, Factory } from "miragejs";
import { createGraphQLHandler } from "@miragejs/graphql";

import gql from "graphql-tag";

const graphQLSchema = gql`
  type Human {
    name: String
  }

  type Query {
    humans: [Human]
  }
`;

export default function makeServer(config) {
  return createServer({
    factories: {
      human: Factory.extend({
        name: "Jane Doe"
      })
    },

    seeds(server) {
      server.create('human');
    },

    routes() {
      const graphQLHandler = createGraphQLHandler(graphQLSchema, this.schema)

      this.post("/graphql", graphQLHandler)
    }
  })
};
