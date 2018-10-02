import * as path from "path";
import * as fs from "fs";
import { gql } from "apollo-server";

import { mergeTypes, mergeResolvers } from "merge-graphql-schemas";
import * as glob from "glob";

export const genSchema = () => {
  const pathToModules = path.join(__dirname, "../graphql");
  const graphqlTypes = glob
    .sync(`${pathToModules}/**/*.graphql`)
    .map(x => fs.readFileSync(x, { encoding: "utf8" }));

  const resolvers = glob
    .sync(`${pathToModules}/**/resolvers.?s`)
    .map(resolver => require(resolver).resolvers);

  return {
    typeDefs: gql(mergeTypes(graphqlTypes)),
    resolver: mergeResolvers(resolvers)
  };
};
