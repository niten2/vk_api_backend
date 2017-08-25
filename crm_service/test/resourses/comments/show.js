import context from "test/app.test"
import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
chai.use(chaiHttp)

import { valid_comment } from "test/fixtures"

describe('Show GET comments/:id', () => {

  const Model = context.models.Comment
  let url
  let object

  beforeEach(async () => {
    await Model.remove({})
    object = await Model.createObject(valid_comment)
    url = `/comments/${object.id}`
  })

  it('response', () => {
    chai.request(context.app)
      .get(url)
      .end(async (err, res) => {
        expect(res.status).to.eql(200)
        expect(res.body).to.have.property('data').property("id")
        expect(res.body).to.have.property('data').property("attributes").property('body').eql(object.body)
      })
  })

})


