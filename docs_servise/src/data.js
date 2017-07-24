export const options = {
  method: 'post',
  headers: { 'Content-Type': 'application/json' }
}

export const endpoint = 'http://localhost:4002/v2'

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


`


