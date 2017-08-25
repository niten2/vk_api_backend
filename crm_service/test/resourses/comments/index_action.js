import context from "test/app.test"
import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
chai.use(chaiHttp)

import { valid_comment } from "test/fixtures"

describe('Index GET /comments', async () => {

  const Model = context.models.Comment
  const url = "/comments"

  beforeEach(async () => {
    await Model.remove({})
    await Model.createObject(valid_comment)
  })

  it('response', async () => {
    chai.request(context.app)
    .get(url)
    .end((err, res) => {
      expect(res).to.status(200)
      expect(res.body).to.have.property('data').be.a('array')
      expect(res.body).to.have.property('data').deep.property("[0].id")
      expect(res.body).to.have.property('data').deep.property("[0].type")
      expect(res.body).to.have.property('data').deep.property('[0].attributes').property("body")
    })
  })

})




