# Dota Pro Circuit Client

In this project I am interacting with an Apollo Server, currently hosted at Heroku (it turns itself off after 10 minutes of inactivity)

## Connection to the API
The goal of using Apollo server and Apollo client is to have an updated source of truth that is easy to access, simple to subscribe via websockets in the event we want to use a live API and has amazing caching tools. This includes very specific cache invalidation and subscription to data; In a real scenario we want to poll intermittently with queries, and make small, incremental changes to large objects.
We also want these updates to have very low latency, traditional graphql usually takes half a second to respond but with the correct subscription setup we may achieve the same in about 40ms.

## Client
The client is supposed to utilize the data but never mutate it. The choice for not choosing something as Redux or Context to store the data from the API is to not have to manage two states. Apollo makes a good choice for maintaining a single source of truth. There will be however places where we don't want the data to be exactly the same as it is in the API, but instead of passing the data to a component state and subscribing to the state changes we want functions that are directly hidrated by the data from GraphQL.
You will find hooks that instead of performing queries they will require that the data is passed to them.

