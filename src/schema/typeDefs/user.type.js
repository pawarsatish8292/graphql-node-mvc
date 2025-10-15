import {gql} from 'apollo-server-express';

export const userTypeDef = gql`
    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Query {
        getUsers: [User]
        getUser(id: ID!): User
    } 
    
    type Mutation {
        createUser(name: String!, email: String!): User
        updateUser(id: ID!, name: String, email: String): User
        deleteUser(id: ID!): String
    }
    `;