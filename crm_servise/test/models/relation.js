// import context from "test/app.test"
// import chai, { expect } from 'chai'
// // import { valid_post } from "test/fixtures"

// // import SharedCrudModel from "test/shared/model/crud"

// describe('Relation', () => {

//   let User = context.models.User
//   let Tag = context.models.Tag
//   let ItemTag = context.models.ItemTag

//   // beforeEach( async () => {
//   //   await Model.remove({})
//   // })

//   it('test', async () => {

//     // console.log(User)
//     // let test  = await User.findAll()
//     // let user  = await User.findAll({
//     //   include: [{
//     //     model: Tag,
//     //     through: {
//     //       attributes: ['createdAt', 'startedAt', 'finishedAt'],
//     //       where: { completed: true }
//     //     }
//     //   }]
//     // })

//     let user = await User.findAll({
//       include: [{
//         model: Tag,
//         // through: {
//         //   attributes: ['createdAt', 'startedAt', 'finishedAt'],
//         //   where: {completed: true}
//         // }
//       }]
//     });


//     // let user  = await User.findById(1)

//     // let test = await user.getTags()
//     // console.log(test)
//     console.log(user)



//     // console.log(test)
//     // expect(await Model.find({})).to.be.empty
//     // let object = await Model.createObject(fixture)
//     // expect(object).to.have.property('_id')
//     // attributes.map( (field) => {
//     //   expect(object).to.have.property(field).eql(fixture[field])
//     // })
//     // expect(await Model.find({})).to.exist
//   })

//   // SharedCrudModel({
//   //   Model: Model,
//   //   fixture: valid_post,
//   //   attributes: [
//   //     "name"
//   //   ],
//   //   update_attributes: {
//   //     name: "new_name",
//   //   },
//   // })

// })
