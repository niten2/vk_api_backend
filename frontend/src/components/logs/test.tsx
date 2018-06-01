// const COMMENTS_SUBSCRIPTION = gql`
//   subscription subscribeToLog {
//     subscribeToLog {
//       id
//     }
//   }
// `;

// const DontReadTheComments = ({ repoFullName }) => (
//   <Subscription
//     subscription={COMMENTS_SUBSCRIPTION}
//     variables={{ repoFullName }}
//   >
//     {({ data: { commentAdded }, loading }) => (
//       <h4>New comment: {!loading && commentAdded.content}</h4>
//     )}
//   </Subscription>
// );
