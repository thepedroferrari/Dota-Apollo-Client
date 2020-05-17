# Dota Pro Circuit Client

In this project I am interacting with an Apollo Server, currently hosted at Heroku — it turns itself off after 10 minutes of inactivity and it may take up to 30s to start it again on a new request.
The stack I chose was React CRA, TypeScript, GraphQL with Apollo Client, Styled Components, Jest and Storybook.

## Quick Links
- Client: [https://dota.pedroferrari.com/](https://dota.pedroferrari.com/)
- Apollo Server: [http://the-dota-api.herokuapp.com/graphql](http://the-dota-api.herokuapp.com/graphql)
- Component Library: [https://dota-components.pedroferrari.com/](https://dota-components.pedroferrari.com/)

## How to run?
- Clone this directory and install using either npm or yarn
- Clone [the GraphQL Apollo Server](https://github.com/thepedroferrari/Dota-TS-Apollo-GraphQL-Server) and install using either npm or yarn
- Alternativelly you can also add a .env file with the string `REACT_APP_GRAPHQL_ENDPOINT=http://the-dota-api.herokuapp.com/graphql`

## Tests
Snapshot tests are initially set-up using Storybook and Storyshots.
![The initial test results](https://i.ibb.co/d54rjkp/Screenshot-2020-05-17-at-22-02-06.png)

To run the tests you can run `npm run test`.

### Test Disclaimer
It hasn't been fully setup yet, there are components utilizing real data and making a comparison between Date.now() and a future Event date, therefore these tests may fail in comparison to previous ones. A more complex setup is required as to pass Date.now() as a specific fixed value in order for the components to always render the same and always get correct tests results.

## Connection to the API
The goal of using Apollo server and Apollo client is to have an updated source of truth that is easy to access, simple to subscribe via websockets in the event we want to use a live API and has amazing caching tools. This includes very specific cache invalidation and subscription to data; In a real scenario we want to poll intermittently with queries, and make small, incremental changes to large objects.
We also want these updates to have very low latency, traditional graphql usually takes half a second to respond but with the correct subscription setup we may achieve the same in about 40ms.

The API is available at [http://the-dota-api.herokuapp.com/graphql](http://the-dota-api.herokuapp.com/graphql).
You can check the API code at its [Github](https://github.com/thepedroferrari/Dota-TS-Apollo-GraphQL-Server) page.

## Client
The client is supposed to utilize the data but never mutate it. The choice for not choosing something as Redux or Context to store the data from the API is to not have to manage two states. Apollo makes a good choice for maintaining a single source of truth. There will be however places where we don't want the data to be exactly the same as it is in the API, but instead of passing the data to a component state and subscribing to the state changes we want functions that are directly hidrated by the data from GraphQL.
You will find hooks that instead of performing queries they will require that the data is passed to them.

### Client Features

- React client at `start`
- Testing at `test`
- Storybook Component Library at `storybook`
