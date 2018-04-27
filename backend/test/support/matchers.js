// const loan_attr = `
//   id

//   date_start
//   date_end
//   total

//   createdAt
//   updatedAt
// `

// const territory_attr = `
//   id

//   name
//   rate

//   createdAt
//   updatedAt
// `

// const client_attr = `
//   id

//   full_name
//   email
//   passport
//   phone
//   user
//   mark_as_deleted
//   total_sum_loans

//   createdAt
//   updatedAt

//   loans {
//     ${loan_attr}
//   }

//   territory {
//     ${territory_attr}
//   }
// `

// const user_attr = `
//   id

//   full_name
//   email
//   login
//   password
//   role
//   phone
//   territory
//   createdAt
//   updatedAt
// `

// export default {

//   client_attr,
//   user_attr,
//   loan_attr,
//   territory_attr,

//   user_json: expect.objectContaining({
//     id: expect.any(String),

//     full_name: expect.any(String),
//     email: expect.any(String),

//     login: expect.any(String),
//     password: expect.any(String),
//     role: expect.any(String),
//     phone: expect.any(String),
//     territory: expect.any(String),
//     createdAt: expect.any(String),
//     updatedAt: expect.any(String),
//   }),

//   client_json: expect.objectContaining({
//     id: expect.any(String),

//     full_name: expect.any(String),
//     email: expect.any(String),
//     passport: expect.any(String),
//     phone: expect.any(String),

//     mark_as_deleted: expect.any(Boolean),
//     total_sum_loans: expect.any(Number),

//     createdAt: expect.any(String),
//     updatedAt: expect.any(String),
//   }),

//   loan_json: expect.objectContaining({
//     id: expect.any(String),

//     date_start: expect.any(String),
//     date_end: expect.any(String),
//     total: expect.any(Number),
//     createdAt: expect.any(String),
//     updatedAt: expect.any(String),
//   }),

//   territory_json: expect.objectContaining({
//     id: expect.any(String),

//     name: expect.any(String),
//     rate: expect.any(Number),

//     createdAt: expect.any(String),
//     updatedAt: expect.any(String),
//   }),

//   errors_json: expect.objectContaining({
//     message: expect.any(String),
//     locations: expect.any(Array),
//   }),

//   errors_unauthorized_json: expect.objectContaining({
//     message: "token not found",
//     locations: expect.any(Array),
//   }),

//   payload_json: expect.objectContaining({
//     user_id: expect.any(String),
//     email: expect.any(String),
//     iat: expect.any(Number),
//     exp: expect.any(Number),
//   }),

//   user_db: expect.objectContaining({
//     _id: expect.any(Object),
//     full_name: expect.any(String),
//     email: expect.any(String),
//     password: expect.any(String),

//     role: expect.any(String),

//     createdAt: expect.any(Date),
//     updatedAt: expect.any(Date),
//   }),

//   client_db: expect.objectContaining({
//     _id: expect.any(Object),

//     full_name: expect.any(String),
//     email: expect.any(String),

//     passport: expect.any(String),
//     phone: expect.any(String),
//     territory: expect.any(Object),
//     mark_as_deleted: expect.any(Boolean),

//     createdAt: expect.any(Date),
//     updatedAt: expect.any(Date),
//   }),

//   loan_db: expect.objectContaining({
//     _id: expect.any(Object),

//     date_start: expect.any(Date),
//     date_end: expect.any(Date),
//   }),

//   territory_db: expect.objectContaining({
//     _id: expect.any(Object),

//     name: expect.any(String),
//     rate: expect.any(Number),
//   }),

// }
