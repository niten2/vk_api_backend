import context from "test/app.test"
import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
chai.use(chaiHttp)

import { valid_user } from "test/fixtures"

describe('Index GET /users', async () => {

  const Model = context.models.User
  const url = "/users"

  beforeEach(async () => {

    await Model.destroy()

    await Model.create(valid_user)

  })

  it('response', async () => {

    // chai.request(context.app)
    // .get(url)
    // .end((err, res) => {
    //   expect(res).to.status(200)
    //   expect(res.body).to.have.property('data').be.a('array')
    //   expect(res.body).to.have.property('data').deep.property("[0].id")
    //   expect(res.body).to.have.property('data').deep.property("[0].type")
    //   expect(res.body).to.have.property('data').deep.property('[0].attributes').property("name")
    //   expect(res.body).to.have.property('data').deep.property('[0].attributes').property("email")
    // })
  })

})




