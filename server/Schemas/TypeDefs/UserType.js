// const useData = require('./MOCK_DATA.json');
const graphql = require("graphql");
const {GraphQLObjectType,
    //  GraphQLSchema,
     GraphQLInt,
     GraphQLString,
    //  GraphQLList
    } = graphql;

const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        // id: {type: GraphQLInt},
        first_name: {type: GraphQLString},
        last_name: {type: GraphQLString},
        email: {type: GraphQLString},
        gender: {type: GraphQLString}
        currency: {type: GraphQLString},
        card: {type: GraphQLString},
    }),
});

module.exports = UserType;