import context from "test/app.test"
import chai, { expect } from 'chai'

// import { parseGroup } from "api/services/vk"

// import { valid_post } from "test/fixtures"
// import SharedCrudModel from "test/shared/model/crud"

describe('Relation', () => {

  let User = context.models.User
  let Tag = context.models.Tag
  let ItemTag = context.models.ItemTag
  // let Group = context.models.Group
  let { Group } = context.models


  // beforeEach( async () => {
  //   await Model.remove({})
  // })

  it('test', async () => {

    let group = await Group.findById(1)

    // console.log(group)

    console.log(await group.addTagT(1))
    // let test = await ItemTag.findAll()
    // console.log(test)

    // console.log(await User.findAll())
    // let user = await parseUser("https://vk.com/maks.petrov_krsk")
    // let user = await parseUser("https://vk.com/niten2")
    // let user = await parseUser("test")
    // console.log(user)

    // let t = await parseGroup("https://vk.com/slim_body_krsk")

  })


})
