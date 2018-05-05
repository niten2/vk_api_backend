// import createStateProxy from 'react-cosmos-state-proxy'
// import createRouterProxy from 'react-cosmos-router-proxy'
// import createLocalStorageProxy from 'react-cosmos-localstorage-proxy'

// import createApolloProxy from './react_cosmos_apollo_proxy'
// import { typeDefs, mocks }  from 'src/test/support/graphql'

// export default [
//   createStateProxy(),
//   createRouterProxy(),
//   createLocalStorageProxy(),
//   createApolloProxy({
//     typeDefs,
//     mocks,
//   }),
// ]

// NOTE compile to es5 for compare cosmos and jest
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactCosmosStateProxy = require('react-cosmos-state-proxy');

var _reactCosmosStateProxy2 = _interopRequireDefault(_reactCosmosStateProxy);

var _reactCosmosRouterProxy = require('react-cosmos-router-proxy');

var _reactCosmosRouterProxy2 = _interopRequireDefault(_reactCosmosRouterProxy);

var _reactCosmosLocalstorageProxy = require('react-cosmos-localstorage-proxy');

var _reactCosmosLocalstorageProxy2 = _interopRequireDefault(_reactCosmosLocalstorageProxy);

var _react_cosmos_apollo_proxy = require('./react_cosmos_apollo_proxy');

var _react_cosmos_apollo_proxy2 = _interopRequireDefault(_react_cosmos_apollo_proxy);

var _graphql = require('src/test/support/graphql');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [(0, _reactCosmosStateProxy2.default)(), (0, _reactCosmosRouterProxy2.default)(), (0, _reactCosmosLocalstorageProxy2.default)(), (0, _react_cosmos_apollo_proxy2.default)({
  typeDefs: _graphql.typeDefs,
  mocks: _graphql.mocks
})];
