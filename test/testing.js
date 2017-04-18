import context from "test/app.test"
import chai, { expect } from 'chai'

import parseUser from "api/lib/vk/parse_user"

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
    // console.log(await User.findAll())
    // let user = await parseUser("https://vk.com/maks.petrov_krsk")
    let user = await parseUser("https://vk.com/niten2")
    console.log(user)

  // User.findById(7).then( function(object) {

  //   console.log(object)

  // })

    // let test = await Tag.findById(1)
      // console.log(test)



    // done()

    // console.log(user)
    // user.setVkAttributes("https://vk.com/maks.petrov_krsk")

  })


})
