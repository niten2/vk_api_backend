import gql from "graphql-tag"
import { compose, graphql } from 'react-apollo'

const loanQuery = gql`
  query loan($id: ID!) {
    loan(id: $id) {
      id
      sum
      date_start
      date_end
      total
    }
  }
`

const clientQuery = gql`
  query client($id: ID!) {
    client(id: $id) {
      id
      full_name
      email
      passport
      phone
      mark_as_deleted
      total_sum_loans

      territory {
        id
        name
        rate
      }
    }
  }
`

const updateLoanQuery = gql`
  mutation updateLoan($input: LoanUpdateInput!) {
    updateLoan(input: $input) {
      id
    }
  }
`

const calculateLoanQuery = gql`
  mutation calculateLoan($input: LoanCalculateInput!) {
    calculateLoan(input: $input) {
      total
    }
  }
`

export const withData = compose(
  graphql<any, any, any>(
    clientQuery, {
      name: "clientQuery" ,
      options: (props) => ({
        variables: {
          id: props.match.params.id
        },
      })
    },
  ),
  graphql<any, any, any>(
    loanQuery, {
      name: "loanQuery" ,
      options: (props) => ({
        variables: {
          id: props.match.params.loanId
        }
      })
    },
  ),
  graphql<any, any, any>(
    updateLoanQuery, {
      name: "updateLoanQuery"
    }
  ),
  graphql<any, any, any>(
    calculateLoanQuery, {
      name: "calculateLoanQuery"
    }
  ),
)
