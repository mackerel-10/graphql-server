import { graphql, GraphQLSchema, GraphQLObjectType, GraphQLString, buildSchema } from "graphql";
import typeDef from './schema.graphql';

/*
** 직접 GraphQL의 type schema를 생성
*/
// Schema < Queries
// Construct a schema, using GraphQL schema language
// Query: top-level type

const schemaTypeDef = [typeDef];
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

// 2
/*
// Construct GraphQL schema
const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'QuerySample',
        fields: { // Client Field 정의
            hello: {
                type: GraphQLString, // Type
                resolve() {
                    return 'world';
                }
            },
        },
    }),
});

const source = '{hello}'; // Query From Client

// schema와 같은 필드의 source가 들어왔을때 
(async () => {
    const result = await graphql({ schema, source });
    console.log(result)
})(); */

export {schema, rootValue};