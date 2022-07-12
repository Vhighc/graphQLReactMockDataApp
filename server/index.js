const PORT = 4949;
const express = require("express");
const useData = require('./MOCK_DATA.json');
const graphql = require("graphql");
const {GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList} = graphql;
const {graphqlHTTP} = require('express-graphql');
var cors = require('cors')

// const schema = require('D:\graphql\server\Schemas\index');
// const schema = require [ 'D:\\graphql\\server\\index.js' ];

var dates = [
    {
        id: "1", date: "11-07-2022", 
        id: "2", date: "11-07-2022",
        id: "3", date: "11-07-2022",
        id: "4", date: "11-07-2022",
        id: "5", date: "11-07-2022",
    }
]
// const RootQuery = new GraphQLObjectType({
//     name: "RootQueryType",
//     fields: {
//         getUser: {
//             type: new GraphQLList(UserType),
//             args: {id:{ type: GraphQLString }},
//             resolve(parent, args){
//                 return useData;
//             },
//     },
//   },
// });
const DateType = new GraphQLObjectType({
    name: "Date",
    fields: () => ({
        id: {type: GraphQLInt},
        date: {type: GraphQLInt},
    }),
});


const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: {type: GraphQLInt},
        first_name: {type: GraphQLString},
        last_name: {type: GraphQLString},
        email: {type: GraphQLString},
        gender: {type: GraphQLString},
        currency: {type: GraphQLString},
        card: {type: GraphQLString},
    }),
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getUsers: {
            type: new GraphQLList(UserType),
            args: {id:{ type: GraphQLInt }},
            resolve(parent, args){
                return useData;
            },
    },
    // date:{
    //     type: DateType,
    //     args {id: {type: GraphQLInt}}
    //     resolve(parent, args){
    //         return (dates.{id: args.id});
    //     }
    // }
  },
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addUser: {
            type: UserType,
            args: {
                // id: {type: GraphQLInt},
                first_name: { type: GraphQLString },
                last_name: { type: GraphQLString },
                email: { type: GraphQLString },
                gender: {type: GraphQLString},
                currency: { type: GraphQLString },
                card: { type: GraphQLString },
        },
        resolve(parent, args) {
            useData.push({
                id: useData.length + 1,
                first_name: args.first_name,
                last_name: args.last_name,
                email: args.email,
                gender: args.gender,
                currency: args.currency,
                card: args.card
            });
            return args;
        },
      },
   },
});

const schema = new GraphQLSchema({ query: RootQuery, mutation: Mutation });


const app = express();
app.use(cors())
app.use('/graphql', graphqlHTTP({  
    schema,
    graphiql: true
}));


app.listen (PORT, () =>{
    console.log('now listening to requests on port 4949');
});