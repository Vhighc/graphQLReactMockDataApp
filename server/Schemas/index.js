const useData = require('./MOCK_DATA.json');
const graphql = require("graphql");
const {GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList} = graphql;
const {UserType} = require('./hj/User');
const useData = require('../MOCK_DATA.json');

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getUsers: {
            type: new GraphQLList(UserType),
            args: {id:{ type: GraphQLInt }},
            resolve(parentValue, args){
                return useData;
            },
    },
  },
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addUser: {
            type: UserType,
            args: {
                first_name: { type: GraphQLString },
                last_name: { type: GraphQLString },
                email: { type: GraphQLString },
                currency: { type: GraphQLString },
                card: { type: GraphQLString },
        },
        resolve(parent, args) {
            useData.push({
                id: useData.length + 1,
                first_name: args.first_name,
                last_name: args.last_name,
                email: args.email,
                currency: args.currency,
                card: args.card,
            });
            return args;
        },
      },
   },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });

// const schema = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
