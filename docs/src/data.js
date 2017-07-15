export const options = {
  method: 'post',
  headers: { 'Content-Type': 'application/json' }
}

export const endpoint = 'http://localhost:4002/v2/graphql'

export const defaultQuery = `

# mutation addClient {
#   addClient(name: "1234", number: "66666") {
#     name
#     number
#   }
# }

# query clients {
#  clients {
#    id
#    name
#    number
#    phone
#    note
#    date_birth
#  }
# }

query client {
  client(id: 66) {
    id
    name
    number
    phone
    note
    date_birth
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




`


