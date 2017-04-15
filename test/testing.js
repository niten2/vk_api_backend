import context from "test/app.test"
import chai, { expect } from 'chai'
// import { valid_post } from "test/fixtures"
// import SharedCrudModel from "test/shared/model/crud"

describe('Relation', () => {

  let User = context.models.User
  let Tag = context.models.Tag
  let ItemTag = context.models.ItemTag

  // beforeEach( async () => {
  //   await Model.remove({})
  // })

  it('test', async () => {
    let user  = await User.findById(1)



    // console.log(user)
    user.setVkAttributes("https://vk.com/maks.petrov_krsk")

  })


})
