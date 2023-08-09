# Alio IT Test

This is a complete implementation of a system that encompasses both the frontend and the backend.

## Frontend

For the application's frontend, a connection is made to the [Rick & Morty API](https://rickandmortyapi.com/). I chose to use [Next.js](https://nextjs.org/) as the framework, and I utilized [RKT Query](https://redux-toolkit.js.org/rtk-query/overview) to manage the API calls.

Additionally, a [Socket.IO](https://socket.io/) client has been integrated to listen to events from the backend.

## Backend

For the backend, [MongoDB](https://mongodb.com/es) was integrated as the database. A cluster has been set up in Mongo Atlas and a collection named `alio-it` was created. For modeling and connecting to the database, the [ORM Prisma](https://prisma.io/) was used.

Likewise, [Socket.IO](https://socket.io/) has been incorporated to send events to the frontend.

## Getting Started

### Requirements

- [Docker](https://docker.com/)

### Instructions

From the project's root directory, run the following commands:

```bash
  docker-compose build
  docker-compose up -d
```

## Testing

To see the application in action, open your browser and visit [localhost](http://localhost:3000/).

## Mongo DB connection

For connected to mongo database and see the data please use this link in your favotite client

```
mongodb+srv://jrosales90:e6PGbMTVKVKPI5qe@alio-it.xpmy7a5.mongodb.net/alio-it?retryWrites=true&w=majority
```

Enjoy your experience with the system!

> **_NOTE:_** I know the best practice is to create a .env file for the vars secrets and another configurations, but given this is only for test I omitted it.
