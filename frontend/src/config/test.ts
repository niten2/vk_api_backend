// import { split } from 'apollo-link'
// import { HttpLink } from 'apollo-link-http'
// import { WebSocketLink } from 'apollo-link-ws'
// import { getMainDefinition } from 'apollo-utilities'
// import { ApolloClient } from "apollo-client"
// import { setContext } from "apollo-link-context"
// import { InMemoryCache } from "apollo-cache-inmemory"

// // const uri = "https://k543gaundncdrppyup5oefjgae.appsync-api.us-west-2.amazonaws.com/graphql"
// // const uriWs = "wss://k543gaundncdrppyup5oefjgae.appsync-api.us-west-2.amazonaws.com/graphql"

// const httpLink = new HttpLink({
//   uri,
// })

// const connectionParams = () => {
//   return {
//     Authorization: AuthProvider.fetchToken(),
//   }
// }

// const wsLink = new WebSocketLink({
//   // uri: `ws://localhost:8080/subscriptions`,
//   // uri: `ws://localhost:8080/api/v3/subscriptions`,
//   // uri: `ws://localhost:8080/v3`,
//   // uri: `ws://localhost:${PORT}/v3/subscriptions`,

//   // uri: `ws://localhost:5000/subscriptions`,

//   // uri: `wss://k543gaundncdrppyup5oefjgae.appsync-api.us-west-2.amazonaws.com/graphql`,
//   uri: uriWs,

//   options: {
//     reconnect: true,
//     connectionParams,


//     // connectionParams: {
//     //   authorization: token,
//     //   "x-api-key": xApiKey,
//     // },

//     // headers: {
//     //   authorization: token,
//     //   "x-api-key": xApiKey,
//     // },
//   },
// })

// // create the web socket link
// // const wsLink = new WebSocketLink({
// //   uri: 'ws://example.com',
// //   options: {
// //     reconnect: true
// //   }
// // })

// // create my middleware using the applyMiddleware method from subscriptions-transport-ws
// // const subscriptionMiddleware = {
// //   applyMiddleware (options, next) {
// //     console.log(111111111111111)
// //     console.log(options)

// //     // options.auth = {
// //     //   authorization: token,
// //     //   "x-api-key": xApiKey,
// //     // }
// //     next()
// //   }
// // }
// // // add the middleware to the web socket link via the Subscription Transport client
// // wsLink.subscriptionClient.use([subscriptionMiddleware])

// // console.log(wsLink)



// // using the ability to split links, you can send data to each link
// // depending on what kind of operation is being sent

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   // const token = localStorage.getItem('token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       // authorization: token ? `Bearer ${token}` : "",
//       authorization: token,
//       "x-api-key": xApiKey,
//     }
//   }
// });



// // const middlewareLink = setContext(() => ({
// //   headers: {
// //     authorization: "111111111111",
// //     "x-api-key": "da2-gj5yh7765jh7nfajcilclkqgoa",
// //   }
// // }))



// let link = split(

//   // split based on operation type
//   ({ query }) => {
//     const { kind, operation } = getMainDefinition(query)
//     return kind === 'OperationDefinition' && operation === 'subscription'
//   },
//   wsLink,
//   httpLink,
// )

// // link = middlewareLink.concat(link)


// // console.log(link)


// // const httpLink = createHttpLink({
// //   uri: settings.backend_url,
// // })

// // const errorLink = onError(({ networkError, graphQLErrors, response }) => {
// //   if (graphQLErrors) {
// //     graphQLErrors.map(({ message, locations, path }) => {
// //       console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)

// //       if (message === "user not found" || message === "token not valid") {
// //         AuthProvider.removeToken()
// //         history.push("/")
// //       }
// //     })
// //   }

// //   if (networkError) {
// //     console.log(`[Network error]: ${networkError}`)
// //   }
// // })

// // const middlewareLink = setContext(() => ({
// //   headers: {
// //     authorization: AuthProvider.fetchToken(),
// //   }
// // }))

// // const link = middlewareLink.concat(errorLink.concat(httpLink))

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   // link: authLink.concat(link),
//   link: authLink.concat(link),
// })

// export default client
