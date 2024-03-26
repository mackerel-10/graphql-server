import { buildSchema } from "graphql";
import typeDef from '../src/schemas/schema.graphql';

/*
** 직접 GraphQL의 type schema를 생성
*/
// Schema < Queries
// Construct a schema, using GraphQL schema language
// Query: top-level type

console.log([typeDef]);
// const schemaTypeDef = [typeDef];

const schema = buildSchema(`
    type Character {
        name: String
        age: Int
    }

    type Query {
        getCharacter: Character
    }`
);

// Resolvers
// Provides a resolver function for each API endpoint
// provides top level api end points
const rootValue = {
    hello: () => {
        return "world";
    },
    getCharacter: () => {
        return new Character();
    },
};

class Character {
    name() {
        return 'John';
    }

    age() {
        return 25;
    }
}

export {schema, rootValue};
