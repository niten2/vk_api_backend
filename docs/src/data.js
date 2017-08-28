export const options = {
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`,
  }
}

// export const endpoint = 'http://localhost:4001/v2'
export const endpoint = 'http://localhost:4001/v1'
// export const endpoint = process.env.REACT_APP_ENDPOINT

export const defaultQuery = `

# mutation addClient {
#   addClient(name: "1234", number: "66666") {
#     name
#     number
#   }
# }

query clients {
  clients {
    id
    name
    number
    phone
    note
    date_birth
    status {
      id
      name
    }
  }
}

query client {
  client(id: 66) {
    id
    name
    number
    phone
    note
    date_birth
    status {
      id
      name
    }
  }
}

mutation clientUpdate {
  clientUpdate(
    id: 67
    name: "name"
  ) {
    id
    name
  }
}

mutation clientDelete {
  clientDelete(
    id: 67
  ) {
    id
  }
}

 query user {
  user(id: 1) {
    id
    email
    password
  }
 }

mutation JwtTokenCreate {
  JwtTokenCreate(
    email: "email@test.com"
    password: "1234"
  ) {
    email
    password
  }
}

query user {
  user {
    id
    name
    email
  }
}

mutation createJwtToken {
  createJwtToken(
    input {
      email: "dfgdfg"
      password: "dsfsdf"
    }
  ) {
    token
  }
}


mutation createJwtToken {
  createJwtToken(
    name: "dsfsdf"
  ) {
    token
  }
}



query users {
  users {
    id
    name
    email
  }
}

query tags {
  tags {
    id
    name
  }
}


subscription Group {
  Group(
    filter: { mutation_in: [CREATED] }
  ) {
    mutation
    node {
      name
      members_count
      note
    }
  }
}


tags {
  tags {
    id
    name
    status
    kind
  }
}

query tags($filter: TagFilterInput) {
  tags(filter: $filter) {
    id
    name
    status
    kind
  }
}

variables: {
  filter: {
    name: "test",
    status: "test",
  }
}


query meta {
  meta(input: { names: ["Client"]}) {
   count
  }
}


query m {
  meta(name: "Client") {
   count
  }
}


   mutation m($input: JwtTokenInput!) {
      createJwtToken(input: $input) {
        token
        __typename
      }
    }


  {
    "input": {
      "email": "email@email.com",
      "password": "1234"
    }
  }


`

// query ($username: String = "GovSchwarzenegger"){
//   tags {
//     tags(filter: { name: $username, status: $username}) {
//       id
//       name
//       status
//       kind
//     }
//   }
// }

// {
//   query: "query tags($filter: TagFilterInput) {↵  tags(filter: $filter) {↵    id↵    name↵    status↵    kind↵    __typename↵  }↵}↵"
//   variables: {
//     filter: {
//       name: "test",
//       status: "test",
//     }
//   }
// }

