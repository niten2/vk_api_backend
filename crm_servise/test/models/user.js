import context from "test/app.test"
import chai, { expect } from 'chai'
import { valid_user } from "test/fixtures"

import SharedCrudModel from "test/shared/model/crud"

describe('User', () => {

  let User = context.models.User

  beforeEach(async () => {
    console.log(User)
    // await User.remove({})
  })

  // const Model = options.Model
  // const fixture = options.fixture
  // const attributes = options.attributes
  // const update_attributes = options.update_attributes

  it('create', async(done) => {

    console.log(111)
    done()

    // expect(await Model.find({})).to.be.empty
    // let object = await Model.createObject(fixture)
    // expect(object).to.have.property('_id')
    // attributes.map( (field) => {
    //   expect(object).to.have.property(field).eql(fixture[field])
    // })
    // expect(await Model.find({})).to.exist
  })


  // SharedCrudModel({
  //   Model: Model,
  //   fixture: valid_user,
  //   attributes: [
  //     "name"
  //   ],
  //   update_attributes: {
  //     name: "new_name",
  //     email: "new_email@test.com",
  //   },
  // })

})
