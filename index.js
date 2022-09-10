import { gql, ApolloServer } from "apollo-server";
import { v1 as uuid } from "uuid";

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
  type Address {
    street: String!
    city: String!
  }

  type Person {
    name: String!
    phone: String
    address: Address!
    id: ID!
  }

  type Query {
    personCount: Int!
    allPersons: [Person]!
    findPerson(name: String!): Person
  }

  type Mutation {
    addPerson(
      name: String!
      phone: String
      street: String!
      city: String!
    ): Person
  }
`;

const resolvers = {
  Query: {
    personCount: () => persons.length,
    allPersons: () => persons,
    findPerson: (root, args) => {
      const { name } = args;
      return persons.find((person) => person.name === name);
    },
  },

  Mutation: {
    addPerson: (root, args) => {
      const person = { ...args, id: uuid() };
      persons.push(person);
      return person;
    },
  },

  // Calculated field using custom resolver

  Person: {
    address: (root) => {
      return {
        street: root.street,
        city: root.city,
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
