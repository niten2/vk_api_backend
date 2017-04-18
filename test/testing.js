import context from "test/app.test"
import chai, { expect } from 'chai'

// import { parseGroup } from "api/services/vk"

describe('Testing', () => {

  let { Group, ItemTag, User, Tag } = context.models

  it('test', () => {

    Group.findById(1).then(response => {

      console.log(111)

      console.log(group)

    })

    // console.log(JSON.stringify(group))

    // console.log(await group.addTagT(1))

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
