// import mongoose from 'mongoose'
// import config from 'config/database'
// import models from 'models'
// import App from "app"

// process.env.NODE_ENV = 'test'
// process.env.DB_URL="mongodb://localhost/test"
// process.env.SECRET_KEY="8274547653"
// mongoose.Promise = Promise

// const app = new App({ config })
// const context = app.this()
// app.run()

// const data = {
//   user: {
//     email: "test@test.com",
//     password: "12345678",
//     name: "NAME USER",
//   },

//   post: {
//     name: "name",
//     body: "body",
//   },

//   person: {
//     name: "test person",
//   },

//   comments: [
//     {
//       body: "comments 1",
//       type: "comment",
//     },
//     {
//       body: "comments 2",
//       type: "comment",
//     },
//   ],

// }

// // models

// const Comment = context.models.Comment
// const User = context.models.User
// const Post = context.models.Post
// const Person = context.models.Person

// console.log(context.models)
// async function saveDataInDb(data) {
//   // // create user
//   await User.create(data.user)

//   // create person
//   const person = await Person.create(data.person)

//   // create post
//   const post = await Post.create(data.post)

//   // // create comments
//   const promises = data.comments.map((comment) => {
//     const commentData = Object.assign({}, comment, {
//       post: post._id,
//     })
//     return Comment.create(commentData)
//   })
//   await Promise.all(promises)

//   console.log("ok")
// }

// // async function clearInDb(data) {
// //   await User.remove({})
// //   await Comment.remove({})
// //   await Post.remove({})
// //   console.log("clear all")
// // }

// saveDataInDb(data)
// // clearInDb(data)

