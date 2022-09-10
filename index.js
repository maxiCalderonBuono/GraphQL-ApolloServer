import { gql, ApolloServer } from "apollo-server";

const persons = [
  {
    name: "Maxi",
    phone: "045-91995343",
    street: "Vesterbrogade",
    city: "Copenhagen",
    id: "36145334",
  },
  {
    name: "Mariana",
    phone: "045-71734562",
    street: "Ostebro",
    city: "Central Station",
    id: "34745983",
  },
  {
    name: "Nico",
    phone: "045-91995082",
    street: "Place",
    city: "Heering",
    id: "36164678",
  },
];

const typeDefs = gql`
  type Person {
    name: String!
    phone: String
    street: String!
    city: String!
    id: ID!
  }

  type Query {
    personCount: Int!
    allPersons: [Person]!
  }
`;
