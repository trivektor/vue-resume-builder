import Vue from 'vue'
import VueApollo from 'vue-apollo'
import {ApolloClient} from 'apollo-client'
import {createHttpLink} from 'apollo-link-http'
import {ApolloLink} from 'apollo-link'
import {InMemoryCache} from 'apollo-cache-inmemory'

import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/index.css'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:4000/graphql',
})

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      authorization: `Bearer ${localStorage.getItem('id_token')}`,
    },
  })
  
  return forward(operation)
})

// Create the apollo client
const apolloClient = new ApolloClient({
  link: ApolloLink.from([
    authMiddleware,
    httpLink,
  ]),
  cache: new InMemoryCache(),
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

Vue.config.productionTip = false
Vue.use(VueApollo)

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
