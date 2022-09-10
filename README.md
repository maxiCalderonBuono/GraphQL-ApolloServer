# GraphQL-ApolloServer

Getting started with GraphlQL and Apollo Server

Read docs from [GraphQL](https://graphql.org/) - [Apollo](https://www.apollographql.com/docs/).

# First steps :rocket:

## Create a new project and install dependencies :computer: :

- npm init -y
- npm i graphql apollo-server

## Modify your package.json, if you want to use import syntax :pencil2: :

Add "type": "module",

## Define your data set :bar_chart: :

> The data itself. Apollo Server can fetch data from any source you connect to (including a database, a REST API, a static object storage service, or even another GraphQL server)

![Data set of your first Graphql server](https://res.cloudinary.com/dvqlenul5/image/upload/v1662804664/Data_set_epji1m.png)

## Define your Schema :triangular_ruler: :

> This is the structure of your data. A schema describe the shape of your available data. Also, it specifies exactly which queries and mutations are available for clients to execute. The "Query" type is special: it lists all of the available queries that clients can execute, along with the return type for each.

Read more from [GraphQL schema basics](https://www.apollographql.com/docs/apollo-server/schema/schema/)

![Schema for this example](https://res.cloudinary.com/dvqlenul5/image/upload/v1662816369/Schema_syrl5e.png)

## Define your resolvers :wrench: :

> Resolvers define the technique for fetching the types defined in the schema.
> Apollo provides a [Default resolvers](https://www.apollographql.com/docs/apollo-server/data/resolvers#default-resolvers)
> You can create calculated fields using custom resolvers. This is a powerful feature, which allow us getting server-side dynamic information instead of working with static information on client side.

![Resolvers for this example](https://res.cloudinary.com/dvqlenul5/image/upload/v1662816308/Resolvers_xe94cf.png)

## Create an instance of apollo server and start the server :arrow_forward: :

![Server instances](https://res.cloudinary.com/dvqlenul5/image/upload/v1662805909/Server_llsjzl.png)

## Play on playground :video_game: :

![apollo playground](https://res.cloudinary.com/dvqlenul5/image/upload/v1662816222/Apollo_Playground_yhtnu5.png)

# MUTATIONS

> The mutation type defines entry points for write operations.

This mutation type defines a single available mutation, addPerson. The mutation accepts four arguments (name, phone, city, street) and returns a newly created Person object. This Person object conforms to the structure that you defined in your schema.

![add new element](https://res.cloudinary.com/dvqlenul5/image/upload/v1662828031/Mutation_ozxi3t.png)
