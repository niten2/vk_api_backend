// import * as React from "react"
// import { ApolloClient } from "apollo-client"
// import { ApolloProvider } from "react-apollo"
// import { InMemoryCache } from "apollo-cache-inmemory"
// import { SchemaLink } from "apollo-link-schema"
// import { makeExecutableSchema, addMockFunctionsToSchema } from "graphql-tools"

// const globalAny: any = global

// export default function createApolloProxy(options: any): any {
//   const { typeDefs, mocks } = options

//   const schema = makeExecutableSchema({ typeDefs })

//   addMockFunctionsToSchema({
//     schema,
//     mocks,
//     preserveResolvers: true
//   })

//   const apolloCache = new InMemoryCache(globalAny.__APOLLO_STATE__)

//   const client = new ApolloClient({
//     cache: apolloCache,
//     link: new SchemaLink({ schema })
//   })

//   class ApolloProxy extends React.Component<any, any> {

//     render() {
//       const { value: NextProxy, next } = this.props.nextProxy

//       return (
//         <ApolloProvider client={client}>
//           <NextProxy {...this.props} nextProxy={next()} />
//         </ApolloProvider>
//       )
//     }
//   }

//   return ApolloProxy
// }

// NOTE compile to es5 for compare cosmos and jest
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createApolloProxy;

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _apolloClient = require("apollo-client");

var _reactApollo = require("react-apollo");

var _apolloCacheInmemory = require("apollo-cache-inmemory");

var _apolloLinkSchema = require("apollo-link-schema");

var _graphqlTools = require("graphql-tools");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var globalAny = global;

function createApolloProxy(options) {
  var typeDefs = options.typeDefs,
      mocks = options.mocks;


  var schema = (0, _graphqlTools.makeExecutableSchema)({ typeDefs: typeDefs });

  (0, _graphqlTools.addMockFunctionsToSchema)({
    schema: schema,
    mocks: mocks,
    preserveResolvers: true
  });

  var apolloCache = new _apolloCacheInmemory.InMemoryCache(globalAny.__APOLLO_STATE__);

  var client = new _apolloClient.ApolloClient({
    cache: apolloCache,
    link: new _apolloLinkSchema.SchemaLink({ schema: schema })
  });

  var ApolloProxy = function (_React$Component) {
    _inherits(ApolloProxy, _React$Component);

    function ApolloProxy() {
      _classCallCheck(this, ApolloProxy);

      return _possibleConstructorReturn(this, (ApolloProxy.__proto__ || Object.getPrototypeOf(ApolloProxy)).apply(this, arguments));
    }

    _createClass(ApolloProxy, [{
      key: "render",
      value: function render() {
        var _props$nextProxy = this.props.nextProxy,
            NextProxy = _props$nextProxy.value,
            next = _props$nextProxy.next;


        return React.createElement(
          _reactApollo.ApolloProvider,
          { client: client },
          React.createElement(NextProxy, _extends({}, this.props, { nextProxy: next() }))
        );
      }
    }]);

    return ApolloProxy;
  }(React.Component);

  return ApolloProxy;
}
