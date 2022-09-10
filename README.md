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

![Data set of your first Graphql server](https://res.cloudinary.com/dvqlenul5/image/upload/v1662805242/Schema_vp3adv.png)

## Define your resolvers :wrench: : 

>  Resolvers define the technique for fetching the types defined in the schema.

![Resolvers for this example](https://res.cloudinary.com/dvqlenul5/image/upload/v1662805771/Resolvers_suayn0.png)

## Create an instance of apollo server and start the server :arrow_forward: : 

![Server instances](https://res.cloudinary.com/dvqlenul5/image/upload/v1662805909/Server_llsjzl.png)

## Play on playground :video_game: :

![apollo playground](https://res.cloudinary.com/dvqlenul5/image/upload/v1662806004/Apollo_Playground_fie9gc.png)

