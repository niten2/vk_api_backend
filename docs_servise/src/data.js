export const options = {
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`,
  }
}

export const endpoint = 'http://localhost:4001/v2'
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

mutation JwtTokenCreate {
  JwtTokenCreate(
    email: "dfgdfg"
    password: "dsfsdf"
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

`


