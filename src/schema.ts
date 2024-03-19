import { graphql, GraphQLSchema, GraphQLObjectType, GraphQLString } from "graphql";

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

graphql({schema, source}).then((result) => {console.log(result)});

export {schema};