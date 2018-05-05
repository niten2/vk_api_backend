import gql from "graphql-tag"
import { compose, graphql } from 'react-apollo'

const calculateLoanQuery = gql`
  mutation calculateLoan($input: LoanCalculateInput!) {
    calculateLoan(input: $input) {
      total
    }
  }
`

const createLoanQuery = gql`
  mutation createLoan($input: LoanCreateInput!) {
    createLoan(input: $input) {
      id
    }
  }
`

const loansQuery = gql`
  query loans($input: LoansInput) {
    loans(input: $input) {
      id
      sum
      date_start
      date_end
      total
    }
  }
`

export const withData = compose(
  graphql<any, any, any>(
    calculateLoanQuery, {
      name: "calculateLoanQuery"
    }
  ),

  graphql<any, any, any>(
    createLoanQuery, {
      name: "createLoanQuery",
      options: (props) => ({
        refetchQueries: [{
          query: loansQuery,
          variables: {
            input: {
              client: props.client.id,
            }
          },
        }],
      }),
    }
  ),
)
