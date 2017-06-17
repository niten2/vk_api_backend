import context from "test/app.test"
import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
chai.use(chaiHttp)

import {
  valid_comment_params,
} from "test/fixtures"

describe('Create POST /comments', () => {

  let Model = context.models.Comment
  let url = `/comments`

  beforeEach(async () => {
    await Model.remove({})
  })

  it('response', async () => {
    chai.request(context.app)
    .post(url)
    .send(valid_comment_params)
    .end( async (err, res) => {
      expect(res).to.status(200)
      expect(res.body).to.have.property('data').property("id")
      expect(res.body).to.have.property('data').property("attributes").property('body').eql(valid_comment_params.data.attributes.body)

      expect(await Model.find({})).to.not.be.empty
    })
  })

})
