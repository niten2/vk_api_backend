import gql from "graphql-tag"
import { graphql } from "react-apollo"

const vkPersonsQuery = gql`
  query vkPersons($input: VkPersonsInput) {
    vkPersons(input: $input) {
      vkPersons {
        id

        uid
        isFriend
        createdAt
      }
    }
  }
`
export const withData = graphql<any, any, any>(
  vkPersonsQuery, {
    name: "vkPersonsQuery",
    options: (props) => ({
      fetchPolicy: "cache-and-network",
      // fetchPolicy: "network-only",
      variables: {
        input: {
          limit: 5,
          // cursor: 0,
        }
      },
    })
  }
)


// const FeedWithData = ({ match }) => (
//   <Query
//     query={FEED_QUERY}
//     variables={{
//       type: match.params.type.toUpperCase() || "TOP",
//       offset: 0,
//       limit: 10
//     }}
//     fetchPolicy="cache-and-network"
//   >
//     {({ data, fetchMore }) => (
//       <Feed
//         entries={data.feed || []}
//         onLoadMore={() =>
//           fetchMore({
//             variables: {
//               offset: data.feed.length
//             },
//             updateQuery: (prev, { fetchMoreResult }) => {
//               if (!fetchMoreResult) return prev;
//               return Object.assign({}, prev, {
//                 feed: [...prev.feed, ...fetchMoreResult.feed]
//               });
//             }
//           })
//         }
//       />
//     )}
//   </Query>
// );



// export default (graphql(channelDetailsQuery, {
//   options: (props) => ({
//     variables: {
//       channelId: props.match.params.channelId,
//     },
//   }),
//   props: (props) => {
//     return {
//       data: props.data,

//       loadOlderMessages: () => {
//         return props.data.fetchMore({
//           variables: {
//             channelId: props.data.channel.id,
//             cursor: props.data.channel.messageFeed.cursor,
//           },

//           updateQuery(previousResult, { fetchMoreResult }) {
//             const prevMessageFeed =
//               previousResult.channel.messageFeed;
//             const newMessageFeed =
//               fetchMoreResult.channel.messageFeed;
//             const newChannelData = {...previousResult.channel,
//               messageFeed: {
//                 messages: [
//                   ...newMessageFeed.messages,
//                   ...prevMessageFeed.messages
//                 ],
//                 cursor: newMessageFeed.cursor
//               }
//             }

//             const newData =  {
//               ...previousResult,
//               channel: newChannelData
//             };

//             return newData;
//           }
//         });
//       }
//     };
//   }
// })(ChannelDetails));

