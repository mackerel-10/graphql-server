import { graphql, GraphQLSchema, GraphQLObjectType, GraphQLString, buildSchema } from "graphql";

/*
** 직접 GraphQL의 type schema를 생성
*/
// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
    type Query {
        hello: String
    }`
);

// Resolver
// Provides a resolver function for each API endpoint
const rootValue = {
    hello: () => {
        return "Hello world!";
    }
};

(async () => {
    const response = await graphql({
        schema, // GraphQL Type
        source: '{hello}', // Client Query
        rootValue // Resolver
    });
    console.log(response);
})();


/*
** 2
*/
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

export {schema};