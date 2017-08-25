import context from "test/app.test"
import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
chai.use(chaiHttp)

import {
  valid_comment,
  valid_comment_params,
} from "test/fixtures"

describe('Update PUT /comments/:id', () => {

  let Model = context.models.Comment
  let url
  let object

  beforeEach(async () => {
    await Model.remove({})
    object = await Model.createObject(valid_comment)
    url = `/comments/${object._id}`
  })

  it('response', async () => {
    chai.request(context.app)
    .put(url)
    .send(valid_comment_params)
    .end((err, res) => {
      expect(res).to.status(200)
      // expect(res.body).to.have.property('data').property("id")
      // expect(res.body).to.have.property('data').property("attributes").property('body').eql(valid_comment_params.data.attributes.body)
    })
  })

})

